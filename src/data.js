
document.addEventListener('DOMContentLoaded', () => {
   
    const newInjuries = [];
    const indexInjuries = [{name: 'Ocupantes de Bus', index: 2},{name : 'Motociclistas', index : 13}, {name: 'Pasajeros de auto', index: 20},{name: 'Ciclistas', index: 23}, {name: 'Peatones', index: 24}, {name: 'Botes recreacionales', index: 36}, {name: 'Año', index: 48}];
    const selectList = document.createDocumentFragment()
    const divList = document.createDocumentFragment()
    const selectDom = document.getElementById('yearSelect')
    const container_description = document.getElementById('container_description')
    for(let i = 0; i < INJURIES.length; i++) {
        const obj = {}
        for(let j = 0; j < indexInjuries.length; j++)  {
            obj[indexInjuries[j].name] = Object.values(INJURIES[i])[indexInjuries[j].index]
        } 
        newInjuries.push(obj)
    }


    const removeUndefined = myArray =>  {

        let data =  myArray.map(element => {
                
             element['Botes recreacionales'] =  element['Botes recreacionales'] == undefined ? 0 :  element['Botes recreacionales']
             element['Pasajeros de auto'] =  element['Pasajeros de auto'] == undefined ? 0 :  element['Pasajeros de auto']
             element['Ciclistas'] =  element['Ciclistas'] == undefined ? 0 :  element['Ciclistas']
             element['Ocupantes de Bus'] =  element['Ocupantes de Bus'] == undefined ? 0 :  element['Ocupantes de Bus']
             element['Motociclistas'] =  element['Motociclistas'] == undefined ? 0 :  element['Motociclistas']
             element['Peatones'] =  element['Peatones'] == undefined ? 0 :  element['Peatones']
             
             return element
        
        
         })
 
         return data
     }
 
     const draw = myArray => {
      let template   = `
             
             <p>  Año: ${myArray[0]['Año']} </p>      
             <p> Botes recreacionales:  ${myArray[0]['Botes recreacionales']} </p>      
             <p> Ciclistas ${myArray[0]['Ciclistas']} </p>  
             <p> Ocupantes de Bus:  ${myArray[0]['Ocupantes de Bus']} </p>      
             <p> Motociclistas:  ${myArray[0]['Motociclistas']} </p> 
             <p> Peatones:  ${myArray[0]['Peatones']} </p> 
             <p> Pasajeros de auto:  ${myArray[0]['Pasajeros de auto']} </p> 
             `
         return template
     }
    // Creamos una función para crear los option
    const createOption = (value) => {
        let year = value.split('-')
        let option = document.createElement('option')
        option.value = value 
        option.textContent = year[0]
       
      return  selectList.appendChild(option)
    }
    
    // recorremos el nuevo array y creamos los option  
    newInjuries.forEach(element => {
        let array = []
        array.push(element)
        let data = removeUndefined(array)
            data = draw(data)
        let div = document.createElement('div')
            div.setAttribute('class','container-description container')
            div.innerHTML = data
      
        divList.appendChild(div)
        createOption(element['Año'])
    });

    selectDom.appendChild(selectList)
    container_description.appendChild(divList)

    // Evento change del select 
    
    selectDom.addEventListener('change', e =>  {

        let date = e.target.value
        if (date !== 0) {
        let data = newInjuries.filter( a => a['Año'] == date)
            data = removeUndefined(data)
          
        let template = draw(data)
            container_description.innerHTML = template
        }
    })
 

})


 


























// window.data = {
//   filterByYear: (data, year) => {
//     return data.filter((obj) => parseInt(obj.Year) === year);
//   }

//   }


  //console.log(data.filterByYear(INJURIES,2015))

