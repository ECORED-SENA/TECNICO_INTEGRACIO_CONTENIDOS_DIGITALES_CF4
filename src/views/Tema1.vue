<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Proyecto de animación
    p.mb-5 La animación se considera como un arte y ha sido tema de estudio durante más de cien años desde su creación, y con ello se han desarrollado los 
      b “principios de la animación” 
      |por los animadores de <i>Disney</i>: Ollie Johnston y Frank Thomas en su libro <i>The illusion of life: Disney Animation</i> para darle un toque de realidad a las imágenes animadas, pues la idea de estos principios es que los personajes se apeguen a las leyes de la física. A continuación, se presentan los doce principios básicos de la animación:
    .row.mb-3
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .indicador--hover(v-if="mostrarIndicador")(@mouseover="mostrarIndicador = false ")
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Estirar y encoger
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img1.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Anticipación
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img2.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Puesta en escena
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img3.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0 Animación directa y pose a pose
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img4.gif")
    .row.mb-3
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Acción complementaria y acción superpuesta
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img5.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Acelerar y desacelerar
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img6.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Arcos
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img7.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Acción secundaria
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img8.gif")
    .row.mb-5
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Timing
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img9.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Exageración
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img10.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos
            h4.text-center.mb-0.m-auto Dibujo sólido
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img11.gif")
      .col-lg-3.mb-3
        .tarjetas-hover.color-acento-botones.p-5.align-items-center.h-100.d-flex.justify-content-center
          .textos.justify-content-center.align-items-center.w-100
            h4.text-center.mb-0.m-auto Atractivo
          .tarjetas-hover_contenido
            img(src="@/assets/curso/img12.gif")
    .row.mb-5.justify-content-center
      .col-lg-6
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p Aunque originalmente estos principios fueron propuestos para el desarrollo de la animación clásica, también son utilizados en la animación digital y la animación 3D.
    p.mb-5 Las técnicas de animación existentes son variadas y han surgido a medida que aparecen nuevas tecnologías que ayudan a realizarlas, ahora se relacionan las más relevantes:
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Dibujo animado")
        .col-md-4
          figure
            img(src='@/assets/curso/img13.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Esta es la animación tradicional, ya que se logra dibujando cuadro por cuadro o fotograma por fotograma el objeto a animar o personaje en el papel, después se fotografía con una cámara estática y luego estas se colocan secuencialmente para lograr la sensación de movimiento; en la actualidad es una técnica casi en desuso, por la utilización de las computadoras que facilitan y abaratan el desarrollo de la animación. 
      .row(titulo="Stop Motion")
        .col-md-4
          figure
            img(src='@/assets/curso/img14.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p También conocida como animación “cuadro por cuadro”, consiste en animar objetos o personajes construidos o moldeados especialmente a los que se fotografía cada vez que el animador realiza un pequeño cambio generando así la ilusión del movimiento.
      .row(titulo="Pixilación")
        .col-md-4
          figure
            img(src='@/assets/curso/img15.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Este tipo de animación es una variante del Stop Motion que, en vez de utilizar objetos o personajes construidos, usa personas y objetos reales. Igualmente estos se fotografían y se van desplazando poco a poco entre cada foto para luego generar la sensación de movimiento.
      .row(titulo="Rotoscopia")
        .col-md-4
          figure
            img(src='@/assets/curso/img16.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Esta técnica de animación es llamada así por el uso del rotoscopio, una máquina que tiene una placa de vidrio sobre la que se colocan papel o láminas de acetato iluminadas por un proyector que tiene en la parte baja para luego calcar las imágenes cuadro por cuadro; en la actualidad esta técnica se desarrolla digitalmente con mayor facilidad.
      .row(titulo="Animación por computadora")
        .col-md-4
          figure
            img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p También conocida como animación digital o por ordenador es una técnica que consiste en la utilización de programas digitales para crear animaciones. En estos se pueden realizar animaciones 2D y 3D.
      
</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
export default {
  name: 'Tema1',
  components: {
    AcordeonB,
  },
  data: () => ({
    mostrarIndicador: true,
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
.tarjetas-hover
  &:hover
    overflow: visible
  border-radius: 10px
  background-color: $color-acento-botones
  cursor: pointer
  position: relative
  overflow: hidden
  &:hover .tarjetas-hover_contenido
    opacity: 1
  .tarjetas-hover_contenido
    position: absolute
    transition: opacity 0.2s
    opacity: 0
    left: 0
    top: 0
    z-index: 99
    width: 90%
    background-color: $color-primario
    border-radius: 10px
    transform: translateY(-90%) translateX(5%)
</style>
