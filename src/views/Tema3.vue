<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Animación 3D
    .row.mb-5.align-items-center
      .col-lg-6: img(src="@/assets/curso/img48.svg")(data-aos= "slide-right")
      .col-lg-6
        p La animación 3D consiste en dar vida a objetos que se pueden mover y girar en un espacio tridimensional, para poder realizarla se utilizan softwares de animación especializados que permiten modelarlos o esculpirlos de manera digital. Los animadores o diseñadores pueden generar objetos o personajes que dotan de personalidad propia con el fin de contar una historia. Este tipo de animación es utilizada en un gran número de sectores comerciales o en muchos proyectos audiovisuales como los anuncios publicitarios, videojuegos, cine, realidad virtual, entre muchos otros.
    p.mb-5 Los programas más utilizados en la industria en general son: 
    .row.justify-content-center.mb-5
      .col-lg-2.mb-4(data-aos="zoom-in-up")
        img.mb-3.m-auto(src="@/assets/curso/img49.jpg" style="width: 190px")
        h4.text-center Autodesk 3D Max
      .col-lg-2.mb-4(data-aos="zoom-in-up")
        img.mb-3.m-auto(src="@/assets/curso/img50.jpg" style="width: 190px")
        h4.text-center Autodesk Maya
      .col-lg-2.mb-4(data-aos="zoom-in-up")
        img.mb-3.m-auto(src="@/assets/curso/img51.jpg" style="width: 190px")
        h4.text-center Blender
      .col-lg-2.mb-4(data-aos="zoom-in-up")
        img.mb-3.m-auto(src="@/assets/curso/img52.jpg" style="width: 190px")
        h4.text-center Cinema 4D
    p.mb-5 Especialmente, Autodesk 3DS Max, software de animación 3D creado por Autodesk, es uno de los programas más utilizados en la industria de los videojuegos, anuncios de televisión, en la arquitectura o en el cine. 
    .row.mb-5.justify-content-center
      .col-lg-7
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p Considerando que este programa tiene cierto nivel de complejidad alto, en el material complementario se encuentra un “CURSO DE 3DS MAX - COMPLETO” en donde se realiza la introducción a las principales herramientas del programa a través de un conocimiento general de la interfaz. Se recomienda consultarlo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
