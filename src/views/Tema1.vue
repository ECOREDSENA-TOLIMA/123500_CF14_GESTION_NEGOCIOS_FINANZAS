<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estudio de mercado

    .row.justify-content-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El estudio de mercado constituye el primer análisis en la evaluación de la viabilidad de un proyecto de inversión, centrándose en el aspecto crucial del mercado. En este proceso, se busca determinar si existe demanda para el producto o servicio que se pretende ofrecer, analizar la competencia para comprender el entorno sectorial y conocer las estrategias de los competidores más destacados. Además, se debe seleccionar la ubicación óptima para el lanzamiento y operación del negocio. Para lograrlo, se consolida la información recolectada mediante diversos instrumentos, considerando los factores críticos de cada componente y cuantificándolos. Este proceso da lugar a la elaboración del presupuesto correspondiente a cada aspecto evaluado, lo cual alimentará las proyecciones financieras en el estudio posterior para determinar la factibilidad del proyecto.
            br
            br
    p.mb-5(data-aos="fade-left") En el estudio de mercado se establecen numerosos costos de operación, anticipándose a través de simulaciones de situaciones futuras y definiendo políticas y procedimientos como parte de la estrategia comercial. Se adopta este enfoque porque hay aspectos que pueden quedar fuera del análisis general del estudio de mercado. Al llegar a la puesta en marcha del proyecto, estos vacíos pueden representar desafíos significativos para la ejecución presupuestaria. Estos aspectos incluyen:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="background-color:#E1EFE3; width: 100%; height: 100%")
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/142.svg', alt='Imagen decorativa')

          h3.text-center La estrategia publicitaria
          p.text-small La cual tiene una fuerte repercusión en la inversión.
    
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="background-color:#E1EFE3; width: 100%; height: 100%")
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/143.svg', alt='Imagen decorativa')

          h3.text-center La estrategia de promoción
          p.text-small Antes de la puesta en marcha.
          
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="background-color:#E1EFE3; width: 100%; height: 100%")
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/144.svg', alt='Imagen decorativa')

          h3.text-center La política de distribución del producto
          p.text-small Garantizando su cantidad y calidad de acuerdo con los canales seleccionados lo cual influirá en el flujo de caja.
    
    
    //-.row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/142.svg' alt='Imagen decorativa')
        h4.text-center La estrategia publicitaria
        p.text-center La cual tiene una fuerte repercusión en la inversión.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/143.svg' alt='Imagen decorativa')
        h4.text-center La estrategia de promoción
        p.text-center Antes de la puesta en marcha.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/144.svg' alt='Imagen decorativa')
        h4.text-center La política de distribución del producto
        p.text-center Garantizando su cantidad y calidad de acuerdo con los canales seleccionados lo cual influirá en el flujo de caja.

    //-.row.justify-content-center.mb-5
      .col-lg-3.col-md-7.col-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/2.svg' alt='Imagen decoractiva')
      .col-lg-8.col-md-6.col-6
        .row.justify-content-center.mb-0
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #2F3D6A")
            h4 La estrategia publicitaria
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #E1EFE3")
            p La cual tiene una fuerte repercusión en la inversión.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #2F3D6A")
            h4 La estrategia de promoción
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #E1EFE3")
            p Antes de la puesta en marcha.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #2F3D6A")
            h4 La política de distribución del producto
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #E1EFE3")
            p Garantizando su cantidad y calidad de acuerdo con los canales seleccionados lo cual influirá en el flujo de caja.
          
      //-   .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
      //-     h4.text-center(style="color: #ffff") La estrategia publicitaria
      //-   .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
      //-     h4.text-center(style="color: #ffff") La estrategia de promoción
      //-   .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
      //-     h4.text-center(style="color: #ffff") La política de distribución del producto
      //- .col-lg-6.col-md-6.col-6
      //-   .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
      //-     p La cual tiene una fuerte repercusión en la inversión.
      //-   .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
      //-     p Antes de la puesta en marcha.
      //-   .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
      //-     p Garantizando su cantidad y calidad de acuerdo con los canales seleccionados lo cual influirá en el flujo de caja.
    .row.justify-content-center.mb-3
      p(data-aos="fade-left") Esto es especialmente relevante en la relación entre oferta y demanda, ya que la inclusión de un distribuidor adicional puede afectar tanto el precio del producto como el margen asignado al distribuidor, lo que a su vez impacta en el presupuesto.
      p(data-aos="fade-left") Estos aspectos, a menudo considerados secundarios, abarcan la determinación del precio de introducción, la definición de inversiones para fortalecer la imagen de la marca, el establecimiento de políticas de ventas a crédito y la adaptación del lugar de venta según las necesidades y expectativas de los clientes potenciales. Todo esto se realiza en consonancia con las recomendaciones surgidas del estudio, que son factores críticos para el resultado de la evaluación. De esta manera, se destaca la importancia fundamental de este estudio, que encabeza la evaluación de viabilidad económica en su fase de formulación y preparación, como se ilustra en la siguiente tabla:
    
    .titulo-sexto.color-acento-contenido(data-aos="flip-up")
      h5 Tabla 1. 
      span <i>Estudio de Viabilidad Económica</i>
    
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. https://cutt.ly/9CEGMzH 
        thead
          tr(style="background-color: #DBE5F3")
            th(colspan="3") Formulación y preparación
            th Evaluación
        tbody.text-center
          tr
            <td colspan="2">Obtención y creación de información</td> 
            td Flujo de caja
            td Evaluación Sensibilización
          tr
            td Estudio de mercado	
            td Estudio técnico
            td Estudio organizacional y legal
            td Estudio financiero
          tr(style="background-color: #DBE5F3")
            td.text-bold.text-center(colspan="4") Estudio de impacto ambiental
    .row.justify-content-center.mb-5
      .cajon.mb-5.p-4(style="background-color: #E1FBFF")
        .row.justify-content-center
          .col-lg-10.col-12
            p.mb-5(data-aos="fade-left") Técnicamente, el estudio de mercado debe abarcar los siguientes aspectos:
            .row.justify-content-center
              .col-lg-2.col-md-3.col-5.mb-5
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/3.svg' alt='Imagen decoractiva')
              .col-lg-10.col-12
                ul.lista-ul--color.lista-ul
                  li 
                    i.fas.fa-check
                    | Demanda del mercado lo que implica analizar el consumidor y sus correspondientes demandas.
                  li 
                    i.fas.fa-check
                    | La competencia, la oferta del mercado en que actúa y su proyección.
                  li 
                    i.fas.fa-check
                    | Los proveedores, disponibilidad de materiales e insumos y los precios actuales y proyectados.
                  li 
                    i.fas.fa-check
                    | El entorno sectorial como contexto de la competencia y reconocimiento de oportunidades.
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Concepto de estudio de mercado
    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Concepto de estudio de mercado
      .col-lg-4.bg-color-3.px-4.py-3
    p(data-aos="fade-left") El estudio de mercado es la determinación de analizar y observar el sector al que se pretende ingresar a través de la producción de bienes y servicios. Mediante la observación del entorno y la utilización de otros instrumentos de recolección de información se plantean probabilidades de éxito que se deben operacionalizar con los bienes o servicios a ofertar.
    p.mb-5(data-aos="fade-left") Para operacionalizar el proyecto de inversión se requieren conclusiones minuciosas acerca del medio en el que se desempeñará y de los efectos o resultados producidos de acuerdo con las características de los bienes y servicios que se han estudiado, disponiendo de una previsión que definirá la determinación de invertir o de ingreso al mercado.
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Proceso de elaboración de estudio de mercado

    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Proceso de elaboración de estudio de mercado
      .col-lg-4.bg-color-3.px-4.py-3
    p.mb-5(data-aos="fade-left") Es el primer reto que se debe enfrentar. Para plantear el punto focal o asunto a investigar, se requiere de manera indispensable un conocimiento total de la situación actual. De no ser así, el planteamiento del problema será incorrecto y se podrán tomar decisiones y aplicar estrategias erradas o desenfocadas. Con el fin de estudiar el mercado, se invita a revisar la siguiente información, en la que se podrá identificar la manera como se deben aplicar estos pasos:

    .tarjeta.tarjeta--gris1.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h4 Definición del problema
            p Siempre existirán varias alternativas de solución, lo crucial de este estudio es elegir la más apropiada pues de esto depende el rumbo a seguir de la organización, así como los efectos de su implementación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/4.svg', alt='Imagen decorativa')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h4 Necesidades y fuentes de información
            p La información por recopilar corresponde a estudios financieros de periodos anteriores, informes de gestión empresarial, a antiguas estrategias implementadas y toda la información sectorial, gubernamental, privada y púbica requerida para un pleno conocimiento de la situación. Atendiendo al momento apropiado a las fuentes de información primarias y secundarias que aportarán a la consolidación de los escenarios a los que se enfrentará el proyecto de inversión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.svg', alt='Imagen decorativa')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h4 Diseño, recopilación y tratamiento estadístico
            p Para llevar a cabo la estructuración de informes es necesario que la información recopilada sea clasificada y convertida en datos consolidados que puedan ser interpretados para lo que se requiere de técnicas e instrumentos para su recopilación para luego pasar al tratamiento o manejo de la información.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.svg', alt='Imagen decorativa')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h4 Procesamiento y análisis de los datos
            p Este apartado corresponde a la estructuración gráfica de los datos donde luego de su procesamiento se procederá a la generación e interpretaciones o juicios acerca de los hallazgos encontrados en cada acápite o variable de éxito para el estudio de mercado brindando todo el soporte para la toma de decisiones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.svg', alt='Imagen decorativa')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h4 Informe
            p Con todos esos resultados obtenidos se debe presentar un informe que contenga el problema que da origen a la investigación, defina la situación actual, referencie los datos estadísticos e históricos y contenga las conclusiones y recomendaciones acerca de la demanda, oferta, consumidor, proveedores y mercado externo para la toma de decisiones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/8.svg', alt='Imagen decorativa')
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estructura del estudio de mercado
    //-.row.mb-5.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Estructura del estudio de mercado
      .col-lg-4.bg-color-3.px-4.py-3
    .row.justify-content-center.mb-5
      .col-lg-5.col-md-8.col-12
        figure
          img(src='@/assets/curso/temas/tema1/9.jpg', alt='Imagen decorativa')
      .col-lg-7.col-12
        p(data-aos="fade-left") Este análisis depende del modelo de negocio y los factores que lo caracterizan. En el caso del análisis del consumidor, busca caracterizar o reconocer con mayor precisión a los clientes actuales y potenciales. Si se trata de un negocio en marcha, se enfoca en comprender a los clientes actuales, pero si el negocio apenas se está diseñando, se necesita acercarse al conocimiento de los clientes potenciales, lo cual representa un desafío que debe abordarse con excelencia. De esta manera, se pueden reconocer sus preferencias, hábitos de consumo, motivaciones y otros factores que contribuyen a la construcción de un perfil del cliente, que se convierte en la base para definir la estrategia comercial y el segmento de mercado a atender. Se recomienda revisar el siguiente video para comprender mejor cómo se lleva a cabo el análisis de la demanda y la competencia:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/8hcI9RnyAwE?si=bIaPtbF8vlYPi9t2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-left") Este análisis depende del modelo de negocio y los factores que lo caracterizan, en el caso del análisis del consumidor busca caracterizar o reconocer con mayor precisión a los clientes actuales y potenciales, tratándose de un negocio en marcha, pero necesita acercarse al conocimiento de los clientes potenciales si el negocio apenas se está diseñando y esto es todo un reto que debe cumplirse a cabalidad y con excelencia, de esta manera podrá reconocerse sus preferencias, hábitos de consumo, motivaciones factores que aportan a la construcción de un perfil del cliente el cual se consolida en la piedra angular para definir la estrategia comercial y el segmento de mercado a atender. Revise en el siguiente video la manera como se lleva a cabo el análisis de la demanda y la competencia en el siguiente recurso:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vt5u3yOdvEg?si=cZpXj37ZKXr_fg4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-5.col-8
        figure
          img(src='@/assets/curso/temas/tema1/10.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p(data-aos="fade-left") Todos estos factores que influyen en la definición de la estrategia comercial y del modelo de negocio deben tener en cuenta datos históricos o estadísticos obtenidos con antelación, lo que repercutirá directamente en la rentabilidad y otras consecuencias económicas, como los ingresos y egresos. Entre estos factores se encuentra la política de ventas, que no solo implica la generación constante de ingresos y los plazos de ventas, sino que también establece la proyección de un nivel de ventas. Junto a ella está la política de crédito o financiación, así como el costo de la inversión y de la financiación. Todos estos aspectos deberán ser combinados para reflejar diferentes escenarios, los cuales se evidenciarán en el flujo de caja.
        p(data-aos="fade-left") A continuación, se presenta otro video que explora cómo el flujo de caja y los proveedores forman parte de la estructura del estudio de mercado y la definición de la estrategia de precio:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/rJVdrM7nzyY?si=NOpeiR8jNAl0qcDx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p(data-aos="fade-left") Además, no se debe pasar por alto el análisis del mercado externo y su evolución, así como la diversidad de productos disponibles para el cliente y la probabilidad de crecimiento del mercado potencial. También es crucial considerar las tecnologías de la información y el nivel de seguridad de las transacciones digitales, ya que facilitan la adquisición de productos y eliminan barreras. Asimismo, es importante evaluar la probabilidad de expandir el mercado del proyecto, lo que implica la eliminación de intermediarios y el control del precio de los productos.
    p.mb-5(data-aos="fade-left") Este estudio establece el rumbo del proyecto de inversión, ya que si no se encuentran condiciones favorables en el estudio de mercado, no se continuará con la formulación del proyecto de inversión. En tal caso, se deberá abandonar la idea o reformularla para reiniciar este proceso.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Objetivos del estudio de mercado
    
    .row.justify-content-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/11.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los objetivos del estudio de mercado se orientan al análisis de cada uno de los aspectos fundamentales que hacen que este instrumento sea útil siempre y cuando se haya planificado de manera apropiada, se hayan elegido los instrumentos adecuados de acuerdo con el tipo de investigación y se haya realizado un trabajo de campo exhaustivo a fin de recopilar la información, veraz y contundente que facilite la toma de decisiones. 
            br
            br
    .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.mg-top-1.mb-0.cs.mb-5
      .row.justify-content-center.align-items-center.mb-5.p-4
        p(data-aos="fade-left") Algunos de esos objetivos son:
        .col-lg-10.col-12
          ul.lista-ul--color.lista-ul
            li 
              i.fas.fa-check
              | Estudiar la viabilidad de implementar un proyecto de inversión sea cual fuere la actividad, producto o servicios a ofertar, de manera que, si no existe el potencial, se abandona o se modifica la idea o propuesta de inversión sin perder tiempo, esfuerzo y dinero.
            li 
              i.fas.fa-check
              | Identificar las tendencias actuales y pronostica las áreas, sectores o bienes y servicios que tendrán crecimiento.
            li 
              i.fas.fa-check
              | Determinar el grado de aceptación de la población objetivo.
            li 
              i.fas.fa-check
              | Identificar el segmento y nicho de mercado en que se debe concentrar el proyecto dadas las características y condiciones del producto o servicio a ofertar.
            li 
              i.fas.fa-check
              | Brindar la oportunidad de elegir de manera previa la alternativa de inversión más apropiada.
            li 
              i.fas.fa-check
              | Evitar el fracaso de la inversión aumentando la probabilidad de éxito.
            li 
              i.fas.fa-check
              | Buscar avalar y soportar una idea de negocio o proyecto de inversión para atraer el interés de inversionistas, soportados en datos, cifras e informes de factibilidad.
            li 
              i.fas.fa-check
              | Reconocer el potencial del mercado desde el inicio del proyecto.
            li 
              i.fas.fa-check
              | Identificar el posicionamiento de los competidores en el mercado y a través de qué producto o servicio ha logrado posicionarse de acuerdo con sus fortalezas, calidad del producto, servicios que ofrecen y valor agregado.
            li 
              i.fas.fa-check
              | Valorar el atractivo del mercado realizando la estimación o previsión de las barreras de entrada.
            li 
              i.fas.fa-check
              | Preparar a la empresa para los retos y riesgos que asume con las decisiones a implementar.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Objetivos del estudio de mercado
    .row.justify-content-center.mb-5
      .col-lg-7.col-12
        p(data-aos="fade-left") Al diseñar la estrategia comercial, es pertinente evaluar una diversidad de factores externos que influyen sobre la evolución de los distintos mercados del proyecto. Estas variables son en general externas y por tanto incontrolables por la organización, pero valoradas minuciosamente aportarán a detectar las amenazas, oportunidades y los <i>stakeholders</i> existentes en el entorno.
        p(data-aos="fade-left") Las amenazas se refieren a todas aquellas variables que pueden surgir en cualquier momento y provienen del entorno externo al proyecto. Estas son consideradas amenazas porque su aparición u ocurrencia puede generar efectos negativos en la empresa, como la inestabilidad política o situaciones recesivas. Por otro lado, las oportunidades son aquellos elementos o aspectos presentes en el entorno que, al ser identificados, aceptados y aprovechados, pueden traer grandes beneficios favorables. Por ejemplo, la aparición de una demanda insatisfecha o la presencia de una competencia débil.
      .col-lg-5.col-md-8.col-12
        figure
          img(src='@/assets/curso/temas/tema1/12.jpg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-left") Finalmente, los aliados o <i>stakeholders</i> del entorno son los agentes económicos que se benefician con el desarrollo del proyecto, por resultados indirectos que este tendrá para sus actividades como el mercado de proveedores y de distribuidores. 
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Variables externas

    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Variables externas
      .col-lg-4.bg-color-2.px-4.py-3
    p.mb-5(data-aos="fade-left") Las variables externas del macroentorno deben incluirse en la valoración de los factores económicos, socioculturales, demográficos, tecnológicos, competitivos, políticos y legales que influencian positiva o negativamente en el proyecto y en las actividades que se vayan a desarrollar en un futuro. Las tendencias del macroentorno son de gran importancia en el proceso de formulación de la estrategia de mercadeo, gracias a que el plan de mercadeo que se ejecute deberá realizarse en un escenario futuro de este mismo medio. Desde este punto, una estrategia de mercado es un plan de empresa con base en una proyección elaborada para predecir el desempeño futuro. A continuación, podremos ver los factores sujetos a la valoración de las variables:

    .tarjeta.tarjeta--azul.mb-5(data-aos="zoom-in-up")
      .p-4.p-lg-5
        SlyderA.bn(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores económicos
              p.mb-0 Los factores económicos son las tasas de interés, la inflación, los cambios en el ingreso disponible, los índices del mercado de valores y la etapa del ciclo normal de los negocios son variables del entorno que inciden en la operación de la organización, todos estos factores son permeados por el medio externo de la nación donde funciona la organización.
              p.mb-0 Todos ellos son la situación fiscal, la deuda externa, la moneda sobrevaluada, el modelo de desarrollo, la situación actual y la tendencia de precios de los productos básicos, la tasa de interés, la balanza de pagos, el crecimiento económico, la tasa de desempeño, la devaluación, la competitividad, la inversión extranjera del país donde está ubicado el proyecto.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/13.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores socioculturales
              p.mb-0 Las variables o causantes socioculturales se refieren a la idiosincrasia de la comunidad y siendo más precisos son rasgos identitarios, culturales, actitudinales y comportamentales del medio. Las modificaciones en el ambiente tienen tendencia evolutiva y generacional, dentro de una generación específica.
              p.mb-0 Gracias al desarrollo tecnológico que ha dinamizado las comunicaciones, se han provocado grandes y ágiles cambios culturales en la sociedad lo cual es indispensable conocer al plantear la estrategia comercial, lo que conduce a revisar los valores sociales, la estructura familiar, el uso del tiempo libre, las expectativas de  las personas sobre el futuro. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/14.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores demográficos
              p.mb-0 Los factores demográficos son claves para identificar los comportamientos de la sociedad y se esperan grandes cambios en ella, según el Banco Mundial en 2030 la población mundial será de 8.500´000.000 de habitantes lo que quiere decir que habrían cambios socioculturales debido a la sobrepoblación, el incremento en el consumo, los desarrollos tecnológicos, formando así una nuevo tipo de población formada por mayores inactivos productivamente pero con mayores ingresos que la población entre 35 a 44 años.
              p.mb-0 Según expertos se habla de una modificación en las clases sociales lo que generará nuevos escenarios nada beneficiosos para la humanidad lo que redunda en cambios que el mercado deberá considerar y estar preparado para asumirlos en las condiciones que se proyectan.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/15.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores tecnológicos
              p.mb-0 La tecnología es parte del cotidiano de las personas y en las empresas se convirtió en un aliado estratégico que permite generar mayores ideas innovadoras, brindando soporte en procesos productivos y administrativos e invenciones haciendo que la comercialización haya sido transformada a un click. La tecnología es impulsora de la aparición de nuevos bienes y de las nuevas formas de mercadeo, siendo hoy la principal razón para que otros productos y mercados decaigan o queden rezagados hasta su desaparición. Es un nuevo horizonte que facilita el intercambio de información más compleja y el desarrollo de producto más inteligentes o con mayores valores agregados para los usuarios.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/16.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores competitivos
              p.mb-0 Los factores competitivos son decisivos en el triunfo o frustración de una empresa, es por esto imprescindible realizar un estudio minucioso de los competidores o rivales, su operatividad y del sistema que rige en la zona de cobertura donde estará el proyecto. Desde esta óptica es necesario la innovación en estrategias clareas, diferenciadoras y únicas que ofrezcan a los clientes, así como evaluando el sistema del negocio para reinventarlo con proyección al futuro logrando mayores y mejores resultados.
              p.mb-0 Las variables para estudiar el mercado marcan la pauta en las determinaciones que se tomarán frente a una decisión de inversión con ese objeto es indispensable estudiarlas al detalle, definirlas mediante información recolectada con instrumentos que aporten a su conocimiento. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/17.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Estrategia comercial
              p.mb-3 Para definir la estrategia comercial es necesario basarse en cuatro aspectos trascendentales que influyen estratégicamente la composición del flujo de caja del proyecto de inversión ellos son:
              li Producto
              li Precio
              li Promoción
              li.mb-3 Distribución
              p Cada uno de estos aspectos se ve relacionado con los otros tres, es el caso de las características del producto las cuales influyen directamente en la definición del precio, la estrategia de promoción y de distribución. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/18.png", style="width: 450px" ,alt='').m-auto
    
    p(data-aos="fade-left") El estudio de mercado debe enfocarse en definir los atributos del producto en cuanto a tamaño, diseño, marca, posicionamiento, envase o empaque de manera que al evaluar el proyecto de inversión los resultados reflejen el comportamiento de las ventas como rubro inicial y de trascendencia en el flujo de caja. Al definir la estrategia comercial, el concepto de ciclo de vida del producto permite dilucidar ese comportamiento, por esa razón a continuación se ilustra el ciclo de vida del producto:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 1.
          span <i>Marketing Mix - 4 P´s</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/19.svg' alt='PENDIENTE TEXTO ALT')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/20.svg' alt='PENDIENTE TEXTO ALT')
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Ciclo del producto
    
    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Ciclo del producto
      .col-lg-4.bg-color-3.px-4.py-3
    
    p(data-aos="fade-left") Lo estudios de mercado son una herramienta fundamental para la toma de decisiones y de acuerdo con la etapa en que se encuentra la empresa, así mismo será el tipo de investigación que se debe realizar, sin olvidar la necesidad y por ende la importancia de que la empresa indague en el mercado sobre las tendencias, preferencias, gustos, formas de compra o adquisición de servicios y productos, entre otras. Basado en esto, a continuación, se presentan los estudios de mercado conforme a la etapa de crecimiento en que se encuentra la empresa:
                
    .row.justify-content-center
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span <i>Ciclo de vida del producto</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/21.svg' alt='PENDIENTE TEXTO ALT')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/21_.svg' alt='PENDIENTE TEXTO ALT')
    p.mb-5(data-aos="fade-left") De acuerdo con la figura anterior, se identifican cuatro fases que conforman el ciclo de producto. A continuación, se presenta la manera en que se podría llevar a cabo la investigación de mercado en cada una de ellas:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Fase de lanzamiento o introducción
        p.mb-5(data-aos="fade-left") La primera fase del producto, también conocida como introducción por ser considerada su nacimiento, es de crucial importancia debido a que las decisiones adoptadas en esta etapa repercutirán en el futuro del producto o servicio. Durante esta fase, las ventas son limitadas y el enfoque principal radica en dar a conocer el producto o servicio y en crear la necesidad en el consumidor a través de estrategias publicitarias.
        .row.justify-content-center  
          .col-lg-4.col-8.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/22.jpg' alt='Imagen decorativa')
          .col-lg-8.col-12.mb-3
            p(data-aos="fade-left") Su desarrollo tiene los siguientes objetivos comprobar el grado de aceptación o éxito del producto o servicio, conocer la competencia y su posición frente a el producto, el grado de satisfacción del cliente con el producto o servicios partiendo del punto de vista de utilidad, funcionalidad, economía y demás expectativas del cliente, el grado de recordación del nombre, si es apropiado, es fácil de mencionar, genera recordación y el envase o empaque utilizado está acorde con las tendencias del entorno, es fácil de usarlo, es apropiado, puede ser reutilizado, reciclado o recuperado. Para precisar los objetivos de esta fase es necesario acudir a instrumentos adicionales tales como los que se presentan a continuación:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/23.svg' alt='AvatarTop')
        h4.text-center Prueba de concepto
        p.text-center El tema o concepto del producto o servicio es atractivo, es llamativo, a qué segmentos de mercado atrae, de los beneficios que genera y cuáles son los más atractivos para el cliente.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
        h4.text-center Prueba del producto
        p.text-center El producto tiene las propiedades que ofrece, es tan bueno como la competencia. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
        h4.text-center Cumplimiento del concepto
        p.text-center Las expectativas que genera la imagen del producto son atendidas por el producto, o en otras palabras, las expectativas de los clientes son superadas con el producto o servicio.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
        h4.text-center Pruebas de nombre
        p.text-center El nombre es aceptado o gusta a los clientes, hay sugerencias de parte de los clientes, el nombre coincide con lo que se espera sugerir y es corto, fácil y recordable.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
        h4.text-center Pruebas de envase
        p.text-center El envase propuesto es atractivo, de fácil uso, es cómodo, es moderno.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
        h4.text-center Investigación de publicidad
        p.text-center Define la estrategia de lanzamiento de productos o servicios, medios de difusión, incluye el concepto general a difundir, se orienta al posicionamiento que se espera darle al producto y cumple con el presupuesto asignado.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/29.svg' alt='AvatarTop')
        h4.text-center Prueba de seguimiento 
        p.text-center El plan está cumpliendo con sus objetivos y está arrojando los resultados propuestos.
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Fase de crecimiento
        .row.justify-content-center
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En esta fase el objetivo principal es crecer lo que se refleja en el incremento de las ventas, arrojando beneficios económicos, se sigue buscando la penetración en el mercado por lo que la inversión continúa siendo el mejor aliado buscando tener mayor reconocimiento para llegar a la fase de madurez con una representativa participación en el mercado.
                br
                br
        p.mb-4(data-aos="fade-left") En esta etapa de crecimiento el incremento en la demanda es notable, también aparece más competencia o se hace sentir en el mercado, por lo que se vuelve indispensable realizar modificaciones si son necesarias para que sea adaptado a la demanda en crecimiento y por ende trabaja en reforzar la consolidación del producto o servicio implementando las siguientes estrategias:
        .row.justify-content-center.mb-0
          .tarjeta.mb-0.p-4(style="background-color: #E1FBFF")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-md-3.col-5
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/30.svg' alt='Imagen decoractiva')
              .col-lg-6.col-12
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Incrementar los canales de distribución.
                  li 
                    i.fas.fa-angle-right
                    | Disminuir el precio para aumentar el número de clientes.
                  li 
                    i.fas.fa-angle-right
                    | Fortalecer la publicidad y orientarla a la imagen de marca.
                  li 
                    i.fas.fa-angle-right
                    | Adicionar más características al producto.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Fase de madurez
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/31.jpg' alt='Imagen decoractiva')
          .col-lg-7.col-12
            p(data-aos="fade-left") En esta etapa las ventas presentan menos dinamismo y se estabiliza el mercado, ahora es cuando los beneficios son mayores y es cuando la empresa se debe consolidar en el mercado mediante estrategias de precio y publicidad, el propósito en esta etapa es la rentabilidad de la empresa y mejorar su posición en el mercado. Este resultado significa que la empresa tiene la capacidad para transformarse en una gran organización beneficiándose de las economías de escala.
            p(data-aos="fade-left") Aquí no hay mucha oportunidad de crecimiento, pero surge la disputa a través de los precios y a mediante la diferenciación. Es en esta etapa donde algunas compañías crecen y otras quedan relegadas hasta desaparecer y otras trabajan en nichos muy específicos del mercado. Esta etapa tiene los siguientes objetivos:
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .tarjeta.mb-0.p-4(style="background-color: #E1EFE3")
          .col-12.p-3
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Replantear las estrategias para lograr una expansión en el mercado.
              li 
                i.fas.fa-angle-right
                | Ingresar a nuevos segmentos del mercado.
              li 
                i.fas.fa-angle-right
                | Mejorar las características del producto como duración, agilidad, sabor, entre otras diferenciando el producto o servicio ofertado.
              li 
                i.fas.fa-angle-right
                | Atraer clientes de la competencia incrementando su cuota en el mercado.
              li 
                i.fas.fa-angle-right
                | Definir una estrategia de marca a través de una excelente imagen.
    .row.justify-content-center.mb-3
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Fase de declive
        .row.justify-content-center
          .col-lg-5.col-md-8.col-10.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/32.jpg' alt='Imagen decoractiva')
          .col-lg-7.col-12.mb-5
            p(data-aos="fade-left") En esta fase las ventas han disminuido debido a que los consumidores han encontrado sustitutos más favorables y atractivos lo que puede generar una saturación en el mercado y por ende la reducción en los beneficios. En este punto es necesario eliminar el producto, transformarlo o innovar y plantear una nueva estrategia de marca orientada a los consumidores a fin de captar de nuevo su atención y recuperar el dinamismo en las ventas. Las estrategias por implementar son:
            .tarjeta.mb-0.p-4(style="background-color: #E1FBFF")
              .row.justify-content-center     
                .col-lg-6.col-12
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Eliminar o reemplazar el producto
                    li 
                      i.fas.fa-angle-right
                      | Modificar el producto
                    li 
                      i.fas.fa-angle-right
                      | Estrategia de remarca
                .col-lg-3.col-md-6.col-7
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/33.svg' alt='Imagen decoractiva')
          p(data-aos="fade-left") En esta fase las ventas han disminuido debido a que los consumidores han encontrado sustitutos más favorables y atractivos lo que puede generar una saturación en el mercado y por ende la reducción en los beneficios. En este punto es necesario eliminar el producto, transformarlo o innovar y plantear una nueva estrategia de marca orientada a los consumidores a fin de captar de nuevo su atención y recuperar el dinamismo en las ventas. Las estrategias por implementar son:
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Marca
    
    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Marca
      .col-lg-4.bg-color-3.px-4.py-3

    .row.justify-content-center 
      .col-lg-8.col-12
        .cajon.mb-5.p-4(style="background-color: #E1EFE3")
          p(data-aos="fade-left") Aunque la marca corresponde al distintivo o imagen que tendrá el producto en cuanto a nombre, logotipo, signo, símbolo, el <i>slogan</i> y la propuesta de valor en estos aspectos recae una gran relevancia la aceptación, el <i>branding</i> presenta atributos que permiten a la marca posicionarse y asociarse, lo cual incidirá necesariamente en la promoción. Son aspectos tan precisos y determinantes en el proyecto de inversión que no se pueden dejar de lado cuando de todos ellos depende su éxito, pero todos ellos son necesarios conocerlos para no incurrir en errores al tercerizar este diseño lo cual necesariamente también se verá reflejado en el flujo de caja correspondiente.
      .col-lg-4.col-md-6.col-9
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/34.jpg' alt='Imagen decoractiva')
    
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estrategia de precios
    
    //- .row.mb-3.ps-2(data-aos="zoom-in-down")
      .h4.mb-0.mx-3(style="color: #0C5E46") Estrategia de precios
      .col-lg-4.bg-color-3.px-4.py-3
    
    p.mb-5(data-aos="fade-left") La definición del precio del producto es el aspecto de más relevancia en la estrategia comercial ya que en ella se define los ingresos que sumado a la demanda darán como resultado los ingresos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-9
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/35.jpg' alt='Imagen decoractiva')
      .col-lg-8.col-12
        .cajon.mb-0.p-4(style="background-color: #E1FBFF")
          p(data-aos="fade-left") A través de la definición del precio también paralelamente se van formulando las estrategias de ventas, así como las políticas de ventas a crédito y contado, su plazo, el valor del pago periódico, la tasa de interés inmersa, los descuentos por pronto pago o volumen, las cuales tiene una preponderancia alta en los beneficios a generar, sólo definir la tasa de interés ya implica un beneficio en la inversión. La fijación del precio de venta debe reunir las variables que influyen en la evolución del mercado. 
          p(data-aos="fade-left") En el caso que se mencionaba de la tasa de interés puede suceder que la política de ventas a crédito permita acceder a un producto con cuotas bajas que el interés inmerso no cobre importancia en el valor del producto dependiendo del segmento del mercado, así sucede con la demanda asociada a diferentes precios de acuerdo con el segmento, los precios de venta de los rivales para productos similares o sustitutos y no se pueden obviar los costos.
    p.mb-5(data-aos="fade-left") Para calcular el precio de venta es necesario conocer el costo unitario al cual se le adiciona el porcentaje correspondiente a <i>mark up</i> o margen de utilidad, este no es otra cosa que el porcentaje que la empresa define debe recibir por la venta de cada producto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/36.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#E1FBFF")
            .p-4
            p.p-2.text-bold Precio de venta = costos de producción + costos fijos + costos variables + margen de utilidad.
    p.mb-5(data-aos="fade-left") A través de la siguiente información, podrás reconocer los componentes mencionados en la anterior fórmula:
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-8.col-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/37.svg' alt='Imagen decoractiva')
      .col-lg-6.col-12
        LineaTiempoD.color-acento-botones.especial.mb-5
          .row(numero="1" titulo="Costos de producción")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/38.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Son los que se requieren para la transformación de la materia prima en un bien o producto final.
          .row(numero="2" titulo="CF o costos fijos")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/39.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Son los que no se modifican si aumenta o disminuye la cantidad a producir, un ejemplo de ello es el arrendamiento.
          .row(numero="3" titulo="CV o costos variables")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/40.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Son los invertidos en la cantidad vendida o de la dinámica de la actividad económica, a mayor número de productos producidos y vendidos los servicios de agua y luz inmersos en su proceso de elaboración incrementarán y viceversa.
            
          .row(numero="4" titulo="Margen de utilidad")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/41.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Es el margen de utilidad o beneficio/ganancia que la empresa espera conseguir con la transacción.
            
    p.mb-5(data-aos="fade-left") De acuerdo con las estrategias de precios, es importante reconocer los diferentes tipos de precios:


    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/145.svg' alt='Imagen decorativa')
        h4.text-center Precio de venta basado en costos: 
        p.text-center Define el precio de venta a partir de los costos de producción o comercialización teniendo en cuenta factores como la calidad, la exclusividad, entre otros.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/146.svg' alt='Imagen decorativa')
        h4.text-center Precio de venta basado en la demanda: 
        p.text-center Intervienen factores como el segmento de mercado, su reputación o estatus, así como el de la marca brindando confianza al consumidor.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/147.svg' alt='Imagen decorativa')
        h4.text-center Precio de venta basado en la competencia: 
        p.text-center Definido a partir del precio de venta de los competidores o del mercado.

    
    //-.row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Precio de venta basado en costos: 
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Define el precio de venta a partir de los costos de producción o comercialización teniendo en cuenta factores como la calidad, la exclusividad, entre otros.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Precio de venta basado en la demanda: 
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Intervienen factores como el segmento de mercado, su reputación o estatus, así como el de la marca brindando confianza al consumidor.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Precio de venta basado en la competencia: 
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Definido a partir del precio de venta de los competidores o del mercado.
          
      //-   .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
      //-     h4.text-center(style="color: #ffff") Precio de Venta basado en costos: 
      //-   .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
      //-     h4.text-center(style="color: #ffff") Precio de Venta basado en la demanda: 
      //-   .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
      //-     h4.text-center(style="color: #ffff") Precio de Venta basado en la competencia: 
      //- .col-lg-7.col-md-8.col-6
      //-   .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
      //-     p Define el precio de venta a partir de los costos de producción o comercialización teniendo en cuenta factores como la calidad, la exclusividad, entre otros.
      //-   .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
      //-     p Intervienen factores como el segmento de mercado, su reputación o estatus, así como el de la marca brindando confianza al consumidor.
      //-   .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
      //-     p Definido a partir del precio de venta de los competidores o del mercado.
    
    p.mb-5(data-aos="data") Según el volumen también se definen los siguientes precios de venta:

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .row.justify-content-center.align-items-center
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/148.svg', alt='')
            .col-lg-10.col-7
              h5 Al por mayor
              p Es el precio de comercialización que asumen los minoristas para adquirir grandes cantidades de producto y luego vendar la mercancía por unidades a un mayor precio.
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/149.svg', alt='')
            .col-lg-10.col-7
              h5 Al por menor
              p Es el precio que cancela el consumidor final en los establecimientos minoristas por una o varias unidades de producto.
            hr
    
    //- .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-4.col-6
        .row.justify-content-center.mb-0
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Precio de Venta basado en costos: 
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Define el precio de venta a partir de los costos de producción o comercialización teniendo en cuenta factores como la calidad, la exclusividad, entre otros.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Precio de Venta basado en la demanda: 
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Intervienen factores como el segmento de mercado, su reputación o estatus, así como el de la marca brindando confianza al consumidor.
      //-   .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
      //-     h4.text-center(style="color: #ffff") Al por mayor:
      //-   .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
      //-     h4.text-center(style="color: #ffff") Al por menor: 
      //- .col-lg-7.col-md-8.col-6
      //-   .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
      //-     p Es el precio de comercialización que asumen los minoristas para adquirir grandes cantidades de producto y luego vendar la mercancía por unidades a un mayor precio.
      //-   .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
      //-     p Es el precio que cancela el consumidor final en los establecimientos minoristas por una o varias unidades de producto.
    p(data-aos="fade-left") Analizados los factores de marca y establecida la estrategia de precios, se diseñan las estrategias de distribución, promoción y publicidad, y la estrategia misma del producto, que son fundamentales en los estudios de mercado de la información que de ellos se alcance, dependerá la inversión de los socios de una empresa. Después de planteada la estrategia de precios, se pasa a organizar los siguientes procesos, conocidos como la estrategia de distribución, promoción y publicidad y estrategia de producto:
    
    .tarjeta.tarjeta--azul.mb-5(data-aos="zoom-in-up")
      .p-4.p-lg-5
        SlyderA.bn(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Estrategia de distribución
              p.mb-0 Los canales de distribución son de gran relevancia al definir la estrategia comercial, a través de estos se define el alcance de la demanda, ésta marca la pauta especialmente cuando los productos tienen una gran cobertura geográfica y se dirigen a variados segmentos dispersos geográficamente.
              p.mb-0 En este caso los canales de distribución son imprescindibles, en este caso la táctica o estrategia de distribución y comercialización requiere extenderse a puntos de venta minoristas, grandes superficies, supermercados, farmacias, tiendas. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/42.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 En este caso el estudio del mercado distribuidor es de gran importancia por su #[b intervención en la comercialización y su efecto en la rentabilidad del proyecto].
              p.mb-0 Es pertinente considerar la concentración de la industria, lo que ha llevado a definir nuevos canales de distribución y formas de comercializar de manera que se afecta la rentabilidad del proyecto o proveedor, en este caso debido a la adhesión a un determinado canal, políticas asociadas al cumplimiento de metas en menor tiempo o mayor nivel del planteado o rebase como premios por cumplimiento en metas.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/43.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Los costos de logística que debe asumir el proveedor, la obligatoriedad de participar en catálogos promocionales, el incremento de plazos en el pago de la mercancía o productos provistos, el costo de almacenaje y los costos agregados por la promoción son sobrecostos que se deben asumir al definir este tipo de canales de distribución lo que hace poco atractiva este tipo de distribución e intermediación.
              p.mb-0 Por lo anterior, muchas empresas acuden a tácticas de distribución mixtas con canales ostensiblemente atractivos como clientes institucionales, plataformas e-commerce e implementación de las propias.  La definición de esta mezcla de opciones se consolida como una estrategia de distribución; con esta estrategia, se procede a diseñar la estrategia de promoción y publicidad.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/44.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Estrategia de promoción y publicidad
              p.mb-0 También requiere de la definición clara de aspectos como el mensaje y su contenido, la estrategia de medios enfocada en televisión, revistas, periódicos, internet, paletas publicitarias, y la audiencia objetivo del mensaje el cual debe culminar en la cuantificación de su costo que es diferente al gasto publicitario.
              p.mb-0 La diferencia consiste en que la primera o inversión para dar a conocer el producto o la marca con el fin de posicionarlo y el segundo se dedica a la estrategia constante para generar recordación acerca del producto y posicionarlo en el mercado.
              p.mb-0 Cada uno de estos rubros están en el flujo de caja, la inversión como activo amortizable y el gasto será clasificado como operacional de manera permanente.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/45.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Estrategia de producto
              p.mb-0 Con ella se puede valorar la inversión y operatividad asociados a la experiencia del cliente con el uso del producto o disfrute del servicio, pero siempre será un reto definir un producto basado sólo en sus características tangibles.
              p.mb-0 La experiencia permite conocer el producto desde los cinco sentidos del cliente, que tiene implicación en el diseño, decoración, iluminación, musicalización con todos ellos complementandose se genera una coherencia de concepto que transforme la experiencia del cliente.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/46.png", style="width: 450px" ,alt='').m-auto
    
    .row.justify-content-center.align-items-center 
      .col-lg-3.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/47.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        p(data-aos="fade-left") En la experiencia del cliente radica el valor agregado que cada organización proyecta, diseñando una experiencia única para el cliente, lo cual hace aún más indispensable la definición de una estrategia competitiva e innovadora, en donde la táctica de producto hace perceptible la propuesta de valor definida en ella. A continuación, presentamos información relacionada con el conjunto de estrategias aquí presentadas que condensadas toman el nombre de estrategia de #[i marketing].
    .row.justify-content-center.align-items-center.mb-3
      .tarjeta.p-3.mb-3(style="background-color: #E1FBFF")
        .row.justify-content-center 
          h4.text-center ¿Qué es una estrategia de #[i marketing]?
          .col-lg-5.col-md-8.col-12
            ol.lista-ol--cuadro.lista-ol--separador
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 1
              | Establecer modelo de negocio
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 2
              | Definir la meta del proyecto
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 3
              | Auditoría de #[i marketing]
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 4
              | Análisis DAFO
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 5
              | Público objetivo
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 6
              | Recursos
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 7
              | Elegir canales
          .col-lg-5.col-md-8.col-12
            ol.lista-ol--cuadro.lista-ol--separador
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 8
              | Objetivos
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 9
              | Estrategia
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 10
              | Tácticas acciones
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 11
              | Ejecución
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 12
              | Medición
              li 
              .lista-ol--cuadro__vineta(style="color: #12263F")
                span 13
              | Medidas
    p.mb-5(data-aos="fade-left") Uno de los elementos a tener en cuenta en la experiencia del cliente es el análisis del medio, pues es lo que da validez al estudio de mercado.
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Análisis del medio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/48.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        p(data-aos="fade-left") Con el fin de que el estudio de mercado tenga validez, se hace necesario realizar análisis complementarios para definir la viabilidad del proyecto de inversión por lo que este análisis se concentra en distintos aspectos de vital importancia a precisar cómo los distintos mercados, variables externas que hacen influencia. Veamos la siguiente información al respecto:

    .row.justify-content-center.mb-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="Agentes económicos del mercado")
          .col-md-6.mb-4.mb-md-0
            p La dinámica de los diferentes agentes económicos del mercado marca la pauta en la composición del mercado y su desarrollo independiente hace muy complicado el pronóstico de su desarrollo y sus efectos sobre las estrategias del proyecto, de los competidores, consumidores, proveedores y canales de distribución, por lo que se hace necesario el análisis de sensibilidad o variación del proyecto en aspectos específicos que se verán notablemente en el flujo de caja.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/49.png', alt='Imagen decorativa')
        .row(titulo="Toma de decisiones sobre las acciones del proyecto")
          .col-md-6.mb-4.mb-md-0
            p Toda decisión que se tome acerca de las caminos de acción del proyecto se verá influenciada por las políticas gubernamentales, especialmente la política económica y sus efectos en aspectos como empleo, niveles de ingreso, determinación de precios, comercio exterior y en conjunto sus efectos sobre la demanda se hacen visibles complejas de pronosticar porque las decisiones gubernamentales son momentáneas lo cual afecta el proyecto y por ende deben considerarse en los pronósticos y proyecciones financieras del proyecto de inversión.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/50.png', alt='Imagen decorativa')
        .row(titulo="Idiosincrasia de la comunidad")
          .col-md-6.mb-4.mb-md-0
            p Otro asunto de gran relevancia es el sociocultural definido en la idiosincrasia de la comunidad, la manera en que se hacen las cosas, como se ven, se usan, se evalúan y juzgan las cosas la cual es diferente debido a su dinámica cambiante a velocidad vertiginosa los cuales influyen sustancialmente en el estilo de vida, valores, creencias los cuales son influenciados y cambian de manera constante, todos ellos deben considerarse en la determinación de la estrategia comercial propuesta al mercado.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/51.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Iniciando el abordaje de las estrategias de la fase de distribución del producto, encontramos a continuación las fases conocidas como estudio del mercado proveedor y estudio de mercado competidor:

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estudio del mercado proveedor

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-12.mb-3
        .cajon.mb-0.p-4(style="background-color: #E1FBFF")
          p(data-aos="fade-left") Este mercado se constituye en un factor tanto o más decisivo que el mercado consumidor, en su gran mayoría los proyectos dependen de este aliado estratégico para obtener excelentes beneficios, pero lo que sí es cierto es que todos los proyectos requieren que los materiales e insumos suministrados cumplan con calidad, cantidad, oportunidad de la recepción y costo de los materiales. Este estudio es bastante relevante, aquí deben estudiarse todas las alternativas de obtención de materias primas, sus costos, condiciones de compra, sustitutos, durabilidad, necesidad de infraestructura especial para su bodegaje, oportunidad y demoras en la recepción, disponibilidad, seguridad en la recepción, grado de integración de los sistemas de información, entre otros.
      .col-lg-4.col-md-8.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/52.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-left") Con el fin de conocer todos estos aspectos es indispensable que se cuente con un estudio actual o anterior de este mercado y es determinante conocer sus previsiones hacia el futuro, sin obviar que un factor determinante en este aspecto es la disponibilidad y el precio de los insumos, el cual incide en la determinación del cálculo de stock, los costos y el capital de trabajo, incluyendo los precios de insumos, condiciones de pago, políticas de ventas a crédito y descuentos por pronto pago.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.mb-3
        .tarjeta.mb-0.p-4(style="background-color: #E1FBFF")
          .row.justify-content-center 
            .col-lg-7.col-12
              p Este estudio del mercado proveedor puede clasificarse en tres categorías: 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Proveedores de materias primas e insumos
                li 
                  i.fas.fa-angle-right
                  | Proveedores de servicios, como aseo, seguridad, logística, bodegaje.
                li 
                  i.fas.fa-angle-right
                  | Proveedores de tecnología, asociada a las decisiones de operación.
            .col-lg-3.col-12
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/53.svg', alt='Imagen decorativa')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estudio de mercado competidor
    p.mb-4(data-aos="fade-left") El objetivo de este estudio es reconocer la variedad de posibilidades que tiene un consumidor cuando se le presenta la necesidad, por ello la importancia de identificar toda la competencia; suele suponerse que es suficiente estudiar la competencia relacionada con el producto o servicio que se oferta, pero no se le puede restar importancia los productos sustitutos y complementarios porque ellos también trabajan por apropiarse de una cuota del mercado. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12.mb-3
        p(data-aos="fade-left") ¿Cuándo el consumidor tiene necesidad de un bien y no encuentra la marca reconocida dejará de comprar otro producto hasta conseguir su marca predilecta? no, un consumidor buscará su marca de preferencia pero si no la encuentra solucionará con las ofertas adicionales y similares del producto, este es el fundamento que hace indispensable conocer toda la competencia y en este caso conocer cuáles características del producto le atraen, de esta forma, medir el impacto que tiene el competidor y verificar si trasciende más allá de la simple competencia por la colocación del producto.
      .col-lg-5.col-md-8.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/54.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-left") Basado en lo anterior, a través de la siguiente información, encontrará la explicación del Modelo de las Cinco Fuerzas de Porter, en el que se evidencian los factores más relevantes acerca del estudio del mercado y la competencia:

    .tarjeta.tarjeta--gris1.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h4 Poder de negociación de los clientes
            p Siempre existirán varias alternativas de solución, lo crucial de este estudio es elegir la más apropiada pues de esto depende el rumbo a seguir de la organización, así como los efectos de su implementación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/55.svg', alt='Imagen decorativa')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h4 Poder de negociación de los proveedores
            p La capacidad de acordar precios y establecer condiciones favorables para las partes, es una estrategia que genera grandes ventajas cuando se cuenta con el respaldo de los proveedores que en algún momento pueden presionar mediante el incremento de precios de sus productos, para lo cual la empresa debe estar preparada si tiene exclusividad con un solo proveedor o si no ha previsto estos cambios, de manera que es preferible tener tres alternativas de provisión de materias primas e insumo a fin de suplir las emergencias, imprevistos o escasez que las materias primas puedan presentar.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/56.svg', alt='Imagen decorativa')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h4 Productos sustitutos en el mercado y la competencia
            p Mantenerse informado de las tendencias del mercado, de las modificaciones en las decisiones de compra del consumidor como de sus preferencias, motivaciones y tendencias es indispensable para mantener un producto actualizado y que cumpla con las expectativas de los clientes más allá de las innovaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/57.svg', alt='Imagen decorativa')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h4 Nuevos competidores y barreras de entrada en el mercado
            p La empresa debe trabajar fuerte por generar un #[i know how] y ser reconocida por ello. La especialidad brinda a la empresa un cierto grado de seguridad al contar con su propia manera de elaborar sus productos sin ir en contravía de las tendencias del mercado o de la sostenibilidad en todos sus ámbitos. Cuando un sector se especializa genera una barrera de entrada lo que hace que a pesar de que el mercado genere beneficios excelentes haciéndolo atractivo, existan retos para poder ingresar en él.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/58.svg', alt='Imagen decorativa')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h4 Competidores en el mercado
            p El grado de especialización, el <i>know how</i> y las barreras fortalecen la imagen, incrementan la credibilidad y pueden generar mayores beneficios, pero los oferentes en un mercado competido también llegan a acuerdos para controlar el mercado y mantener el control sobre el mercado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/59.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-left") En el análisis de la competencia se busca conocer al detalle la operación de los competidores o rivales, paralelo a conocer en diferentes escenarios como deciden los clientes sus preferencias de compra, además de conocer las posibles ventajas competitivas, como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-6.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/60.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        ul.lista-ul--color.lista-ul
          li 
            i.fas.fa-check
            | El momento indicado y la estrategia comercial contundente y única para ingresar al mercado.
          li 
            i.fas.fa-check
            | Identificar los riesgos que se asumen al ingreso al mercado.
          li 
            i.fas.fa-check
            | Reconocer el número de competidores y productos ofrecidos con sus características.
          li 
            i.fas.fa-check
            | Identificar las ventajas de los competidores y decidir implementar estrategias para superarlos.
          li 
            i.fas.fa-check
            | Similitud entre el mercado objetivo definido y el de los competidores.

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 3.
          span <i>Las 5 fuerzas de Porter</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/61.svg' alt='PENDIENTE TEXTO ALT')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/62.svg' alt='PENDIENTE TEXTO ALT')
    

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Mercado competidor directo 
    
    .row.justify-content-center 
      .col-lg-8.col-12
        p(data-aos="fade-left") Comprendido por las organizaciones que comercializan productos con alto grado de semejanza a los ofertados por el proyecto, así como su táctica o estrategia comercial, también es necesario reconocer las tácticas de comercialización y canales utilizados por la competencia en cuanto al consumidor. 
        .cajon.p-4.mb-3(style="background-color: #E1EFE3")
          p Cada experiencia que se identifique es de vital importancia para la definición de la estrategia comercial propia, entre los antecedentes es muy favorable identificar precio de venta, políticas de ventas y crédito, política de descuento por pronto pago, la política de promoción y publicidad, situación financiera, estrategias implementadas como nivel de integración vertical, alianzas estratégicas y el holding al cual pertenecen, facilitará la determinación las variables para el proyecto.
      .col-lg-4.col-md-8.col-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/63.png', alt='Imagen decorativa')

    p(data-aos="fade-left") En definitiva, el objeto de estudiar la competencia es conocer contra quienes se compite, sus fortalezas y debilidades organizacionales con el fin de encontrar un elemento que pueda servir de oportunidad o favorable para el proyecto y se realiza analizando el precio, la calidad de los productos, los canales de distribución, la manera en que los da a conocer, los valores agregados o servicios extra que ofrece.
    p(data-aos="fade-left") Retomando las estrategias de la fase de distribución del producto, encontramos las fases conocidas como estudio de mercado distribuidor y mercado consumidor.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estudio de mercado distribuidor

    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/64.png', alt='Imagen decorativa')
      .col-lg-6.col-md-8.col-10
        p(data-aos="fade-left") El estudio del mercado distribuidor es un aspecto estratégico especialmente si tienen una gran cobertura geográfica o cuando se orienta a una amplia gama de segmentos dispersos geográficamente. 
        p(data-aos="fade-left") Este estudio es de gran relevancia ya que a partir de aquí se debe definir de acuerdo al tipo de producto y segmento identificado los canales de distribución y es donde el proyecto deberá definir si se lanza a las grandes cadenas de retail, donde el proveedor pierde el control de las condiciones del mercado y debe asumir costos de incorporación, cancelación de publicidad al canal, entrega gratuita de productos, pago de tarifas por el uso de ubicaciones privilegiadas dentro del canal, premios por cumplimiento de metas de venta, mayores plazos de pago, restricciones al uso de factoring con terceros, costos que inciden en la rentabilidad especialmente cuando la posición dominante de los operadores del retail ha contribuido a que las condiciones económicas para el proveedor del canal sean más desfavorables y lo que motiva a que el proveedor deba buscar estrategias de distribución mixtas que no encarezcan el precio del producto o por el contrario incrementan los costos de ventas.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Estudio de mercado consumidor
    p.mb-4(data-aos="fade-left") El estudio del mercado consumidor debe concentrarse en conocer los gustos, deseos y necesidades de cada individuo o cliente potencial los cuales deben ser agrupados de acuerdo con los criterios del tipo de consumidor que se estudie. Al respecto, hay dos grandes agrupaciones: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/65.svg', alt='Imagen decorativa')
          
        h4.text-center a) Consumidor institucional
        p Este consumidor se identifica por administrar racionalmente los recursos por tanto toma decisiones basado en las especificaciones técnicas del producto y de acuerdo con su calidad, precio, oportunidad en la entrega y disponibilidad de repuestos.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/66.svg', alt='Imagen decorativa')
          
        h4.text-center b) Consumidor individual
        p Este consumidor realiza sus compras basado en consideraciones de carácter emocional, como la moda, exclusividad del producto, prestigio de la marca. 

    .row.justify-content-center.mb-4
      p(data-aos="fade-left") Este tipo de mercado requiere un análisis exhaustivo, puede existir la necesidad de llegar al cliente mediante grandes superficies o cadenas de almacenes en una relación (B2B) al disponer los productos mediante grandes superficies donde la relación del proyecto es directamente con el canal y no con el cliente.

    .row.justify-content-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/67.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la relación (B2C) el proyecto busca llegar directamente al cliente y aunque este tipo de distribución es diferente cada una estará orientada al cliente final. Sin embargo, las relaciones con sus clientes serán diferentes, el canal de retail centra sus decisiones de compra en objetivos, como condiciones de compra, plazos de pago, precios, descuentos por volumen, y el cliente siempre decidirá su compra basada en aspectos más subjetivos: marca, imagen, diseño; indistintamente del canal distribuidor cada uno de analizarse de manera objetiva, a fin de proyectar de manera pertinente la demanda. 
            br
            br
    .row.justify-content-center.mb-4
      p(data-aos="fade-left") Este estudio es fundamental para conocer los hábitos de consumo de la población objetivo, sus hábitos de compra, forma de pago, periodicidad, medio que utiliza, la presentación de preferencia, sumado al motivo que le lleva a comprar el producto si es por el envase, la utilidad, presentación, valor agregado, entre otros. Es así que, no se puede obviar la necesidad de conocer el producto sustituto, el grado de fidelidad o lealtad a una marca o lugar de venta, los resultados de las promociones y de la publicidad de la competencia en el consumidor, así como la susceptibilidad de la demanda en cuanto al precio como a las condiciones de crédito, entre otros. 
      p(data-aos="fade-left") La estrategia comercial que se defina tendrá repercusión directa en los ingresos y egresos del proyecto y se verá influida por las características tanto del consumidor como del competidor, en ese orden. Revisemos algunos elementos que se tienen en cuenta en esta estrategia:

    .row.justify-content-center
      .col-lg-10.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/68.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Mercado externo
              p Este mercado interviene de forma transversal en los anteriores, es el quinto del estudio de mercado y de acuerdo con sus particularidades puede ser estudiado de forma aislada o sumado a los anteriores, aplica cuando es necesario acudir a otros proveedores de materias primas. 
              p Estos mercados deben tener una investigación amplia para poder llevarse a cabo, siempre hay competidores que no se tuvieron en cuenta, proveedores dentro de la localización que no habían podido ser consultados, nuevos sistemas de distribución que no se incluyeron e incluso clientes por atender. 
      .col-lg-10.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/69.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Globalización
              p En esta parte del análisis, se deberá reconocer los factores internacionales más influyentes y estudiar su efecto sobre las variables del proyecto, identificando si la presencia, posición y relevancia estratégica que poseen los competidores en mercados como Estados Unidos, la Unión Europea y Asia es significativa.
              p Lo anterior se debe analizar con minucias con el fin de establecer si se va a definir una oferta estandarizada o adaptada del producto e integrando la estrategia global, buscando su expansión a nuevas posibilidades de negocios.

      .col-lg-10.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/70.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Efectos de la globalización
              p Su objetivo está en el avance tecnológico y especialmente en reducir costos al tener la facilidad de mover bienes, servicios, dinero, talento humano e información de manera eficiente. 
              p Esta inmersión en mercado internacionales viene desarrollándose, pero la aceleración del fenómeno es precisamente la característica de este nuevo siglo, sumado a la aparición de la pandemia que en 2020 puso al mundo a prueba frente a todos estos retos que se vienen logrando en unidad de los siguientes aspectos: 
    .row.justify-content-center 
      .col-lg-8.col-12
        ul.lista-ul--color.lista-ul
          li 
            i.fas.fa-check
            | En la esfera política, triunfo (parcial) de la alianza entre la democracia y el mercado.
          li 
            i.fas.fa-check
            | El establecimiento de un mercado financiero mundial que funciona en tiempo real trayendo cada vez más innovaciones financieras con mayor seguridad en favor del usuario, generando mayores controles de cambio.
          li 
            i.fas.fa-check
            | La consolidación de casas matrices o empresas de gran envergadura que tiene estructuras en el mundo entero y no se limitan por barreras geográficas pues no las conocen.
          li 
            i.fas.fa-check
            | La agilidad en la transmisión universal de la información e instantánea en tiempo real.

    .tarjeta.tarjeta--azul.mb-5(data-aos="zoom-in-up")
      .p-4.p-lg-5
        SlyderA.bn.mb-4(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Medio, política y legal
              p.mb-0 Este aspecto condiciona el comportamiento de todo un sistema, por esa razón se incluye en el estudio del mercado externo, abarca todos los aspectos relacionados y condicionados a las decisiones de una nación y está relacionado con el punto de vista, la seguridad y generación de expectativas en diferentes niveles para los agentes del mercado. 
              p.mb-0 Cuando las naciones se encuentran en etapa electoral el interés por invertir disminuye sustancialmente y decae afectando directamente el proyecto de inversión, así como en aspectos sociales, culturales, entre otros.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/71.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Incertidumbre
              p.mb-0 La incertidumbre es la inestabilidad de un medio o una situación, por esa razón si el entorno cambia con frecuencia se denomina Entorno Dinámico, si los cambios que se presentan en el medio son mínimos es un Entorno Estable. 
              p.mb-0 El grado de incertidumbre de cambio corresponde a un cambio imprevisto y el grado de incertidumbre de complejidad hace alusión al número de factores en el entorno organizacional.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/72.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Mercado objetivo
              p.mb-0 Corresponde a una previsión del desarrollo del mercado histórico y el actual, así como su proyección o el análisis del potencial mercado objetivo, dirigido a los clientes relacionados con los productos y servicios a ofertar en el proyecto de inversión.
              p.mb-0 Se da cuando se ha identificado diferentes segmentos, así como para ubicar el nicho de mercado, conocer la motivación de compra, determinando su ventaja competitiva, reconociendo barreras de entrada en el mercado, los puntos clave de éxito, la evolución y proyección actual.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/73.png", style="width: 450px" ,alt='').m-auto
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Contribución a la FODA
              p.mb-0 Esta matriz tiene la facultad de evidenciar los aspectos fuertes y débiles, internos y externos que tiene la organización, las amenazas son todos esos factores externos que influyen en la empresa negativamente, su ocurrencia puede ser desastrosa.
              p.mb-0 Una de las ventajas de aplicar esta matriz es que la organización tiene información de base para prepararse y enfrentar, reduciendo el grado del riesgo que el proyecto de inversión debe asumir.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/74.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Oportunidades
              p.mb-0 Representan los aspectos que se encuentran en el medio y son favorables para el proyecto, como es el caso de la demanda insatisfecha, los incentivos gubernamentales por la actividad del proyecto, las ventajas comparativas sobre el resto de la industria, la experiencia de ejecución de proyectos similares, así como los <i>stakeholders</i> en el medio externo.

            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/75.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Demanda de un producto
              p.mb-0 Tiene una alta incidencia en los resultados de la empresa y en los resultados que ésta tendrá lo cual conlleva a su aprobación. 
              p.mb-0 Difiere la demanda que tiene el producto la cual representa el número de consumidores en una zona, frente a la segunda demanda que se representa por las unidades consumidas por el mercado serán provistas por el proyecto o empresa. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/76.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Estimación de la demanda
              p.mb-0 El cálculo de la demanda inicia con establecer la cobertura o alcance geográfico del producto o servicio del proyecto de inversión, tiene diferentes implicaciones si el proyecto abarca una zona o región determinada o la suma de regiones en todo el país.
              p.mb-0 De ahí la importancia de definir la táctica de desarrollo del proyecto, definiendo en cual zona o región es más trascendental realizar un lanzamiento.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/77.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Factores que determinan el comportamiento de la demanda 
              p.mb-0 La cantidad demandada de un producto o servicio depende del precio fijado, del ingreso de los consumidores, del precio de los bienes sustitutos o complementarios y de las preferencias del consumidor.
              p.mb-0 En este análisis de viabilidad es imprescindible definir la naturaleza de la demanda del bien que se producirá, así como de los factores que influyen, la dimensión de los efectos ante la modificación en ciertos parámetros que se definen apropiados. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/78.png", style="width: 450px" ,alt='').m-auto
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Instrumentos

    .row.justify-content-center.mb-4 
      .col-lg-7.col-10.mb-3
        p(data-aos="fade-left") Los instrumentos de investigación de mercado son claves en el análisis para las organizaciones que buscan profundizar en el mercado al que pertenecen y por la importancia de este estudio requieren información confiable. Las empresas pequeñas realizan investigaciones propias a través del profesional o jefe del departamento de mercado, en otros casos esta labor se delega al líder de innovación y desarrollo, y en las empresas de mayor tamaño y cobertura esta labor es tercerizada, de manera que se contrata a una firma consultora experta en este tema para su realización.
        p(data-aos="fade-left") Para recoger la información correspondiente se debe definir el tipo de investigación que se va a realizar, las cuales pueden ser primarias o secundarias, veamos:
      .col-lg-5.col-md-8.col-10.mb-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/79.png', alt='Imagen decorativa')

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/80.svg', alt='Imagen decorativa')
          
        h2.text-center La investigación primaria 
        p Se lleva a cabo a través de una entrevista a expertos de un mercado específico con el objeto de recolectar nueva información, su ventaja radica en que a través de este tipo de investigación se recopila únicamente la información necesaria.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/81.svg', alt='Imagen decorativa')
          
        h2.text-center La investigación secundaria 
        p Se utiliza a partir de registros o estudios históricos, en este tipo de estudio se ahorra tiempo y dinero porque no se aplican instrumentos, acude a fuentes veraces como la Cámara de Comercio, el Ministerio de Comercio, Industria y Turismo (MINCIT), de gremios, investigaciones de universidades, entre otros para el análisis, manejo, gestión y consolidación de nuevas conclusiones.

    .tarjeta.tarjeta--gris1.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p La recolección de la información debe realizarse haciendo uso de un proceso planeado paso a paso, para que de manera estructurada y coherente se obtengan resultados que coadyuven favorablemente al logro de los objetivos planteados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/82.svg', alt='Imagen decorativa')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p La búsqueda de la información se realiza basada en elementos del punto focal o situación objeto de estudio, el planteamiento de preguntas relevantes, las variables intervinientes en el proceso y los indicadores que permiten operacionalizarlas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/83.svg', alt='Imagen decorativa')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Es necesario construir el plan de trabajo con el paso a paso del proceso a realizar, para evitar inconvenientes en la búsqueda de información, si no se realiza de manera ordenada, que a su vez, permita evaluar la confiabilidad y validez tanto del proceso mismo, como de la información recolectada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/84.svg', alt='Imagen decorativa')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            p Al diseñar los instrumentos de recolección de información, es recomendable realizar su aplicación con el fin de evaluar su pertinencia a través de una prueba piloto, así se evalúa el desarrollo de actividades ya en campo y posteriormente, se sugieren algunas modificaciones antes de realizar el estudio en su totalidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/85.svg', alt='Imagen decorativa')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Este debe incluir un esquema de control de calidad para validar la correlación entre los datos procesados y los datos recolectados, que contemple el proceso a llevar a cabo para definir la veracidad de los datos recolectados por el encuestador, observador y/o entrevistador.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/86.svg', alt='Imagen decorativa')

        .row(titulo="Paso 6")
          .col-md-6.mb-4.mb-md-0
            p La información recolectada debe cumplir con dos características, de confiabilidad, considerada como la capacidad del instrumento para arrojar datos o mediciones que correspondan a la realidad que se pretende conocer.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/87.svg', alt='Imagen decorativa')
        .row(titulo="Paso 7")
          .col-md-6.mb-4.mb-md-0
            p La validez de un instrumento de recolección de información, definida como la propiedad del instrumento para medir u observar lo que se pretende o el objeto de la investigación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/88.svg', alt='Imagen decorativa')
        .row(titulo="Paso 8")
          .col-md-6.mb-4.mb-md-0
            p Esta condición es fundamental para obtener la confiabilidad, la validez se relaciona con la verosimilitud o más precisamente con la correspondencia entre el modelo teórico construido en la investigación y la realidad empírica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/89.svg', alt='Imagen decorativa')
        .row(titulo="Paso 9")
          .col-md-6.mb-4.mb-md-0
            p Se habla de validez interna o credibilidad para referirse a la congruencia entre las observaciones realizadas en el trabajo de campo y la realidad tal como la perciben los sujetos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/90.svg', alt='Imagen decorativa')
    .row.mb-4
      p(data-aos="fade-left") En los últimos tiempos varias disciplinas científicas han incorporado la triangulación como uno de los procedimientos para asegurar la validez y la confiabilidad de la información que utilizan. Si eso se ha hecho creciente en las ciencias sociales, éstos también son comunes en las ciencias biológicas, en las disciplinas tecnológicas y en algunas de las ciencias naturales.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Instrumentos y técnicas empleados en el estudio de mercados
    .row.mb-4
      p(data-aos="fade-left") A la hora de llevar a cabo un estudio de mercados, es de importancia puntualizar que se lleva a cabo un proceso de investigación donde es clave reconocer las diferentes técnicas e instrumentos que se pueden emplear de acuerdo al tipo de información requerida y a la fuente de información con la que se cuenta. Entre otras técnicas e instrumentos se encuentran los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 4.
          span <i>Técnica e instrumentos de recolección de información</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/91.svg' alt='PENDIENTE TEXTO ALT')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/92.svg' alt='PENDIENTE TEXTO ALT')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Tipos de instrumentos empleados en el estudio de mercados
    
    .row.mb-4
      p(data-aos="fade-left") Existen diferentes instrumentos para recopilar información que son usados según su propósito, los cuales cumplen su función, de acuerdo con el diseño que se realice, el cual debe ser validado y puesto a prueba para comprobar su pertinencia y eficiencia en cuanto al logro del objetivo propuesto. Se considera que los tipos de instrumentos para recolectar información son clasificados según el tipo de información a recolectar; es decir, si es cuantitativa o cualitativa, así:

    .row.justify-content-center.mb-5.bg-color-4
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Instrumentos  de recolección de información cualitativa
        p.mb-4(data-aos="fade-left") Los instrumentos de recolección de información cualitativa son necesarios debido a la existencia de la investigación cualitativa basada en la comparación. Este tipo de instrumentos son utilizados en proyectos donde se requiere demostrar una teoría, donde existe una variable dependiente y una independiente, es decir, proyectos de tipo social o que analiza el comportamiento humano en un entorno determinado indiferente el sector al que corresponda. 
        .row.justify-content-center 
          .col-lg-4.col-8
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/93.svg', alt='Imagen decorativa')
          .col-lg-7.col-12
            p(data-aos="fade-left") Los instrumentos de recolección de información cualitativa son: 
            ul.lista-ul--color.lista-ul
              li 
                i.fas.fa-check
                | Entrevistas.
              li 
                i.fas.fa-check
                | Observación participante.
              li 
                i.fas.fa-check
                | Análisis documental.
              li 
                i.fas.fa-check
                | Autorreportaje.
              li 
                i.fas.fa-check
                | Categorización. Triangulación y teoría fundamentada.
              li 
                i.fas.fa-check
                | Perspectivas de diferentes autores.
              li 
                i.fas.fa-check
                | Documentos de archivo y fuentes gubernamentales.
              li 
                i.fas.fa-check
                | Comunidades <i>online</i>.
          li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Instrumentos  de recolección de información cuantitativa
          p.mb-4(data-aos="fade-left") En cuanto a los instrumentos de recolección de información cuantitativa difieren de los instrumentos de recolección de información cualitativa en que su uso es fundamental para conocer datos o cifras frente a una situación, variable o problema a identificar, por esta razón algunos instrumentos incluidos anteriormente, pero su uso hace que sean clasificados de esta manera debido a que están orientados a obtener datos concretos y numéricos sobre la variable, situación o problema objeto de estudio.
          p.mb-4(data-aos="fade-left") Los instrumentos de recolección de información son elementos utilizados y diseñados de acuerdo con el objetivo a partir del problema que origina la investigación, por esta razón en este apartado se incluyen los instrumentos en cada tipología con la claridad de que su diseño y aplicación debe ser acorde a la información que se espera obtener. 
          p.mb-4(data-aos="fade-left") Y están sujetos al tipo de investigación, método y técnica empleada en el estudio o investigación. Los instrumentos de recolección de información cuantitativa son: 
          .row.justify-content-center.align-items-center
            .col-lg-5.col-12
              ul.lista-ul--color.lista-ul
                li 
                  i.fas.fa-check
                  | Entrevistas.
                li 
                  i.fas.fa-check
                  | Cuestionario físico y #[i online].
                li 
                  i.fas.fa-check
                  | Observación cuantitativa.
                li 
                  i.fas.fa-check
                  | Documentos de archivo y fuentes gubernamentales.
                li 
                  i.fas.fa-check
                  | Focus groups presenciales y #[i online].
                li 
                  i.fas.fa-check
                  | Comunidades #[i online].
                li 
                  i.fas.fa-check
                  | Experimentos de laboratorio.
            .col-lg-4.col-8
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/94.svg', alt='Imagen decorativa')
    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Técnicas de recolección de información en un estudio de mercado
    p(data-aos="fade-left") Una vez reconocimos los instrumentos, revisemos algunas técnicas empleadas en la investigación de mercados como la encuesta, la observación, la entrevista, etc.:

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Encuestas
        p(data-aos="fade-left") La encuesta es una técnica de investigación que busca describir, analizar y establecer las relaciones entre variables en poblaciones o grupos particulares, propicia cuando se desea obtener el conocimiento colectivo o de tipos de participantes como instituciones o fenómenos. Se utiliza en procesos en que se requiere conocer un asunto u objetivo de investigación de manera amplia por lo que se convierte en el instrumento más apto para alcanzar una comunidad, la encuesta puede ser:
        .row.justify-content-center.mb-4
          .col-lg-5.col-10.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/95.svg', alt='Imagen decorativa')
          .col-lg-5.col-10.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/96.svg', alt='Imagen decorativa')
            
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Observación
        p.mb-4(data-aos="fade-left") Técnica de recolección de información que consiste en la inspección y estudio de los hechos u objeto de investigación, tal como ocurren en la realidad, a través del uso de los sentidos (con o sin ayuda de soportes tecnológicos) de acuerdo con los requerimientos de estudio y a partir de las categorías perceptivas definidas desde las teorías científicas que apoyan la investigación. Los tipos de técnicas de observación existentes son: 

        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/97.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-4
                  h5 Directa
                  p Es aquella donde se tienen un contacto directo con los elementos o caracteres en los cuales se presenta el fenómeno que se pretende investigar, y los resultados.
        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/98.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul2
                .p-4
                  h5 Indirecta
                  p Ocurre cuando el acto de observación requiere de la utilización de instrumentos apropiados para la captación de las características del fenómeno.
        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/99.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-4
                  h5 Participante
                  p Atañe a la observación que realiza el investigador de manera cercana a la realidad.
        .row.justify-content-center
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/100.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul2
                .p-4
                  h5 No participante
                  p Corresponde a la observación que se realiza por parte del investigador sin acercarse a la realidad.
          
        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Entrevista
          
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-8-col-10
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/101.png', alt='Imagen decorativa')
          .col-lg-6.col-12
            p(data-aos="fade-left") Es una herramienta principalmente para la recolección de datos cualitativos, aunque se precisa que de acuerdo con el diseño que se realice puede ser utilizada para la recolección de datos cuantitativos. Es de uso cotidiano como instrumento para recopilar información debido a su flexibilidad. Las interacciones que se generan en una entrevista pueden presentarse de forma estructurada o semiestructurada para generar ideas y conceptos.
        
        .row.justify-content-center.mb-4
          p(data-aos="fade-left") En el diseño de la entrevista, se deben tener en cuenta aspectos como la exhaustividad, el tacto, la precisión, la exactitud y la confidencialidad. Las entrevistas requieren habilidades especializadas por parte del entrevistador, que deberá tener una buena relación con el entrevistado para garantizar que realmente se recolectan y transcriban eficazmente un conjunto de datos cualitativos muy detallados y válidos. Los tipos de entrevista son:
        
        .row.justify-content-center.mb-4
          .col-lg-4.col-12
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/102.svg', alt='Imagen decorativa')
            h5.text-center a) Estructura o formal
          .col-lg-4.col-12
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/103.svg', alt='Imagen decorativa')
            h5.text-center b) No estructurada o informal
          .col-lg-4.col-12
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/104.svg', alt='Imagen decorativa')
            h5.text-center c) Semiestructurada
        
        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Recopilación / Revisión / Análisis Documental

        p(data-aos="fade-left") El fundamento de una investigación se origina en la revisión o análisis de fuentes bibliográficas las cuales pueden ser personales como testimonios, entrevistas, grupales, institucionales, formales o informales. En estas fuentes se encuentran diferentes tipos de información de incalculable valor que pueden consolidarse como piezas claves para el desarrollo del estudio o investigación. Para realizar el análisis documental es necesario: 

        .row.justify-content-center.mb-4
          .tarjeta.tarjeta--azul
            LineaTiempoB.mb-5(:datos="datosLineaTiempoB")

        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Método Delphi
        
        p.mb-4(data-aos="fade-left") Procedimiento que se realiza para obtener ideas y opiniones de personas expertas en un tema; para ello, estas personas, deben discutir y llegar a un acuerdo o consenso. Su proceso de aplicación consiste en: 

        .row.mb-5
          .col-md-6.col-lg.tarjeta--tabla1.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/110.svg' alt='AvatarTop')
            p.text-center a) Identificar la idea central o problema.

          .col-md-6.col-lg.tarjeta--tabla2.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/111.svg' alt='AvatarTop')
            p.text-center b) Seleccionar los expertos.
          
          .col-md-6.col-lg.tarjeta--tabla1.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/112.svg' alt='AvatarTop')
            p.text-center c) Formación el panel (objetivos del estudio, criterios de selección, presupuesto, cronograma y tiempo de las sesiones, y recompensa o beneficios por ser parte del estudio).

          .col-md-6.col-lg.tarjeta--tabla2.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/113.svg' alt='AvatarTop')
            p.text-center d) Elaboración y aplicación del presupuesto, y confirmación de resultados.
        
        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Focus Group

        p(data-aos="fade-left") Es una técnica cualitativa de recolección de datos. Consiste en realizar una entrevista en grupo con el objetivo de recoger información sobre un número específico de preguntas. Es muy útil para recoger información de manera inmediata y espontánea bajo la instrucción de un moderador el cual socializa la herramienta y presente el objetivo de su aplicación.
        p.mb-5(data-aos="fade-left") Consiste en un conversatorio que se realiza alrededor de un tema planteado por el investigador. La manera en la que se desarrolla la conversación se rige por medio de la rotación de turnos para participar. Se utiliza mayormente para realizar una investigación de mercado, se basa en enfocar un objeto e investigarlo; se realiza con un grupo de personas interactuando y compartiendo ideas sobre el producto a evaluar. Busca realizarse siguiendo los siguientes pasos:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .row.justify-content-center.align-items-center
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/150.svg', alt='')
            .col-lg-10.col-7
              h5 Definir el problema:
              p Previo a la convocatoria de los participantes del Focus Group se debe precisar que es lo que se va a evaluar.
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/151.svg', alt='')
            .col-lg-10.col-7
              h5 Elegir a los participantes:
              p Una vez que se haya determinado el problema, se elige a los participantes; estos pueden ser obtenidos de una base de datos aleatoria.
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/152.svg', alt='')
            .col-lg-10.col-7
              h5 Seleccionar al moderador:
              p Esta persona debe estar consciente de todos los procesos y del estudio.
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/153.svg', alt='')
            .col-lg-10.col-7
              h5 Planificar el diálogo:
              p Se debe informar a los participantes sobre el proceso del Focus Group, además del tiempo y recursos.
            hr
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/tema1/154.svg', alt='')
            .col-lg-10.col-7
              h5 Resultados:
              p Es importante que se grabe la sesión para obtener resultados más confiables.
            hr

        //-.row.justify-content-center.mb-4
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Definir el problema:
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Previo a la convocatoria de los participantes del Focus Group se debe precisar que es lo que se va a evaluar.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Elegir a los participantes:
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Una vez que se haya determinado el problema, se elige a los participantes; estos pueden ser obtenidos de una base de datos aleatoria.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Seleccionar al moderador:
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Esta persona debe estar consciente de todos los procesos y del estudio.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Planificar el diálogo:
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Se debe informar a los participantes sobre el proceso del Focus Group, además del tiempo y recursos.
          .col-md-5.tarjeta.color-primario.p-4.mb-4(style="background-color: #0C5E46")
            h4 Resultados:
          .col-md-7.tarjeta.color-acento-botones.p-4.mb-4(style="background-color: #D2E1F1")
            p Es importante que se grabe la sesión para obtener resultados más confiables.

        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Autorreportaje
          .row.justify-content-center.mb-4
            .col-lg-3.col-8.mb-3
              figure.mb-3(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/114.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-3
              p(data-aos="fade-left") Es una técnica donde el mismo informante reportará su situación o experiencia, solicitada por el investigador. Para desarrollar el autorreportaje es necesario elaborar un guion con preguntas puntuales y fundamentales relacionadas con el suceso o vivencia.
              p(data-aos="fade-left") Para la implementación de las técnicas revisadas, el principal instrumento sin duda es el cuestionario, pues es en esencia la clave del éxito de la aplicación de las técnicas.

        li.text-bold.mb-4(style="color: #0C5E46")(data-aos="zoom-in-down") Cuestionario
        p(data-aos="fade-left") Herramienta diseñada para la recolección de información cualitativa y de datos cuantitativos, es pertinente para recolectar datos estandarizados y hacer generalizaciones. Además, es considerado una subdivisión de la encuesta y es útil para agilizar la investigación proporcionando respuestas rápidas. Su elaboración debe ser cuidadosa y profesional de manera que las preguntas no influyan en la respuesta que se espera recibir. 
        .row.justify-content-center 
          .col-lg-6.col-8.mb-4
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/115.png', alt='Imagen decorativa')
          .col-lg-6.col-12.mb-4
            p(data-aos="fade-left") Este tipo de instrumento se diseña con preguntas abiertas donde la respuesta no está condicionada, sino que se tiene la facilidad de responder a criterio propio y con su propio lenguaje. También se puede elaborar con preguntas cerradas si el objeto de aplicación del instrumento requiere respuestas precisas que develan la causa de una situación o raíz de un problema.
        p(data-aos="fade-left") En la fase final de la investigación del estudio de mercado, se inicia el proceso de abordaje de los datos recolectados, a través de ejercicios de categorización y triangulación, revisemos en detalle en qué consisten estos procesos:

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Categorización, triangulación y teoría fundamentada
    .row.justify-content-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/116.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Consiste en realizar un proceso a través del cual se busca reducir la información de la investigación con el fin de describirla de manera conceptual y que ésta responda a una estructura sistemática e inteligible para las personas y que a su vez sea significativa. Para que esta información conserve su carácter en este proceso de categorización, es necesario que el investigador conserve los tópicos tratados en la investigación ya que esto permite mantener los resultados de la investigación encontrados por su autor.
            br
            br
    p.mb-4(data-aos="fade-left") También es pertinente mencionar que esta herramienta es un proceso cognitivo complejo de clasificación según su semejanza y diferencias encontradas que responden a unos criterios previamente determinados, es decir, la agrupación de información de acuerdo con sus características en capítulos, apartados o conjuntos y subconjuntos a los que se les debe asignar nombre. Las categorías se dividen en tres clases: deductivas, inductivas y abductivas, las cuales se representan en el esquema a continuación.

    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 5.
          span <i>Tipos de categorías</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/117.svg' alt='PENDIENTE TEXTO ALT')
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/118.svg' alt='PENDIENTE TEXTO ALT')

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Triangulación
    p.mb-4(data-aos="fade-left") Cumple con la función de validar la información obtenida y consiste en el uso de dos o más aproximaciones en el análisis de un mismo grupo de datos, con el propósito de realizar su validación. Se lleva a cabo comparando el resultado del análisis de datos, usando diferentes técnicas de análisis cualitativo para evaluar en forma similar los resultados disponibles. Sirve para identificar patrones similares y así verificar los hallazgos. Existen los siguientes tipos de triangulación:

    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .row.mb-0
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/119.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .text-white.p-4
                  h4.text-center La triangulación teórica
                  p Consiste en el uso de diferentes perspectivas o diferentes tópicos esenciales en la información analizada.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/120.svg' alt='AvatarTop')
              .tarjeta(style="background-color: #E1EFE3")
                .p-4
                  h4.text-center La triangulación metodológica
                  p Consiste en la combinación de dos o más resultados de recolecciones de datos con similitudes aproximadas en el mismo estudio.

    p(data-aos="fade-left") Cada estudio se debe codificar y analizar separadamente para luego compararlos con el fin de validarlos y luego se comparan como una manera de validar los hallazgos. Todo este proceso es indispensable cuando la información hallada es suficiente o muy amplia, con el fin de controlar el sesgo personal de los investigadores y cubrir deficiencias intrínsecas de un investigador o de una teoría o de un método de estudio y de esta manera confirmar la validez de los resultados.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Comunidades #[i online]
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-3
        figure.mb-3(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/121.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Llamadas también #[i Insight Community] herramienta que utilizan las organizaciones que poseen su marca con el fin de realizar investigación con un grupo de personas de interés de la marca con el fin de conocer sus comentarios, observaciones y sugerencias por lo cual es necesario mantener una audiencia en contacto a través de foros, encuestas y sondeos.
        p(data-aos="fade-left") Este instrumento es muy valorado por las empresas pues a través de ellas las organizaciones encuentran información inmediata lo cual les permite conocer el amplio conocimiento que poseen los participantes. Existen diferentes tipos de comunidades #[i online], veamos:

    .col.desktop
      .row.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades de marca 
                p.text-small En este tipo de comunidad se vinculan personas que aman la marca y quieren contribuir con sus aportes para su retroalimentación, estos tipos de participantes son considerados la población objetivo, son leales lo que hace que sus aportes sean valiosos porque corresponden a la realidad debido a su sinceridad.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/122.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades temáticas o de nichos
                p.text-small Son comunidades que buscan información de manera gratuita por tanto no necesariamente pertenecen a una marca, sino que su enfoque son temas específicos atractivos para ciertos públicos, los cuales pueden ser ofrecidos a industrias específicas interesadas en ese tema especialmente.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/123.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades genéricas
                p.text-small Está integrada por personas con diversos perfiles que participan en diferentes áreas, dependiendo el perfil profesional o personal que requiera la investigación. Aquí se utilizan encuestas para perfilar y segmentar los participantes en estudios específicos.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/124.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades de clientes
                p.text-small Esta comunidad integrada por clientes de la marca que participan en diferentes actividades como fotos o lluvias de ideas sobre nuevos productos y servicios.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/125.svg')})`}")

    .col.movil
      .row.mb-5.justify-content-center
        .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-11
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor.p-5
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades de marca 
                p.text-small En este tipo de comunidad se vinculan personas que aman la marca y quieren contribuir con sus aportes para su retroalimentación, estos tipos de participantes son considerados la población objetivo, son leales lo que hace que sus aportes sean valiosos porque corresponden a la realidad debido a su sinceridad.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/122.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-11
          .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor.p-5
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades temáticas o de nichos
                p.text-small Son comunidades que buscan información de manera gratuita por tanto no necesariamente pertenecen a una marca, sino que su enfoque son temas específicos atractivos para ciertos públicos, los cuales pueden ser ofrecidos a industrias específicas interesadas en ese tema especialmente.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/123.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-11
          .tarjeta.tarjeta-slide.arriba.p-2(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor.p-5
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades genéricas
                p.text-small Está integrada por personas con diversos perfiles que participan en diferentes áreas, dependiendo el perfil profesional o personal que requiera la investigación. Aquí se utilizan encuestas para perfilar y segmentar los participantes en estudios específicos.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/124.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-11
          .tarjeta.tarjeta-slide.arriba.p-4(@mouseover="indicadorTarjetaSlide = false")(style="background-color: #DBE5F3")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor.p-5
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4.text-small Comunidades de clientes
                p.text-small Esta comunidad integrada por clientes de la marca que participan en diferentes actividades como fotos o lluvias de ideas sobre nuevos productos y servicios.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/125.svg')})`}")

    .row.justify-content-center.mb-3
      p(data-aos="fade-left") Las comunidades #[i online] son una inversión productiva para las empresas porque generan un espacio adecuado para recolectar información al instante y generan relaciones más estrechas que logran llegar a la fidelidad.
      p(data-aos="fade-left") Sin embargo, es de resaltar que, de las técnicas e instrumentos de recolección de información más apropiadas para un estudio de mercado, se han encontrado los instrumentos: el Método Delphi y el Focus Group. 

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Segmentación
    p.mb-4(data-aos="fade-left") Definir el consumidor individual sustenta la necesidad de los estudios de mercado de acudir a técnicas de investigación etnográficas; es decir, al análisis del comportamiento del cliente en su contexto, donde lo importante no es lo que las personas manifiestan o dicen sino lo que realmente realizan.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/126.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando el producto del proyecto de inversión se ha diseñado para satisfacer al mercado personal la proyección de la demanda se torna compleja debido a la subjetividad que viene sumada en la decisión de compra, en este caso la definición de la demanda depende de la caracterización del consumidor lo que implica saber quién toma la decisión de compra.
              br
              br
    
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E1FBFF")
          p De acuerdo con lo anterior, se puede confirmar que las tendencias de segmentación son cambiantes constantemente y crecen cada vez más, por lo que se debe encontrar el equilibrio para gestionar la segmentación exitosamente lo cual se soporta y se consolida mediante los procesos de capacitación, las alianzas estratégicas, la tecnología, el conocimiento profundo del producto o servicio y la identificación precisa de consumidores y clientes aspectos que facilitan el proceso de segmentación de mercado.
    p.mb-5(data-aos="fade-left") Para realizar la segmentación se debe conocer la magnitud del mercado; es decir, saber dónde están ubicados los clientes o usuarios cuyas necesidades el proyecto se encuentra en capacidad de satisfacer, definir la necesidad que se espera satisfacer, así como el tamaño del mercado al que ingresa y definir el producto o servicio satisfactor de manera precisa de la siguiente manera:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Mercado Total")(style="background-color: #FEF5E5")
        p Son las personas del mercado total que tienen una necesidad por satisfacer y cuentan con las condiciones para adquirir un producto o servicio para satisfacerlas y son de interés para la organización en el largo plazo. 
      .tarjeta.color-acento-botones.p-4(titulo="Mercado potencial")(style="background-color: #FEF5E5")
        p Integrado por el conjunto de personas que tienen una necesidad por satisfacer a través de un producto o servicio.
      .tarjeta.color-acento-botones.p-4(titulo="Mercado meta")(style="background-color: #FEF5E5")
        p Conjunto de compradores o consumidores del mercado potencial que tienen necesidades u objetivos comunes, a los cuales la organización decide satisfacer o atender en el corto plazo.
      .tarjeta.color-acento-botones.p-4(titulo="Mercado real")(style="background-color: #FEF5E5")
        p Es el mercado objetivo o nicho de mercado, subgrupo más específico del mercado meta que tiene características especiales y buscan un conglomerado de beneficios que han sido captados por la empresa y son el grupo estratégico a corto plazo.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/127.svg' alt='AvatarTop')
        h4.text-center Reconocimiento de la situación actual de mercado
        li Identificar las necesidades específicas satisfechas por mercados actuales
        li Ubicar las necesidades no satisfechas adecuadamente por ofertas actuales
        li Descubrir necesidades futuras que no han sido reconocidas

      .tarjeta.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/128.svg' alt='AvatarTop')
        h4.text-center Identificar características especiales que caracterizan los segmentos
        li Establecer los criterios y las variables a analizar
        li Contar con fácil acceso al segmento.

      .tarjeta.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/129.svg' alt='AvatarTop')
        h4.text-center Identificar la necesidad de cada quien
        li Calcular la demanda del segmento.
        li Estimar la magnitud del segmento.

      .tarjeta.p-4(style="background-color: #E1EFE3")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/130.svg' alt='AvatarTop')
        h4.text-center Identificar la forma de satisfacer totalmente esa necesidad
        li Diseñar un plan de distribución.
        li Puesta en marcha del programa promocional.
        li Establecer una filosofía empresarial del servicio.
        li Llevar el registro y control de los resultados.
    p.mb-4(data-aos="fade-left") La segmentación del mercado es un proceso a través del cual se divide un mercado en grupos con características similares lo que los hace uniformes y homogéneos, así como sus necesidades. Por ser grupos pequeños de consumidores es posible que sus respuestas sean muy parecidas y es gracias a estas razones que aparecen los tipos de segmentación.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12.mb-0
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 6.
          span <i>Formas de segmentar el mercado</i> 
        figure.desktop(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/131.svg' alt='PENDIENTE TEXTO ALT')
          figcaption Nota.  https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69104
        figure.movil(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/132.svg' alt='PENDIENTE TEXTO ALT')
          figcaption Nota.  https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69104
    p.mb-4(data-aos="fade-left") El término segmentación del mercado es más utilizado en lo referente a indagar acerca de la población a la que se dedicará el proyecto, bien sea con la oferta de un producto o servicio, por esa razón se suele pensar que es única, pero se han definido los diferentes tipos de segmentación que se presentan a continuación:

    .row.justify-content-center.mb-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="La segmentación por producto")
          .col-md-6.mb-4.mb-md-0
            p Consiste en desarrollar un producto que con sus atributos logre satisfacer las necesidades de este segmento.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/133.png', alt='Imagen decorativa')
        .row(titulo="La segmentación por comportamiento de compra")
          .col-md-6.mb-4.mb-md-0
            p Está orientada al sector industrial y realizan su compra de acuerdo con el proceso de compra realizado por los consumidores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/134.png', alt='Imagen decorativa')
        .row(titulo="La segmentación por usos")
          .col-md-6.mb-4.mb-md-0
            p Utilizada para segmentar el mercado de acuerdo con los diferentes usos o formas de utilizar el producto.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/135.png', alt='Imagen decorativa')
        .row(titulo="La segmentación por lugar de compra")
          .col-md-6.mb-4.mb-md-0
            p Es la clasificación de los lugares o zonas donde se adquiere el producto con dos criterios por establecimiento comercial o su ubicación geográfica.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/136.png', alt='Imagen decorativa')

        .row(titulo="La segmentación por forma de pago")
          .col-md-6.mb-4.mb-md-0
            p Es la identificación de la forma en que el cliente cancela o adquiere el producto. Estas son: efectivo, crédito, tarjetas débito, vía electrónica.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/137.png', alt='Imagen decorativa')
        .row(titulo="La segmentación por categorías demográficas")
          .col-md-6.mb-4.mb-md-0
            p Es aquella que tiene como base la edad, sexo, ingresos, educación, lugar de origen, entre otros.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/138.png', alt='Imagen decorativa')
        .row(titulo="La segmentación por beneficios")
          .col-md-6.mb-4.mb-md-0
            p Consiste en fraccionar el mercado en submercados homogéneos de acuerdo con los beneficios y bondades que buscan los consumidores del producto.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/139.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-4
      p(data-aos="fade-left") La segmentación debe ser medible, accesible, delimitable, oportuna, funcional, viable, confiable y rentable.

    .h4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas(style="color: #0C5E46") Variables de segmentación de mercado
    .row.justify-content-center.mb-3
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-4.col-8.mb-3
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/140.svg', alt='Imagen decorativa')
          .col-lg-8.col-8.mb-3
            p(data-aos="fade-left") Las variables de segmentación de mercado son determinantes para conocer el nicho de mercado que atenderá la empresa, son tan importantes porque ellas permiten acercarse al cliente que se identifica con las condiciones del producto o servicio a ofrecer y se dice que a mayor cantidad de variables más cerca se estará de conocer el cliente del proyecto de inversión o empresa.
            p(data-aos="fade-left") De acuerdo con lo anterior, es claro que entre más variables se tengan en cuenta mayor será el cúmulo de información a recoger, clasificar, analizar y validar, llevando un mayor tiempo de abordaje, lo que puede tornarse desgastante y no facilita el objetivo de investigación. Por esta razón lo aconsejable es definir entre tres o cuatro variables que se relacionen con el producto o servicio a ofertar y permitan definir con claridad el segmento o nicho de mercado del proyecto de inversión u organización.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.mb-4.align-items-center
          .col-lg-8.col-12.mb-3
            .tarjeta.p-4(style="background-color: #E1FBFF")
              li Edad
              li Sexo
              li Estado civil
              li Tamaño de la familia o número de integrantes
              li Nivel económico o de ingresos
              li Nivel académico o último grado de educación
              li Zona de residencia: urbana o rural
              li Nivel climatológico: zonas húmedas, secas, calurosas, frías y cálidas
              li Ocupación o profesión
              li Aficiones o <i>hobbies</i>
              li Hábitos de compra
          .col-lg-4.col-8.mb-3
            figure.mb-3(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/141.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      p(data-aos="fade-left") La segmentación es trascendental en la previsión de la demanda, pues gracias a este proceso se condiciona y define el tamaño del mercado, para lo cual es prioritario definir las categorías de consumidores del producto o servicio, esas categorías pueden ser hogares, familias, instituciones, personas, éstas variables de acuerdo con el producto o servicio del proyecto de inversión hacen que se define si es necesario segmentar el mercado para proyectar la demanda o si no es indispensable realizarlo gracias a que se puede estimar por el tipo de población objetivo sobre la población total.

      


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: '1. Inventario',
        texto: 'Realizar un inventario de documentos existentes y disponibles.',
        icono: require('@/assets/curso/temas/tema1/105.svg'),
      },
      {
        titulo: '2. Clasificar',
        texto: 'Clasificar los documentos identificados.',
        icono: require('@/assets/curso/temas/tema1/106.svg'),
      },
      {
        titulo: '3. Seleccionar',
        texto:
          'Seleccionar los documentos más pertinentes para el propósito u objeto de la investigación.',
        icono: require('@/assets/curso/temas/tema1/107.svg'),
      },
      {
        titulo: '4. Leer a profundidad',
        texto:
          ' Leer a profundidad los documentos seleccionados extrayendo de ellos a través del análisis patrones, tendencias, convergencias y contradicciones que se vayan identificando.',
        icono: require('@/assets/curso/temas/tema1/108.svg'),
      },
      {
        titulo: '5. Cruzar la información',
        texto:
          'Cruzar la información encontrada a través de la lectura y compararla en aspectos o hallazgos previamente realizados, lo que aportará al desarrollo de una síntesis sobre la realidad estudiada.',
        icono: require('@/assets/curso/temas/tema1/109.svg'),
      },
    ],
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
