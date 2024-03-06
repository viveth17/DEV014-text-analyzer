const analyzer = {
  getWordCount: (text) => {

    text = text.trim();//Eliminar espacios en blanco del principio y del final
    //Declaro una variable para el inicio del bucle for y un array vacío
    let nuevaPalabra = 0;
    const arrayPalabras = [''];
    for (let i = 0; i < text.length; i++) { // entrar al ciclo for para comenzar la iteracion 

      if (text[i] !== " ") { //Condicion si este caracter no es un espacio en blanco
        arrayPalabras[nuevaPalabra] += text[i];
        // console.log('arrayPalabras', arrayPalabras);
      } else {
        nuevaPalabra++;
        arrayPalabras.push(''); ///Agrega un elemento al array (string vacio)
      }
    }
    return arrayPalabras.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },


  getCharacterCount: (text) => {

    text = text.trim();
    const numeroCaract = text.length;
    return numeroCaract;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },


  getCharacterCountExcludingSpaces: (text) => {
    text = text.trim(); //Eliminar espacios en blanco al principio y al final
    let contador = 0; // inicializamos el contador de caracteres 
    const puntuacion = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', '/', '\\', '|', '<', '>', '=', '+', '*', '&', '^', '%', '$', '#', '@'];

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      if (char !== ' ' && !puntuacion.includes(char)) { // si el caracter no es un espacio ni un signo de puntuacion 
        contador++;
      }
    }
    return contador;
  },



  getNumberCount: (text) => {
    text = text.trim();//quitar espacios del inicio y el final

    if (text[text.length - 1] === '.') {// Si el ultimo caracter es un punto??
      text = text.slice(0, -1); //elimina el ultimo caracter del string
    }
    let numeroPalabras = 0;
    const arrayPalabras = [''];
    for (let i = 0; i < text.length; i++) { // entrar al ciclo for para comenzar la iteracion 

      if (text[i] !== " ") { //Condicion si este caracter no es un espacio en blanco
        arrayPalabras[numeroPalabras] += text[i];
        // console.log('arrayPalabras', arrayPalabras);
      } else {
        numeroPalabras++;
        arrayPalabras.push(''); ///Agrega un elemento al array (string vacio)
      }
    }

    let contNumeros = 0; //variable de contador de números 
    for (let i = 0; i < arrayPalabras.length; i++) {
      // console.log('arrayPalabras.length:', arrayPalabras.length);
      if (!isNaN(Number(arrayPalabras[i]))) { //revisa si es un numero
        contNumeros++;
      }

    }
    // console.log('contNumeros', contNumeros)
    return contNumeros; //retornamos la cantidad de números enteros encontrados

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },



  getNumberSum: (text) => {
    text = text.trim();//quitar espacios del inicio y el final

    if (text[text.length - 1] === '.') {// Si el ultimo caracter es un punto??
      text = text.slice(0, -1); //elimina el ultimo caracter del string
    }
    let numeroPalabras = 0;
    const arrayPalabras = [''];
    for (let i = 0; i < text.length; i++) { // entrar al ciclo for para comenzar la iteracion 

      if (text[i] !== " ") { //Condicion si este caracter no es un espacio en blanco
        arrayPalabras[numeroPalabras] += text[i];
        // console.log('arrayPalabras', arrayPalabras);
      } else {
        numeroPalabras++;
        arrayPalabras.push(''); ///Agrega un elemento al array (string vacio)
      }
    }

    const contNumeros = []; //variable para almacenar los numeros
    for (let i = 0; i < arrayPalabras.length; i++) {
      // console.log('arrayPalabras.length:', arrayPalabras.length);
      if (!isNaN(Number(arrayPalabras[i]))) { //revisa si es un numero
        contNumeros.push(parseFloat(arrayPalabras[i]));
      }

    }
    // console.log('contNumeros:', contNumeros.reduce((a, b) => a + b, 0));
    return contNumeros.reduce((a, b) => a + b, 0); //retornamos la cantidad de números enteros encontrados

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },




  getAverageWordLength: (text) => {
    //Eliminar espacios en blanco del principio y del final
    text = text.trim();

    const arrayPalabras = [''];
    let longitudTotal = 0; // Inicializacion de longitud palabras a 0 
    let cantidadPalabras = 0;

    for (let i = 0; i < text.length; i++) { // entrar al ciclo for para comenzar la iteracion 

      if (text[i] !== " ") { //Condicion si este caracter no es un espacio en blanco
        arrayPalabras[cantidadPalabras] += text[i];
        // console.log('arrayPalabras', arrayPalabras);
      } else {
        cantidadPalabras++;
        arrayPalabras.push(''); ///Agrega un elemento al array (string vacio)
      }
    }
    // console.log('array palabras', arrayPalabras);
    //calcular la longitud total sumando la longitud de cada palabra
    for (let i = 0; i < arrayPalabras.length; i++) {
      longitudTotal += arrayPalabras[i].length;
    }
    // console.log('longitud total', longitudTotal);
    // console.log('array palabras', arrayPalabras.length);
    const longitudMedia = arrayPalabras.length > 0 ? longitudTotal / arrayPalabras.length : 0;
    return parseFloat(longitudMedia.toFixed(2));

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }
};

export default analyzer;
