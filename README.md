# ACADUCR Grupo-3
## Proyecto final de JavaScipt
### Bellezas Turísticas de Costa Rica

Estudiantes:
* Cambronero Bonilla Nathalia Andrea
* Sibaja Ugalde Ariel Andrés
* Soto Rojas Nathalie Cristina

Academia de Tecnología UCR, Certificación Profesional en Front-End

Módulo 2: JavaScript

Profesor William Morales

Entrega: 05 de diciembre del 2023

# INFORMACIÓN COMPLETA DEL PROYECTO
## DESCRIPCIÓN GENERAL
El código proporcionado de JavaScript consta de varias funciones y controladores de eventos. A continuación, se presenta un desglose del código:

- El código define una variable map y un array "discountPeriod" que contiene objetos que representan diferentes periodos de descuento. Cada objeto tiene propiedades como "name", "from", "to" y "discount".
- Se define la función "drawMap()", que inicializa un mapa de Google con propiedades especificadas y recupera datos GeoJSON mediante AJAX. Añade marcadores al mapa según los datos recuperados y configura controladores de eventos de clic para los marcadores para mostrar ventanas emergentes con información.
- El código define dos event listeners para botones con los IDs "satelliteButton" y "streetButton". Estos event listeners cambian la vista del mapa entre vista satelital y vista de calle cuando se hace clic en los botones.
- El código utiliza la función "$(document).ready()" de jQuery para ejecutar código cuando el documento está listo. Dentro de esta función, recupera la fecha actual y verifica si se encuentra dentro de algún periodo de descuento definido en el array "discountPeriod". Si se encuentra un periodo de descuento correspondiente, establece la variable discount en consecuencia.
- Se realiza otra solicitud AJAX para recuperar datos de productos de un archivo JSON. Los datos recuperados se utilizan para generar contenido HTML para un control deslizante de productos utilizando la biblioteca Swiper. El precio descontado de cada producto se calcula en función de la variable "discount".
- Finalmente, se crea una instancia de la clase Swiper con opciones específicas para inicializar el control deslizante de productos.

En general, el código configura un mapa de Google, recupera y muestra datos de marcadores, maneja cambios en la vista del mapa y genera un control deslizante de productos con precios descontados según la fecha actual y los periodos de descuento definidos.

## CARRUSEL CON SWIPER
Explicación de parámetros:

- loop: Este parámetro habilita el modo bucle, permitiendo que el Swiper se desplace contínuamente desde el último slide al primer slide y viceversa. Crea un efecto de bucle infinito. En este caso, se establece en true.
- pagination: Este parámetro habilita la función de paginación, que añade puntos de paginación cliqueables en la parte inferior del contenedor del Swiper. La propiedad especifica el elemento HTML o selector CSS donde se debe renderizar la paginación. En este caso, se establece en ".swiper-pagination", indicando que los puntos de paginación se colocarán dentro de un elemento con la clase "swiper-pagination".
- slidesPerView: Este parámetro determina el número de slides que deben ser visibles en el contenedor del Swiper al mismo tiempo. Puede ser un número fijo o un valor fraccional. En este caso, se establece en 3, indicando que 3 slides serán visibles simultáneamente.
- spaceBetween: Este parámetro establece el espacio (en píxeles) entre cada slide en el contenedor del Swiper. Controla la separación entre slides adyacentes. En este caso, se establece en 20, indicando que habrá un espacio de 20 píxeles entre slides.
- centeredSlides: Este parámetro determina si los slides deben estar centrados en el contenedor del swiper. Si se establece en true, el slide activo estará centrado en el contenedor. Si se establece en false, el slide activo estará alineado a la izquierda del contenedor. En este caso, se establece en false.

En resumen, estos parámetros configuran el comportamiento y apariencia de la instancia Swiper, permitiendo un carrusel en bucle con paginación, 4 slides visibles al mismo tiempo, un espacio de 20 píxeles entre slides y sin centrado de slides.

## GOOGLE MAPS
- El código inicializa un mapa de Google con propiedades específicas, como las coordenadas del centro y el nivel de zoom.
- Realiza una solicitud AJAX para recuperar datos GeoJSON de un archivo JSON (/data/geo.json).
- Si la solicitud AJAX es exitosa y los datos recuperados contienen al menos una característica, añade marcadores al mapa según las coordenadas y propiedades proporcionadas en los datos GeoJSON.
- Cada marcador está asociado a un escuchador de eventos de clic que abre una ventana de información cuando se hace clic. La ventana de información muestra detalles sobre la ubicación, incluyendo su nombre, imagen en miniatura (si está disponible), descripción y enlace al sitio web (si está disponible).
- Hay dos botones ("satelliteButton" y "streetButton") que permiten al usuario cambiar entre la vista satelital y la vista de calle en el mapa. Al hacer clic en cualquiera de los botones, se actualiza el "mapTypeId" del mapa y se agrega/elimina la clase "active" de los botones con fines de estilo.
- El código también incluye manejo de errores para la solicitud AJAX.

En general, este código configura un mapa de Google con marcadores y ventanas de información, permite al usuario cambiar entre la vista satelital y la vista de calle.

### Créditos:
Base de Proyecto Módulo 1: HTML y CSS
- Arce Jimenez Rafael Steven
- Castro Villegas Kendall
- Morales Torres Amanda Waleska
- Soto Rojas Nathalie Cristina

Logos:
https://www.tuktuklex.com/

Imágenes:
https://elevation.maplogs.com/poi/parque_nacional_manuel_antonio_provincia_de_puntarenas_cant_n_de_aguirre_costa_rica.355658.html

### INSTRUCCIONES
- Utilizar HTML, CSS y JavaScript (25 pts) ✔️
- JavaScript debe utilizar al menos una vez cada una de las siguientes estructuras: if else, for, while, arrays (25 pts) ✔️
- Utilice JQUERY para mostrar información en el sitio web de acuerdo a la temporada en la que el usuario esté viendo la página (25 pts) ✔️
- Utilice AJAX para obtener información de un archivo JSON utilizándolo, por ejemplo, para listar diferentes artículos con su precio y disponibilidad (25 pts) ✔️
