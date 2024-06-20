function addWithPD(a = 0, b = 0) {
    return a + b;
  }
// const addWithPDAF = (a = 0, b = 0) => a + b;
  console.log (addWithPDAF());



// Función arrow que suma dos números con parámetros por defecto
const addWithPDAF = (a = 0, b = 0) => a + b;

// Ejemplo de llamada a la función
console.log(addWithPDAF());  // Resultado: 0 (a y b son 0 por defecto)
console.log(addWithPDAF(5)); // Resultado: 5 (b es 0 por defecto)
console.log(addWithPDAF(2, 3)); // Resultado: 5