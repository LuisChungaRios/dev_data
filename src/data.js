const newInjuries = [];
const indexInjuries = [{name: 'Ocupantes de Bus', index: 2},{name : 'Motociclistas', index : 13}, {name: 'Pasajeros de auto', index: 20},{name: 'Ciclistas', index: 23}, {name: 'Peatones', index: 24}, {name: 'Botes recreacionales', index: 36}, {name: 'Año', index: 48}];

for(let i = 0; i < INJURIES.length; i++) {
    const obj = {}
    for(let j = 0; j < indexInjuries.length; j++)  {
        obj[indexInjuries[j].name] = Object.values(INJURIES[i])[indexInjuries[j].index]
    } 
    newInjuries.push(obj)
}
console.log(newInjuries)




































// window.data = {
//   filterByYear: (data, year) => {
//     return data.filter((obj) => parseInt(obj.Year) === year);
//   }

//   }


  //console.log(data.filterByYear(INJURIES,2015))

