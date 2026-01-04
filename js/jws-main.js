/*let quizData = null;

async function loadQuizData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/jwsingenieria-star/JWS_Repository/c63fe79eba3a9feee33978ae2831847fa8916298/quiz-data/data.json",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo de datos");
    }

    quizData = await response.json();

    initQuiz(); // aquí arrancas tu lógica
  } catch (err) {
    console.error(err);
    alert("Error cargando los datos del quiz");
  }
}

function initQuiz() {
  const subjectSelect = document.getElementById("subjectSelect");

  quizData.asignaturas.forEach((a, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = a.nombre;
    subjectSelect.appendChild(option);
  });

  subjectSelect.addEventListener("change", startQuiz);
  startQuiz();
}

loadQuizData();*/

/* ==========================
   ESTADO
========================== */
let currentSubject = null;
let currentIndex = 0;
let answers = {}; // { preguntaIndex: { selected, correct } }

/* ==========================
   INIT
========================== */
const subjectSelect = document.getElementById("subjectSelect");

quizData.asignaturas.forEach((a, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = a.nombre; // asegura tildes y acentos
    subjectSelect.appendChild(option);
});

subjectSelect.addEventListener("change", startQuiz);
startQuiz();

/* ==========================
   FUNCIONES
========================== */
function startQuiz() {
    currentSubject = quizData.asignaturas[subjectSelect.value];
    currentIndex = 0;
    // Cargar respuestas guardadas
    const stored = localStorage.getItem(getStorageKey());
    answers = stored ? JSON.parse(stored) : {};
    renderGrid();
    renderQuestion();
}

function renderGrid() {
    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";

    currentSubject.preguntas.forEach((p, i) => {
        const answered = answers[i];

        // Color base según estado
        let bgClass = "bg-gray-200";
        if (answered) {
            bgClass = answered.correct ? "bg-green-400" : "bg-red-400";
        }

        // Borde para pregunta activa
        const isActive = i === currentIndex;
        const borderClass = isActive
            ? "border-2 border-blue-500"
            : "border border-transparent";

        grid.innerHTML += `
        <button
            class="
            p-2
            rounded
            text-sm
            ${bgClass}
            ${borderClass}
            hover:bg-gray-300
            transition
            "
            onclick="{goToQuestion(${i}); toggleSidebar()}"
        >
            ${p.id}
        </button>
    `;
    });
}

function renderQuestion() {
    const q = currentSubject.preguntas[currentIndex];
    const container = document.getElementById("questionContainer");

    let html = `
        <h2 class="text-lg font-bold mb-4 px-4 py-1 bg-green-100 border border-green-300 rounded-full w-40 text-center text-green-500">Pregunta ${q.id}</h2>
        <p class="mb-4">${q.enunciado}</p>
    `;

    if (q.tipo === "seleccion_simple") {
        html += `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${Object.entries(q.opciones).map(([k, o]) => `
                <label class="block border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="resp" value="${k}" class="mr-2">
                <strong>${k})</strong> ${o}
                </label>
            `).join("")}
            </div>
        `;
    }

    if (q.tipo === "emparejamiento") {
        const letters = "abcdefghijklmnopqrstuvwxyz";

        html += `
            <div class="grid grid-cols-2 gap-4 mb-6">

            <!-- Columna 1: números -->
            <div>
                <h4 class="font-semibold mb-2">Columna 1</h4>
                <ul class="space-y-1">
                ${q.listas.columna_1.map((item, index) => `
                    <li>
                        <strong>${index + 1}.</strong> ${item}
                    </li>
                `).join("")}
                </ul>
            </div>

            <!-- Columna 2: letras -->
            <div>
                <h4 class="font-semibold mb-2">Columna 2</h4>
                <ul class="space-y-1">
                ${q.listas.columna_2.map((item, index) => `
                    <li>
                        <strong>${letters[index]}.</strong> ${item}
                    </li>
                `).join("")}
                </ul>
            </div>

            </div>

            <!-- Opciones de emparejamiento -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${Object.entries(q.opciones).map(([k, o]) => `
                <label class="block border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="resp" value="${k}" class="mr-2">
                <strong>${k})</strong> ${o}
                </label>
            `).join("")}
            </div>
        `;
    }

    if (q.tipo === "ordenamiento") {
        const letters = "abcdefghijklmnopqrstuvwxyz";

        html += `
            <div class="grid grid-cols-1 gap-4 mb-6">

            <div>
                <ul class="space-y-1">
                ${q.listas.columna_1.map((item, index) => `
                    <li>
                        <strong>${letters[index]}.</strong> ${item}
                    </li>
                `).join("")}
                </ul>
            </div>

            </div>

            <!-- Opciones -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${Object.entries(q.opciones).map(([k, o]) => `
                <label class="block border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="resp" value="${k}" class="mr-2">
                <strong>${k})</strong> ${o}
                </label>
            `).join("")}
            </div>
        `;
    }

    html += `
        <button
            id="saveBtn"
            onclick="saveAnswer()"
            class="mt-4 inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded transition disabled:opacity-60"
        >
            Guardar respuesta
        </button>
    `;

    container.innerHTML = html;

    // Restaurar respuesta seleccionada (si existe)
    const savedAnswer = answers[currentIndex];
    if (savedAnswer) {
        const input = document.querySelector(
            `input[name="resp"][value="${savedAnswer.selected}"]`
        );
        if (input) input.checked = true;

        // Opcional: mostrar botón como guardado
        const btn = document.getElementById("saveBtn");
        if (btn) {
            btn.innerHTML = "Respuesta guardada";
            btn.classList.remove("bg-blue-500");
            btn.classList.add("bg-green-600");
        }
    }

    updateControls();
}

