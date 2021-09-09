<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-12.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-xxl-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          .imagen_flotante.imagen_flotante_1: img(src="@/assets/curso/float1.svg")
          .imagen_flotante.imagen_flotante_2: img(src="@/assets/curso/float2.svg")
          .imagen_flotante.imagen_flotante_3: img(src="@/assets/curso/float4.svg")
          .imagen_flotante.imagen_flotante_4: img(src="@/assets/curso/float3.svg")
          .imagen_flotante.imagen_flotante_5: img(src="@/assets/curso/float5.svg")
          .imagen_flotante.imagen_flotante_6: img(src="@/assets/curso/float6.svg")
          img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative
.imagen_flotante
  &_1
    animation: float 6s ease-in-out infinite
    position: absolute
    top: 270px
    left: 330px
    @media (min-width: 1384)
      left:
      top: 290px
  &_2
    animation: float2 6s ease-in-out infinite
    top: 120px
    left: 100px
    position: absolute
    @media (min-width: 1384)
      left:
      top:
  &_3
    animation:  scale 4s ease-in-out infinite
    animation:  rotate 4s ease-in-out infinite
    top: 170px
    left: 230px
    position: absolute
    @media (min-width: 1384)
      left:
      top:
  &_4
    animation: rotate2 6s ease-in-out infinite
    position: absolute
    top: 100px
    left: 360px
    @media (min-width: 1384)
      left:
      top:
  &_5
    animation: translate2 6s ease-in-out infinite
    position: absolute
    top: 229px
    left: 73px
    @media (min-width: 1384)
      left:
      top:
  &_6
    animation: translate1 6s ease-in infinite
    position: absolute
    bottom: 118px
    left: 192px
    @media (min-width: 1384)
      left:
      top:
@keyframes float
	0%
		transform: translatey(0px)

	50%
		transform: translatey(-20px)

	100%
		transform: translatey(s0px)
@keyframes float2
	0%
		transform: translatey(-20px)

	50%
		transform: translatey(0px)

	100%
		transform: translatey(-20px)
@keyframes rotate
	0%
		transform: rotate(0deg) scale(1)

	50%
		transform: rotate(360deg) scale(1.3)

	100%
		transform: rotate(360deg) scale(1)
@keyframes rotate2
	0%
		transform: rotate(-15deg)

	50%
		transform: rotate(15deg)

	100%
		transform: rotate(-15deg)
@keyframes scale
	0%
		transform: scale(1)

	50%
		transform: scale(1.1)

	100%
		transform: scale(1)
@keyframes translate1
	0%
		transform: translateX(0px)

	50%
		transform: translateX(calc( 256px - 155px  ))

	100%
		transform: translateX(0px)
@keyframes translate2
	0%
		transform: translateY(0px)

	50%
		transform: translateY(calc( 138px - 229px  ))

	100%
		transform: translateY(0px)
</style>
