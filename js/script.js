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


function siguiente () {

   var n = actual + 1;

   mostrar (n);

}

function anterior () {

      var n = actual - 1;

    mostrar (n);

}

// eventos botones


botonNext.on("click", function() {
   console.log("Next slide");
      siguiente();
   
});

botonPrev.on("click", function() {
   console.log("Previous slide");
      anterior();
   
});
