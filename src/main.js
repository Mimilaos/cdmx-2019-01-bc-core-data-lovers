
const selector = document.getElementById('class-selector');
//const imprimir=document.getElementById('listTypePokemon');
//const nombrePokemon = document.getElementById('name-pokemon');
const dataPokemon = POKEMON.pokemon;

const nPokemon = document.getElementById('name-pokemon');


dataPokemon.forEach(element => {
    let name = element.name;
    let num = element.num;
    let img = element.img;
    let type = element.type;
    let height = element.height;
    let weight = element.weight;
    let candy = element.candy;
    let candyCount = element.candy_count;
    let spawnChance = element.spawn_chance;
    let avgSpawns = element.avg_spawns;
    let spawnTime = element.spawn_time;
    
})


selector.addEventListener('change', () => {
    let typePokemon = event.target.value;

    document.getElementById('listTypePokemon').innerHTML = window.pokemones.filterData(typePokemon, dataPokemon);


    id="listTypePokemon"
    document.getElementById(listTypePokemon).innerHTML = name;
})

nPokemon.addEventListener('onkeyDown',() => {
    search = event.value;
    let pokemonEncontrado = window.pokemones.filterName(search,dataPokemon);

    id= 'name-pokemon'
    document.getElementById(name-pokemon).innerHTML = pokemonEncontrado;

})

