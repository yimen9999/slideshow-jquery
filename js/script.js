/* =========================================================
   SLIDESHOW CON JQUERY
   =========================================================

   PASO 0 · Cargar jQuery
   En index.html, antes de cerrar </body>, enlaza primero jQuery
   y después este archivo. El orden importa: si tu script va
   antes, $ todavía no existe.
   <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

   PASO 1 · Seleccionar con jQuery
   $(".slide") selecciona TODAS las diapositivas (como querySelectorAll).
   Guárdalas en una variable, y crea otras dos:
   la posición actual (empieza en 0) y el total (.length).

   PASO 2 · Función mostrar(n)
   - Oculta la diapositiva actual: slides.eq(actual).fadeOut();
   - Guarda n como nueva posición actual.
   - Muestra la nueva: slides.eq(actual).fadeIn();
   (.eq(n) elige el elemento n de la selección, empezando en 0)

   PASO 3 · Botones
   $("#siguiente").on("click", function () { ... });
   - Siguiente: suma 1. Si llegas al total, vuelve a 0.
   - Anterior: resta 1. Si bajas de 0, ve a la última (total - 1).

   RETOS EXTRA
   1. Actualiza #contador ("2 / 4") con .text().
   2. Haz que avance solo cada 3 segundos con setInterval.
   3. Si se pulsa un botón, para el avance automático con
      clearInterval y vuelve a activarlo 5 segundos después
      con setTimeout.
   ========================================================= */


// Empieza aquí tu código
// js negativo
// var slides = document.querySelectorAll(".slide");

// jQuery
var slides = $(".slide");
var botonNext = $("#siguiente");
var botonPrev = $("#anterior");
var total = slides.length;
var actual = 0;


function mostrar (indiceSlide) {
   slides.eq(actual).fadeOut();
   actual = indiceSlide;
   slides.eq(actual).fadeIn ()

}

// ACTUALIZAMOS CONTADOR

$("#contador").text((actual+1) + "/" + total);

// funcionamiento automatico con la funcion setInterval (), esta funcion tiene 2
// parámetros:primero es lo que quiero que haga y el segundo de cada cuanto tiempo 3 segs

var automatico = setInterval(siguiente, 3000); 
var espera;

// si el usuario interactua con los botones se para el funcionamiento automatico y vuelve a los 5 seg 

function pausar () {
   clearInterval(automatico);
   clearTimeout(espera);

   espera = setTimeout(function() {
      automatico= setInterval(siguiente, 3000);
   } , 5000);
   //  5 segs

}


function siguiente () {

   var n = actual + 1;

   if (n === total) {
         n = 0;

   }

   mostrar (n);

}

function anterior () {

      var n = actual - 1;

      if (n < 0) {
         n = total -1;
      }

    mostrar (n);

}

// eventos botones


botonNext.on("click", function() {
  siguiente();
  pausar();
});

botonPrev.on("click", function() {
  anterior();
  pausar();
});

// añadir 