opcionNombre = document.getElementById("listaNombres");
//const clases = document.getElementById("class-selector");

window.pokemones = {

 filterData: (typePokemon, dataPokemon)=> {
  let filtroPorTipo = dataPokemon.filter(element => element.type.includes(typePokemon));
  return filtroPorTipo; 
  },

 filterName: (nPokemon, dataPokemon)=> {
 let pokemonEncontrado = dataPokemon.filter(dataPokemon => (dataPokemon.name.toUpperCase().match(nPokemon.toUpperCase()))); 
  return (pokemonEncontrado)
  },
}

  
// sortName: (dataPokemon)=> {
//   const filterName= dataPokemon.name.sort((a,b)=> {
//       if(a.name > b.name){
//         return 1;
//       }
//       if(a.name < b.name){
//         return-1;
//       }
//     })
//     return(filterName)
//   },
//   compuStats: ()=>{
