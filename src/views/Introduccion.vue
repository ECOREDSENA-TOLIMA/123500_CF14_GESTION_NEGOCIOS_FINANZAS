<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") El estudio de mercado es el análisis estratégico que da la seguridad de convertir una oportunidad en una realidad, al iniciar una idea y emprender o de ofertar un nuevo producto o servicio en el mercado, éste cobra gran importancia cuando se reconoce la profundidad y por tanto la envergadura que posee. En este estudio la empresa se juega todas sus cartas, porque no hay factor que influya en la organización de manera interna o externa que se quede por evaluar, he aquí la importancia de este estudio; muchos pueden ceñirlo a aplicar una encuesta y sólo reconocer si hay demanda para un producto nuevo y si existe aceptación en el mercado por el mismo, pero esto va más allá. Esta investigación debe cumplir diferentes fases, primero de indagación donde recopila toda la información existente, luego define el objetivo de la investigación, define una metodología, elige una técnica, selecciona unos instrumentos y los construye para su efectividad.

    .row.justify-content-center.mb-5
      .col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Posteriormente, viene el trabajo de campo o la indagación en fuentes primarias y secundarias, al recopilar esta información con clientes potenciales y si desea de manera simultánea entre los competidores del sector al que pertenece, para ir optimizando tiempos y si se cuenta con el personal responsable que realice esta labor, se debe gestionar la información obtenida a la cual debe dársele un tratamiento en ordenarla, clasificarla al punto de poder emitir unos juicios, hasta este momento en dos frentes, mercado objetivo y algunos aspectos de la competencia.
    .row.mb-5
      p(data-aos="fade-left") Se debe precisar que estudiar la competencia es una tarea ardua porque se requiere de estudios sectoriales para acudir a fuentes veraces, así como implementar una estrategia en la que se pueda obtener la mayor información acerca de su operatividad, así como de su estrategia de comercialización y cuál es el lead que utiliza para atraer a sus clientes, esto tiene una mayor profundidad que se encontrará en el desarrollo del componente. Antes de continuar con el estudio del componente, revisa el siguiente video para ilustrar la importancia del estudio de mercados:
    
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="zoom-in") Finalmente, es fundamental que el estudio de mercado surta todas las etapas y el proceso descrito aquí, a través del cual se definirá si existen condiciones para realizar una mayor inversión en la producción, si se puede iniciar un proyecto en un escenario que genera oportunidad con un alto nivel de riesgo o si definitivamente es más favorable abandonar la idea o modificarla para construir una que genere beneficios a menor riesgo y mayor rentabilidad.

    
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
