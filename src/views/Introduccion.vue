<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center
      .col-lg-6
        .cajon-b.color-secundario.abajo-derecha.p-3.mb-5
          p.mb-0 La animación es considerada una 
            b “ilusión óptica” 
            |en la que se da la sensación de movimiento a imágenes, dibujos u objetos. Hay varias técnicas que van desde la tradicional o clásica, dibujos hechos a mano, hasta la digital o la animación 3D que utiliza programas especializados de computación para su desarrollo. La animación se logra al momento de disponer, secuencialmente, las imágenes, dibujos o fotografías realizando pequeños cambios que generan el movimiento.
      .col-lg-6: img(src='@/assets/curso/img0.svg')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
