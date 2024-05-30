<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") El estudio de mercado representa un análisis estratégico crucial que garantiza la conversión de una oportunidad en una realidad, ya sea al iniciar un emprendimiento o al lanzar un nuevo producto o servicio al mercado. Su importancia radica en reconocer la profundidad y la magnitud que conlleva. En este proceso, la empresa expone todas sus cartas, ya que ningún factor, interno o externo, queda sin evaluar. Esto subraya la relevancia del estudio, que va más allá de simplemente realizar encuestas para determinar la demanda y aceptación de un producto. La investigación atraviesa varias fases, comenzando por la recopilación exhaustiva de información, seguida por la definición de objetivos, la selección de metodologías y técnicas adecuadas, así como la construcción de instrumentos efectivos para su ejecución.

    .row.justify-content-center.mb-5
      .col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Después de esta fase inicial, sigue el trabajo de campo, que implica la investigación en fuentes primarias y secundarias. Esto implica recopilar información tanto de clientes potenciales como, si es posible, de competidores en el mismo sector. Optimizar tiempos es crucial, especialmente si se cuenta con el personal adecuado para llevar a cabo esta tarea. Una vez recopilada la información, se procede a gestionarla, lo que implica ordenarla, clasificarla y analizarla para emitir juicios. En este punto, se centra en dos aspectos principales: el mercado objetivo y algunos elementos clave de la competencia.
    .row.mb-5
      p(data-aos="fade-left") Es importante destacar que el análisis de la competencia es una tarea exigente que requiere estudios sectoriales para acceder a fuentes confiables. Se necesita implementar una estrategia que permita obtener la mayor cantidad de información sobre su funcionamiento, así como su estrategia de comercialización y los principales ganchos que utiliza para atraer a sus clientes. Este proceso implica una profundidad que será explorada en detalle en el desarrollo del componente. Antes de avanzar con el estudio, se recomienda revisar el siguiente video para ilustrar la importancia del análisis de mercado.
    
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/8jFfFFGYUyY?si=0DeHXoRUjRrssVDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="zoom-in") Por último, es crucial que el estudio de mercado complete todas las etapas y procesos descritos anteriormente. A través de este análisis exhaustivo, se determinará si existen condiciones favorables para aumentar la inversión en la producción, si es factible iniciar un proyecto en un entorno con oportunidades pero alto riesgo, o si es más prudente abandonar la idea o modificarla para desarrollar una alternativa que genere beneficios con un menor riesgo y una mayor rentabilidad.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
