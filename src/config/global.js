export default {
  global: {
    componenteFormativo: 'Desarrollo e integración de la animación',
    descripcionCurso:
      'La animación digital es utilizada en la producción audiovisual convirtiéndose en una herramienta narrativa de interés comercial. Su uso se expande desde los comerciales publicitarios, los videojuegos y el cine. En este material se explican las técnicas de animación más utilizadas y las herramientas digitales para lograr la producción general de animaciones en 2D y 3D.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proyecto de animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Animación digital 2D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Dibujo a mano alzada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Photoshop',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Illustrator',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'After Effects',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Animación 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Composición digital y VFX ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Angulo, S., M. (2019). Los doce principios de animación. ',
      link:
        'https://www.tesseractspace.com/blog/los-12-principios-de-animacion/',
    },
    {
      referencia: 'Cortés, J. (2021). Técnicas de composición digital en VFX. ',
      link: 'https://www.notodoanimacion.es/tecnicas-de-composicion-digital/',
    },
    {
      referencia:
        'Torres, A. (2021). ¿Qué es la animación 3D y qué tipos existen?',
      link:
        'https://www.esdesignbarcelona.com/actualidad/animacion/que-es-la-animacion-3d-y-que-tipos-existen',
    },
  ],
  glosario: [
    {
      termino: 'Digitalización ',
      significado:
        'proceso de transformar procesos análogos, objetos o imágenes físicas al mundo digital (informático).',
    },
    {
      termino: 'Interfaz',
      significado:
        'o interfaz de usuario, es el medio con que el usuario interactúa con los programas de computación, comprende todos los puntos de contacto entre el usuario y el equipo, esto puede incluir pantallas de visualización, teclados, un mouse y la apariencia de un escritorio',
    },
    {
      termino: 'Panel',
      significado:
        'en informática hace referencia a la subdivisión de la interfaz de usuario, esta puede estar dividida en secciones que contienen herramientas o en dónde se realizan procesos específicos para cada uno de los programas.',
    },
    {
      termino: 'Renderización',
      significado:
        'proceso que realiza el programa de diseño, ya sea de video, ilustración o fotografía o de modelado 3D para generar cada uno de estos elementos al momento de querer verificar o exportar el trabajo final.',
    },
    {
      termino: 'Usuario',
      significado:
        'en informática hace referencia a la persona que utiliza un software o programa de cómputo.',
    },
  ],
  complementario: [
    {
      texto:
        'Gallardo, Y. (9 de julio de 2018). Curso de 3DS Max - completo. [Video] YouTube. https://www.youtube.com/watch?v=h15X27PbQ0k&ab_channel=YoneyGallardo',
      tipo: 'Video',
      link: 'https://youtu.be/h15X27PbQ0k',
    },
    {
      texto:
        'Villanueva, J. (29 de mayo de 2020). ¡Video animado para tu negocio! Tutorial - After Effects. [Video] YouTube. https://www.youtube.com/watch?v=yB2paQihPVE&ab_channel=Jes%C3%BAsVillanueva%3A%3ATutorialesparaCreativos',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yB2paQihPVE&ab_channel=Jes%C3%BAsVillanueva%3A%3ATutorialesparaCreativos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Sánchez Rengifo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
