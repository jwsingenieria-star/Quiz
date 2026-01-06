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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    respuesta: ""
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
                    id: 18,
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
                    id: 19,
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
                    id: 20,
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
                    id: 21,
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
                    id: 29,
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
            ]
        }
    ]
};
