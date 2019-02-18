const search = document.getElementById('seeker');
const selector = document.getElementById('class-selector');
const dataPokemon = POKEMON.pokemon;
const imprimirTodo = document.getElementById('center-area');
//const imprimirPorTipo = document.getElementById('listTypePokemon');

const printPokemon = (dataPokemon) => {
dataPokemon.forEach(element => {
   console.log(element)
   let infPokemon = `<button class="casilla"><h6>${element.name.toUpperCase()}</h6><img src="${element.img}"><p>${element.type}</p><p>${element.num}</p><p>${element.height}</p><p>${element.weight}</p></button>`;
   imprimirTodo.insertAdjacentHTML("beforeend", infPokemon);
   return printPokemon;
});  
};
printPokemon (dataPokemon);

selector.addEventListener('change', () => {
   imprimirTodo.innerHTML = '';
   let typePokemon = event.target.value;
   const porTipo = window.pokemones.filterData(typePokemon, dataPokemon);
   printPokemon(porTipo)
   return typePokemon;   
})

search.addEventListener('keyup' , () => {
   imprimirTodo.innerHTML = '';
   let nPokemon = search.value;
   let filterName = window.pokemones.filterName(nPokemon, dataPokemon);
   printPokemon(filterName)
   return nPokemon;
})

