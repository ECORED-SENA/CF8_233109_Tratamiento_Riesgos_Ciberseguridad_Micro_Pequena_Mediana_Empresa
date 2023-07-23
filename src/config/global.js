export default {
  global: {
    componenteFormativo: 'Evaluación de las estrategias de seguridad',
    descripcionCurso:
      'Las estrategias de ciberseguridad implementadas en una organización, deben siempre estar acordes a las necesidades del mercado, por lo que se requiere permanentemente de evaluaciones que permitan tomar decisiones de cambio, actualización o simplemente confirmar la efectividad de la estrategia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características y aplicación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de recopilación de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Recomendaciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Hacking</em> Ético',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Consideraciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mejoramiento continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Socialización de resultados del tratamiento de riesgo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Informe técnico de hallazgos y recomendaciones',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/233109_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bitsight. (2019). <em>The Importance of Continuous Improvement in Security Performance Management</em>.',
      link:
        'https://www.bitsight.com/blog/importance-continuous-improvement-security-performance-management',
    },
    {
      referencia: 'Eccouncil (s.f). <em>What is Ethical Hacking?</em>',
      link: 'https://www.eccouncil.org/ethical-hacking/',
    },
    {
      referencia:
        'GlobalSign Blog. (2022). <em>Comment (et pourquoi) mener des audits de cybersécurité dans votre entreprise</em>.',
      link:
        'https://www.globalsign.com/fr/blog/comment-et-pourquoi-mener-des-audits-de-cybersecurite',
    },
    {
      referencia:
        'Howard Poston. (2019) <em>Information Collection in Cybersecurity</em>.',
      link:
        'https://resources.infosecinstitute.com/topic/information-collection-in-cybersecurity/',
    },
    {
      referencia:
        'Incibe. (s. f.). <em>Glosario de términos de ciberseguridad</em>. Gobierno de España.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_glosario_ciberseguridad_2021.pdf',
    },
    {
      referencia:
        'Ingrid Horvath (2022). <em>The Five Phases of Ethical Hacking</em>. ',
      link: 'https://www.invensislearning.com/blog/phases-of-ethical-hacking/',
    },
    {
      referencia:
        'Mon-infra. (s. f.). <em>Quelles sont les étapes d’un audit informatique?</em>',
    },
    {
      referencia:
        'Premier IT Solution. (2022). <em>External IT Security Audit - What It Is and Why You Need On</em>.',
      link:
        'https://securityboulevard.com/2022/08/what-is-a-cybersecurity-audit-and-why-is-it-important/',
    },
    {
      referencia: 'Synopsys. (2022). <em>Ethical Hacking</em>.',
      link: 'https://www.synopsys.com/glossary/what-is-ethical-hacking.html',
    },
    {
      referencia:
        'Zevenet. (2021). <em>10 Importance of Information Security Audit</em>.',
      link:
        'https://www.zevenet.com/blog/10-importance-of-information-security-audit/',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría de seguridad',
      significado:
        'consiste en el análisis y gestión de sistemas llevado a cabo por profesionales en tecnologías de la información (TI) principalmente para identificar, enumerar y describir las diversas vulnerabilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones, servidores o aplicaciones.',
    },
    {
      termino: 'Agujero de seguridad',
      significado:
        'fallo en un sistema de información que se puede explotar para violar la seguridad del sistema.',
    },
    {
      termino: '<em>Adware</em>',
      significado:
        '<em>software</em> que se apoya en anuncios (normalmente para financiarse) como parte del propio programa. En algunos casos se les considera <em>malware</em>. Es común en las versiones gratuitas en las aplicaciones.',
    },
    {
      termino: 'Amenaza',
      significado:
        'circunstancia desfavorable que puede ocurrir y que cuando sucede tiene consecuencias negativas sobre los activos provocando su indisponibilidad, funcionamiento incorrecto o pérdida de valor.',
    },
    {
      termino: 'Análisis de riesgos',
      significado:
        'proceso que comprende la identificación de activos de información, sus vulnerabilidades y las amenazas a los que se encuentran expuestos, así como la probabilidad de ocurrencia y el impacto de las mismas para determinar los controles adecuados para tratar el riesgo.',
    },
    {
      termino: '<em>Antispyware</em>',
      significado:
        'herramienta de <em>software</em> diseñada para detectar y eliminar programas maliciosos del tipo <em>spyware</em> cuyo objetivo es espiar y obtener de forma sigilosa información personal presente en el dispositivo sin consentimiento del usuario.',
    },
    {
      termino: '<em>Backup</em>',
      significado:
        'copia de seguridad que se realiza sobre ficheros o aplicaciones contenidas en un ordenador con la finalidad de recuperar los datos en el caso de que el sistema de información sufra daños o pérdidas accidentales de los datos almacenados.',
    },
    {
      termino: 'Biometría',
      significado:
        'método de reconocimiento de personas basado en sus características fisiológicas (huellas dactilares, retinas, iris, cara, etc.) o de comportamiento (firma, forma de andar, tecleo, etc.).',
    },
    {
      termino: '<em>Botnet</em>',
      significado:
        'conjunto de ordenadores (denominados <em>bots</em>) controlados remotamente por un atacante que pueden ser utilizados en conjunto para realizar actividades maliciosas como envío de spam, ataques de DDOS, etc.',
    },
    {
      termino: 'Captcha',
      significado:
        'acrónimo en inglés de <em>Completely Automated Public Turing Test To Tell Computers and Humans Apart</em>; en español, prueba de <em>turing</em> completamente automática y pública para diferenciar ordenadores de humanos, es un tipo de medida de seguridad que consiste en la realización de pruebas desafío-respuesta controladas por máquinas que sirven para determinar cuándo el usuario es un humano o un <em>bot</em> según la respuesta a dicho desafío.',
    },
    {
      termino: 'Cortafuegos',
      significado:
        'la funcionalidad básica de un cortafuego es asegurar que todas las comunicaciones entre la red e internet se realicen conforme a las políticas de seguridad de la organización o corporación.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'capacidad de un servicio, un sistema o una información, a ser accesible y utilizable por los usuarios o procesos autorizados cuando estos lo requieran.',
    },
    {
      termino: 'Gestión de incidentes',
      significado:
        'listado de procedimientos previamente documentados sobre los pasos a seguir en caso de detectar una amenaza de ciberseguridad en la empresa.',
    },
  ],
  complementario: [
    {
      tema: 'Pruebas de Penetración',
      referencia:
        'Mike James (2022). <em>Ethical hacking (also referred to as white hat hacking) has become an essential way for businesses to identify and address cybersecurity exposures</em>. Stay Safe Online.',
      tipo: 'Página Web',
      link:
        'https://staysafeonline.org/cybersecurity-for-business/how-can-ethical-hacking-be-ethical/#:~:text=Ethical%20hacking%20is%20always%20performed,damage%20and%20disruption%20to%20businesses',
    },
    {
      tema: 'Técnicas en la Auditoría',
      referencia:
        'Currentware. (2022). 7 <em>Tips for Passing Your Next Cybersecurity Audit (Meet Compliance)</em>. Currentware.',
      tipo: 'Página Web',
      link: 'https://www.currentware.com/blog/it-security-audit-tips/',
    },
    {
      tema: 'Características de una buena auditoria',
      referencia:
        'Immunebytes. (2022). <em>Características de un buen auditor de seguridad cibernética</em>. Immunebytes.',
      tipo: 'Página Web',
      link: 'https://www.immunebytes.com/blog/traits-cyber-security-auditor/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polánco Muñoz ',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
