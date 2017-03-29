function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

}


var pokemons=[];
  function crearPokemon(){
    var nombrePokemon=document.getElementById("nombrePokemon");
    var colorPokemon=document.getElementById("colorPokemon");
    var ataquePokemon=document.getElementById("ataquePokemon");

    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              parseInt(ataquePokemon.value));
    pokemons.push(pokemon);
    mostrarPokemonsUno();
    mostrarPokemonsDos();

  }


  function mostrarPokemonsUno(){
    var nombrePokemon=document.getElementById("nombrePokemon");

    var lista=document.createElement("option");
    var pokemonsCreados=document.createTextNode(nombrePokemon.value);
    lista.appendChild(pokemonsCreados);
    var listaPokemons=document.getElementById("opcionUno").appendChild(lista);
}

function mostrarPokemonsDos(){
  var nombrePokemon=document.getElementById("nombrePokemon");

  var lista=document.createElement("option");
  var pokemonsCreados=document.createTextNode(nombrePokemon.value);
  lista.appendChild(pokemonsCreados);
  var listaPokemons=document.getElementById("opcionDos").appendChild(lista);
}

function activarPelea(){
//Fue mi primer intento y no funcionó! :()
//     var selectorUno =document.getElementById("opcionUno").selectedIndex;
//     var selectorDos =document.getElementById("opcionDos").selectedIndex;
//     if(selectorUno.value == selectorDos.value){
//       console.log("Holi");
//     }else{
//       console.log("adios");
//     }
// }
  // var selectorUno =document.getElementById("opcionUno");
  // var selectorDos =document.getElementById("opcionDos");

  var indicePokemonUno = document.getElementById("opcionUno").selectedIndex;
  var indicePokemonDos = document.getElementById("opcionDos").selectedIndex ;
  pokemons[indicePokemonUno].pelear(pokemons[indicePokemonDos]);
  var resultado = document.getElementById("resultadoPelea");
  resultado.innerText = pokemons[indicePokemonUno].nombre + " atacó a "
                      + pokemons[indicePokemonDos].nombre + " y "
                      + pokemons[indicePokemonDos].nombre + " tiene "
                      + pokemons[indicePokemonDos].vida + " de vida restante.";
}
