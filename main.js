//Prueba de PockeAPI---------------------------------------------------------
const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");
const base_experience = document.getElementById("base_experience");
const base_icons = document.getElementById("base_icons");
let images = document.getElementById("images");

const callAPI = () => {
    //alert("poke");
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //fetch('https://pokeapi.co/api/v2/ability/battle-armor')
        .then(res => res.json())
        .then(data => {
            apiData.innerText = "data: "+JSON.stringify(data);
            base_experience.innerText = "Experiencia Base:" + JSON.stringify(data.base_experience); //${ JSON.stringify(data.base_experience)}ˋ
            base_icons.innerText = "Base Icons:" + JSON.stringify(data.sprites);
            images.src = JSON.stringify(data.sprites.base_default);//REVISAR
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener("click", callAPI);
//---------------------------------------------------------------------------------