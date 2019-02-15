//const clases = document.getElementById("class-selector");

window.pokemones = {

 filterData: (typePokemon, dataPokemon)=> {
   let listTypePokemon = [];
   dataPokemon.forEach(element => {
     let miType = element.type[0];
     if(element.type[0] === typePokemon){
       listTypePokemon = listTypePokemon + [element.name, element.num, element.img];
     }
   });
   return listTypePokemon;
 },

 filterName: (nPokemon, dataPokemon)=> {
   let pokemonEncontrado = [];
   dataPokemon.forEach(pokemon =>{
     let myPokemon = pokemon.name[0].toUpperCase();
     if (myPokemon == nPokemon.toUpperCase()) {
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

