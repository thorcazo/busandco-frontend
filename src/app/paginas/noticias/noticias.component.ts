import { Component, OnInit } from '@angular/core';
import { NoticiaComponent } from '../../componentes/noticia/noticia.component';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{
  titulo:string = 'Noticias'
  constructor(private router: Router, private comunicacionService: ComunicacionService) { }

  noticias: any[] = [
    {
        id: 1,
        titulo: "Introducción de Nuevos Autobuses Eléctricos en Murcia",
        descripcion: "Murcia presenta una nueva flota de autobuses eléctricos para mejorar el transporte público y reducir la contaminación.",
        fecha: "2024-06-01",
        imagen: "noticia1.jpg",
        cuerpo1: "El Ayuntamiento de Murcia ha anunciado la introducción de una nueva flota de autobuses eléctricos en la ciudad. Esta iniciativa forma parte de un esfuerzo mayor para modernizar el sistema de transporte público y reducir las emisiones de carbono. Los nuevos autobuses eléctricos, que cuentan con tecnología de última generación, son silenciosos y no emiten gases contaminantes, lo que contribuye significativamente a la mejora de la calidad del aire en Murcia. Además, están equipados con comodidades modernas, como Wi-Fi gratuito y cargadores USB, para mejorar la experiencia de los pasajeros.",
        cuerpo2: "La implementación de estos autobuses eléctricos ha sido posible gracias a la colaboración entre el gobierno local y varias empresas tecnológicas líderes en movilidad sostenible. Los vehículos se han integrado en las rutas más transitadas de la ciudad, garantizando un servicio eficiente y puntual. Cada autobús tiene una capacidad para 70 pasajeros y está diseñado para facilitar el acceso a personas con movilidad reducida, incluyendo rampas automáticas y espacios reservados. Esta medida no solo promueve un transporte más inclusivo, sino que también fomenta la adopción de prácticas ecológicas entre los ciudadanos.",
        cuerpo3: "Desde su puesta en marcha, los autobuses eléctricos han recibido una respuesta positiva tanto de los usuarios habituales del transporte público como de los nuevos pasajeros. Las encuestas realizadas muestran que los ciudadanos aprecian la reducción del ruido y la mejora en la calidad del aire. Además, la puntualidad y la frecuencia de los servicios han mejorado, lo que ha llevado a un aumento en el número de usuarios diarios. Las autoridades locales han establecido un plan de seguimiento para evaluar el rendimiento de los autobuses y recoger feedback, con el fin de realizar mejoras continuas.",
        cuerpo4: "El impacto económico de la nueva flota de autobuses eléctricos también es significativo. La inversión en tecnología de transporte sostenible ha creado nuevos empleos en el sector, desde la fabricación y el mantenimiento de los vehículos hasta la gestión de los servicios. Además, la reducción de la dependencia de combustibles fósiles ayuda a disminuir los costos operativos a largo plazo. Los fondos ahorrados pueden ser reinvertidos en la expansión y mejora del transporte público, creando un ciclo positivo de desarrollo sostenible y económico para la ciudad de Murcia.",
        cuerpo5: "En el futuro, el Ayuntamiento de Murcia planea expandir aún más la flota de autobuses eléctricos y explorar otras tecnologías de movilidad sostenible, como los autobuses autónomos. La ciudad está comprometida con la reducción de su huella de carbono y la mejora de la calidad de vida de sus residentes. Los autobuses eléctricos representan un paso importante hacia un futuro más verde y sostenible. Con una infraestructura de transporte público moderna y eficiente, Murcia está bien posicionada para liderar el camino en la adopción de tecnologías limpias y sostenibles en España.",
    },
    {
        id: 2,
        titulo: "Nueva Línea de Autobuses Conecta Barrios de Murcia",
        descripcion: "Se inaugura una nueva línea de autobuses en Murcia que conecta diversos barrios de la ciudad, mejorando la accesibilidad y reduciendo el tiempo de viaje.",
        fecha: "2024-06-02",
        imagen: "noticia2.jpg",
        cuerpo1: "En un esfuerzo por mejorar la conectividad y accesibilidad del transporte público, el Ayuntamiento de Murcia ha inaugurado una nueva línea de autobuses que conecta varios barrios importantes de la ciudad. Esta nueva ruta, denominada Línea 10, pasa por puntos estratégicos, incluyendo centros comerciales, hospitales y áreas residenciales densamente pobladas. El objetivo principal de esta iniciativa es reducir el tiempo de viaje para los residentes y facilitar el acceso a servicios esenciales. Los autobuses de la Línea 10 están programados para pasar con una frecuencia de 10 minutos durante las horas pico y cada 20 minutos en horas de menor demanda.",
        cuerpo2: "La creación de la Línea 10 responde a las demandas de los ciudadanos que requerían una mejor conectividad entre los barrios y el centro de la ciudad. Antes de la implementación de esta línea, muchos residentes tenían que hacer múltiples transbordos para llegar a sus destinos, lo que aumentaba significativamente el tiempo de viaje. Con la nueva ruta directa, los tiempos de desplazamiento se han reducido considerablemente, mejorando la calidad de vida de los usuarios. Además, la línea ha sido diseñada para integrarse de manera eficiente con otras rutas existentes, facilitando las conexiones y optimizando el flujo del tráfico.",
        cuerpo3: "Los autobuses de la Línea 10 están equipados con tecnología avanzada para mejorar la experiencia del usuario. Cada vehículo cuenta con aire acondicionado, asientos cómodos y un sistema de información en tiempo real que permite a los pasajeros conocer la ubicación exacta del autobús y los tiempos de llegada. Además, se han instalado cámaras de seguridad para garantizar la seguridad de los usuarios en todo momento. Estas características hacen que el transporte público sea una opción más atractiva y confiable para los residentes de Murcia, incentivando a más personas a dejar sus coches y utilizar los autobuses.",
        cuerpo4: "Desde su lanzamiento, la Línea 10 ha tenido un impacto positivo en la movilidad urbana de Murcia. Las autoridades locales han reportado una disminución en el tráfico vehicular en las áreas servidas por la nueva línea, lo que ha contribuido a reducir la contaminación y mejorar la calidad del aire. Los comerciantes locales también han notado un aumento en el flujo de clientes, ya que los autobuses facilitan el acceso a las zonas comerciales. Además, la mayor accesibilidad a hospitales y centros de salud ha mejorado el acceso a servicios médicos, beneficiando especialmente a las personas mayores y a aquellos con necesidades especiales.",
        cuerpo5: "El éxito de la Línea 10 ha llevado a las autoridades a considerar la expansión del proyecto. En los próximos meses, se evaluarán los datos de uso y se recogerán opiniones de los usuarios para identificar áreas de mejora y posibles expansiones de la red de transporte. El Ayuntamiento de Murcia sigue comprometido con la mejora continua del transporte público, buscando soluciones innovadoras que respondan a las necesidades de los ciudadanos. La inauguración de la Línea 10 representa un paso significativo hacia un sistema de transporte más eficiente, accesible y sostenible para todos los residentes de Murcia.",
    },
    {
        id: 3,
        titulo: "Modernización de las Paradas de Autobús en Murcia",
        descripcion: "Murcia moderniza sus paradas de autobús con nuevas tecnologías para mejorar la experiencia de los usuarios.",
        fecha: "2024-06-03",
        imagen: "noticia3.jpg",
        cuerpo1: "El Ayuntamiento de Murcia ha iniciado un ambicioso proyecto de modernización de las paradas de autobús en toda la ciudad. Este proyecto incluye la instalación de nuevas marquesinas equipadas con tecnología avanzada, como paneles solares, pantallas informativas en tiempo real y puntos de carga USB. Estas mejoras buscan hacer que el transporte público sea más cómodo y accesible para los usuarios. Las nuevas marquesinas también cuentan con asientos ergonómicos y protección contra el clima, proporcionando un entorno más agradable para los pasajeros que esperan el autobús. Esta modernización es parte de un plan integral para revitalizar la infraestructura de transporte público en Murcia.",
        cuerpo2: "Además de las mejoras físicas, las nuevas paradas de autobús están conectadas a una red central que proporciona información en tiempo real sobre la llegada y salida de los autobuses. Los pasajeros pueden acceder a esta información a través de aplicaciones móviles o las pantallas instaladas en las marquesinas. Esta transparencia y accesibilidad a los datos permiten a los usuarios planificar mejor sus viajes y reducir los tiempos de espera. El sistema también incluye alertas sobre retrasos y cambios en las rutas, lo que ayuda a los pasajeros a adaptarse rápidamente a cualquier imprevisto. Esta tecnología ha sido bien recibida por la comunidad, mejorando la satisfacción del usuario.",
        cuerpo3: "El proyecto de modernización ha sido posible gracias a una colaboración entre el Ayuntamiento de Murcia y varias empresas tecnológicas especializadas en soluciones de movilidad urbana. La inversión en esta iniciativa no solo ha mejorado la infraestructura existente, sino que también ha creado nuevas oportunidades de empleo en la ciudad. Ingenieros, técnicos y personal de mantenimiento han sido contratados para asegurar que las nuevas paradas de autobús funcionen de manera eficiente y continua. Esta colaboración público-privada ha demostrado ser un modelo exitoso para la implementación de proyectos de infraestructura de gran escala.",
        cuerpo4: "Los beneficios de las paradas de autobús modernizadas van más allá de la comodidad de los usuarios. La inclusión de paneles solares en las marquesinas contribuye a la sostenibilidad ambiental, generando energía limpia que se utiliza para alimentar las pantallas informativas y los puntos de carga USB. Este enfoque ecológico ayuda a reducir la huella de carbono de la ciudad y promueve el uso de energías renovables. Además, las paradas de autobús mejoradas han sido diseñadas con criterios de accesibilidad universal, asegurando que todas las personas, incluyendo aquellas con discapacidades, puedan utilizar el transporte público de manera segura y cómoda.",
        cuerpo5: "El impacto positivo de la modernización de las paradas de autobús ya se está sintiendo en la comunidad. Los usuarios han expresado su satisfacción con las mejoras, destacando la conveniencia de tener información en tiempo real y la comodidad de las nuevas instalaciones. Las autoridades locales están monitoreando el uso de las paradas y recopilando feedback de los pasajeros para identificar posibles áreas de mejora. Con estos datos, el Ayuntamiento de Murcia planea continuar invirtiendo en la modernización del transporte público, asegurando que la ciudad siga avanzando hacia un futuro más sostenible y eficiente en términos de movilidad urbana.",
    },
    {
        id: 4,
        titulo: "Ampliación de Horarios en las Rutas de Autobuses de Murcia",
        descripcion: "Murcia amplía los horarios de varias rutas de autobuses para satisfacer la creciente demanda de transporte público.",
        fecha: "2024-06-04",
        imagen: "noticia4.jpg",
        cuerpo1: "En respuesta a la creciente demanda de transporte público, el Ayuntamiento de Murcia ha decidido ampliar los horarios de varias rutas de autobuses. Esta medida busca proporcionar un servicio más flexible y accesible para todos los ciudadanos, especialmente aquellos que trabajan en horarios no convencionales o necesitan transporte durante la noche. Las rutas afectadas por esta ampliación incluyen las líneas más utilizadas, que ahora operarán hasta la medianoche y comenzarán su servicio a las 5 de la mañana. Esta ampliación de horarios permitirá a los usuarios disponer de más opciones y reducir los tiempos de espera, mejorando significativamente la experiencia de viaje.",
        cuerpo2: "La decisión de ampliar los horarios se basa en estudios realizados por el departamento de transporte del Ayuntamiento, que identificaron un aumento en la demanda de servicios de autobús fuera del horario habitual. Además, se realizaron encuestas a los usuarios que mostraron una clara necesidad de mayor disponibilidad de autobuses durante las primeras horas de la mañana y las últimas horas de la noche. Esta información ha sido fundamental para planificar los cambios de manera efectiva y asegurarse de que las nuevas horas de operación satisfagan las necesidades de la comunidad. Las autoridades esperan que esta medida también ayude a reducir el uso de vehículos privados, promoviendo un transporte más sostenible.",
        cuerpo3: "La ampliación de horarios no solo beneficia a los usuarios de autobuses, sino que también tiene un impacto positivo en la economía local. Al proporcionar transporte accesible durante más horas del día, se facilita la movilidad de los trabajadores, especialmente aquellos en el sector servicios y la industria, que a menudo tienen turnos que comienzan o terminan fuera del horario habitual. Esto, a su vez, puede aumentar la productividad y la eficiencia de las empresas locales. Además, los comercios y negocios que operan hasta tarde pueden ver un aumento en el número de clientes, ya que más personas tendrán acceso al transporte público para llegar a sus establecimientos.",
        cuerpo4: "Para asegurar el éxito de esta ampliación de horarios, el Ayuntamiento de Murcia ha implementado una serie de medidas complementarias. Se ha incrementado la cantidad de conductores de autobús y personal de mantenimiento para cubrir las horas adicionales de operación. También se han realizado campañas de información para educar a los usuarios sobre los nuevos horarios y las rutas disponibles. Estas campañas incluyen publicidad en paradas de autobús, redes sociales y medios de comunicación locales. Además, se ha mejorado la infraestructura de las paradas y estaciones para garantizar la seguridad y comodidad de los pasajeros durante las horas extendidas.",
        cuerpo5: "El seguimiento y la evaluación continua son componentes clave del plan de ampliación de horarios. Las autoridades locales están monitoreando el uso de las rutas ampliadas y recopilando feedback de los usuarios para identificar cualquier problema o área de mejora. Se realizarán ajustes según sea necesario para asegurar que el servicio siga siendo eficiente y responda a las necesidades de la comunidad. Con esta iniciativa, el Ayuntamiento de Murcia reafirma su compromiso con la mejora continua del transporte público, ofreciendo soluciones innovadoras y sostenibles que benefician a todos los ciudadanos. La ampliación de horarios es solo uno de los muchos pasos hacia un sistema de transporte más eficiente y accesible en Murcia.",
    },
    {
        id: 5,
        titulo: "Autobuses de Murcia Implementan Pagos sin Contacto",
        descripcion: "Murcia introduce un sistema de pago sin contacto en sus autobuses para facilitar el acceso y mejorar la eficiencia del transporte público.",
        fecha: "2024-06-05",
        imagen: "noticia5.jpg",
        cuerpo1: "El Ayuntamiento de Murcia ha implementado un nuevo sistema de pago sin contacto en toda su flota de autobuses, facilitando así el acceso y mejorando la eficiencia del transporte público. Este sistema permite a los pasajeros pagar su billete utilizando tarjetas de crédito y débito, así como dispositivos móviles con tecnología NFC. La introducción del pago sin contacto busca agilizar el proceso de embarque, reducir el tiempo de espera y proporcionar una opción de pago más conveniente y segura para los usuarios. Esta iniciativa es parte de un esfuerzo continuo por modernizar el transporte público en Murcia. El sistema ha sido diseñado para ser intuitivo y fácil de usar, reduciendo la necesidad de llevar efectivo y eliminando la problemática de encontrar cambio.",
        cuerpo2: "El nuevo sistema de pago ha sido bien recibido por los usuarios, quienes destacan la comodidad y rapidez del proceso. Los autobuses ahora están equipados con lectores de tarjetas en todas las puertas, permitiendo un flujo de pasajeros más ágil y reduciendo los tiempos de parada. Además, se han implementado medidas de seguridad para proteger la información de los usuarios, asegurando que los pagos sean seguros y confiables. Esta modernización no solo beneficia a los pasajeros, sino que también mejora la eficiencia operativa del servicio de autobuses, permitiendo a los conductores centrarse más en la conducción y menos en la gestión de pagos.",
        cuerpo3: "El Ayuntamiento de Murcia ha trabajado en estrecha colaboración con empresas tecnológicas líderes en el sector de pagos electrónicos para desarrollar e implementar este sistema. La transición al pago sin contacto ha sido planificada meticulosamente para minimizar cualquier inconveniente a los usuarios y asegurar una adopción rápida y efectiva. Se han llevado a cabo pruebas piloto en varias rutas antes del despliegue completo, lo que permitió ajustar y optimizar el sistema basado en la retroalimentación de los usuarios y conductores. Esta colaboración ha sido clave para el éxito del proyecto, demostrando la importancia de las alianzas público-privadas en la modernización de los servicios públicos.",
        cuerpo4: "La implementación del sistema de pago sin contacto también está alineada con los objetivos ambientales de Murcia. Al reducir el uso de papel y monedas, se disminuye el impacto ambiental asociado con la producción y manejo de estos materiales. Además, la mayor eficiencia en las operaciones de los autobuses contribuye a una menor emisión de contaminantes, ya que los vehículos pasan menos tiempo detenidos en las paradas. Esta iniciativa forma parte de un plan más amplio para convertir a Murcia en una ciudad más sostenible y amigable con el medio ambiente, promoviendo el uso del transporte público como una alternativa ecológica y eficiente al uso del automóvil privado.",
        cuerpo5: "Con el sistema de pago sin contacto ya en funcionamiento, el Ayuntamiento de Murcia está monitoreando de cerca su desempeño y recopilando feedback de los usuarios para realizar mejoras continuas. Se están considerando futuras expansiones del sistema para incluir otras formas de pago digital y mejorar aún más la experiencia del usuario. Además, se está evaluando la posibilidad de integrar este sistema con otras formas de transporte público en la ciudad, creando una red de movilidad integrada y sin interrupciones. El compromiso de Murcia con la innovación y la sostenibilidad en el transporte público continúa, asegurando que la ciudad siga avanzando hacia un futuro más moderno y eficiente.",
    }
];
  
  ngOnInit(): void {
      this.comunicacionService.setTitulo(this.titulo)
  }
}
