/*CONTENIDO DE LA URL DE POKEAPI
{"count":1302,
    "next":"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous":null,
    "results":[
        {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
        {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
        {"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},
        {"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},
        {"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},
        {"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},
        {"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},
        {"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},
        {"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},
        {"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},
        {"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},
        {"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},
        {"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},
        {"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},
        {"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},
        {"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},
        {"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},
        {"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},
        {"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},
        {"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}
    ]
}
*/

const URL = "https://pokeapi.co/api/v2/pokemon/";
const btnSearch = document.getElementById("btn_search");
const searchInput = document.getElementById("search");
const pokeData = document.getElementById("pokeData");
const pokeContainer = document.getElementById("pokeContainer");



async function pokemon() {

    const searchPokemon = searchInput.value.toLowerCase();

    try {
        const response = await fetch(URL + searchPokemon);
        const data = await response.json();

        pokeData.innerHTML =
        `
        <h2>${data.name.toUpperCase()}</h2>
        <p>Numero: ${data.id}</p>
        <p>altura: ${data.height/10}m.</p>
        <p>Peso: ${data.weight/10}g.</p>
        `;



        pokeContainer.innerHTML =
        `
        <img id="spriteContainer" src="${data.sprites.front_default}">
        <audio controls src="${data.cries.latest}"></audio>
        `;

    } catch (error) {
        console.error(error);
    }
}
    
btnSearch.addEventListener("click", pokemon);

//Otra forma corta de usar el boton------
//document.getElementById("btn_search").addEventListener("click", pokemon);