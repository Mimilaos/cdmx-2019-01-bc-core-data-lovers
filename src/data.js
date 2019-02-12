const clases = document.getElementById("class-selector");
window.pokemones = {
  
  filterData: (typePokemon, dataPokemon)=> {
    let listTypePokemon = [''];
    dataPokemon.forEach(element => {
      let miType = element.type[0];
      if(element.type[0] === typePokemon){
        listTypePokemon = listTypePokemon + [element.name, element.img];
      }
    });
    return listTypePokemon;
  }



  }
  
//   scortData: ()=>{

//   } 

//   compuStats: ()=>{

//   }
// }

