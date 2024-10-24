//Prueba de PockeAPI---------------------------------------------------------
const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");
const base_experience = document.getElementById("base_experience");

const callAPI = () => {
    //alert("poke");
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => {
            apiData.innerText = "data: "+JSON.stringify(data);
            base_experience.innerText = "Experiencia Base:" + JSON.stringify(data.base_experience); //${ JSON.stringify(data.base_experience)}ˋ
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener("click", callAPI);
//---------------------------------------------------------------------------------