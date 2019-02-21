const search = document.getElementById('seeker');
const selector = document.getElementById('class-selector');
const dataPokemon = POKEMON.pokemon;
const imprimirTodo = document.getElementById('center-area');


//pagina de inicio
const siguiente = () => {
  const startbutton = document.getElementById ('start-button').value; 
  const printPokemon = document.getElementById ('print-pokemon'); 
  printPokemon.innerHTML = startbutton;
  mainPage.classList.add('hide');
  mainly.classList.remove('hide');
}


const printPokemon = (dataPokemon) => {
dataPokemon.forEach(element => {
  let infPokemon = `<button class="casilla"><img src="${element.img}"><h6>${element.name.toUpperCase()}</h6><p>${element.type}</p><p>${element.num}</p><p>${element.height}</p><p>${element.weight}</p></button>`;
  imprimirTodo.insertAdjacentHTML("beforeend", infPokemon);
  return printPokemon;
});
};
printPokemon (dataPokemon);


selector.addEventListener('change', () => {
  let typePokemon = event.target.value;
  document.getElementById('listTypePokemon').innerHTML = window.pokemones.filterData(typePokemon, dataPokemon);
  listTypePokemon.innerHTML = `<div id="${listTypePokemon}"><img src="${element.img}"><p>${name}</p><p>${element.num}</p><br></div>`;
  listTypePokemon.insertAdjacentHTML("beforeend", result);
})

const inputName = () => {
  let nPokemon = search.value
  window.pokemones.filterName(nPokemon, dataPokemon)
}

search.addEventListener('keyup' , inputName)
// nPokemon.addEventListener('onkeyDown',() => {
//     search = event.value;
//     let pokemonEncontrado = window.pokemones.filterName(search,dataPokemon);
//const imprimirPorTipo = document.getElementById('listTypePokemon');

const printPokemon = (dataPokemon) => {
dataPokemon.forEach(element => {
   console.log(element)
   let infPokemon = `<button onclick="pokemon-only" class="casilla"><h6>${element.name.toUpperCase()}</h6><img src="${element.img}"><p>${element.type}</p><p>${element.num}</p><p>${element.height}</p><p>${element.weight}</p></button>`;
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

//     id= 'name-pokemon'
//     document.getElementById(name-pokemon).innerHTML = pokemonEncontrado;
// })