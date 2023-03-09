
const automobili = [
  {
    marca: "Ford",
    modello: "Fiesta",
    alimentazione: "Benzina"
  },
  {
    marca: "Tesla",
    modello: "Model S",
    alimentazione: "Elettrica"
  },
  {
    marca: "Renault",
    modello: "Clio",
    alimentazione: "Diesel"
  },
  {
    marca: "Alfa Romeo",
    modello: "Giulia",
    alimentazione: "GPL"
  }
];

console.log(automobili);


// foreach, filter, map

// con arrow function, ad esempio
const automobiliBenzina = automobili.filter((elementoAttuale) => {

  // console.log(elementoAttuale)
  if(elementoAttuale.alimentazione == 'Benzina') {
    return true
  }

});

console.log("Automobili benzina:")
console.log(automobiliBenzina);

// con funzione anonima standard, per capire che facciano la stessa cosa
const automobiliDiesel = automobili.filter(function(elementoAttuale) {
  return elementoAttuale.alimentazione == 'Diesel'
});

console.log("Automobili diesel:")
console.log(automobiliDiesel);


// diverso da benzina e diesel
const auomobiliRestanti = automobili.filter((elementoAttuale) => {

  return elementoAttuale.alimentazione != 'Benzina' && elementoAttuale.alimentazione != "Diesel";

});

console.log("Automobili restanti: ")
console.log(auomobiliRestanti);