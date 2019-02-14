//const clases = document.getElementById("class-selector");

window.pokemones = {
  
  filterData: (typePokemon, dataPokemon)=> {
    let listTypePokemon = [''];
    dataPokemon.forEach(element => {
      let miType = element.type[0];
      if(element.type[0] === typePokemon){
        listTypePokemon = listTypePokemon + [element.name, element.num, element.img];
      }
    });
    return listTypePokemon;
  },

  filterName: (search, dataPokemon)=> {
    let pokemonEncontrado = [];
    dataPokemon.forEach(element =>{
      let myPokemon = element.name[0];
      if (element.name === search) {
        pokemonEncontrado = dataPokemon + [element.name];
        console.log(pokemonEncontrado);
      }
    });
    return pokemonEncontrado;
  },
}


  
  
//   scortData: ()=>{

//   } 

//   compuStats: ()=>{

//   }
// }

