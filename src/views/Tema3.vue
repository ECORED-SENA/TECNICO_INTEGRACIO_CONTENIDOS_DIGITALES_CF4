<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Animación 3D
    .row.mb-5.align-items-center
      .col-lg-6: img(src="@/assets/curso/img48.svg")
      .col-lg-6
        p La animación 3D consiste en dar vida a objetos que se pueden mover y girar en un espacio tridimensional, para poder realizarla se utilizan softwares de animación especializados que permiten modelarlos o esculpirlos de manera digital. Los animadores o diseñadores pueden generar objetos o personajes que dotan de personalidad propia con el fin de contar una historia. Este tipo de animación es utilizada en un gran número de sectores comerciales o en muchos proyectos audiovisuales como los anuncios publicitarios, videojuegos, cine, realidad virtual, entre muchos otros.
    
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
