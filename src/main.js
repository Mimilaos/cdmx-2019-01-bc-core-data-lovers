 const search = document.getElementById('seeker');
const selector = document.getElementById('class-selector')
const dataPokemon = POKEMON.pokemon;

dataPokemon.forEach(element => {
    let name = element.name;
    //console.log(name)
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
    //console.log(weight);
})


selector.addEventListener('change', () => {
    let typePokemon = event.target.value;
    document.getElementById('listTypePokemon').innerHTML = window.pokemones.filterData(typePokemon, dataPokemon);


    id="listTypePokemon"
    document.getElementById(listTypePokemon).innerHTML = let name;
})

