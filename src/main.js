
const selector = document.getElementById('class-selector');
//const imprimir=document.getElementById('listTypePokemon');
//const nombrePokemon = document.getElementById('name-pokemon');
const dataPokemon = POKEMON.pokemon;

document.getElementById('seeker').onchange= searchName;
    let pokemonEncontrado = dataPokemon.filter(dataPokemon => {
        dataPokemon.forEach(dataPokemon => {
            let nombre = dataPokemon.name[0];
            if(dataPokemon.name[0] == searchName){
             pokemonEncontrado = searchName + [datapokemon.name];
            }
        })
    }); 
    return pokemonEncontrado;
    id="name-pokemon"
    document.getElementById(name-pokemon),innerHTML = dataPokemon.name;


    
  
    
      
 

 

// dataPokemon.forEach(element => {
//     let name = element.name;
//     let num = element.num;
//     let img = element.img;
//     let type = element.type;
//     let height = element.height;
//     let weight = element.weight;
//     let candy = element.candy;
//     let candyCount = element.candy_count;
//     let spawnChance = element.spawn_chance;
//     let avgSpawns = element.avg_spawns;
//     let spawnTime = element.spawn_time;
//     console.log(weight);
// })


// selector.addEventListener('change', () => {
 //  let typePokemon = event.target.value;
//    document.getElementById('listTypePokemon').innerHTML = window.pokemones.filterData( typePokemon, dataPokemon);
//    let valorPokemon = window.pokemones.filterData( typePokemon, dataPokemon);
//   console.log(valorPokemon);

//   mostrarPokemon (valorPokemon)
//   return valorPokemon;
// })

// const mostrarPokemon = (valorPokemon)=> {
//     let mostrar=" ";
//     for (let key in valorPokemon)
//     {
//         mostrar = `<section id="listTypePokemon"><img src="${valorPokemon}" alt="" ></section>`
//     }

//     imprimir.insertAdjacentElement = mostrar;
//     return mostrar;
// }