function saveAnswer() {
    const selected = document.querySelector('input[name="resp"]:checked');
    if (!selected) {
        alert("Selecciona una opción");
        return;
    }

    const btn = document.getElementById("saveBtn");
    if (!btn) return;

    // Estado: guardando
    //btn.disabled = true; //estado para bloquear a un solo guardado
    btn.innerHTML = `
        <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
            ></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
        </svg>
        Guardando...
    `;
    btn.classList.remove("bg-blue-500");
    btn.classList.add("bg-blue-400");

    // Simulación de guardado
    setTimeout(() => {
        const q = currentSubject.preguntas[currentIndex];

        answers[currentIndex] = {
            selected: selected.value,
            correct: selected.value === q.respuesta
        };

        localStorage.setItem(getStorageKey(), JSON.stringify(answers));

        // Estado: guardado
        btn.innerHTML = "¡Guardado!";
        btn.classList.remove("bg-blue-400");
        btn.classList.add("bg-green-600");

        renderGrid();
    }, 300);
}

function updateControls() {
    document.getElementById("prevBtn").disabled = currentIndex === 0;
    document.getElementById("nextBtn").disabled = currentIndex === currentSubject.preguntas.length - 1;
    document.getElementById("finishBtn").classList.toggle(
        "hidden",
        currentIndex !== currentSubject.preguntas.length - 1
    );
}

function goToQuestion(i) {
    currentIndex = i;
    renderGrid();
    renderQuestion();
}

document.getElementById("prevBtn").onclick = () => {
    if (currentIndex > 0) { currentIndex--; renderGrid(); renderQuestion(); }
};

document.getElementById("nextBtn").onclick = () => {
    if (currentIndex < currentSubject.preguntas.length - 1) {
        currentIndex++; renderGrid(); renderQuestion(); 
    }
};

document.getElementById("finishBtn").onclick = showResults;

/* ==========================
   RESULTADOS
========================== */
function showResults() {
    const table = document.getElementById("resultTable");
    table.innerHTML = "";

    let correct = 0;
    let incorrect = 0;
    let empty = 0;

    currentSubject.preguntas.forEach((q, i) => {
        const r = answers[i];

        let texto;
        let clase;

        if (!r) {
            texto = "Sin responder";
            clase = "text-gray-500";
            empty++;
        } else if (r.correct) {
            texto = "Correcta";
            clase = "text-green-600";
            correct++;
        } else {
            texto = "Incorrecta";
            clase = "text-red-600";
            incorrect++;
        }

        table.innerHTML += `
            <tr>
                <td class="border p-2 text-center">${q.id}</td>
                <td class="border p-2 text-center font-medium ${clase}">
                    ${texto}
                </td>
            </tr>
        `;
    });

    // Actualizar contadores
    document.getElementById("countCorrect").textContent = correct;
    document.getElementById("countIncorrect").textContent = incorrect;
    document.getElementById("countEmpty").textContent = empty;

    const modal = document.getElementById("resultModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() {
    document.getElementById("resultModal").classList.add("hidden");
}

function resetQuiz() {
    //if (!confirm("¿Deseas reiniciar el quiz? Se perderán tus respuestas.")) return;

    if (!currentSubject) return;

    // Borrar respuestas solo de la asignatura actual
    localStorage.removeItem(getStorageKey());

    // Resetear estado en memoria
    answers = {};
    currentIndex = 0;

    // Cerrar modal
    closeModal();

    // Re-renderizar UI
    renderGrid();
    renderQuestion();
}


/* FUNCIONALIDAD DE SIDEBAR */
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const overlay = document.getElementById("sidebarOverlay");

let sidebarOpen = false;

/**
 * Abre el sidebar (mobile)
 */
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    sidebarOpen = true;
}

/**
 * Cierra el sidebar (mobile)
 */
function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    sidebarOpen = false;
}

/**
 * Toggle general
 */
function toggleSidebar() {
    if (sidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

/**
 * Eventos
 */
toggleBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

/**
 * Control responsive:
 * - En desktop el sidebar siempre visible
 * - En móvil se fuerza cerrado
 */
function handleResize() {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        sidebarOpen = true;
    } else {
        sidebar.classList.add("-translate-x-full");
        sidebarOpen = false;
    }
}

window.addEventListener("resize", handleResize);
handleResize();

// ------------------
function getStorageKey() {
    return `quiz_answers_${subjectSelect.value}`;
}

