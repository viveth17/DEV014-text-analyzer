import analyzer from './analyzer.js';


//Busca en el DOM contenido de la <textarea> que esta siendo modificado
const ingresaPalabras = document.querySelector('[name=user-input]');
// Busca en el DOM el 1er <li> 
const palabrasLi = document.querySelector('[data-testid="word-count"]');

// Busca en el DOM el 2do <li> 
const palabrasLi2 = document.querySelector('[data-testid="character-count"]');

//Busca en el DOM el 3er <li>
const palabrasLi3 = document.querySelector('[data-testid="character-no-spaces-count"]');
//Busca en el DOM el 4to <li>
const palabrasLi4 = document.querySelector('[data-testid="number-count"]');
//Busca en el DOM el 5to <li>
const palabrasLi5 = document.querySelector('[data-testid="number-sum"]');
//Busca en el DOM el 6to <li>
const palabrasLi6 = document.querySelector('[data-testid="word-length-average"]');

//Evento en el cual se detecta que se modifica el value de la caja de texto
ingresaPalabras.addEventListener('input', () => {
  const contenidoCaja = ingresaPalabras.value;
  let numPalabras = "";
  let numCaracteres = "";
  let numCaracteresExc = "";
  let numNumeros = "";
  let suma = "";
  let longitudPalabras = "";

  // console.log(contenidoCaja)


  //Mando a invocar Analyzer de los 6 metodos
  numPalabras = analyzer.getWordCount(contenidoCaja);
  numCaracteres = analyzer.getCharacterCount(contenidoCaja);
  numCaracteresExc = analyzer.getCharacterCountExcludingSpaces(contenidoCaja);
  numNumeros = analyzer.getNumberCount(contenidoCaja);
  suma = analyzer.getNumberSum(contenidoCaja);
  longitudPalabras = analyzer.getAverageWordLength(contenidoCaja);

  // console.log('NumeroPalabras:', numPalabras);
  palabrasLi.innerHTML = 'Palabras: ' + numPalabras;

  // console.log('NumeroCaracteres:', numCaracteres);
  palabrasLi2.innerHTML = 'Caracteres: ' + numCaracteres;

  // console.log('NumeroCaracteresExc:', numCaracteresExc);
  palabrasLi3.innerHTML = 'Caracteres excluyendo espacios y signos de puntuación: ' + numCaracteresExc;

  // console.log('CantidadNumeros:', numNumeros);
  palabrasLi4.innerHTML = 'Numeros: ' + numNumeros;

  // console.log('SumaNumeros:', suma);
  palabrasLi5.innerHTML = 'Suma: ' + suma;

  // console.log('LongitudPalabras:', longitudPalabras);
  palabrasLi6.innerHTML = 'Longitud: ' + longitudPalabras;


})


//Funcionalidad para poder limpiar caja de texto y metricas al hacer click al botón
const limpiarBoton = document.getElementById('reset-button');
limpiarBoton.addEventListener('click', () => {
  document.getElementsByName('user-input')[0].value = "";
  palabrasLi.innerHTML = "Palabras: 0";
  palabrasLi2.innerHTML = "Caracteres: 0";
  palabrasLi3.innerHTML = "Caracteres excluyendo espacios y signos de puntuación: 0";
  palabrasLi4.innerHTML = "Numeros: 0";
  palabrasLi5.innerHTML = "Suma: 0";
  palabrasLi6.innerHTML = "Longitud: 0";

}
)


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

