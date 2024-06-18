<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Hasta este punto, hemos evidenciado como en el mercado es el dinamismo de la economía y da vida a las organizaciones, por ser una actividad económica innovadora o una empresa en marcha, cotidianamente se debe recurrir a este tipo de investigación para mantenerse a la vanguardia de las tendencias y cambios tecnológicos que exige el mercado. Es por ello que se invita a apreciar el siguiente esquema en el que se resume la temática abordada:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene un esquema que resume la temática desarrollada durante este componente formativo, la cual hace mención que el estudio de mercado tiene un proceso de elaboración, instrumentos y segmentación; además, dentro de su estructura contiene objetivos, variables de análisis, estrategia comercial y un análisis del mercado.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
