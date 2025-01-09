/*******************************************
 * EJEMPLO de Estructura con 5 preguntas
 * por categoría y dificultad (en total 45).
 * Debajo de este ejemplo, se incluye un link
 * con el bloque de 20 preguntas por bloque.
 ********************************************/
const questionsData = {
  SQL: {
    Baja: [
      {
        question: "¿Qué significa SQL?",
        options: [
          "Structured Query Language",
          "System Query Link",
          "Standard Quality Layout",
          "Storage Query Logic"
        ],
        correct: 0
      },
      {
        question: "¿Cuál comando se usa para insertar filas en una tabla?",
        options: [
          "INSERT INTO",
          "ADD ROW",
          "WRITE ROW",
          "INSERT ROW"
        ],
        correct: 0
      },
      {
        question: "¿Qué palabra clave se usa para filtrar resultados?",
        options: ["WHERE", "IF", "HAVING", "FILTER"],
        correct: 0
      },
      {
        question: "¿Qué comando elimina filas de una tabla?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        correct: 0
      },
      {
        question: "¿Cuál es la sentencia para crear una tabla?",
        options: [
          "CREATE TABLE",
          "NEW TABLE",
          "MAKE TABLE",
          "BUILD TABLE"
        ],
        correct: 0
      }
    ],
    Media: [
      {
        question: "¿Cuál comando modifica la estructura de una tabla?",
        options: [
          "ALTER TABLE",
          "UPDATE TABLE",
          "MODIFY TABLE",
          "CHANGE TABLE"
        ],
        correct: 0
      },
      {
        question: "¿Qué hace la sentencia TRUNCATE TABLE?",
        options: [
          "Elimina todas las filas sin borrar la tabla",
          "Elimina la tabla",
          "Renombra la tabla",
          "Crea un respaldo de la tabla"
        ],
        correct: 0
      },
      {
        question: "¿Para qué se usa la cláusula HAVING?",
        options: [
          "Para filtrar resultados de una agrupación",
          "Para unir dos tablas",
          "Para ordenar resultados",
          "Para eliminar duplicados"
        ],
        correct: 0
      },
      {
        question: "¿Cuál de estos es un tipo de dato válido en SQL?",
        options: ["VARCHAR", "STRINGTYPE", "CHARACTERSET", "DATAGROUP"],
        correct: 0
      },
      {
        question: "¿Cuál operador se usa para buscar patrones?",
        options: ["LIKE", "MATCH", "PATTERN", "FIND"],
        correct: 0
      }
    ],
    Alta: [
      {
        question: "¿Qué comando crea una vista en SQL?",
        options: [
          "CREATE VIEW",
          "CREATE TABLE VIEW",
          "CREATE VISTA",
          "SELECT VIEW"
        ],
        correct: 0
      },
      {
        question: "¿Qué hace la cláusula WITH ROLLUP en GROUP BY?",
        options: [
          "Genera subtotales y totales",
          "Elimina duplicados",
          "Cambia el orden de la agrupación",
          "Combina datos de varias tablas"
        ],
        correct: 0
      },
      {
        question: "¿Cuál es la diferencia entre UNION y UNION ALL?",
        options: [
          "UNION elimina duplicados, UNION ALL no",
          "UNION combina columnas, UNION ALL combina filas",
          "UNION compara filas, UNION ALL compara columnas",
          "No hay diferencia"
        ],
        correct: 0
      },
      {
        question: "¿Qué función permite unir cadenas en SQL?",
        options: ["CONCAT()", "MERGE()", "UNION()", "LINK()"],
        correct: 0
      },
      {
        question: "¿Qué es un subquery correlacionado?",
        options: [
          "Una subconsulta que depende de la consulta externa",
          "Una consulta independiente",
          "Un tipo de JOIN",
          "Un procedimiento almacenado"
        ],
        correct: 0
      }
    ]
  },
  PowerBI: {
    Baja: [
      {
        question: "¿Qué es Power BI?",
        options: [
          "Una herramienta de visualización de datos de Microsoft",
          "Un motor de base de datos",
          "Un lenguaje de programación",
          "Un sistema operativo"
        ],
        correct: 0
      },
      {
        question: "¿Qué extensión de archivo se asocia con Power BI Desktop?",
        options: [".pbix", ".pbi", ".pbidesktop", ".pbitool"],
        correct: 0
      },
      {
        question: "¿Cómo se llama el lenguaje de consultas en Power BI?",
        options: ["M", "DAX", "SQL", "PBI-Query"],
        correct: 0
      },
      {
        question: "¿Para qué sirve Power Query en Power BI?",
        options: [
          "Para extraer y transformar datos",
          "Para crear paneles",
          "Para diseñar medidas",
          "Para publicar informes"
        ],
        correct: 0
      },
      {
        question: "¿Qué es un Dashboard en Power BI?",
        options: [
          "Una vista interactiva de visualizaciones",
          "Un script de carga de datos",
          "Un archivo de configuración",
          "Un tipo de base de datos relacional"
        ],
        correct: 0
      }
    ],
    Media: [
      {
        question: "¿Qué es DAX en Power BI?",
        options: [
          "Un lenguaje de expresiones para crear cálculos",
          "Un conector de datos en la nube",
          "Un tipo de gráfico",
          "Un módulo de administración de reportes"
        ],
        correct: 0
      },
      {
        question: "¿Cuál objeto se utiliza para mostrar datos de una tabla en Power BI?",
        options: [
          "Visual de tabla",
          "Visual de matriz",
          "Visual de tarjeta",
          "Visual de dispersión"
        ],
        correct: 0
      },
      {
        question: "¿Qué es la función CALCULATE() en DAX?",
        options: [
          "Modifica el contexto de filtro para evaluar una expresión",
          "Crea una tabla temporal de valores únicos",
          "Convierte texto a números",
          "Agrupa datos por una columna"
        ],
        correct: 0
      },
      {
        question: "¿Qué se entiende por 'Relaciones' en Power BI?",
        options: [
          "Enlaces entre tablas basados en columnas clave",
          "Un tipo de visualización avanzada",
          "Parámetros para filtrar datos en un dashboard",
          "Un mecanismo para programar scripts M"
        ],
        correct: 0
      },
      {
        question: "¿Cuál es el objetivo de la vista 'Modelo' en Power BI Desktop?",
        options: [
          "Configurar y ver las relaciones entre tablas",
          "Crear fórmulas en lenguaje M",
          "Publicar el informe en la nube",
          "Construir paneles interactivos"
        ],
        correct: 0
      }
    ],
    Alta: [
      {
        question: "¿Qué hace la función ALL() en DAX?",
        options: [
          "Elimina todos los filtros en el contexto actual",
          "Combina varias tablas en una",
          "Devuelve únicamente las filas con valores no nulos",
          "Realiza una suma acumulativa"
        ],
        correct: 0
      },
      {
        question: "¿Para qué sirve la función RANKX() en DAX?",
        options: [
          "Asigna un ranking a cada fila en una tabla",
          "Divide una columna en subcolumnas",
          "Actualiza el modelo de datos en la nube",
          "Crea un gráfico de dispersión"
        ],
        correct: 0
      },
      {
        question: "¿Qué es la vista 'Performance Analyzer' en Power BI Desktop?",
        options: [
          "Una herramienta para medir el rendimiento de las visuales",
          "Un lugar para editar consultas M",
          "Un panel para crear roles de seguridad",
          "Una extensión para Power Query"
        ],
        correct: 0
      },
      {
        question: "¿Qué es una métrica KPI en Power BI?",
        options: [
          "Un indicador de rendimiento con valor actual, meta y estado",
          "Un tipo de tabla derivada",
          "Una forma de pivotear datos en M",
          "Un lenguaje de scripting avanzado"
        ],
        correct: 0
      },
      {
        question: "¿Qué permite hacer la característica 'Row-level Security' (RLS)?",
        options: [
          "Restringir los datos visibles para cada usuario",
          "Crear informes de auto-servicio",
          "Exportar los datos a Excel",
          "Definir una columna como clave primaria"
        ],
        correct: 0
      }
    ]
  },
  AD: {
    Baja: [
      {
        question: "¿Qué es el Análisis de Datos (AD)?",
        options: [
          "Proceso de inspeccionar y transformar datos para tomar decisiones",
          "Un lenguaje de programación",
          "Un software de hoja de cálculo",
          "Una técnica para diseñar bases de datos"
        ],
        correct: 0
      },
      {
        question: "¿Cuál es el primer paso en el Análisis de Datos?",
        options: [
          "Definir la pregunta o problema",
          "Crear un dashboard",
          "Formatear las tablas",
          "Publicar en un servidor"
        ],
        correct: 0
      },
      {
        question: "¿Qué significa la sigla KPI?",
        options: [
          "Key Performance Indicator",
          "Key Primary Index",
          "Keep Problem Inside",
          "Known Program Interaction"
        ],
        correct: 0
      },
      {
        question: "¿Cuál de estos es un objetivo común en el Análisis de Datos?",
        options: [
          "Identificar patrones y tendencias",
          "Cambiar la estructura de una tabla",
          "Definir claves foráneas",
          "Exportar datos a CSV"
        ],
        correct: 0
      },
      {
        question: "¿Qué es un 'dataset'?",
        options: [
          "Un conjunto de datos relacionados",
          "Una consulta SQL",
          "Una visualización tabular",
          "Un archivo de configuración"
        ],
        correct: 0
      }
    ],
    Media: [
      {
        question: "¿Qué es un ETL en Análisis de Datos?",
        options: [
          "Proceso de Extracción, Transformación y Carga de datos",
          "Una técnica de minería de datos",
          "Un comando para filtrar registros",
          "Un software de visualización"
        ],
        correct: 0
      },
      {
        question: "¿Qué se entiende por 'minería de datos'?",
        options: [
          "Descubrir patrones en grandes conjuntos de datos",
          "Eliminar registros duplicados",
          "Importar datos de una API",
          "Crear una base de datos relacional"
        ],
        correct: 0
      },
      {
        question: "¿Para qué sirve un análisis de regresión?",
        options: [
          "Estimar la relación entre variables y predecir valores",
          "Eliminar valores atípicos",
          "Crear indicadores de desempeño",
          "Ordenar datos alfabéticamente"
        ],
        correct: 0
      },
      {
        question: "¿Qué es un 'data warehouse'?",
        options: [
          "Un repositorio central de datos integrado y orientado a temas",
          "Un sistema de control de versiones",
          "Una herramienta de visualización",
          "Un proceso de limpieza de datos"
        ],
        correct: 0
      },
      {
        question: "¿Qué es el 'Big Data'?",
        options: [
          "Conjuntos de datos tan grandes o complejos que requieren herramientas especializadas",
          "Una simple hoja de cálculo",
          "Datos perfectamente estructurados en tablas pequeñas",
          "Un reporte con solo 10 filas"
        ],
        correct: 0
      }
    ],
    Alta: [
      {
        question: "¿Qué es el 'machine learning' aplicado al Análisis de Datos?",
        options: [
          "Modelos que aprenden de los datos para hacer predicciones",
          "Un proceso manual de clasificación",
          "Un lenguaje de scripting para bases de datos",
          "Un método para crear informes en PDF"
        ],
        correct: 0
      },
      {
        question: "¿Qué es un 'clúster' en el contexto de análisis de datos?",
        options: [
          "Un agrupamiento de datos similares",
          "Una función para contar valores únicos",
          "Un índice de base de datos",
          "Un tablero de visualización"
        ],
        correct: 0
      },
      {
        question: "¿En qué consiste el aprendizaje supervisado?",
        options: [
          "Modelos entrenados con datos etiquetados",
          "Procesos que no requieren datos etiquetados",
          "Un proceso que no necesita validación",
          "Una técnica para agrupar datos similares"
        ],
        correct: 0
      },
      {
        question: "¿Qué es un análisis de componentes principales (PCA)?",
        options: [
          "Una técnica para reducir la dimensionalidad de los datos",
          "Una forma de unir dos tablas",
          "Un lenguaje de consulta",
          "Una metodología para desplegar informes"
        ],
        correct: 0
      },
      {
        question: "¿Qué significa 'overfitting' en un modelo de ML?",
        options: [
          "El modelo memoriza demasiado los datos de entrenamiento y no generaliza bien",
          "El modelo se entrena con datos insuficientes",
          "El modelo no logra patrones",
          "El modelo trabaja con datos numéricos únicamente"
        ],
        correct: 0
      }
    ]
  }
};
