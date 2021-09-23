<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Composición digital y VFX
    .row.mb-5.align-items-center
      .col-lg-6: img(src="@/assets/curso/img53.svg")(data-aos= "slide-right")
      .col-lg-6
        p La composición digital y/o los efectos visuales (VFX) son la suma de diferentes técnicas que se utilizan para crear o manipular imágenes que han sido grabadas con anterioridad. Estos efectos visuales se desarrollan en la etapa de posproducción de un proyecto audiovisual; su uso más común es en la industria cinematográfica aunque también suele usarse en videojuegos, televisión o comerciales publicitarios.
          br
          br
          |Para la producción de estas composiciones digitales o VFX se utilizan gran variedad de programas que buscan llegar a imágenes realistas o basadas en las necesidades artísticas del director del proyecto audiovisual sobre el que se trabaja. Los programas que suelen ser utilizados con Photoshop, como un generador de montajes o elementos independientes que luego se componen o se utilizan en programas como <i>After Effects</i>, programas que se describen y se utilizan en el desarrollo de este curso. Aunque <i>After Effects</i> es un programa de composición digital y VFX es altamente usado en la industria de la televisión, el videoclip e incluso en el cine, en la industria cinematográfica se utilizan otros programas de mayor complejidad que cumplen con altos estándares de calidad que exigen este tipo de proyectos como el <i>software ideFX: Houdini</i>.
    .tarjeta.color-primario.bg-degrade.px-5.py-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img54.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Enlace a...
              p.text-small Para introducir el uso de la composición digital se adjunta link de curso de After Effects llamado ¡VIDEO ANIMADO para tu NEGOCIO!, en donde se realiza un proyecto de animación para un negocio de comidas. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://youtu.be/yB2paQihPVE')" target="_blank")
                span Enlace 
                i.fas.fa-link

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

<style lang="sass" scoped>
.bg-degrade
  background-color: #01549E;
</style>
