/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
var newArray = INJURIES.filter(function (obj) {
  return(parseInt(obj.Year) === 1960);
  
});
console.log(newArray);
