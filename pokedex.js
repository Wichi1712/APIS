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