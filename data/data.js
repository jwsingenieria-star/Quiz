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
                    respuesta: "d"
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
                    id: 2,
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
                    id: 3,
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
                    id: 4,
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
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
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
                    id: 9,
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
                {
                    id: 10,
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
                {
                    id: 11,
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
                {
                    id: 12,
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
                {
                    id: 13,
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
                    id: 14,
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
                    id: 15,
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
                    id: 16,
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
                    id: 17,
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
                {
                    id: 18,
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
                {
                    id: 20,
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
                {
                    id: 21,
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
                    id: 22,
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
                    id: 23,
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
                    id: 24,
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
                    id: 25,
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
                {
                    id: 26,
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
                    id: 27,
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
                    id: 28,
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
                    id: 30,
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
