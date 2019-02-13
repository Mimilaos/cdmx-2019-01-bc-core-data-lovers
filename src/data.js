window.pokemones = {
  
  filterData: (typePokemon, dataPokemon)=> {
    let listTypePokemon = [''];
    dataPokemon.forEach(dataPokemon => {
      let miType = dataPokemon.type[0];
      if(dataPokemon.type[0] === typePokemon){
        listTypePokemon = listTypePokemon + [dataPokemon.name, dataPokemon.img];
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

