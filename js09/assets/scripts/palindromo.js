function esPalindromo(palabra) {
    // Eliminamos los espacios en blanco y convertimos todo a minúsculas
    palabra = palabra.toLowerCase().replace(/\s/g, '');
                                 // .replaceAll(" ","")
    
    // Comparamos la palabra original con su versión invertida
    return palabra === palabra.split('').reverse().join('');
  }