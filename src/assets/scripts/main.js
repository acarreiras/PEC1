/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
/*Flickity*/
import Flickity from 'flickity';

document.addEventListener('DOMContentLoaded', function () {
  const elem = document.querySelector('.carousel');
  const flickityInstance = new Flickity(elem, {
    cellAlign: 'center',   
    contain: true,         
    wrapAround: false,      
    autoPlay: 3000,        
    prevNextButtons: true, 
    pageDots: false         
  });
});

/*Responsive Nav.js*/
import responsiveNav from 'responsive-nav';

var nav = responsiveNav("#nav",
  { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 300, // Integer: Speed of the transition, in milliseconds
    label: '<i class="fas fa-bars"></i>', // String: Label for the navigation toggle
  });

  import AOS from 'aos';
  AOS.init({
    duration: 100, // Duración de la animación en milisegundos
    easing: 'ease-in-out', // Curva de velocidad de la animación
    once: true // La animación se ejecuta solo una vez
  });
  console.log("AOS inicializado");



