<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estudio de mercado

    .row.justify-content-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El estudio de mercado es el primer análisis de un proyecto de inversión con el fin de determinar su viabilidad en cuanto a este aspecto, el mercado; en él se determina si existe demanda para el producto o servicio a ofertar, analiza la competencia con el fin de conocer el sector al que pertenece esta actividad, identifica los competidores más fuertes como su estrategia para operar el negocio. Así mismo debe establecer la ubicación para el lanzamiento y operación de la actividad como producto final, debe consolidar la información recogida mediante instrumentos y correspondiente a cada uno de los componentes considerados sus factores críticos, cuantificándolos, lo cual conlleva a la elaboración del presupuesto por cada uno de estos aspectos que próximamente alimentará las proyecciones financieras en el estudio correspondiente para la determinación de su factibilidad.
            br
            br
    p.mb-5(data-aos="fade-left") En el estudio de mercado se definen muchos costos de operación, si se prevé desde este momento, a través de la simulación de la situación futura, determinando las políticas y los procedimientos a utilizar como estrategia comercial. Se plantea desde este enfoque porque hay aspectos que se quedan fuera del análisis general en el estudio de mercado y al llegar a la puesta en marcha de éste se encontrarán los vacíos que se han dejado y que harán mella en la ejecución presupuestal, estos aspectos son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-7.col-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/2.svg' alt='Imagen decoractiva')
      .col-lg-3.col-md-6.col-6
        .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
          h4.text-center(style="color: #ffff") La estrategia publicitaria
        .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
          h4.text-center(style="color: #ffff") La estrategia de promoción
        .tarjeta.p-3.mb-3(style="background-color: #2F3D6A")
          h4.text-center(style="color: #ffff") La política de distribución del producto
      .col-lg-6.col-md-6.col-6
        .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
          p La cual tiene una fuerte repercusión en la inversión.
        .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
          p Antes de la puesta en marcha.
        .tarjeta.p-3.mb-3(style="background-color: #E1EFE3")
          p Garantizando su cantidad y calidad de acuerdo con los canales seleccionados lo cual influirá en el flujo de caja.
    .row.justify-content-center.mb-3
      p(data-aos="fade-left") Lo anterior, especialmente en la relación entre oferta y demanda, debido a que la inclusión de un distribuidor adicional repercutirá en el precio del producto y en el margen que le corresponde al distribuidor, influyendo nuevamente en el presupuesto.
      p(data-aos="fade-left") Estos componentes son en la mayoría de los casos considerados secundarios, sumado a determinar el precio de introducción, definir el tipo de inversiones que aporten en consolidar su imagen, el establecimiento de las políticas de ventas a crédito, la adecuación de la locación o punto de venta de acuerdo con los requerimientos y expectativas de los clientes potenciales, todo esto en correspondencia con las recomendaciones arrojadas que se constituyen en factores decisivos para el resultado de la evaluación. De esta manera, se evidencia la trascendencia que tiene este estudio el cual encabeza el estudio de viabilidad económica en su fase de formulación y preparación, tal como se evidencia en la siguiente tabla:
    
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
    p.mb-5(data-aos="fade-left") Es el primer reto que se debe enfrentar, para plantear el punto focal o asunto a investigar se requiere de manera indispensable de un conocimiento total de la situación actual, de no ser de esta manera, el planteamiento del problema será incorrecto y se podrán tomar decisiones y aplicar estrategias erradas o desenfocadas. Con el fin de estudiar el mercado, lo invitamos a revisar la siguiente información, en la que podrá identificar la manera como se deben aplicar estos pasos:

    .tarjeta.tarjeta--gris.p-4.mb-5
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
        p(data-aos="fade-left") Este análisis depende del modelo de negocio y los factores que lo caracterizan, en el caso del análisis del consumidor busca caracterizar o reconocer con mayor precisión a los clientes actuales y potenciales, tratándose de un negocio en marcha, pero necesita acercarse al conocimiento de los clientes potenciales si el negocio apenas se está diseñando y esto es todo un reto que debe cumplirse a cabalidad y con excelencia, de esta manera podrá reconocerse sus preferencias, hábitos de consumo, motivaciones factores que aportan a la construcción de un perfil del cliente el cual se consolida en la piedra angular para definir la estrategia comercial y el segmento de mercado a atender. Revise en el siguiente video la manera como se lleva a cabo el análisis de la demanda y la competencia en el siguiente recurso:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-left") Este análisis depende del modelo de negocio y los factores que lo caracterizan, en el caso del análisis del consumidor busca caracterizar o reconocer con mayor precisión a los clientes actuales y potenciales, tratándose de un negocio en marcha, pero necesita acercarse al conocimiento de los clientes potenciales si el negocio apenas se está diseñando y esto es todo un reto que debe cumplirse a cabalidad y con excelencia, de esta manera podrá reconocerse sus preferencias, hábitos de consumo, motivaciones factores que aportan a la construcción de un perfil del cliente el cual se consolida en la piedra angular para definir la estrategia comercial y el segmento de mercado a atender. Revise en el siguiente video la manera como se lleva a cabo el análisis de la demanda y la competencia en el siguiente recurso:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-5.col-8
        figure
          img(src='@/assets/curso/temas/tema1/10.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p(data-aos="fade-left") Son todos estos factores que influyen en la definición de la estrategia comercial y del modelo del negocio los cuales deben tener en cuenta datos históricos o estadísticos obtenidos con antelación, lo que repercutirá directamente en la rentabilidad y demás consecuencias económicas que se presenten como lo son los ingresos y egresos. Entre ellas se encuentra la política de venta la cual no solo implica generar ingresos constantemente y plazos de ventas, también establece la proyección de un nivel de ventas, junto a ella está la política de crédito o financiación, el costo de la inversión y de la financiación todo esto deberá ser combinado reflejando diferentes escenarios que se deberán evidenciar en el flujo de caja. 
        p(data-aos="fade-left") Y ahora, en otro interesante video, encontrará la manera como el flujo de caja y proveedores hacen parte de la estructura del estudio de mercado, veamos en el siguiente video sobre la definición de la estrategia de precio:
    .row.mb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p(data-aos="fade-left") Y para terminar no se debe dejar de lado analizar el mercado externo y su evolución, así como la diversidad de productos disponible para el cliente como la probabilidad de crecimiento del mercado potencial, las tecnologías de la información, nivel de seguridad de las transacciones digitales facilitando la adquisición de los productos, eliminando barreras, así como la probabilidad de expandir el mercado del proyecto lo que elimina intermediarios y controla el precio de los productos.
    p.mb-5(data-aos="fade-left") Este estudio marca la pauta en el proyecto de inversión, pues de no encontrar condiciones favorables en el estudio de mercado no se continuará con la formulación del proyecto de inversión y se deberá abandonar la idea o reformularse a fin de reiniciar este proceso.

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
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Objetivos del estudio de mercado
    .row.justify-content-center.mb-5
      .col-lg-7.col-12
        p(data-aos="fade-left") Al diseñar la estrategia comercial, es pertinente evaluar una diversidad de factores externos que influyen sobre la evolución de los distintos mercados del proyecto. Estas variables son en general externas y por tanto incontrolables por la organización, pero valoradas minuciosamente aportarán a detectar las amenazas, oportunidades y los <i>stakeholders</i> existentes en el entorno.
        p(data-aos="fade-left") Las amenazas son todas aquellas variables que pueden suceder en cualquier momento, vienen del entorno externo al proyecto y no es posible controlarlas, se consideran amenazas porque su aparición u ocurrencia puede generar efectos negativos en la empresa como la inestabilidad política y las situaciones recesivas. Y viceversa, sucede con las oportunidades, son todos esos elementos o aspectos que se encuentran en el entorno y de tomarlo, aceptarlos y aprovecharlos traerán grandes y favorables beneficios, como la aparición de una insatisfacción en la demanda y de una débil competencia.
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
                
    .row.justify-content-center.mb-5
      .col-lg-8.col-12.mb-5
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 2.
          span <i>Ciclo de vida del producto</i> 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/21.svg' alt='PENDIENTE TEXTO ALT')
    p.mb-5(data-aos="fade-left") De acuerdo a la figura anterior, se identifican 4 fases que se desarrolla el ciclo de producto, a continuación, se presenta la manera como se podría llevar a cabo la investigación del mercado en cada una de ellas: 
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        li.text-bold.mb-3(style="color: #0C5E46")(data-aos="zoom-in-down") Fase de lanzamiento o introducción
        p.mb-5(data-aos="fade-left") Es la primera fase del producto, conocida también como introducción por ser considerada el nacimiento es de crucial importancia las decisiones adoptadas ya que tendrá repercusión en el futuro del producto o servicio. En esta fase las ventas son pocas, el esfuerzo se concentra en dar a conocer el producto o servicio y en generar necesidad en el consumidor a través de la publicidad.
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
        h2.text-center Prueba de concepto
        p.text-center El tema o concepto del producto o servicio es atractivo, es llamativo, a qué segmentos de mercado atrae, de los beneficios que genera y cuáles son los más atractivos para el cliente.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
        h2.text-center Prueba del producto
        p.text-center El producto tiene las propiedades que ofrece, es tan bueno como la competencia. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
        h2.text-center Cumplimiento del concepto
        p.text-center Las expectativas que genera la imagen del producto son atendidas por el producto, o en otras palabras, las expectativas de los clientes son superadas con el producto o servicio.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
        h2.text-center Pruebas de nombre
        p.text-center El nombre es aceptado o gusta a los clientes, hay sugerencias de parte de los clientes, el nombre coincide con lo que se espera sugerir y es corto, fácil y recordable.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
        h2.text-center Pruebas de envase
        p.text-center El envase propuesto es atractivo, de fácil uso, es cómodo, es moderno.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
        h2.text-center Investigación de publicidad
        p.text-center Define la estrategia de lanzamiento de productos o servicios, medios de difusión, incluye el concepto general a difundir, se orienta al posicionamiento que se espera darle al producto y cumple con el presupuesto asignado.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/29.svg' alt='AvatarTop')
        h2.text-center Prueba de seguimiento 
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
              p.mb-0 El estudio de mercado es el primer análisis de un proyecto de inversión con el fin de determinar su viabilidad en cuanto a este aspecto, el mercado; en él se determina si existe demanda para el producto o servicio a ofertar, analiza la competencia con el fin de conocer el sector al que pertenece esta actividad, identifica los competidores más fuertes como su estrategia para operar el negocio. Así mismo debe establecer la ubicación para el lanzamiento y operación de la actividad como producto final, debe consolidar la información recogida mediante instrumentos y correspondiente a cada uno de los componentes considerados sus factores críticos, cuantificándolos, lo cual conlleva a la elaboración del presupuesto por cada uno de estos aspectos que próximamente alimentará las proyecciones financieras en el estudio correspondiente para la determinación de su factibilidad.
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
          p(data-aos="fade-left") Aunque la marca corresponde al distintivo o imagen que tendrá el producto en cuanto a nombre, logotipo, signo, símbolo, el slogan y la propuesta de valor en estos aspectos recae una gran relevancia la aceptación, el branding presenta atributos que permiten a la marca posicionarse y asociarse, lo cual incidirá necesariamente en la promoción. Son aspectos tan precisos y determinantes en el proyecto de inversión que no se pueden dejar de lado cuando de todos ellos depende su éxito, pero todos ellos son necesarios conocerlos para no incurrir en errores al tercerizar este diseño lo cual necesariamente también se verá reflejado en el flujo de caja correspondiente.
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
          p(data-aos="fade-left") Aunque la marca corresponde al distintivo o imagen que tendrá el producto en cuanto a nombre, logotipo, signo, símbolo, el slogan y la propuesta de valor en estos aspectos recae una gran relevancia la aceptación, el branding presenta atributos que permiten a la marca posicionarse y asociarse, lo cual incidirá necesariamente en la promoción. Son aspectos tan precisos y determinantes en el proyecto de inversión que no se pueden dejar de lado cuando de todos ellos depende su éxito, pero todos ellos son necesarios conocerlos para no incurrir en errores al tercerizar este diseño lo cual necesariamente también se verá reflejado en el flujo de caja correspondiente.
    p.mb-5(data-aos="fade-left") Para calcular el precio de venta es necesario conocer el costo unitario al cual se le adiciona el porcentaje correspondiente a mark up o margen de utilidad, este no es otra cosa que el porcentaje que la empresa define debe recibir por la venta de cada producto.

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
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="Costos de producción")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/38.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Son los que se requieren para la transformación de la materia prima en un bien o producto final.
          .row(numero="2" titulo="CF o Costos fijos")
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/39.svg', alt='Imagen decorativa')
            .col-md-8.mb-4.mb-md-0
              p.text-small Son los que no se modifican si aumenta o disminuye la cantidad a producir, un ejemplo de ello es el arrendamiento.
          .row(numero="3" titulo="CV o Costos variables")
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
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-4.col-6
        .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
          h4.text-center(style="color: #ffff") Precio de Venta basado en costos: 
        .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
          h4.text-center(style="color: #ffff") Precio de Venta basado en la demanda: 
        .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
          h4.text-center(style="color: #ffff") Precio de Venta basado en la competencia: 
      .col-lg-7.col-md-8.col-6
        .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
          p Define el precio de venta a partir de los costos de producción o comercialización teniendo en cuenta factores como la calidad, la exclusividad, entre otros.
        .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
          p Intervienen factores como el segmento de mercado, su reputación o estatus, así como el de la marca brindando confianza al consumidor.
        .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
          p Definido a partir del precio de venta de los competidores o del mercado.
    p.mb-5(data-aos="data") Según el volumen también se definen los siguientes precios de venta:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-4.col-6
        .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
          h4.text-center(style="color: #ffff") Al por mayor:
        .tarjeta.p-3.mb-3(style="background-color: #0C5E46")
          h4.text-center(style="color: #ffff") Al por menor: 
      .col-lg-7.col-md-8.col-6
        .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
          p Es el precio de comercialización que asumen los minoristas para adquirir grandes cantidades de producto y luego vendar la mercancía por unidades a un mayor precio.
        .tarjeta.p-3.mb-3(style="background-color: #D2E1F1")
          p Es el precio que cancela el consumidor final en los establecimientos minoristas por una o varias unidades de producto.
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
        p(data-aos="fade-left") En la Experiencia del Cliente radica el valor agregado que cada organización proyecta, diseñando una experiencia única para el cliente, lo cual hace aún más indispensable la definición de una estrategia competitiva e innovadora, en donde la táctica de producto hace perceptible la propuesta de valor definida en ella. A continuación, presentamos información relacionada con el conjunto de estrategias aquí presentadas que condensadas toman el nombre de Estrategia de #[i Marketing].
    .row.justify-content-center.align-items-center.mb-3
      .tarjeta.p-3.mb-3(style="background-color: #E1FBFF")
        .row.justify-content-center 
          h4.text-center ¿ Qué es una estrategia de #[i marketing]?
          .col-lg-5.col-md-8.col-12
            ol.lista-ol--cuadro.lista-ol--separador
              li 
              .lista-ol--cuadro__vineta
                span 1
              | Establecer modelo de negocio
              li 
              .lista-ol--cuadro__vineta
                span 2
              | Definir la meta del proyecto
              li 
              .lista-ol--cuadro__vineta
                span 3
              | Auditoria de #[i marketing]
              li 
              .lista-ol--cuadro__vineta
                span 4
              | Análisis DAFO
              li 
              .lista-ol--cuadro__vineta
                span 5
              | Público objetivo
              li 
              .lista-ol--cuadro__vineta
                span 6
              | Recursos
              li 
              .lista-ol--cuadro__vineta
                span 7
              | Elegir canales
          .col-lg-5.col-md-8.col-12
            ol.lista-ol--cuadro.lista-ol--separador
              li 
              .lista-ol--cuadro__vineta
                span 8
              | Objetivos
              li 
              .lista-ol--cuadro__vineta
                span 9
              | Estrategia
              li 
              .lista-ol--cuadro__vineta
                span 10
              | Tácticas acciones
              li 
              .lista-ol--cuadro__vineta
                span 11
              | Ejecución
              li 
              .lista-ol--cuadro__vineta
                span 12
              | Medición
              li 
              .lista-ol--cuadro__vineta
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
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
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

    .tarjeta.tarjeta--gris.p-4.mb-5
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
            p El grado de especialización, el know how y las barreras fortalecen la imagen, incrementan la credibilidad y pueden generar mayores beneficios, pero los oferentes en un mercado competido también llegan a acuerdos para controlar el mercado y mantener el control sobre el mercado.
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
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
