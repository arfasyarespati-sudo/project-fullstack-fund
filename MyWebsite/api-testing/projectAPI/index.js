
async function fetchData(){
     const container = document.getElementById("pokcontainer");
       try{
        container.innerHTML = `<img id="poksprite" src="" alt="Pokemon Sprite" style="display: none;" />`;
        const pokemonName = document.getElementById("pokname").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("poksprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } 
    catch(error) {      
        container.innerHTML = `<p style="color: red;">Unkown pokemon!!</p>`;
        console.log(error);
    }
}

