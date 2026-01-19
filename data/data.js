 // =========================
// DATOS DEL QUIZ
// =========================
const quizData = {
    asignaturas: [
        {
            nombre: "Bioquímica",
            preguntas: [
                {
                    id: 1,
                    enunciado: "Los aminoácidos ___________ y ___________ poseen largas cadenas laterales que terminan en grupos que están cargados positivamente a pH neutro.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Lisina-Arginina",
                        b: "Asparagina-Glutammina",
                        c: "Serina-Treonina",
                        d: "Valina-Leucina"
                    },
                    respuesta: "a"
                },
                {
                    id: 2,
                    enunciado: "La lactosa, el disacárido de la leche, consta de una ___________ unida a una ___________ mediante un enlace β-1,4-glicosídico.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Glucosa-maltosa",
                        b: "Glucosa-fructosa ",
                        c: "Galactosa-glucosa ",
                        d: "Fructosa-galactosa"
                    },
                    respuesta: "c"
                },
                {
                    id: 3,
                    enunciado: "Relacione cada término con la descripción correspondiente.",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Glicolípido", "Cereblósido", "Galactósido", "Esfingomielina"],
                        columna_2: ["Fosfolípido especialmente abundante en las células nerviosas", "El glicolípido más sencillo", "Derivado de la esfingosina que se encuentra en todas las membranas.", "Glicolípidos complejos"]
                    },
                    opciones: {
                        a: "1c, 2b, 3d, 4a",
                        b: "1a, 2b, 3c, 4d",
                        c: "1d, 2a, 3c, 4b",
                        d: "1c, 2a, 3b, 4d"
                    },
                    respuesta: "a"
                },
                {
                    id: 4,
                    enunciado: "En este tipo de catálisis enzimática, el centro activo contiene un grupo reactivo, normalmente un potente nucleófilo, que en el transcurso de la catálisis se modifica covalentemente de forma transitoria.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Catálisis general ácido base",
                        b: "Catálisis mediada por iones metálicos",
                        c: "Catálisis covalente",
                        d: "Catálisis mediante aproximación y orientación"
                    },
                    respuesta: "c"
                },
                {
                    id: 5,
                    enunciado: "Son moléculas que modifican covalentemente los residuos del centro activo de una enzima y son estructuralmente parecidos al sustrato de una enzima.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Marcadores de afinidad",
                        b: "Inhibidores suicidas",
                        c: "Análogos del estado de transición",
                        d: "Inhibidores competitivos"
                    },
                    respuesta: "a"
                },
                {
                    id: 6,
                    enunciado: "Coloque en el orden correcto las siguientes enzimas que catalizan las reacciones de la primera etapa del ciclo del ácido cítrico.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Aconitasa", "Isocitrato deshidrogenasa", "Complejo α-cetoglutarato deshidrogenasa", "Citrato sintasa"],
                    },
                    opciones: {
                        a: "a,b,d,c",
                        b: "c,d,b,a",
                        c: "d,a,c,b",
                        d: "d,a,b,c"
                    },
                    respuesta: "d"
                },
                {
                    id: 7,
                    enunciado: "La descomposición del glucógeno requiere varias enzimas, coloque las enzimas necesarias para este proceso en el orden correcto.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["α- 1,6 glucosidasa", "Glucógeno fosforilasa", "Fosfoglucomutasa", "Transferasa"],
                    },
                    opciones: {
                        a: "b,c,a,d",
                        b: "b,d,a,c",
                        c: "a,b,d,c",
                        d: "c,a,d,b"
                    },
                    respuesta: "b"
                },
                {
                    id: 8,
                    enunciado: "Ordene los componentes de la cadena transportadora de electrones en orden descendente (mayor a menor) de acuerdo al número de subunidades (cadenas polipeptídicas) que posee cada complejo",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["NADH-Q oxidorreductasa", "Succinato-Q reductasa", "Q-citocromo c oxidorreductasa", "Citocromo c oxidasa"],
                    },
                    opciones: {
                        a: "d,c,b,a",
                        b: "a,c,b,d",
                        c: "d,a,c,b",
                        d: "a,d,c,b"
                    },
                    respuesta: "b"
                },
                {
                    id: 9,
                    enunciado: "Ordene las siguientes rutas metabólica en orden ascendente (de menor a mayor) de generación de energía.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Conversión de piruvato en acetil CoA", "Fosforilación Oxidativa", "Gluconeogénesis", "Glucólisis"],
                    },
                    opciones: {
                        a: "c, a, d, b",
                        b: "c ,d, a, b",
                        c: "d, a ,c ,b",
                        d: "b, c, a, d"
                    },
                    respuesta: "a"
                },
                {
                    id: 10,
                    enunciado: "Coloque los siguientes carbohidratos en orden de complejidad estructural, desde el más simple hasta el más complejo:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Xilosa", "Glucógeno", "Gliceraldehido", "Glucosa"],
                    },
                    opciones: {
                        a: "a, c, d, b",
                        b: "d, c, a, b",
                        c: "c, a, d, b",
                        d: "b, a, c, d"
                    },
                    respuesta: "c"
                },
                {
                    id: 11,
                    enunciado: "Ordene de forma descendente las biomoléculas que proporcionan energía cuando se degradan",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Carbohidratos", "Lípidos", "Proteínas", "Ácidos Nucleicos"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 1, 3, 4",
                        c: "3, 1, 2, 4",
                        d: "4, 3, 1, 2"
                    },
                    respuesta: "b"
                },
                {
                    id: 12,
                    enunciado: "Relacione el tipo de biomolécula con el tipo de enlaces que mantiene su estructura",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Ácido desoxirribonucleico", "Triglicéridos", "Glucógeno", "Insulina"],
                        columna_2: ["Enlace peptídico", "Enlace fosfodiéster", "Enlace éster", "Enlace glicosídico"]
                    },
                    opciones: {
                        a: "1c, 2b, 3a, 4d",
                        b: "1b, 2c, 3a, 4d",
                        c: "1b, 2c, 3d, 4a",
                        d: "1a, 2c, 3b, 4d"
                    },
                    respuesta: "c"
                },
                {
                    id: 13,
                    enunciado: "Una ruta metabólica es un conjunto de reacciones químicas …………………. por enzimas. El metabolismo puede ser de dos tipos: ……………….. cuando se dan procesos de ……………………. y se ………………… energía y el ………………. cuando se dan procesos de ……………… y se …………….. energía.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Inhibidas, catabolismo, síntesis, libera, anabolismo, degradación, consume",
                        b: "Catalizadas, catabolismo, degradación, consume, anabolismo, síntesis, libera",
                        c: "Inhibidas, catabolismo, degradación, consume, anabolismo, síntesis, libera",
                        d: "Catalizadas, catabolismo, degradación, libera, anabolismo, síntesis, consume"
                    },
                    respuesta: "d"
                },
                {
                    id: 14,
                    enunciado: "Relacione la ruta metabólica con la ubicación celular en la cual tiene lugar:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Ciclo de la urea", "Cadena de transporte de electrones", "Síntesis de Palmitato", "Β-oxidación"],
                        columna_2: ["Matriz mitocondrial", "Citoplasma", "Matriz mitocondrial y citoplasma", "Membrana interna de la mitocondria"]
                    },
                    opciones: {
                        a: "1c, 2d, 3b, 4a",
                        b: "1b, 2a, 3c, 4d",
                        c: "1a, 2b, 3c, 4d",
                        d: "1d, 2c, 3a, 4b"
                    },
                    respuesta: "a"
                },
                {
                    id: 15,
                    enunciado: "Relacione la ruta metabólica con el tipo de metabolismo",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Glucogenólisis", "Gluconeogénesis", "Β-oxidación", "Glucólisis", "Glucogénesis"],
                        columna_2: ["Catabolismo", "Anabolismo"]
                    },
                    opciones: {
                        a: "1a, 2b, 3a, 4a, 5b",
                        b: "1b, 2b, 3a, 4b, 5b",
                        c: "1a, 2a, 3b, 4b, 5b",
                        d: "1a, 2a, 3a, 4a, 5b"
                    },
                    respuesta: "a"
                },
                {
                    id: 16,
                    enunciado: "El glucógeno:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Es un polímero ramificado, se almacena en el hígado y tiene funciones energéticas",
                        b: "Es un polisacárido lineal, se almacena en el músculo y tiene funciones estructurales",
                        c: "Es un polímero ramificado, se almacena en los adipocitos y tiene funciones energéticas",
                        d: "Es un polisacárido ramificado, se almacena en los adipocitos y tiene funciones estructurales"
                    },
                    respuesta: "a"
                },
                {
                    id: 17,
                    enunciado: "El complejo piruvato deshidrogenasa es la conexión irreversible entre:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Ciclo de Krebs y respiración celular",
                        b: "Glucólisis y Ciclo de Krebs",
                        c: "Glucólisis y fosforilación oxidativa",
                        d: "Ciclo de Krebs y β-oxidación"
                    },
                    respuesta: "b"
                },
                {
                    id: 18,
                    enunciado: "El colesterol:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Mantiene la fluidez adecuada en las membranas celulares de los animales",
                        b: "Es el precursor de ácidos nucleicos",
                        c: "Se sintetiza en el páncreas a partir de acetil coenzima A",
                        d: "Es un polímero formado por ácidos grasos"
                    },
                    respuesta: "a"
                },
                {
                    id: 19,
                    enunciado: "En la degradación de aminoácidos tiene lugar la eliminación del grupo amino que luego forma urea para poder ser eliminado y el esqueleto carbonado se convierte en algún intermediario metabólico. ¿Cuál es la forma no tóxica en la que se transporta el nitrógeno desde el músculo hasta el hígado?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Arg",
                        b: "Gli",
                        c: "Ala",
                        d: "NH4+"
                    },
                    respuesta: "c"
                },
                {
                    id: 20,
                    enunciado: "La Tuberculosis es una de las 10 principales causas de mortalidad en el mundo, es una enfermedad producida por el bacilo Mycobacterium tuberculosis y se contagia de persona a persona propagándose entre los miembros de la familia o ambiente laboral. La tuberculosis multirresistente (TB-MDR) sigue constituyendo una crisis de salud pública y una amenaza para la seguridad sanitaria. Por todo lo expuesto es importante realizar un diagnóstico temprano, aislar el bacilo y determinar la sensibilidad a fármacos para que el paciente reciba un tratamiento adecuado y poder cortar la cadena de transmisión de la enfermedad. Además, es necesario realizar un estudio epidemiológico que nos permita obtener información de la mecánica de diseminación del bacilo, posibles mutaciones relacionadas con la resistencia antibiótica e identificación de complejos clonales.  Existen herramientas moleculares que nos permiten alcanzar estos estudios, seleccione lo correcto.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "PCR, marcadores moleculares, electroforesis",
                        b: "Western blot, cultivo microbiológico, antibiograma",
                        c: "Tinción diferencial, PCR multiplex, Western blot",
                        d: "Cultivo celular, Western blot, electroforesis"
                    },
                    respuesta: "a"
                },
                {
                    id: 21,
                    enunciado: "Relacione la estructura/componente con la función/aplicación específica:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Chaperonas moleculares", "Enlace fosfodiéster en ácidos nucleicos", "Enlace disulfuro entre cisteínas", "Isómeros D y L de azúcares "],
                        columna_2: ["Facilitan el correcto plegamiento de proteínas y evitan agregación", "Permite la integridad estructural del ADN y la continuidad del genoma", "Estabiliza la conformación tridimensional de proteínas extracelulares", "Afectan la actividad enzimática y el reconocimiento molecular específico"]
                    },
                    opciones: {
                        a: "1b, 2d, 3a, 4c",
                        b: "1a, 2b, 3c, 4d",
                        c: "1c, 2a, 3b, 4d",
                        d: "1d, 2c, 3a, 4b"
                    },
                    respuesta: "b"
                },
                {
                    id: 22,
                    enunciado: "Las proteínas transmembrana presentan regiones __________ que se insertan en la bicapa lipídica y regiones __________ expuestas al medio acuoso.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "polares – hidrofóbicas",
                        b: "iónicas – covalentes",
                        c: "hidrofóbicas – hidrofílicas",
                        d: "básicas – neutras"
                    },
                    respuesta: "c"
                },
                {
                    id: 23,
                    enunciado: "Ordene los procesos metabólicos según el flujo de carbono desde la glucosa hasta la síntesis de ATP:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Glucólisis", "Ciclo de Krebs", "Fosforilación oxidativa", "Transporte del piruvato a la mitocondria"],
                    },
                    opciones: {
                        a: "c, a, b, d",
                        b: "a, d, c, b",
                        c: "a, b, d, c",
                        d: "a, d, b, c"
                    },
                    respuesta: "d"
                },
                {
                    id: 24,
                    enunciado: "En la ingeniería metabólica para aumentar la producción de ácido láctico en bacterias, ¿qué enzima suele ser sobreexpresada para favorecer la conversión de piruvato?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Lactato deshidrogenasa",
                        b: "Piruvato carboxilasa",
                        c: "Citrato sintasa",
                        d: "Acetil-CoA carboxilasa"
                    },
                    respuesta: "a"
                },
                {
                    id: 25,
                    enunciado: "La regulación por retroinhibición (feedback inhibition) enzimática se caracteriza por:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "La inhibición de una enzima por un intermediario temprano",
                        b: "La inhibición de una enzima por su propio sustrato",
                        c: "La inhibición de la primera enzima de la vía por el producto final",
                        d: "La activación de enzimas por productos de rutas alternas"
                    },
                    respuesta: "c"
                },
                {
                    id: 26,
                    enunciado: "Relacione",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Deshidrogenasas", "ATP sintasa", "Citocromos", "Piruvato deshidrogenasa", "NAD⁺"],
                        columna_2: ["Convierte piruvato en acetil-CoA", "Cofactor que acepta electrones en reacciones redox", "Cataliza la formación de ATP usando el gradiente de protones", "Oxidan sustratos y reducen NAD⁺ o FAD", "Transportan electrones en la cadena respiratoria"]
                    },
                    opciones: {
                        a: "1a, 2c, 3d, 4b, 5e",
                        b: "1d, 2c, 3b, 4a, 5e",
                        c: "1a, 2c, 3d, 4e, 5b",
                        d: "1d, 2c, 3e, 4a, 5b"
                    },
                    respuesta: "d"
                },
                {
                    id: 27,
                    enunciado: "Las enzimas están formadas por una parte proteica llamada (______) y, cuando se une con su cofactor correspondiente, forman la (______) activa.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Apoenzima / holoenzima",
                        b: "Cofactor / sustrato",
                        c: "Isoenzima / zimógeno",
                        d: "Grupo prostético / apoenzima"
                    },
                    respuesta: "a"
                },
                {
                    id: 28,
                    enunciado: "Ordena correctamente los eventos del flujo de electrones durante la cadena respiratoria mitocondrial:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["NADH", "Complejo I", "Coenzima Q", "Complejo II", "Citocromo c", "Complejo III", "O₂", "Complejo IV"],
                    },
                    opciones: {
                        a: "a, b, e, f, c, h, g",
                        b: "a, b, d, f, c, h, e, g",
                        c: "a, b, c, f, e, h, g",
                        d: "a, b, c, d, e, f, h, g"
                    },
                    respuesta: "c"
                },
                {
                    id: 29,
                    enunciado: "El ADN de doble hélice se estabiliza principalmente por:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Enlaces iónicos entre grupos fosfato",
                        b: "Puentes de hidrógeno y apilamiento hidrofóbico de bases",
                        c: "Interacciones covalentes entre pares de bases",
                        d: "Interacciones entre grupos amino terminales"
                    },
                    respuesta: "b"
                },
                {
                    id: 30,
                    enunciado: "Seleccione la respuesta que ordene correctamente los eventos del acoplamiento entre el ciclo de Krebs y la cadena respiratoria.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Transporte electrónico → Oxidación de acetil-CoA → Producción de CO₂ → Síntesis de ATP → Gradiente de protones.",
                        b: "Síntesis de ATP → Producción de NADH → Transporte electrónico → Gradiente de protones → Oxidación de acetil-CoA",
                        c: "Producción de FADH₂ → Transporte electrónico → Oxidación de CO₂ → Síntesis de ATP → Acetil-CoA",
                        d: "Oxidación de acetil-CoA → Producción de NADH y FADH₂ → Transporte electrónico → Gradiente de protones → Síntesis de ATP"
                    },
                    respuesta: "d"
                },
            ]
        },
        {
            nombre: "Bioinformática",
            preguntas: [
                {
                    id: 1,
                    enunciado: "En una matriz de programación dinámica para alineamiento local, teniendo en cuenta una penalización por gap de -8, y utilizando una matriz de puntuación cuyo término más alto es 17, ¿cuál será el valor del término de una celda que tenga en las celdas superior, izquierda y superior izquierda, respectivamente, los siguientes valores: 6, 7, -18?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "1",
                        b: "0",
                        c: "-1",
                        d: "-2"
                    },
                    respuesta: "b"
                },
                {
                    id: 2,
                    enunciado: "En una matriz de programación dinámica para alineamiento global, existe una celda que corresponde a la coincidencia de dos aminoácidos, la cual, según la matriz de puntuación utilizada, posee un valor de 16. Teniendo en cuenta una penalización por gap de -8, ¿cuál será el valor del término de esa celda si las celdas superior, izquierda y superior izquierda, respectivamente, poseen los siguientes valores: 6, 7, -19?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "-2",
                        b: "0",
                        c: "-1",
                        d: "-3"
                    },
                    respuesta: "c"
                },
                {
                    id: 3,
                    enunciado: "En una matriz de programación dinámica para alineamiento semiglobal, existe una celda que corresponde a la coincidencia de dos aminoácidos concretos en la primera posición del alineamiento de dos secuencias. Teniendo en cuenta que existe una penalización por gap de -2, ¿cuál será el valor del término de esa celda?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "-2",
                        b: "0",
                        c: "-1",
                        d: "2"
                    },
                    respuesta: "b"
                },
                {
                    id: 4,
                    enunciado: "Se han obtenido varios contigs que cubren por completo un genoma. Dichos fragmentos son de los siguientes tamaños, en Kbp: 440, 330, 320, 310, 205, 205, 144 y 46. ¿Qué tamaño en Kbp corresponde al N50?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "320",
                        b: "310",
                        c: "205",
                        d: "144"
                    },
                    respuesta: "a"
                },
                {
                    id: 5,
                    enunciado: "Si en una secuencia de 100 residuos se han predicho bien 25, ¿Cuál es el Q3 de la predicción?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "25",
                        b: "4",
                        c: "1",
                        d: "0.25"
                    },
                    respuesta: "d"
                },
                {
                    id: 6,
                    enunciado: "Elegir las palabras que completen correctamente el siguiente enunciado: Para obtener árboles filogenéticos _____________ de acuerdo a métodos bayesianos, se emplea ____________, mientras que para obtener árboles filogenéticos ______________ de acuerdo a métodos de ___________., se emplea __________",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "aditivos, bootstrapping, ultramétricos, de máxima verosimilitud, MCMC",
                        b: "ultramétricos, MCMC, aditivos, máxima verosimilitud, bootstrapping",
                        c: "bayesianos, bootstrapping, aditivos, ultramétricos, MCMC",
                        d: "aditivos, MCMC, ultramétricos, bayesianos, bootstrapping"
                    },
                    respuesta: "d"
                },
                {
                    id: 7,
                    enunciado: "Elegir las palabras que completen correctamente el siguiente enunciado: Si, tras una ______________ de ADN, el fragmento intermedio entre dos ___________ se corresponde alguna otra lectura, todas estas lecturas se encuentran en el mismo ___________________",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "digestión, lecturas no apareadas, supercontig",
                        b: "secuenciación, lecturas apareadas, locus",
                        c: "secuenciación, lecturas apareadas, contig",
                        d: "restricción, lecturas apareadas, cromosoma"
                    },
                    respuesta: "c"
                },
                {
                    id: 8,
                    enunciado: "Elegir las palabras que completen correctamente el siguiente enunciado: Si quiero obtener la secuencia de un fragmento de ___________ Kbp mediante secuenciación Sanger necesariamente tendré que _____________ posteriormente",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "500 bp, ensamblar",
                        b: "500 bp, curar",
                        c: "5000 bp, ensamblar",
                        d: "5000 bp, aplicar enzimas de restricción"
                    },
                    respuesta: "c"
                },
                {
                    id: 9,
                    enunciado: "Elegir las palabras que completen correctamente el siguiente enunciado: Para secuenciar un fragmento largo de ADN, cuando se carece de  ___________ necesariamente hay que  ___________________",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Secuencias de referencia, secuenciar de novo",
                        b: "Secuencias de referencia, resecuenciar",
                        c: "Secuencias de referencia, ensamblar ",
                        d: "Supercontigs, ensamblar"
                    },
                    respuesta: "a"
                },
                {
                    id: 10,
                    enunciado: "¿Cuáles de estos datos de entrada no son imprescindibles para generar árboles filogenéticos aditivos a partir de secuencias de nucleótidos?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Alineamientos curados", "Parámetros de cuantificación de tiempo", "Parámetros de la distribución gamma", "Modelo evolutivo"],
                    },
                    opciones: {
                        a: "2, 3 y 4",
                        b: "1, 2 y 4",
                        c: "2 y 3",
                        d: "1 y 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 11,
                    enunciado: "¿Cuáles de estos datos de entrada no son imprescindibles para generar árboles filogenéticos aditivos a partir de secuencias de nucleótidos?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Alineamientos curados", "Parámetros de cuantificación de tiempo", "Parámetros de la distribución gamma", "Modelo evolutivo"],
                    },
                    opciones: {
                        a: "2, 3 y 4",
                        b: "1, 2 y 4",
                        c: "2 y 3",
                        d: "1 y 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 12,
                    enunciado: "¿Cuáles de estas características ha de tener habitualmente un cebador para ser usado en una PCR de punto final?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Temperatura de anillado menor a la de elongación", "Elevado contenido en pares CG", "Menos de 30 nucleótidos ", "Más de 15 nucleótidos. "],
                    },
                    opciones: {
                        a: "Todas",
                        b: "Todas menos la 2",
                        c: "Todas menos la 3",
                        d: "1, 2 y 3"
                    },
                    respuesta: "b"
                },
                {
                    id: 13,
                    enunciado: "¿Cuáles de estas características ha de tener idealmente un buen barcode para identificación de especies de hongos?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Alta distancia genética interespecífica", "Baja distancia genética intraespecífica", "Pocas repeticiones", "Muchos intrones"],
                    },
                    opciones: {
                        a: "Todas",
                        b: "Todas menos la 2",
                        c: "Todas menos la 3",
                        d: "1 y 2"
                    },
                    respuesta: "c"
                },
                {
                    id: 14,
                    enunciado: "Relacione cada uno de estos programas bioinformáticos (números) con funciones (letras):",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Trimmomatic", "T-Coffee", "SAMtools", "FASTQC"],
                        columna_2: ["Alineamiento", "Eliminación de adaptadores", "Manipulación de cierto tipo de archivos", "Análisis de calidad de fragmentos"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2a, 3c, 4d",
                        c: "1b, 2a, 3d, 4c",
                        d: "1b, 2c, 3a, 4d"
                    },
                    respuesta: "b"
                },
                {
                    id: 15,
                    enunciado: "Relacione cada uno de estos procesos moleculares (números) con los efectos teóricamente más frecuentes (letras):",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Splicing alternativo", "Modificaciones post-traduccionales", "Poliadenilación alternativa", "Edición de transcritos"],
                        columna_2: ["Cambios en la actividad proteica", "Cambios en la longitud de los trascritos", "Cambios en la longitud de las proteínas", "Cambios en la codificación de algún aminoácido"]
                    },
                    opciones: {
                        a: "1c, 2b, 3c, 4d",
                        b: "1c, 2a, 3b, 4d",
                        c: "1b, 2a, 3d, 4c",
                        d: "1b, 2c, 3a, 4d"
                    },
                    respuesta: "b"
                },
                {
                    id: 16,
                    enunciado: "Relacione cada una de estas matrices (números) con sus objetivos (letras):",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["De programación dinámica", "De puntuación por sustitución PAM", "De puntuación por sustitución BLOSUM", "De puntuación específicas de posición"],
                        columna_2: ["Puntuación de alineamientos de secuencias", "Alineamientos de pares de secuencias", "Representación de motivos de secuencias", "Cuantificación de transcritos"]
                    },
                    opciones: {
                        a: "1b, 2a, 3a, 4c",
                        b: "1c, 2a, 3a, 4d",
                        c: "1b, 2b, 3d, 4c",
                        d: "1c, 2c, 3a, 4d"
                    },
                    respuesta: "a"
                },
                {
                    id: 17,
                    enunciado: "¿Cuál fue el principal aporte de Margaret Dayhoff a la bioinformática?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Introducción del método Sanger para secuenciación de ADN",
                        b: "Desarrollo de algoritmos de alineamiento múltiple",
                        c: "Creación del primer código de una letra para aminoácidos.",
                        d: "Fundadora de la base de datos GenBank"
                    },
                    respuesta: "c"
                },
                {
                    id: 18,
                    enunciado: "En el alineamiento de secuencias, ¿cuál es la principal función de las matrices de sustitución como PAM y BLOSUM?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Convertir secuencias de proteínas en secuencias de ADN.",
                        b: "Medir la cantidad de intrones presentes en un gen.",
                        c: "Evaluar la probabilidad de sustitución entre aminoácidos.",
                        d: "Determinar el número de copias de un gen"
                    },
                    respuesta: "c"
                },
                {
                    id: 19,
                    enunciado: "El método de secuenciación desarrollado por __________ en 1977 permitió leer fragmentos de ADN mediante el uso de una polimerasa",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Mullis",
                        b: "Maxam",
                        c: "Sanger",
                        d: "Watson"
                    },
                    respuesta: "c"
                },
                {
                    id: 20,
                    enunciado: "En bases de datos bioinformáticas como GenBank, cada secuencia está identificada por un número de __________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "registro",
                        b: "serie",
                        c: "acceso",
                        d: "edición"
                    },
                    respuesta: "c"
                },
                {
                    id: 21,
                    enunciado: "Ordene los pasos típicos en el proceso de obtención y anotación de un genoma.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Ensamblaje del genoma", "Secuenciación del ADN", "Análisis de calidad de las lecturas", "Anotación funcional", "Anotación estructura"],
                    },
                    opciones: {
                        a: "2, 3, 1, 5, 4",
                        b: "3, 2, 1, 4, 5",
                        c: "2, 1, 3, 5, 4",
                        d: "3, 1, 2, 5, 4"
                    },
                    respuesta: "a"
                },
                {
                    id: 22,
                    enunciado: "¿Qué término se utiliza para describir aquellas secuencias homólogas que se encuentran dentro de una misma especie y cuya similitud es atribuible a la descendencia de un gen común que se ha duplicado?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Dominio estructural",
                        b: "Ortólogo",
                        c: "Parálogo",
                        d: "UniGene"
                    },
                    respuesta: "c"
                },
                {
                    id: 23,
                    enunciado: "Ordena cronológicamente los siguientes hitos históricos en el desarrollo de la Bioinformática, desde el más antiguo hasta el más reciente",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Desarrollo del algoritmo de alineamiento en pares por Needleman-Wunsch.", "Desarrollo de COMPROTEIN por Dayhoff, el primer ensamblador de proteínas de novo.", "Desarrollo del método de secuenciación de proteínas por Edman.", "Lanzamiento del GCG Software en la U. de Wisconsin, la primera colección para análisis de ADN, ARN y proteínas."],
                    },
                    opciones: {
                        a: "3, 2, 1, 4",
                        b: "2, 3, 1, 4",
                        c: "3, 1, 2, 4 ",
                        d: "2, 4, 1, 3"
                    },
                    respuesta: "a"
                },
                {
                    id: 24,
                    enunciado: "La matriz de puntuación final utilizada en el alineamiento de secuencias proteicas (como PAM o BLOSUM) se basa en la fórmula 𝑠𝑎,𝑏 = x𝑙𝑜𝑔𝑦 (𝑃𝑎,𝑏/𝑞𝑎𝑞𝑏) El cálculo compara la probabilidad de sustitución observada 𝑃𝑎,𝑏 con la probabilidad de sustitución por azar 𝑞𝑎𝑞𝑏 y el resultado se conoce como el puntaje de __________________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Probabilidad de fondo (Background probability)",
                        b: "Razón de probabilidades logarítmicas (Log odds)",
                        c: "Penalidad por 'gap'",
                        d: "Distancia evolutiva"
                    },
                    respuesta: "b"
                },
                {
                    id: 25,
                    enunciado: "Seleccione la opción que contiene únicamente herramientas de software que se utilizan en la etapa de cuantificación de transcritos o abundancia de isoformas en un proceso de análisis de RNASeq.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["HTSeq-Count", "Salmon", "Kallisto", "Trimmomatic"],
                    },
                    opciones: {
                        a: "1, 2, 4",
                        b: "2, 3, 4",
                        c: "1, 2, 3",
                        d: "1, 3, 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 26,
                    enunciado: "Los siguientes términos se refieren a modelos matemáticos y enfoques metodológicos utilizados en el análisis filogenético de secuencias de nucleótidos: Indique cuál de las siguientes opciones es correcta.",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Jukes Cantor (JC69)", "GTR (General Time Reversible)", "Maximum Likelihood", "Bayesiano"],
                        columna_2: ["Enfoque que se basa en 'priors' (conocimiento previo) y utiliza algoritmos Markov Chain Monte Carlo (MCMC) para producir árboles y dar soporte mediante 'posterior probabilities'", "Modelo de evolución donde se asume que el ritmo de sustitución es idéntico para cada cambio de base, siendo el modelo con 0 parámetros libres.", "Enfoque filogenético que estima la probabilidad de que los datos (alineamiento) sean correctos, dado un modelo de evolución y un árbol, eligiendo el árbol con el mayor likelihood", "Modelo evolutivo que considera 6 ritmos de sustitución diferentes y es el caso general del cual otros modelos son variaciones."]
                    },
                    opciones: {
                        a: "1b, 2d, 3a, 4c",
                        b: "1a, 2c, 3d, 4b",
                        c: "1c, 2a, 3b, 4d",
                        d: "1b, 2d, 3c, 4a"
                    },
                    respuesta: "d"
                },
                {
                    id: 27,
                    enunciado: "Complete la siguiente frase: El término *bioinformática* se refiere al uso de __________ y __________ para el análisis de datos biológicos, con el fin de comprender la __________ y la __________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "secuencias y proteínas / estructura / evolución",
                        b: "algoritmos y bases de datos / función / evolución",
                        c: "enzimas y computadoras / transcripción / traducción",
                        d: "cromosomas y genomas / replicación / variación"
                    },
                    respuesta: "b"
                },
                {
                    id: 28,
                    enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente un buen DNA barcode?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Debe presentar alta variación intraespecífica y baja interespecífica",
                        b: "Debe presentar alta variación interespecífica y baja intraespecífica",
                        c: "Debe contener intrones y regiones no codificantes largas",
                        d: "Debe amplificarse solo mediante primers universales"
                    },
                    respuesta: "b"
                },
                {
                    id: 29,
                    enunciado: "Relacione el término con su descripción:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Outgroup", "Reloj molecular estricto", "Homoplasia", "Bootstrap"],
                        columna_2: ["Medida estadística de soporte para nodos en árboles filogenéticos", "Caracter compartido que no proviene de un ancestro común", "Secuencia utilizada para enraizar un árbol filogenético", "Hipótesis de ritmo constante de evolución entre linajes"]
                    },
                    opciones: {
                        a: "1c, 2d, 3b, 4a",
                        b: "1a, 2c, 3d, 4b",
                        c: "1b, 2d, 3a, 4c",
                        d: "1d, 2b, 3a, 4c"
                    },
                    respuesta: "a"
                },
                {
                    id: 30,
                    enunciado: "Ordene correctamente algunos de los pasos del flujo de trabajo típico en un ensamblaje de novo de genomas:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Evaluación de calidad con FastQC", "Trimming con Trimmomatic", "Ensamblaje con SPAdes o Velvet", "Anotación con Prokka"],
                    },
                    opciones: {
                        a: "2, 3, 1, 4 ",
                        b: "2, 1, 3, 4",
                        c: "1, 3, 2, 4",
                        d: "1, 2, 3, 4"
                    },
                    respuesta: "d"
                },
            ],
        },
        {
            nombre: "Operaciones Unitarias",
            preguntas: [
                {
                    id: 1,
                    enunciado: " En la operación de destilación, ¿cuál es el objetivo principal de un plato teórico?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Separar los componentes sólidos de una mezcla.",
                        b: "Mejorar la eficiencia de la transferencia de calor",
                        c: "Aumentar la pureza de los componentes al equilibrar fases líquidas y vapores",
                        d: "Facilitar la absorción de gases en líquidos"
                    },
                    respuesta: "c"
                },
                {
                    id: 2,
                    enunciado: "La ecuación de Stokes es utilizada para:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Determinar la viscosidad de líquidos en un sistema cerrado.",
                        b: "Calcular la velocidad de sedimentación de partículas esféricas en un fluido",
                        c: "Estimar la transferencia de masa en una torre de absorción",
                        d: "Medir la eficiencia de un destilador flash"
                    },
                    respuesta: "b"
                },
                {
                    id: 3,
                    enunciado: "¿Cuál de los siguientes equipos se utiliza en la operación de filtración?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Columna de destilación",
                        b: "Molino de bolas",
                        c: "Filtro prensa",
                        d: "Torre de enfriamiento"
                    },
                    respuesta: "c"
                },
                {
                    id: 4,
                    enunciado: "En una operación de extracción líquido-líquido, el coeficiente de reparto se define como:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "La relación de volúmenes entre el solvente y el soluto.",
                        b: "La cantidad de soluto disuelto en la fase acuosa.",
                        c: "La constante que indica la distribución de un soluto entre dos fases inmiscibles",
                        d: "El volumen de disolvente necesario para extraer completamente el soluto."
                    },
                    respuesta: "c"
                },
                {
                    id: 5,
                    enunciado: "¿Cuál es la ley principal que gobierna la absorción de gases en una torre de platos?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Ley de Dalton",
                        b: "Ley de Henry",
                        c: "Ley de Raoult",
                        d: "Ley de Antoine"
                    },
                    respuesta: "b"
                },
                {
                    id: 6,
                    enunciado: "En una columna de destilación, el plato teórico se define como:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Un punto de equilibrio entre la fase líquida y la fase sólida.",
                        b: "Un nivel en el que la mezcla se convierte completamente en fase vapor.",
                        c: "Un nivel en el cual se alcanza el equilibrio entre fases líquida y vapor",
                        d: "Una sección en la que solo ocurre la transferencia de cantidad de movimiento"
                    },
                    respuesta: "c"
                },
                {
                    id: 7,
                    enunciado: "¿Cuál de los siguientes equipos es el más adecuado para la remoción de sólidos finos suspendidos en un líquido?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Centrífuga",
                        b: "Filtro prensa",
                        c: "Decantador de gravedad",
                        d: "Columna de absorción"
                    },
                    respuesta: "a"
                },
                {
                    id: 8,
                    enunciado: "Selecciona la ley que describe la relación entre presión parcial de un gas y su solubilidad en un líquido en condiciones de equilibrio:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Ley de Dalton",
                        b: "Ley de Raoult",
                        c: "Ley de Henry",
                        d: "Ley de Fick"
                    },
                    respuesta: "c"
                },
                {
                    id: 9,
                    enunciado: "En una corriente involucrada en un proceso, para cambiar la velocidad de flujo molar a velocidad de flujo volumétrico, que factores de los listados a continuación se requieren.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Viscosidad, densidad",
                        b: "Peso molecular, densidad",
                        c: "Viscosidad, Peso molecular",
                        d: "Peso específico, densidad"
                    },
                    respuesta: "b"
                },
                {
                    id: 10,
                    enunciado: "El proceso de _______________ se utiliza para separar los componentes de una mezcla en función de sus puntos de ebullición.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Sedimentación",
                        b: "Destilación",
                        c: "Filtración",
                        d: "Absorción"
                    },
                    respuesta: "b"
                },
                {
                    id: 11,
                    enunciado: "En un diagrama de equilibrio de fases, el _______________ representa la concentración máxima de un componente en la fase líquida en equilibrio con la fase vapor.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "punto de burbuja",
                        b: "punto de ebullición",
                        c: "punto de rocío",
                        d: "punto de fusión"
                    },
                    respuesta: "a"
                },
                {
                    id: 12,
                    enunciado: "La ecuación de _______________ permite calcular la presión de vapor en función de la temperatura para ciertos compuestos.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Antoine",
                        b: "Henry",
                        c: "Gibbs",
                        d: "Fick"
                    },
                    respuesta: "a"
                },
                {
                    id: 13,
                    enunciado: "La _______________ es una operación unitaria en la que un componente es transferido de una fase líquida a una fase gaseosa mediante difusión.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "destilación",
                        b: "desorción",
                        c: "absorción",
                        d: "extracción"
                    },
                    respuesta: "b"
                },
                {
                    id: 14,
                    enunciado: "Elija las palabras que completa correctamente la siguiente oración: Una Operación Unitaria constituye una ______de un proceso industrial en la que se producen ________ en un único __________",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Etapa; Transformaciones físicas de la materia; equipo",
                        b: "Fase; Transformaciones químicas de la materia; dispositivo",
                        c: "Fase; Transformaciones fisicoquímicas de la materia; equipo",
                        d: "Etapa; Transformaciones biológicas de la materia; aparato"
                    },
                    respuesta: "a"
                },
                {
                    id: 15,
                    enunciado: "Escoge de las ecuaciones indicadas a continuación, cuál de ellas corresponden a mecanismos de transferencia de calor:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Ecuación de Newton de la viscosidad", "Ecuación de enfriamiento de Newton", "Ecuación de Fourier", "Ecuación de Stefan Boltzman"],
                    },
                    opciones: {
                        a: "1, 2, 3",
                        b: "2, 3, 4",
                        c: "3, 4, 1",
                        d: "4, 1, 2"
                    },
                    respuesta: "b"
                },
                {
                    id: 16,
                    enunciado: "En la Operación Unitaria de filtración normal se utilizan varios medios filtrantes para contener a las partículas sólidas de una suspensión, la torta formada con las partículas puede ser compresible. Indique qué factores varían en este tipo de lecho formado.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Porosidad", "Factor de empaquetamiento", "Superficie específica", "Viscosidad"],
                    },
                    opciones: {
                        a: "1",
                        b: "1, 2",
                        c: "1, 2, 3",
                        d: "1, 2, 3, 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 17,
                    enunciado: "¿Cuál de los siguientes equipos son utilizados en la remoción de sólidos finos suspendidos en un líquido?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Centrífuga", "Filtro prensa", "Sedimentador de gravedad", "Columna de absorción"],
                    },
                    opciones: {
                        a: "2, 3, 4",
                        b: "1, 2, 3",
                        c: "3, 4, 1",
                        d: "4, 1, 2"
                    },
                    respuesta: "b"
                },
                {
                    id: 18,
                    enunciado: "Relaciona cada operación unitaria con el tipo de transferencia que domina en su funcionamiento:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Destilación", "Filtración", "Secado", "Absorción"],
                        columna_2: ["Transferencia de calor", "Transferencia de masa", "Transferencia de cantidad de movimiento", "Transferencia de masa y calor"]
                    },
                    opciones: {
                        a: "1a, 2c, 3b, 4d",
                        b: "1d, 2a, 3c, 4b",
                        c: "1d, 2c, 3a, 4b",
                        d: "1b, 2d, 3a, 4c"
                    },
                    respuesta: "c"
                },
                {
                    id: 19,
                    enunciado: "Relaciona cada tipo de equipo con su aplicación en operaciones unitarias:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Filtro prensa", "Columna de platos", "Secador rotatorio", "Triturador de mandíbula"],
                        columna_2: ["Secado", "Reducción de tamaño", "Separación sólido-líquido", "Destilación fraccionada"]
                    },
                    opciones: {
                        a: "1c, 2d, 3a, 4b",
                        b: "1b, 2c, 3d, 4a",
                        c: "1a, 2b, 3c, 4d",
                        d: "1d, 2a, 3b, 4c"
                    },
                    respuesta: "a"
                },
                {
                    id: 20,
                    enunciado: "Relaciona cada tipo de transferencia con el principio físico que lo describe:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Calor", "Masa", "Cantidad de movimiento"],
                        columna_2: ["Ley de Fourier", "Ley de Fick", "Ley de Newton"]
                    },
                    opciones: {
                        a: "1a, 2c, 3b",
                        b: "1a, 2b, 3c",
                        c: "1c, 2a, 3b",
                        d: "1b, 2a, 3c"
                    },
                    respuesta: "b"
                },
                {
                    id: 21,
                    enunciado: "Relaciona cada tipo de energía con el fenómeno de transferencia asociado:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Térmica", "Cinética", "Potencial"],
                        columna_2: ["Transferencia de calor", "Transferencia de masa", "Transferencia de cantidad de movimiento"]
                    },
                    opciones: {
                        a: "1a, 2c, 3b",
                        b: "1c, 2b, 3a",
                        c: "1a, 2b, 3c",
                        d: "1b, 2c, 3a"
                    },
                    respuesta: "a"
                },
                {
                    id: 22,
                    enunciado: "Organiza las siguientes fases en un proceso de destilación con rectificación de una mezcla binaria:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Vaporización parcial de la mezcla", "Ascenso del vapor en la columna", "Condensación de los vapores en el cabezal", "Reflujo hacia la columna para mejorar la separación"],
                    },
                    opciones: {
                        a: "1, 3, 4, 2",
                        b: "1, 2, 3, 4",
                        c: "2, 1, 4, 3",
                        d: "4, 3, 2, 1"
                    },
                    respuesta: "b"
                },
                {
                    id: 23,
                    enunciado: "Ordena los siguientes pasos en la sedimentación de partículas sólidas en un líquido:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Formación de flóculos", "Movimiento descendente de partículas", "Compactación de partículas en el fondo", "Clarificación de la fase líquida superior"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "1, 3, 2, 4",
                        c: "2, 4, 3, 1",
                        d: "4, 1, 2, 3"
                    },
                    respuesta: "a"
                },
                {
                    id: 24,
                    enunciado: "Ordena los siguientes procedimientos en una operación de adsorción en columnas de lecho fijo:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Preparación y llenado del lecho adsorbente", "Paso de la corriente a tratar a través del lecho", "Saturación del adsorbente", "Regeneración del adsorbente mediante lavado o calentamiento"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 3, 4, 1",
                        c: "3, 1, 4, 2",
                        d: "4, 3, 2, 1"
                    },
                    respuesta: "a"
                },
                {
                    id: 25,
                    enunciado: "Coloca en orden las etapas básicas del secado de sólidos en un secador continuo:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Alimentación del material húmedo al secador", "Calentamiento del material en la zona de secado", "Evaporación del agua superficial del sólido", "Descarga del material seco"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "1, 3, 2, 4",
                        c: "2, 1, 4, 3",
                        d: "3, 1, 2, 4"
                    },
                    respuesta: "a"
                },
                {
                    id: 26,
                    enunciado: "En una curva de secado, el periodo de velocidad constante se caracteriza por:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Reducción progresiva de la tasa de secado",
                        b: "Alta temperatura en el centro de la partícula",
                        c: "Transferencia constante de humedad superficial",
                        d: "Inicio del calentamiento del aire"
                    },
                    respuesta: "c"
                },
                {
                    id: 27,
                    enunciado: "El rompimiento de células mediante homogenización se realiza aplicando __________ a través de una válvula de alta presión.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "presión mecánica",
                        b: "fuerza centrífuga",
                        c: "gradientes térmicos",
                        d: "fricción estática"
                    },
                    respuesta: "a"
                },
                {
                    id: 28,
                    enunciado: "Selecciona las etapas necesarias para diseñar un proceso de secado de sólidos:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Determinación del contenido de humedad, construcción de curva de secado, elección del tipo de secador",
                        b: "Evaluación del color, análisis microbiológico, estudio térmico",
                        c: "Análisis de densidad, estimación de energía libre, validación sensorial",
                        d: "Elección del solvente, extracción previa, condensación"
                    },
                    respuesta: "a"
                },
                {
                    id: 29,
                    enunciado: "Relaciona cada equipo con la propiedad física predominante en su diseño:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Molino de perlas", "Torre de absorción", "Secador rotatorio", "Filtro de presión"],
                        columna_2: ["Tamaño de partícula", "Solubilidad de gases", "Transferencia de calor", "Porosidad del medio"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2a, 3d, 4c",
                        c: "1c, 2b, 3a, 4d",
                        d: "1d, 2c, 3b, 4a"
                    },
                    respuesta: "a"
                },
                {
                    id: 30,
                    enunciado: "Ordena las etapas del proceso general de diseño de una operación unitaria de separación:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Identificación de las propiedades físico-químicas de los componentes", "Selección del tipo de operación unitaria adecuada", "Realización de balances de masa y energía", "Dimensionamiento y selección del equipo", "Evaluación del rendimiento del proceso"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4, 5",
                        b: "2, 1, 3, 5, 4",
                        c: "3, 1, 2, 4, 5",
                        d: "1, 3, 2, 4, 5"
                    },
                    respuesta: "a"
                },
            ]
        },
        {
            nombre: "QPN",
            preguntas: [
                {
                    id: 1,
                    enunciado: "La biosíntesis de alcaloides derivados de la tirosina incluye una serie de reacciones que finalmente producen:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Morfina",
                        b: "Curcumina",
                        c: "Ácido salicílico",
                        d: "Carotenoides"
                    },
                    respuesta: "a"
                },
                {
                    id: 2,
                    enunciado: "Cuál de las siguientes opciones pertenece a un monoterpeno",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "C15H24",
                        b: "C10H16",
                        c: "C40H64",
                        d: "C30H48"
                    },
                    respuesta: "b"
                },
                {
                    id: 3,
                    enunciado: "¿Qué elemento es clave en la formación de diterpenos?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Isopreno",
                        b: "Geranilgeranil pirofosfato (GGPP)",
                        c: "Geranilfarnesil pirofosfato (FPP)",
                        d: "Acetil-CoA"
                    },
                    respuesta: "b"
                },
                {
                    id: 4,
                    enunciado: "Un mecanismo de defensa frente a herbívoros es biosintetizar compuestos anti alimentarios, ¿cuál de los siguientes compuestos cumple esta función?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Alcaloides",
                        b: "Sesquiterpenos",
                        c: "Fenilpropanoides",
                        d: "Carotenoides"
                    },
                    respuesta: "a"
                },
                {
                    id: 5,
                    enunciado: "Los _____________ son compuestos de defensa producidos por las plantas que pueden actuar como repelentes naturales contra insectos y microorganismos, provienen de la vía del ______ __________ para formar moléculas con cadenas de carbono múltiplo de 5.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Caritenoides - ácido shikímico",
                        b: "Triterpenos - Falsos aminoácidos",
                        c: "Monoterpenos - ácido mevalónico",
                        d: "Glucosinolatos - ácido shikímico"
                    },
                    respuesta: "c"
                },
                {
                    id: 6,
                    enunciado: "Los __________ son un grupo de metabolitos secundarios que contienen nitrógeno y actúan frecuentemente como toxinas naturales en plantas para protegerse de los herbívoros, estos generalmente provienen de la descarboxilación de________________________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Alcaloides – aminoácidos",
                        b: "Alcaloides - Falsos aminoácidos",
                        c: "Glucosinolatos – aminoácidos",
                        d: "Glicósidos – Fenoles"
                    },
                    respuesta: "a"
                },
                {
                    id: 7,
                    enunciado: "Los flavonoides son un tipo de _______________ que desempeña funciones importantes en la protección contra la radiación ________________ y como antioxidantes en las plantas",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Aminoácidos – gama",
                        b: "Fenoles - Infrarroja",
                        c: "Alcaloide – Ultravioleta",
                        d: "Fenoles – Ultravioleta"
                    },
                    respuesta: "d"
                },
                {
                    id: 8,
                    enunciado: "Los __________ son compuestos derivados de unidades de isopreno y forman uno de los grupos más grandes de metabolitos secundarios en las plantas como los ___________________con C20 o los________________C40.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Fenoles - Flavonides - Taninos",
                        b: "Fenoles - fenilpropanoides - Cumarinas",
                        c: "Terpenos - Diterpenos - tetraterpenos",
                        d: "terpenos - Monoterpenos – Diterpenos"
                    },
                    respuesta: "c"
                },
                {
                    id: 9,
                    enunciado: "Relacionar los siguientes precursores con los compuestos a los que dan origen:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Fitoeno", "Geranil pirofosfato", "Geranil farnesil pirofosfato", "Escualeno"],
                        columna_2: ["Monoterpenos", "Sesquiterpenis", "Triterpenos", "Tetraterpenos"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2c, 3d, 4a",
                        c: "1d, 2a, 3b, 4c",
                        d: "1c, 2d, 3a, 4b"
                    },
                    respuesta: "c"
                },
                {
                    id: 10,
                    enunciado: "Relacionar las características principales con el tipo de compuesto al que corresponde:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Péptidos no ribosomales", "Terpenoides", "Alcaloides", "Fenoles"],
                        columna_2: ["Absorben luz UV", "Interactúan con microbianos", "Altamente volátiles", "Interactúan con centros nerviosos"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2c, 3d, 4a",
                        c: "1d, 2a, 3b, 4c",
                        d: "1c, 2d, 3a, 4b"
                    },
                    respuesta: "b"
                },
                {
                    id: 11,
                    enunciado: "Relacionar a los principios activos con los caminos biosintéticos de los cuales se originan:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Péptidos no ribosomales", "Terpenoides", "Alcaloides", "Fenoles"],
                        columna_2: ["Ácido shikímico", "Ácido mevalónico", "Aminoácidos modificados", "Rutas Mixta aminoácidos y otras"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2c, 3d, 4a",
                        c: "1c, 2b, 3d, 4a",
                        d: "1c, 2d, 3a, 4b"
                    },
                    respuesta: "c"
                },
                {
                    id: 12,
                    enunciado: "Relacionar cada precursor con el tipo de metabolito que ayuda a sintetizar:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Geranil pirofosfato (GPP)", "Triptófano", "Fenilalanina", "Acetil-CoA"],
                        columna_2: ["Alcaloides", "Terpenoides", "Fenilpropanoides", "Poliquétidos"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2a, 3c, 4d",
                        c: "1c, 2b, 3d, 4a",
                        d: "1c, 2d, 3a, 4b"
                    },
                    respuesta: "b"
                },
                {
                    id: 13,
                    enunciado: "Ordenar las etapas del proceso de obtención de compuestos orgánicos de interés de una fuente natural:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Purificación", "Extracción", "Aislamiento", "Determinación estructural", "Preparación de la muestra"],
                    },
                    opciones: {
                        a: "a, b, c, d, e",
                        b: "e, d, c, b, a",
                        c: "a, c, d, b, e",
                        d: "e, b, a, c, d"
                    },
                    respuesta: "d"
                },
                {
                    id: 14,
                    enunciado: "Ordenar los eventos históricos importantes en el establecimiento como ciencia a la Química de Productos Naturales:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Análisis de extractos a nivel de laboratorio", "Recetas medievales", "Venenos para la caza o pesca", "Uso de hierbas medicinales como medicamentos"],
                    },
                    opciones: {
                        a: "a, b, c, d",
                        b: "d, c, b, a",
                        c: "c, b, d, a",
                        d: "b, a, d, c"
                    },
                    respuesta: "c"
                },
                {
                    id: 15,
                    enunciado: "Organiza de manera ordenada las actividades necesarias para confirmar la estructura química de un compuesto:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Identificación y aislamiento de la molécula", "Comparación con Bases de datos", "Extracción en el laboratorio", "Estudios cromatográficos"],
                    },
                    opciones: {
                        a: "a, b, c, d",
                        b: "d, b, c, a",
                        c: "c, d, a, b",
                        d: "a, d, b, c"
                    },
                    respuesta: "c"
                },
                {
                    id: 16,
                    enunciado: "Ordena los pasos de la biosíntesis de terpenos a partir de sus precursores.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Formación de pirofosfato de geranilo (GPP)", "Conversión a monoterpenos mediante monoterpeno sintasas", "Formación de unidades básicas de isopentenil pirofosfato (IPP)", "Modificaciones finales como oxidación y metilación"],
                    },
                    opciones: {
                        a: "b, c, d, a",
                        b: "c, a, b, d",
                        c: "d, a, c, b",
                        d: "a, b, c, d"
                    },
                    respuesta: "b"
                },
                {
                    id: 17,
                    enunciado: "¿Qué grupo de principios activos es el más relevante en la tolerancia al estrés abiótico?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Alcaloides que provienen de ornitina", "Hemiterpenos", "Flavonoides", "Diterpenos"],
                    },
                    opciones: {
                        a: "b, c",
                        b: "a, b",
                        c: "a, c",
                        d: "a, d"
                    },
                    respuesta: "a"
                },
                {
                    id: 18,
                    enunciado: "¿Qué molécula es precursora de los monoterpenos?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Farnesil pirofosfato (FPP)", "Geranil pirofosfato (GPP)", "Isopentenil pirofosfato (IPP)", "Neril pirofosfato (NPP)"],
                    },
                    opciones: {
                        a: "b, c",
                        b: "a, b",
                        c: "a, c",
                        d: "a, d"
                    },
                    respuesta: "a"
                },
                {
                    id: 19,
                    enunciado: "¿Cuál de los siguientes no es un producto del metabolismo secundario?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Antocianinas", "Prolina", "Ácido cítrico", "Saponinas"],
                    },
                    opciones: {
                        a: "a, b",
                        b: "b, c",
                        c: "c, d",
                        d: "a, d"
                    },
                    respuesta: "b"
                },
                {
                    id: 20,
                    enunciado: "¿Qué característica estructural es común en los fenilpropanoides?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Anillo bencénico con grupo amino", "Estructura de tres anillos fusionados", "Cadena de tres carbonos unida a un anillo aromático", "Presencia de heterociclos nitrogenados", "Son volátiles"],
                    },
                    opciones: {
                        a: "a, b",
                        b: "c, e",
                        c: "b, c",
                        d: "a, d"
                    },
                    respuesta: "b"
                },
                {
                    id: 21,
                    enunciado: "Los metabolitos secundarios son abundantemente producidos por:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "El ser humano",
                        b: "Insectos",
                        c: "Mamíferos",
                        d: "Microorganismos"
                    },
                    respuesta: "d"
                },
                {
                    id: 22,
                    enunciado: "La vía metabólica que permite la síntesis de aminoácidos aromáticos en plantas se llama la vía del _______________ y da origen a una variedad de principios activos llamados________________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Shikimato - Fenoles",
                        b: "Terpenos - Cumarinas",
                        c: "Terpenos - Diterpenos",
                        d: "Alcaloides - Pirrolidínicos"
                    },
                    respuesta: "a"
                },
                {
                    id: 23,
                    enunciado: "Relaciona cada clase de metabolito con su rol ecológico principal en las plantas:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Terpenoides", "Fenilpropanoides", "Alcaloides", "Flavonoides"],
                        columna_2: ["Defensa contra herbívoros", "Protección contra radiación ultravioleta", "Atracción de polinizadores", "Interacción con microorganismos"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1b, 2a, 3c, 4d",
                        c: "1c, 2d, 3a, 4b",
                        d: "1d, 2a, 3b, 4c"
                    },
                    respuesta: "c"
                },
                {
                    id: 24,
                    enunciado: "Realiza un análisis crítico y global de los pesos Moleculares de los terpenos y ordena de forma ascendente las siguientes moléculas:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Sesquiterpenos", "Carotenoides", "Sesterpenos", "Monoterpenos"],
                    },
                    opciones: {
                        a: "b, c, d, a",
                        b: "c, b, d, a",
                        c: "d, a, c, b",
                        d: "a, b, c, d"
                    },
                    respuesta: "c"
                },
                {
                    id: 25,
                    enunciado: "¿Cuál de los siguientes compuestos pertenece a la clase de los terpenoides?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Morfina", "Limoneno", "Quercetina", "Cafeína", "Geraniol", "Pineno"],
                    },
                    opciones: {
                        a: "a, b, c",
                        b: "b, d, e",
                        c: "a, d, f",
                        d: "b, e, f"
                    },
                    respuesta: "d"
                },
                {
                    id: 26,
                    enunciado: " ¿Qué terpenos son esenciales en la comunicación química entre plantas e insectos?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Monoterpenos",
                        b: "Sesquiterpenos",
                        c: "Triperpenos",
                        d: "Tetraterpenos"
                    },
                    respuesta: "a"
                },
                {
                    id: 27,
                    enunciado: "Ordenar los siguientes compuestos por su grado de volatilidad",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Nicotina", "Limoneno", "licopeno", "Penicilina"],
                    },
                    opciones: {
                        a: "a, b, c, d",
                        b: "b, a, c, d",
                        c: "c, d, b, a",
                        d: "b, c, a, d"
                    },
                    respuesta: "b"
                },
                {
                    id: 29,
                    enunciado: "¿Qué factor influye directamente en la actividad biológica de los fenoles?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["La cantidad de átomos de nitrógeno", "La posición y número de grupos hidroxilo en el anillo aromático", "La longitud de la cadena lateral", "La cantidad de dobles enlaces conjugados"],
                    },
                    opciones: {
                        a: "a, b",
                        b: "b, c",
                        c: "c, d",
                        d: "b, d"
                    },
                    respuesta: "b"
                },
                {
                    id: 30,
                    enunciado: "Los alcaloides son compuestos orgánicos de origen natural que contienen al menos un átomo de ___________, responsable de la __________________y se caracterizan por presentar una marcada actividad ___________ sobre el sistema nervioso, razón por la cual muchos de ellos se emplean en la industria ___________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Nitrógeno, alcalinidad, farmacológica, farmacéutica",
                        b: "Oxígeno, polaridad, biológica, cosmética",
                        c: "Nitrógeno, solubilidad, neurotóxica, psicotrópica",
                        d: "Nitrógeno, alcalinidad, sicodélica, medicina"
                    },
                    respuesta: "a"
                },
            ],
        },
        {
            nombre: "Biotecnología Ambiental",
            preguntas: [
                {
                    id: 1,
                    enunciado: "Los contaminantes emergentes, también llamados contaminantes de preocupación emergente, son sustancias químicas o materiales que se detectan últimamente en las aguas y cuya presencia puede suponer un riesgo para el medio ambiente y salud humana, como por ejemplo: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Desechos animales",
                        b: "Desechos vegetales ",
                        c: "Cartón",
                        d: "Antibióticos"
                    },
                    respuesta: "d"
                },
                {
                    id: 2,
                    enunciado: " ¿Cómo se llama el tratamiento preliminar de una planta de tratamiento de agua residual, que remueve materiales sólidos y protege al resto de la planta? Seleccione la respuesta correcta:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Sedimentación",
                        b: "Desbaste (rejillas o tamizador)",
                        c: "Manta de lodos",
                        d: "Clorinación"
                    },
                    respuesta: "b"
                },
                {
                    id: 3,
                    enunciado: "El papel de los microorganismos en el tratamiento biológico es: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Eliminación de la DQO, sólidos suspendidos y estabilización de los SSVLM",
                        b: "Convertir el alimento en compuestos inocuos como gases y microorganismos nuevos",
                        c: "La eliminación de la DBO carbonosa, coagulación de sólidos coloidales no sedimentables y la estabilización de la materia orgánica",
                        d: "Crecer, estabilizarse hasta llegar la fase de declinación endógena"
                    },
                    respuesta: "c"
                },
                {
                    id: 4,
                    enunciado: "Se requiere realizar el tratamiento de un efluente de una industria láctea que tiene una DBO5 de 1000 mg/l a través de un proceso biológico en suspensión. La DBO5 de descarga de agua tratada debe cumplir normativa de descarga a un cauce para Quito (DBO 100 mg/l). La eficiencia de la planta de tratamiento sería: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "4% ",
                        b: "24%",
                        c: "90%",
                        d: "99%"
                    },
                    respuesta: "c"
                },
                {
                    id: 5,
                    enunciado: "El suelo del tipo _____________ presenta un tamaño de partículas __________ y presenta mayor efecto en propiedades de un suelo y > alta actividad superficial.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Limoso – 0,002 – 0,05 mm",
                        b: "Arcilloso – < 0,002 mm",
                        c: "Arenoso – 0,05-2,00 mm",
                        d: "Fangoso – 2 mm"
                    },
                    respuesta: "b"
                },
                {
                    id: 6,
                    enunciado: "Una curva típica de la demanda biológica de oxígeno (DBO) para un agua residual se puede observar que primero aparece la oxidación de materia __________ seguida de la materia ___________. ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "sulfurosa – carbónica",
                        b: "nitrogenada – carbónica",
                        c: "carbónica – nitrogenada",
                        d: "sulfurosa – sulfúrica"
                    },
                    respuesta: "c"
                },
                {
                    id: 7,
                    enunciado: "Advección es _________ de contaminantes conjuntamente con el flujo del __________ subterránea a velocidad de infiltración a través del medio poroso. ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Movimiento – agua ",
                        b: "Tratamiento – efluente ",
                        c: "Movimiento – contaminante",
                        d: "Tratamiento – agua"
                    },
                    respuesta: "a"
                },
                {
                    id: 8,
                    enunciado: "La pirólisis es un proceso ____________ que consiste en la descomposición de sustancias por medio de calor, en ausencia de _____________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Termo Biológico - oxígeno ",
                        b: "Termoquímico – materia orgánica",
                        c: "Termo Biológico – materia orgánica",
                        d: "Termoquímico – oxígeno"
                    },
                    respuesta: "d"
                },
                {
                    id: 9,
                    enunciado: "Seleccione los parámetros de diseño que se debe contemplar para un proceso de sedimentación.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Tiempo de retención hidráulica", "2. Tiempo de retención celular ", "3. Carga de sólidos", "4. Carga hidráulica superficial ", "5. Relación alimento / microorganismo"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4, 5",
                        b: "1, 2, 4 ",
                        c: "1, 3, 4",
                        d: "1, 2, 3, 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 10,
                    enunciado: "Elija las opciones de respuesta que afirman el concepto de Índice Volumétrico de lodos (IVL) ",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Da una idea de la concentración de biomasa en mL/L en el biorreactor aerobio", "2. La relación alimento microorganismo A/M incrementa el IVL", "3. La velocidad crítica de sedimentación es un parámetro requerido para el cálculo de IVL ", "4. Las concentraciones de sólidos, flujos, tasas de recirculación de lodos hacia el biorreactor son parámetros     requeridos para el cálculo del IVL. ", "5. El ensayo consiste en dejar sedimentar el agua del biorreactor aireado durante 30 minutos."],
                    },
                    opciones: {
                        a: "1, 2, 3, 4, 5",
                        b: "1, 4, 5",
                        c: "1, 2, 4, 5",
                        d: "1, 3, 4, 5"
                    },
                    respuesta: "b"
                },
                {
                    id: 11,
                    enunciado: "Elija de los siguientes procesos, cuáles corresponden a un tratamiento primario y secundario de una planta de tratamiento de aguas residuales PTAR.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Desbaste", "2. Clorinación", "3. Sedimentación primaria", "4. Tratamiento con luz ultravioleta (UV)", "5. Oxidación aeróbica", "6. Procesamiento de lodos "],
                    },
                    opciones: {
                        a: "1, 2, 3 ",
                        b: "6, 5, 4",
                        c: "1, 3, 4",
                        d: "3, 5, 6"
                    },
                    respuesta: "d"
                },
                {
                    id: 12,
                    enunciado: "Elija de los siguientes sistemas, cuales corresponden a un crecimiento suspendido (crecimiento bacteriano) ",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Filtro biológico", "2. Lagunas de estabilización y variantes", "3. Biodisco ", "4. Lodos activados y variantes", "5. Filtro anaeróbico", "6. Reactor anaeróbico de flujo ascendente (residuales SS)"],
                    },
                    opciones: {
                        a: "1, 3, 5",
                        b: "2, 4, 6",
                        c: "1, 2, 3",
                        d: "4, 5, 6"
                    },
                    respuesta: "b"
                },
                {
                    id: 13,
                    enunciado: "A nivel de esquema de una estructura de sedimentación (tratamiento de aguas residuales) se pueden distinguir cuatro zonas bien definidas. ",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Zona de salida", "Zona de entrada", "Zona de sedimentación", "Zona de sedimentos"],
                        columna_2: ["Es la que tiene como misión lograr la mejor uniformidad de las líneas de corriente.", "Es donde se encauza al líquido clarificado hacia el o los canales que lo conducen a otras unidades de la planta de potabilización.", "Es en la que se considera que las partículas removidas en el proceso quedan retenidas.", "Es donde el régimen es uniforme y tiene lugar el fenómeno en estudio"]
                    },
                    opciones: {
                        a: "1d, 2c, 3b, 4a",
                        b: "1b, 2a, 3d, 4c",
                        c: "1a, 2b, 3c, 4d",
                        d: "1c, 2b, 3a, 4d"
                    },
                    respuesta: "d"
                },
                {
                    id: 14,
                    enunciado: "Los siguientes conceptos han sido clasificados según el nivel de presión hidráulica o presión del acuífero",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Acuífero libre, no confinado", "Acuífero semiconfinado", "Acuífero confinado"],
                        columna_2: ["No presentan formaciones impermeables. En ellos, la zona no saturada se localiza entre la superficie del terreno y el nivel freático y el agua está en contacto con el aire y a presión atmosférica.", "No están en contacto con la atmósfera debido a la presencia de materiales impermeables o confinantes. El agua satura en su totalidad los poros o grietas, de manera que al realizar perforaciones esta asciende hasta equilibrar la presión hidráulica con la atmosférica.", "Son acuíferos libres en contacto con los ríos, que están formados principalmente por materiales arcillosos, muy poco permeables.", "Son también acuíferos a presión, como los confinados, pero a diferencia de estos últimos, en ellos existe una mayor permeabilidad (se consideran acuitardos)"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c",
                        b: "1d, 2c, 3b",
                        c: "1b, 2c, 3a",
                        d: "1a, 2d, 3b"
                    },
                    respuesta: "d"
                },
                {
                    id: 15,
                    enunciado: "A continuación se detallan algunas modalidades de tratamiento biológico.",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Reactor mezcla completa", "Reaireación graduada", "Aireación prolongada ", "Reactor Bardenpho"],
                        columna_2: ["Funciona en la fase de respiración endógena, se emplea en plantas prefabricadas para pequeñas comunidades.", "Sistema de biorreactores que se utiliza para eliminar . 2. Nutrientes de las aguas residuales, como el nitrógeno y el fósforo.", "Modificación de un reactor flujo pistón. Se aplican caudales de aireación diferentes a lo largo del canal en función de la demanda de oxígeno.", "Usa el régimen de flujo de un reactor de flujo continuo agitado. La carga orgánica y demanda de oxígeno son uniformes en toda la longitud del tanque."]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1d, 2c, 3a, 4b",
                        c: "1d, 2c, 3b, 4a",
                        d: "1a, 2c, 3b, 4d"
                    },
                    respuesta: "b"
                },
                {
                    id: 16,
                    enunciado: "Los siguientes conceptos están relacionados al mecanismo de transporte de un contaminante en suelos y acuíferos. Relacione los conceptos, leyes según el tipo de fenómeno de transporte.",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Advección", "Dispersión hidrodinámica", "Transferencia entre fases"],
                        columna_2: ["Ley de Fick", "Ley de Henrry, Teoría de la Doble Capa de Lewis, Adsorción", "Conductividad hidráulica", "Porosidad"]
                    },
                    opciones: {
                        a: "1d, 2a, 3b",
                        b: "1c, 2b, 3a",
                        c: "1a, 2b, 3c",
                        d: "1c, 2a, 3b"
                    },
                    respuesta: "d"
                },
                {
                    id: 17,
                    enunciado: "El suelo presenta una gran cantidad de contaminantes, como los siguientes: Ordenar los contaminantes del menos biodegradable al más biodegradable",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Fenantreno", "2. Benzo[a]antraceno", "3. Metilnaftaleno", "4. Naftaleno "],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 1, 3, 4",
                        c: "4, 3, 2, 1",
                        d: "3, 4, 1, 2"
                    },
                    respuesta: "b"
                },
                {
                    id: 18,
                    enunciado: "Ordena la aparición desde la primera a la última de las reacciones Redox aplicadas a la biodegradación de contaminantes orgánicos transformados.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Reducción Mn(IV) y Fe(III)", "2. Metanogénesis", "3. Desnitrificación", "4. Reducción sulfato", "5.  Aeróbico"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4, 5",
                        b: "5, 4, 3. 2, 1",
                        c: "5, 3, 1, 4, 2",
                        d: "2, 4, 1, 3, 5 "
                    },
                    respuesta: "c"
                },
                {
                    id: 20,
                    enunciado: "Cuando se realiza un crecimiento de bacterias en un cultivo discontinuo. El modelo de crecimiento basado en el número de células sigue cuatro fases diferenciadas. Ordene las siguientes fases de crecimiento bacteriano.",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Fase de retardo", "2. Fase de muerte", "3. Fase estacionaria", "4. Fase de crecimiento exponencial"],
                    },
                    opciones: {
                        a: "3, 1, 4, 2",
                        b: "1, 2, 3, 4",
                        c: "1, 3, 4, 2",
                        d: "1, 4, 3, 2"
                    },
                    respuesta: "d"
                },
                {
                    id: 21,
                    enunciado: "¿Cuál de los siguientes tratamientos biológicos secundarios se caracteriza por una baja tasa de síntesis celular, lo que genera poca producción de lodos (relativamente estables), no requiere oxígeno (por lo tanto, consume poca energía), es adecuado para aguas residuales con alta carga orgánica y produce metano como subproducto energético?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Eliminación de la DQO",
                        b: "Proceso anaerobio",
                        c: "Proceso aerobio",
                        d: "Sedimentación"
                    },
                    respuesta: "b"
                },
                {
                    id: 22,
                    enunciado: "El Desbaste (rejillas o tamizador), desarenado, trituración son procesos que permiten remover materiales sólidos y proteger al resto de la planta de tratamiento y son: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Tratamiento primario",
                        b: "Tratamiento preliminar",
                        c: " Tratamiento secundario ",
                        d: "Clorinación"
                    },
                    respuesta: "b"
                },
                {
                    id: 23,
                    enunciado: "Se requiere realizar el tratamiento de un efluente de una industria láctea que tiene una DBO5 de 2500 mg/l a través de un proceso biológico en suspensión. La DBO5 de descarga de agua tratada debe cumplir normativa de descarga a un cauce para Quito (DBO 250 mg/l). La eficiencia de la planta de tratamiento sería:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "4%",
                        b: "24%",
                        c: "90%",
                        d: "99%"
                    },
                    respuesta: "c"
                },
                {
                    id: 24,
                    enunciado: "Complete la oración. _________ es proceso de tipo molecular mediante el cual el contaminante se mueve de regiones de alta concentración a regiones de baja concentración y se utiliza la ____________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Difusión – 1º ley de Fick ",
                        b: "Advección -  1º ley de Fick",
                        c: "Adsorción – 1º ley de Stokes",
                        d: "Biodegradación – 1º ley de Stokes"
                    },
                    respuesta: "a"
                },
                {
                    id: 25,
                    enunciado: "Elija de los siguientes sistemas, cuales corresponden a un crecimiento adherido (crecimiento bacteriano)",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1.  Filtro biológico", "2.  Lagunas de estabilización y variantes", "3.  Biodisco", "4.  Lodos activados y variantes", "5.  Filtro anaeróbico"],
                    },
                    opciones: {
                        a: "1, 2, 3",
                        b: "3, 4, 5",
                        c: "2, 4, 5",
                        d: "1, 3, 5"
                    },
                    respuesta: "d"
                },
                {
                    id: 26,
                    enunciado: "Se requiere realizar el tratamiento de un efluente de una industria petrolera que tiene una DBO5 de 1500 mg/l a través de un proceso biológico en suspensión. La DBO5 de descarga de agua tratada debe cumplir normativa descarga a un cauce para Quito (DBO 100 mg/l). La eficiencia de la planta de tratamiento sería:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "4%",
                        b: "24%",
                        c: "93%",
                        d: "99%"
                    },
                    respuesta: "c"
                },
                {
                    id: 27,
                    enunciado: "La dispersión hidrodinámica está compuesta por la _________ y la __________que definen la trayectoria tortuosa del flujo del contaminante en suelos. Dz = αvz + Dm",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Difusión molecular – Dispersión mecánica",
                        b: "Conductividad hidráulica – coeficiente de distribución en el terreno",
                        c: "Velocidad en el eje z – Coeficiente octanol agua ",
                        d: "Constante de Henrry – Solubillidad del contaminante"
                    },
                    respuesta: "a"
                },
                {
                    id: 28,
                    enunciado: "Relacione la columna de parámetros de operación de un tratamiento biológico según su descripción",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Tiempo de retención Celular", "Tiempo de retención hidráulica", "Relación alimento / microorganismo", "Biodegradabilidad"],
                        columna_2: ["Carga orgánica calculada a partir del flujo y concentración de DBO5, relacionada con la masa de sólidos suspendidos volátiles en el biorreactor", "Capacidad de los compuestos orgánicos para ser descompuestos por los procesos metabólicos de microorganismos como bacterias, que relaciona la demanda bioquímica de oxígeno con demanda química de oxígeno.", "Es el tiempo promedio en que el sustrato o agua permanece en el biorreactor", "Es el tiempo de permanencia de los microorganismos en un reactor biológico"]
                    },
                    opciones: {
                        a: "1a, 2b, 3c, 4d",
                        b: "1d, 2c, 3a, 4b",
                        c: "1d, 2c, 3b, 4a",
                        d: "1a, 2c, 3b, 4d"
                    },
                    respuesta: "b"
                },
                {
                    id: 30,
                    enunciado: "Conteste verdadero o falso y elija opción correcta",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["Al aumentar el tiempo de retención celular el lodo se hace más estable y mejoran sus características de sedimentación (__)", "La oxidación de la carga orgánica carbonácea siempre se realiza de manera conjunta con la nitrogenácea (__)", "El tiempo de retención celular puede ser igual al tiempo de retención hidráulica cuando un reactor no tiene recirculación (__)", "La modalidad de lodos activados de aireación prolongada permite la degradación de los contaminantes en fase exponencial (__)", "El tratamiento de lodos activados en un tratamiento de cultivo en suspensión (__)"],
                    },
                    opciones: {
                        a: "V, V, F, F, V",
                        b: "V, F, V, F, V",
                        c: "F, F, V, F, V",
                        d: "V, F, V, V, V"
                    },
                    respuesta: "b"
                },
            ],
        },
        {
            nombre: "Inmunología",
            preguntas: [
                {
                    id: 1,
                    enunciado: "La siguiente NO es una característica de la inmunidad innata:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Constituye la primera línea de defensa y actúa de manera rápida",
                        b: "También se la conoce como inmunidad natural o nativa",
                        c: "Consta de mecanismos de defensa celulares y señales químicas en respuesta a la reacción de microorganismos, células dañadas, entre otras.",
                        d: "Es de alta especificidad"
                    },
                    respuesta: "d"
                },
                {
                    id: 2,
                    enunciado: "Luis sufre una infección por bacterias Gram-negativas. Su sistema inmunitario innato detecta rápidamente la infección. ¿Qué receptor de reconocimiento de patrones es más probable que se active en respuesta a los lipopolisacáridos (LPS) de la membrana de las bacterias Gram-negativas?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Receptor tipo Toll",
                        b: "Receptor tipo RIG",
                        c: "Receptor NOD2",
                        d: "Receptor de manosa"
                    },
                    respuesta: "a"
                },
                {
                    id: 3,
                    enunciado: "Con relación a la respuesta inmune a infecciones virales, todas las afirmaciones son correctas, excepto:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Entre las células de la respuesta innata que intervienen se encuentran las células NK, macrófagos y células dendríticas.",
                        b: "Existe producción de interferones.",
                        c: "Hay ausencia de linfocitos CD8+.",
                        d: "Hay producción anticuerpos alrededor de los 10 días después de la infección"
                    },
                    respuesta: "c"
                },
                {
                    id: 4,
                    enunciado: "Ante una infección causada por Leishmania mexicana:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Se activarán mastocitos",
                        b: "Se liberarán mediadores inflamatorios.",
                        c: "Habrá baja producción de IgE.",
                        d: "Todas las anteriores."
                    },
                    respuesta: "d"
                },
                {
                    id: 5,
                    enunciado: "En la maduración de los linfocitos T, hablamos de _____________ cuando los timocitos inmaduros expresan tanto los receptores _____________ en su membrana.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Doble negatividad - CD4+ y CD8+",
                        b: "Selección positiva - CD4+ y CD8+",
                        c: "Doble positividad – CD4+ y CD8+",
                        d: "Selección negativa - CD4+ y CD8+"
                    },
                    respuesta: "a"
                },
                {
                    id: 6,
                    enunciado: "Las citocinas son proteínas de bajo peso molecular que juegan un rol importante en la transducción de señales. Algunos ejemplos de estas moléculas son los interferones, quimiocinas e interleucinas:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Alto peso molecular – quimiocinas e interleucinas",
                        b: "Bajo peso molecular – quimiocinas e interleucinas",
                        c: "Bajo peso molecular – opsoninas y perforinas.",
                        d: "Alto peso molecular – inmunoglobulinas y quimiocinas."
                    },
                    respuesta: "b"
                },
                {
                    id: 7,
                    enunciado: "La inflamación es una respuesta fisiológica a diversos estímulos, como infecciones y lesión tisular. Se distinguen dos fases: La fase aguda tiene un inicio rápido y dura poco, mientras que la fase crónica puede ser persistente y ocasionar consecuencias patológicas severas:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Inflamación – fase grave",
                        b: "Inmunodeficiencia – fase aguda",
                        c: "Inmunodeficiencia – fase grave",
                        d: "Inflamación – fase aguda"
                    },
                    respuesta: "d"
                },
                {
                    id: 8,
                    enunciado: "Determinados componentes de la pared celular microbiana son capaces de activar el ____________, lo cual desencadena la ___________ y el daño a la membrana plasmática del patógeno.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Complemento – opsonización",
                        b: "Interferón alfa – opsonización",
                        c: "Complemento – reacción de hipersensibilidad",
                        d: "Antígeno – respuesta inmune"
                    },
                    respuesta: "a"
                },
                {
                    id: 9,
                    enunciado: "En cuanto a la síntesis de anticuerpos en el cuerpo, el orden correcto de eventos es el siguiente:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Memoria inmunológica", "2. Activación de linfocitos B", "3. Reconocimiento del antígeno", "4. Producción de anticuerpos", "5. Proliferación y diferenciación"],
                    },
                    opciones: {
                        a: "2, 3, 4, 5, 1",
                        b: "3, 2, 5, 4, 1",
                        c: "3, 5, 2, 1, 4",
                        d: "4, 2, 5, 3, 1"
                    },
                    respuesta: "b"
                },
                {
                    id: 10,
                    enunciado: ".En cuanto al mecanismo mediado por anticuerpos para combatir una infección por bacterias extracelulares, el orden correcto de eventos es el siguiente:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Aumento de la respuesta inflamatoria gracias a la atracción de más neutrófilos y macrófagos al sitio de infección.", "2. El anticuerpo neutraliza las toxinas bacterianas", "3. Opsonización y fagocitosis de bacterias cubiertas por C3b.", "4. Lisis de las bacterias."],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "3, 1, 2, 4",
                        c: "2, 3, 1, 4",
                        d: "2, 4, 3, 1"
                    },
                    respuesta: "c"
                },
                {
                    id: 11,
                    enunciado: ".Ordena los siguientes tipos de vacunas en función del nivel de respuesta inmunitaria esperada (de menor a mayor respuesta):",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Vacunas de subunidades", "2. Vacunas de vectores virales", "3. Vacunas de virus inactivados", "4. Vacunas de virus atenuados"],
                    },
                    opciones: {
                        a: "1, 3, 2, 4",
                        b: "3, 1, 4, 2",
                        c: "4, 2, 1, 3",
                        d: "1, 4, 2, 3"
                    },
                    respuesta: "a"
                },
                {
                    id: 12,
                    enunciado: "Ordena los siguientes tipos de anticuerpos en función de su concentración promedio en el suero humano (de menor a mayor):",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. IgD", "2. IgE", "3. IgA", "4. IgG"],
                    },
                    opciones: {
                        a: "4, 3, 2, 1",
                        b: "1, 2, 4, 3",
                        c: "2, 1, 3, 4",
                        d: "1, 2, 4, 3"
                    },
                    respuesta: "c"
                },
                {
                    id: 13,
                    enunciado: "Relaciona los tipos de anticuerpos con sus características:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["IgM", "IgA", "IgG", "IgE"],
                        columna_2: ["Presente en las secreciones como leche materna, saliva. Protege las mucosas.", "Atraviesa la placenta, neutraliza toxinas, interviene en la opsonización", "Es la primera respuesta inmunitaria", "Media las reacciones alérgicas y la defensa contra parásitos"]
                    },
                    opciones: {
                        a: "1b, 2c, 3d, 4a",
                        b: "4c, 3b, 1d, 2a",
                        c: "1b, 2a, 3c, 4d",
                        d: "1c, 2a, 3b, 4d"
                    },
                    respuesta: "d"
                },
                {
                    id: 14,
                    enunciado: "Relaciona los subtipos de linfocitos T con sus funciones:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["T ayudantes (helper)", "T citotóxicos", "T reguladores"],
                        columna_2: ["Destruye células cancerosas o infectadas", "Mantienen la tolerancia inmunológica", "Previenen las enfermedades autoinmunes", "Activan macrófagos y linfocitos B y estimulan otras células inmunes"]
                    },
                    opciones: {
                        a: "1a, 1b, 2c, 3d",
                        b: "3a, 2b, 2c, 1d",
                        c: "2d, 2c, 1b, 3a",
                        d: "3b, 3c, 2a, 1d"
                    },
                    respuesta: "d"
                },
                {
                    id: 15,
                    enunciado: "Relaciona los siguientes conceptos al respecto de los linfocitos B",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Maduración de linfocitos B", "Activación de linfocitos B", "Anticuerpos", "Memoria inmunológica"],
                        columna_2: ["Etapa en la cual los linfocitos B desarrollan receptores específicos de antígenos en la médula ósea", "Células de larga vida que se generan tras la exposición a un antígeno y responden rápidamente en infecciones futuras", "Moléculas producidas por linfocitos B activados que neutralizan antígenos", "Proceso en el que un linfocito B se une a un antígeno específico y comienza la expansión clonal"]
                    },
                    opciones: {
                        a: "1a, 2d, 3c, 4b",
                        b: "1b, 2a, 3d, 4c",
                        c: "1c, 2d, 3a, 4b",
                        d: "1d, 2a, 3c, 4d"
                    },
                    respuesta: "a"
                },
                {
                    id: 16,
                    enunciado: "Relaciona los modelos animales con su característica en el estudio de la inmunología:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Ratones transgénicos", "Ratones inmunodeficientes", "Pez cebra", "Conejo"],
                        columna_2: ["Modelo útil para estudiar la función de genes específicos en el sistema inmunitario", "Modelo usado para evaluar anticuerpos y para estudios de inmunización.", "Organismo que permite la visualización en tiempo real del desarrollo inmunológico debido a su transparencia.", "Modelo utilizado en estudios de trasplantes y respuesta inmunológica en ausencia de linfocitos."]
                    },
                    opciones: {
                        a: "1b, 2a, 3c, 4d",
                        b: "1a, 2d, 3c, 4b",
                        c: "1a, 2b, 3b, 4d",
                        d: "1c, 2b, 3d, 4a"
                    },
                    respuesta: "b"
                },
                {
                    id: 17,
                    enunciado: "La respuesta inflamatoria consta de varias etapas. Ordénalas desde la primera en ocurrir hasta la última",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Reclutamiento de células inmunes al sitio de infección", "2. Liberación de mediadores inflamatorios", "3. Eliminación de patógenos", "4. Reparación tisular y resolución de la inflamación"],
                    },
                    opciones: {
                        a: "2, 1, 3, 4",
                        b: "2, 3, 4, 1",
                        c: "1, 2, 3, 4",
                        d: "1, 3, 2, 4"
                    },
                    respuesta: "a"
                },
                {
                    id: 18,
                    enunciado: "Ordena los eventos en el desarrollo de una enfermedad autoinmune (de primero a último):",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Activación de linfocitos autorreactivos a", "2. Presentación de autoantígenos a las células T b", "3. Reconocimiento erróneo de células propias como extrañas c", "4. Daño a los tejidos y síntomas clínicos d"],
                    },
                    opciones: {
                        a: "3, 1, 2, 4",
                        b: "3, 2, 1, 4",
                        c: "1, 3, 2, 4",
                        d: "1, 3, 4, 2"
                    },
                    respuesta: "b"
                },
                {
                    id: 19,
                    enunciado: "Ordena las etapas de diferenciación celular en la hematopoyesis de los linfocitos T (de etapa más temprana a etapa más avanzada):",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Célula madre hematopoyética", "2. Progenitor linfoide común", "3. Timocito (precursor de linfocito T)", "4. Linfocito T maduro"],
                    },
                    opciones: {
                        a: "2, 1, 3, 4",
                        b: "3, 2, 1, 4",
                        c: "1, 2, 3, 4",
                        d: "1, 3, 2, 4"
                    },
                    respuesta: "c"
                },
                {
                    id: 20,
                    enunciado: "Ordena las siguientes respuestas inmunológicas específicas contra una infección por helmintos (gusanos) (de primera a última):",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Activación de eosinófilos", "2. Producción de IgE específica contra el parásito", "3. Unión de IgE al parásito, facilitando la respuesta citotóxica", "4. Degranulación de eosinófilos y liberación de mediadores citotóxicos"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "4, 3, 2, 1",
                        c: "3, 1, 2, 4",
                        d: "2, 3, 1, 4"
                    },
                    respuesta: "a"
                },
                {
                    id: 21,
                    enunciado: "Los linfocitos T vírgenes reconocen antígenos presentados por:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Células epiteliales",
                        b: "Neutrófilos",
                        c: "Células dendríticas",
                        d: "Eritrocitos"
                    },
                    respuesta: "c"
                },
                {
                    id: 22,
                    enunciado: "La función principal de los linfocitos B en la inmunidad adaptativa es:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Fagocitosis de bacterias",
                        b: "Producción de anticuerpos",
                        c: "Activación del complemento",
                        d: "Presentación de antígenos a los neutrófilos"
                    },
                    respuesta: "b"
                },
                {
                    id: 23,
                    enunciado: " La expresión del complejo mayor de histocompatibilidad (MHC) clase II se limita principalmente a:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Todas las células nucleadas",
                        b: "Células madre hematopoyéticas",
                        c: "Células presentadoras de antígeno profesionales",
                        d: "Linfocitos T"
                    },
                    respuesta: "c"
                },
                {
                    id: 24,
                    enunciado: "El principal coestimulador expresado por las células dendríticas para activar linfocitos T vírgenes es:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "CD8",
                        b: "CD28",
                        c: "B7",
                        d: "IL-2"
                    },
                    respuesta: "c"
                },
                {
                    id: 25,
                    enunciado: "La fase de expansión clonal de los linfocitos T ocurre:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Antes del reconocimiento del antígeno",
                        b: "Durante la presentación antigénica",
                        c: "Tras la activación por antígeno y coestímulo",
                        d: "Durante la diferenciación en células efectoras"
                    },
                    respuesta: "c"
                },
                {
                    id: 26,
                    enunciado: "La región ________ del anticuerpo determina su especificidad antigénica, mientras que la región ________ define su función efectora",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Fab – Fc",
                        b: "Fc – Fab",
                        c: "Variable – constante",
                        d: "Ligadora – catalítica"
                    },
                    respuesta: "a"
                },
                {
                    id: 27,
                    enunciado: "El complejo principal de histocompatibilidad (MHC) clase I presenta péptidos derivados de _________, mientras que el MHC clase II presenta péptidos de _________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Proteínas extracelulares – proteínas endógenas",
                        b: "Proteínas endógenas – proteínas extracelulares",
                        c: "Antígenos solubles – lípidos",
                        d: "Ácidos nucleicos – carbohidratos"
                    },
                    respuesta: "b"
                },
                {
                    id: 28,
                    enunciado: "Durante la respuesta inmunitaria adaptativa, las células dendríticas activadas migran hacia los ganglios linfáticos para:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Activar macrófagos mediante IFN-γ",
                        b: "Presentar antígenos a linfocitos T vírgenes",
                        c: "Destruir antígenos mediante fagocitosis intracelular",
                        d: "Secretar anticuerpos frente al antígeno"
                    },
                    respuesta: "b"
                },
                {
                    id: 29,
                    enunciado: "Ordene los siguientes eventos del reconocimiento antigénico de linfocitos T de manera secuencial:",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Activación del receptor TCR", "2. Expresión de IL-2 y su receptor", "3. Reconocimiento del antígeno presentado por MHC", "4. Proliferación clonal de linfocitos T"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 4, 1, 3",
                        c: "3, 1, 2, 4",
                        d: "4, 2, 3, 1"
                    },
                    respuesta: "c"
                },
                {
                    id: 30,
                    enunciado: "Un paciente inmunizado con una vacuna de subunidades proteicas genera una respuesta dependiente de linfocitos T. ¿Qué tipo de linfocitos y citocinas son esenciales en este proceso?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Linfocitos Th1 e IFN-γ",
                        b: "Linfocitos Th2, IL-4 e IL-5",
                        c: "Linfocitos T citotóxicos e IL-2",
                        d: "Linfocitos NK y TNF-α"
                    },
                    respuesta: "b"
                },
            ],
        },
        {
            nombre: "Biotecnología Animal",
            preguntas: [
                {
                    id: 1,
                    enunciado: "Si vamos a utilizar el método de vectores virales para la introducción de genes de interés en células somáticas, ¿cuál de los siguientes virus serían los más apropiados?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Retrovirus",
                        b: "Adenovirus",
                        c: "Herpesvirus",
                        d: "Adenoasociados"
                    },
                    respuesta: "a"
                },
                {
                    id: 2,
                    enunciado: "¿Cuál de las siguientes pruebas de laboratorio pueden ser utilizadas en orden de importancia, si el objetivo es detectar animales con brucelosis bovina, contando con una muestra de suero sanguíneo y una muestra de restos del aborto?",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1.Cultivo in vitro ", "2.PCR", "3.ELISA INDIRECTO", "4.SAT (suero aglutinación en tubo) "],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 1, 4, 3",
                        c: "3, 1, 2, 4",
                        d: "1, 3, 2, 4"
                    },
                    respuesta: "b"
                },
                {
                    id: 3,
                    enunciado: "¿Cuál de las siguientes opciones en la que mejores condiciones asegura para transportar una muestra de leche para el diagnóstico de brucelosis, para que no se interfiera en la identificación del agente causante de la enfermedad?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Temperatura ambiente hasta 12 horas",
                        b: "Refrigeración de 2 a 7 grados centígrados",
                        c: "Temperatura ambiente hasta 6 horas",
                        d: "Congelación por una semana"
                    },
                    respuesta: "b"
                },
                {
                    id: 4,
                    enunciado: "¿En orden de importancia, qué tipo de muestra y qué condiciones se debe asegurar para el diagnóstico de Fiebre Aftosa en bovinos en fase aguda con lesiones visibles, para que no se afecte la identificación del virus a través del uso de la prueba de PCR? (organice de mayor a menor importancia). ",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1.Secreción de la orofaringe a temperatura ambiente hasta 6 horas", "2.Secreción de la orofaringe en refrigeración hasta 12 horas", "3.Aftas o vesículas intactas a temperatura ambiente hasta 6 horas", "4.Aftas o vesículas intactas en refrigeración hasta 6 horas"],
                    },
                    opciones: {
                        a: "1, 2, 4, 3",
                        b: "4, 3, 1, 2",
                        c: "3, 4, 1, 2",
                        d: "2, 4, 3, 1"
                    },
                    respuesta: "b"
                },
                {
                    id: 5,
                    enunciado: "La presencia de espermatozoides con cabeza desprendida, evidenciado en el análisis _______________ del semen, se debe a problemas relacionados a __________________________",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "microscópico - patologías del testículo",
                        b: "macroscópico - deficiencia de testosterona ",
                        c: "microscópico - las vías de conducción del esperma",
                        d: "microscópico – inmadurez del animal "
                    },
                    respuesta: "a"
                },
                {
                    id: 6,
                    enunciado: "Si debemos seleccionar un crioprotector para evitar el daño celular durante la ultra congelación espermática, ¿cuál sería el crioprotector ideal en un protocolo de ultracongelación de velocidad rápida? ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Glicerol",
                        b: "Etilenglicol",
                        c: "Albumina",
                        d: "Leche"
                    },
                    respuesta: "a"
                },
                {
                    id: 7,
                    enunciado: "La transferencia de embriones es un método ampliamente utilizado en bovinos, relacione la enfermedad con la principal muestra a ser utilizada para su diagnóstico:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Diarrea viral bovina", "Rinotraqueitis infecciosa bovina", "Brucelosis ", "Campilobacteriosis"],
                        columna_2: ["Secreción nasal", "Secreción vaginal", "Sangre", "Placenta"]
                    },
                    opciones: {
                        a: "1a, 2b, 4c, 3d",
                        b: "2a, 3b, 4c, d1",
                        c: "1c, 2a, 3d, 4b",
                        d: "4a, 2b, 3c, 1d"
                    },
                    respuesta: "c"
                },
                {
                    id: 8,
                    enunciado: "Que método es el más apropiado para realizar la recolección de semen en cerdos, para realizar la inseminación artificial, tomar en cuenta que esta especie tiene 3 fases de eyaculación:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Vagina artificial",
                        b: "Método manual sin guante",
                        c: "Método manual con guante ",
                        d: "Estimulación de glándulas accesorias "
                    },
                    respuesta: "c"
                },
                {
                    id: 9,
                    enunciado: "Para la elaboración de balanceados en equinos es necesario tomar en cuenta que hay algunas restricciones, a continuación, se enumeran algunas, ¿cuál de ellas es incorrecta? ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "No se debe utilizar proteína de origen animal",
                        b: "No se puede superar el 10% de grasa",
                        c: "No se debe compactar el pellet",
                        d: "No se utilizan granos crudos"
                    },
                    respuesta: "c"
                },
                {
                    id: 10,
                    enunciado: "El uso de antibióticos en la elaboración de los balanceados en aves es una práctica muy común en algunos países para reducir las diarreas, seleccione la opción más apropiada para reemplazarlos: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Usar prebióticos en el balanceado",
                        b: "Usar probióticos en el agua de bebida",
                        c: "Usar ácidos orgánicos en el balanceado",
                        d: "Uso de simbióticos"
                    },
                    respuesta: "d"
                },
                {
                    id: 11,
                    enunciado: "La hipocuprosis es una las carencias más frecuentes en el mundo, indique cuál de los siguientes signos se han observado en bovinos:",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Menor resistencia a infecciones",
                        b: "Disminución en la ganancia de peso",
                        c: "Trastornos reproductivos",
                        d: "Todas las anteriores"
                    },
                    respuesta: "d"
                },
                {
                    id: 12,
                    enunciado: "La transgénesis es una metodología que se está utilizando cada vez con más frecuencia en la investigación humana y animal. ¿Cuál de las siguientes opciones, se adapta mejor a la definición de la transgénesis en animales?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Utilización de un gen de un animal e incorporarlo en el genoma de otro de la misma especie",
                        b: "Incorporación de un gen extraño al genoma de un animal",
                        c: "Manipulación del genoma de un animal ",
                        d: "Cambio del genoma de un animal mediante el uso de la biotecnología"
                    },
                    respuesta: "b"
                },
                {
                    id: 13,
                    enunciado: "Debemos utilizar crioprotectores para evitar el daño celular durante la ultra congelación espermática. ¿Cómo actúa el dimetilsulfoxido (DMSO) cuando es utilizado como crioprotector para conservación de esperma?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Reemplaza el agua intracelular por medio de radicales hidroxilo sin atravesar la membrana",
                        b: "Previene acumulación de electrolitos y forma interacciones electrostáticas con fosfolípidos",
                        c: "Aumenta osmolaridad, deshidrata la célula y forma complejos con iones metálicos",
                        d: "Atraviesa la membrana espermática y desplaza el agua"
                    },
                    respuesta: "d"
                },
                {
                    id: 14,
                    enunciado: "¿Cuál de los siguientes métodos de tinción enumerados a continuación, son los más utilizados para identificar integridad de membranas espermáticas?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Verde rápido/eosina",
                        b: "Zielh Nielsen",
                        c: "Cristal viotela",
                        d: "Coloración Gram"
                    },
                    respuesta: "a"
                },
                {
                    id: 15,
                    enunciado: "¿Cuál de las siguientes pruebas de laboratorio se utiliza para detectar la encefalopatía espongiforme bovina en animales?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "ELISA",
                        b: "PCR",
                        c: "Microscopia",
                        d: "Ninguna"
                    },
                    respuesta: "a"
                },
                {
                    id: 16,
                    enunciado: "¿Cuál de las siguientes pruebas de laboratorio no se utiliza para detectar Tuberculosis bovina en animales?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "ELISA",
                        b: "PCR",
                        c: "Microscopia",
                        d: "Cultivo"
                    },
                    respuesta: "c"
                },
                {
                    id: 17,
                    enunciado: "Seleccione el tipo de sal mineral utilizada en la elaboración de los diluyentes para semen bovino: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Cloruro de potasio",
                        b: "Cloruro de calcio",
                        c: "Cloruro de magnesio",
                        d: "Sulfato de magnesio"
                    },
                    respuesta: "a"
                },
                {
                    id: 18,
                    enunciado: "¿Qué es la involución uterina?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Técnica de reproducción en bovinos",
                        b: "Proceso normal del animal postparto",
                        c: "Proceso degenerativo del útero",
                        d: "Patología uterina"
                    },
                    respuesta: "b"
                },
                {
                    id: 19,
                    enunciado: "De las siguientes bacterias, ¿cuáles son utilizados como probióticos? ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Bacilus vulgaris",
                        b: "Bacilus antraxis",
                        c: "Bifidobacterias spp",
                        d: "Actinobacterias"
                    },
                    respuesta: "c"
                },
                {
                    id: 20,
                    enunciado: "Los ácidos orgánicos son utilizados en la crianza de aves, debido a su efecto benéfico, selección una de las siguientes alternativas descritas a continuación: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Disminución del tamaño del vientre",
                        b: "Mayor viabilidad de los pollos bebé",
                        c: "Aumento del tamaño del huevo",
                        d: "Todas"
                    },
                    respuesta: "b"
                },
                {
                    id: 21,
                    enunciado: "¿Cuál de las siguientes pruebas de laboratorio pueden ser utilizadas en orden de importancia, si el objetivo es detectar animales con Brucelosis bovina, contando con una muestra de suero sanguíneo y una muestra de restos del aborto? ",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Cultivo in vitro", "2. PCR", "3. ELISA INDIRECTO ", "4. SAT (suero aglutinación en tubo)"],
                    },
                    opciones: {
                        a: "1, 2, 3, 4",
                        b: "2, 1, 4, 3",
                        c: "3, 1, 2, 4",
                        d: "1, 3, 2, 4"
                    },
                    respuesta: "b"
                },
                {
                    id: 22,
                    enunciado: "La presencia de espermatozoides con cabeza desprendida, evidenciado en el análisis _________________ del semen, se debe a problemas relacionados a ________________________ ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "microscópico - patologías del testículo",
                        b: "macroscópico - deficiencia de testosterona",
                        c: "microscópico - las vías de conducción del esperma",
                        d: "microscópico – inmadurez del animal "
                    },
                    respuesta: "a"
                },
                {
                    id: 23,
                    enunciado: "¿Qué método es el más apropiado para realizar la recolección de semen en cerdos?, para realizar la inseminación artificial, tomar en cuenta que esta especie tiene tres fases de eyaculación: ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Vagina artificial",
                        b: "Método manual sin guante",
                        c: "Método manual con guante ",
                        d: "Estimulación de glándulas accesorias"
                    },
                    respuesta: "c"
                },
                {
                    id: 24,
                    enunciado: "La transgénesis es una metodología que se está utilizando cada vez con más frecuencia en la investigación humana y animal. ¿Cuál de las siguientes opciones, se adapta mejor a la definición de la transgénesis en animales? ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Utilización de un gen de un animal e incorporarlo en el genoma de otro de la misma especie",
                        b: "Incorporación de un gen extraño al genoma de un animal ",
                        c: "Manipulación del genoma de un animal ",
                        d: "Cambio del genoma de un animal mediante el uso de la biotecnología"
                    },
                    respuesta: "b"
                },
                {
                    id: 25,
                    enunciado: "¿Cuál de las siguientes pruebas de laboratorio no se utiliza para detectar Tuberculosis bovina en animales? ",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "ELISA",
                        b: "PCR",
                        c: "Microscopia",
                        d: "Cultivo"
                    },
                    respuesta: "c"
                },
                {
                    id: 26,
                    enunciado: "Relacione cada método de diagnóstico para Brucelosis bovina con su característica o descripción correspondiente. ",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Cultivo bacteriológico", "Rosa de Bengala", "Milk Ring Test (MRT)", "PCR", "ELISA competitivo"],
                        columna_2: ["Se añade al mismo tiempo la muestra que contiene el antígeno a medir y el anticuerpo marcado con una enzima", "Prueba indirecta que detecta anticuerpos unidos a glóbulos de grasa de la leche, formando un anillo en la capa superior.", "Método directo que permite el aislamiento del agente etiológico del género Brucella spp.", "Método directo que amplifica fragmentos específicos del ADN de Brucella spp.", "Prueba rápida en placa que detecta anticuerpos IgG e IgM mediante una reacción antígeno anticuerpo."]
                    },
                    opciones: {
                        a: "1c, 2e, 3b, 4d, 5a",
                        b: "1a, 2d, 3b, 4e, 5c",
                        c: "1b, 2a, 3c, 4d, 5e",
                        d: "1e, 2c, 3a, 4d, 5b"
                    },
                    respuesta: "a"
                },
                {
                    id: 27,
                    enunciado: "Durante el proceso de aspiración folicular en biotecnología reproductiva, ¿cuál es el orden correcto de las etapas técnicas para la aspiración de ovocitos desde ovarios intactos en el laboratorio? ",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["1. Identificación y selección de folículos visibles y aptos para aspiración.", "2. Lavado y preparación del material y medio adecuado para la recolección.", "3. Recuperación y búsqueda de los ovocitos en el medio colectado bajo estereomicroscopio.", "4. Aspiración cuidadosa del contenido folicular mediante el sistema de vacío controlado."],
                    },
                    opciones: {
                        a: "1,4,2,3",
                        b: "1,2,3,4",
                        c: "3,1,2,4",
                        d: "2,1,4,3"
                    },
                    respuesta: "d"
                },
                {
                    id: 28,
                    enunciado: " En las técnicas de transgénesis utilizadas en la producción animal, la técnica que presenta como principal inconveniente la integración aleatoria de copias del gen exógeno en el genoma del huésped es ________________________________.",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Vectores virales",
                        b: "Transferencia de genes mediada por esperma ",
                        c: "Microinyección pronuclear",
                        d: "Clonación"
                    },
                    respuesta: "c"
                },
                {
                    id: 29,
                    enunciado: "Durante la extracción de ADN a partir de una muestra de sangre bovina, se utiliza EDTA en la etapa de lisis celular. ¿Cuál es la función principal de este compuesto en dicho proceso?",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "Actuar como detergente para romper las membranas celulares.",
                        b: "Inhibir las nucleasas al actuar como un agente quelante de iones metálicos como el Mg²⁺ y Ca²⁺.",
                        c: "Facilitar la precipitación del ADN mediante la neutralización de cargas.",
                        d: "Proveer un medio isotónico para mantener la integridad de los glóbulos rojos."
                    },
                    respuesta: "b"
                },
                {
                    id: 30,
                    enunciado: "Relacione cada medida de bioseguridad interna con su finalidad o descripción correspondiente dentro de un sistema de producción lechera:",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["Establos separados para animales jóvenes y adultos", "Evitar movilidad de animales a la finca", "Control de acceso vehicular", "Cambios de ropa y equipo entre establos adecuados", "Aislamiento de animales enfermos", "Controlar el contacto con animales silvestres "],
                        columna_2: ["Minimiza la entrada de agentes infecciosos a través de vehículos contaminados.", "Reduce el riesgo de introducción de enfermedades externas", "Evita la transmisión de enfermedades desde fauna silvestre al hato.", "Previene el contagio y facilita el manejo sanitario individual.", "Evita la transmisión de patógenos entre grupos etarios con distinta inmunidad.", "Disminuye la diseminación de patógenos entre áreas de producción."]
                    },
                    opciones: {
                        a: "1–e, 2–b, 3–a, 4–f, 5–d, 6–c",
                        b: "1–c, 2–b, 3–a, 4–d, 5–e, 6–f",
                        c: "1–b, 2–c, 3–a, 4–f, 5–d, 6–e",
                        d: "1–a, 2–b, 3–c, 4–d, 5–f, 6–e"
                    },
                    respuesta: "a"
                },
            ],
        },
        {
            nombre: "Pendiente",
            preguntas: [
                {
                    id: 77,
                    enunciado: "",
                    tipo: "seleccion_simple",
                    opciones: {
                        a: "",
                        b: "",
                        c: "",
                        d: ""
                    },
                    respuesta: ""
                },
                {
                    id: 88,
                    enunciado: "",
                    tipo: "emparejamiento",
                    listas: {
                        columna_1: ["", "", "", ""],
                        columna_2: ["", "", "", ""]
                    },
                    opciones: {
                        a: "",
                        b: "",
                        c: "",
                        d: ""
                    },
                    respuesta: ""
                },
                {
                    id: 99,
                    enunciado: "",
                    tipo: "ordenamiento",
                    listas: {
                        columna_1: ["", "", "", ""],
                    },
                    opciones: {
                        a: "",
                        b: "",
                        c: "",
                        d: ""
                    },
                    respuesta: ""
                },
            ],
        }
    ]
};
