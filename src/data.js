const clases = document.getElementById("class-selector");
const listTipePokemon = [''];
window.pokemones = {
  
  filterData: (typePokemon, dataPokemon)=> {
    dataPokemon.forEach(element => {
      let miType = element.type[0];
      if(element.type[0] === typePokemon){
        console.log(mitype)
      }
    });
    return 'result'
  }



  }
  
//   scortData: ()=>{

//   } 

//   compuStats: ()=>{

//   }
// }

