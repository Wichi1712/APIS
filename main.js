//Prueba de PockeAPI---------------------------------------------------------
const DATA = "https://pokeapi.co/api/v2/pokemon/"
const DATAditto = "https://pokeapi.co/api/v2/pokemon/ditto"
const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");
const base_experience = document.getElementById("base_experience");

//const base_icons = document.getElementById("base_icons");
const audio = document.getElementById("audio");
const base_img = document.getElementById("base_img");
let images = document.getElementById("images");

const callAPI = () => {
    //alert("poke");
    fetch(DATA + "ditto")//('https://pokeapi.co/api/v2/pokemon/ditto')
    //fetch('https://pokeapi.co/api/v2/ability/battle-armor')
        .then(res => res.json())
        .then(data => { 
            images.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";
            apiData.innerText = "Name: "+JSON.stringify(data.name.toUpperCase());
            base_experience.innerText = "Experiencia Base:" + JSON.stringify(data.base_experience); //${ JSON.stringify(data.base_experience)}ˋ
            //base_icons.innerText = "Base Icons:" + JSON.stringify(data.cries);
            audio.src = "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg";

            

        })
        .catch(e => console.error(new Error(e)));

        fetch(DATA + "pikachu")//('https://pokeapi.co/api/v2/pokemon/ditto')
    //fetch('https://pokeapi.co/api/v2/ability/battle-armor')
        .then(res => res.json())
        .then(data => { 
            document.getElementById("imagesPikachu").innerHTML = `<img src="${data.sprites.front_default}"/>`; //"${data.sprites.back_default}";//"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";
            document.getElementById("apiDataPikachu").innerText = "Name: "+JSON.stringify(data.name.toUpperCase());
            document.getElementById("base_experience_pikachu").innerText = "Experiencia Base:" + JSON.stringify(data.base_experience); //${ JSON.stringify(data.base_experience)}ˋ
            //base_icons.innerText = "Base Icons:" + JSON.stringify(data.cries);
            document.getElementById("audioPikachu").innerHTML = `<audio controls src="${data.cries.latest}"></p>`;// "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg";
            

        })
        .catch(e => console.error(new Error(e)));
}

//ICO
//base_img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png";
//images.src = JSON.stringify(data.sprites.base_default);//REVISAR

//document.getElementById("apiDataPikachu").innerHTML = "Name: "+ JSON.stringify(data.name);



//-----------------------
//const DATA2 = await fetch(DATA + "pikachu").json();
//document.getElementById("imagesPikachu").src ="${data.sprites.front_default}"// DATA + "pikachu";
//document.getElementById("apiDataPikachu").innerHTML = DATA2.name;

apiButton.addEventListener("click", callAPI);
//apiButton.addEventListener("click", pockemon);//SE puede llamar a dos funciones con un boton
//---------------------------------------------------------------------------------