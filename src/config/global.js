export default {
  global: {
    componenteFormativo: 'Estudio del mercado y su segmentación',
    descripcionCurso:
      'El estudio de mercado juega un papel fundamental como motor de la economía y como impulsor de las organizaciones. Tanto para empresas innovadoras como para aquellas ya establecidas, la realización de investigaciones de mercado es una práctica cotidiana necesaria para mantenerse a la vanguardia de las tendencias y los cambios tecnológicos que demanda el mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Estudio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables de análisis',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Instrumentos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Segmentación',
            hash: 't_1_4',
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
        download: 'downloads/CFA_14_123500_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Variables de Análisis',
      referencia:
        'Benítez, A. Guamán, B. Maza, R. & Solís, G. (2020). Importancia del branding para consolidar el posicionamiento de una marca corporativa. Universidad Layca Eloy Alfaro de Manabí. Ecuador.',
      tipo: 'Articulo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7847135',
    },
    {
      tema: '1.2 Variables de Análisis',
      referencia:
        'Alzate, A. Carvajal, L. & Ceballos, Y. (2017). Simulación de la experiencia del cliente en puntos de atención de un sistema de transporte masivo empleando Dinámica de Sistemas. Revista Entre Ciencia e Ingeniería. Volumen NO. 11. Universidad de Antioquia.',
      tipo: 'Articulo',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1909-83672017000100073',
    },
    {
      tema: '1.2 Variables de Análisis',
      referencia:
        'El viaje del Cliente. (2022). Customer experience o Experiencia de Cliente. Guía para aplicarlo a tu empresa.',
      tipo: 'Articulo',
      link:
        'https://elviajedelcliente.com/academia/customer-experience-experiencia-cliente/',
    },
    {
      tema: '1.2 Variables de Análisis',
      referencia:
        'Olamendi, G. (2012). Diccionario de marketing ¿Qué es el Branding? Madrid: CECSA.',
      tipo: 'Articulo',
      link: 'https://citysem.es/que-es/branding/',
    },
  ],
  glosario: [
    {
      termino: '<i>Branding</i>',
      significado:
        'Es una herramienta del <i>marketing</i> que funciona como una planificación estratégica que comprende de forma general la creación, manejo, posicionamiento y funcionamiento de una marca.',
    },
    {
      termino: 'B2B',
      significado:
        'Modelo de negocio que consiste en los servicios que una compañía entrega a otra con el objetivo de mejorar las ventas',
    },
    {
      termino: 'B2C',
      significado:
        'Significa de modelo de negocio a consumidor, es un tipo de práctica existente en el ámbito del <i>marketing</i>.',
    },
    {
      termino: 'Capacidad Instalada',
      significado:
        'Es el potencial de producción o volumen máximo de producción que una empresa en particular, unidad, departamento o sección; puede lograr durante un período de tiempo determinado, teniendo en cuenta todos los recursos que tienen disponibles, sea los equipos de producción, instalaciones, recursos humanos, tecnología, experiencia/conocimientos, etc.',
    },
    {
      termino: 'Capacidad Instalada Ociosa',
      significado:
        'Es producida por la reducción de la producción, cuando hay situaciones de recesión o de crisis el porcentaje de la capacidad instalada utilizada tiende a disminuir, aumentando la capacidad ociosa, es decir, cuando no se está optimizando la capacidad productiva en planta.',
    },
    {
      termino: 'Cuota de Mercado',
      significado:
        'Distribución del consumo entre los diferentes consumidores del negocio. Conocida también como posición en el mercado.',
    },
    {
      termino: 'Experiencia del Cliente',
      significado:
        'Es la percepción que un cliente tiene de todas las interacciones o contacto que mantiene con una marca.',
    },
    {
      termino: 'Grado de Satisfacción',
      significado:
        'Grado de cumplimiento de las expectativas de un cliente al recibir un producto o servicio.',
    },
    {
      termino: 'Investigación de Mercado',
      significado:
        'Técnica que sirve para recopilar datos de cualquier aspecto que se desee conocer para después poder interpretarlos y al final hacer uso de ellos para una correcta toma de decisiones.',
    },
    {
      termino: '<i>Retail</i>',
      significado: 'Se caracteriza por vender al por menor o por unidad.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Es la clasificación que se realiza a la población o mercado objetivo con el fin de identificar los clientes que comparten unas como nicho de mercado basado en variables edad, sexo, nivel económico, ubicación geográfica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, J. (2020). Técnicas e Instrumentos de Investigación Científica. Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica (CONCYTEC). Enfoques Consulting EIRL. Perú.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w26118w/Tecnicas%20e%20instrumentos.pdf',
    },
    {
      referencia:
        'Fernández. F. (2021). Guía para la Elaboración de un Estudio de Mercado.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=yuskDwAAQBAJ&oi=fnd&pg=PA4&dq=Estudio+de+Mercado&ots=fHthfex6JZ&sig=AvwQtB19NklFQM9kQipISj5VpVQ&redir_esc=y#v=onepage&q=Estudio%20de%20Mercado&f=false',
    },
    {
      referencia:
        'Observatorio Económico Social UNR. (2015). Utilización de la Capacidad Instalada en la Industria.',
      link:
        'https://observatorio.unr.edu.ar/utilizacion-de-la-capacidad-instalada-en-la-industria-2/',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2009). Investigación de Mercados. Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69104',
    },
    {
      referencia: 'Questionpro. (s.f.). ¿Qué es un análisis de mercado?',
      link: 'https://www.questionpro.com/blog/es/analisis-de-mercado/',
    },
    {
      referencia:
        'Sapag, N, Sapag, R & Sapag, J. (2008). Preparación y Evaluación de Proyectos (6ª Edición). Universidad de Chile.',
      link:
        'http://repositorio.uasb.edu.bo:8080/bitstream/54000/1243/1/Sapag-proyectos%206ta%20edici%C3%B3n.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Alexandra OrejarenaBarrios',
          cargo: 'Diseño Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distro Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría metodológica y evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
