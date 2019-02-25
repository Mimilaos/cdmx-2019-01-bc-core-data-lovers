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

  function mostrarPag () {
    document.getElementById('mainly').style.display = "block";
  }
