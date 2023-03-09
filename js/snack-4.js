const persone = [
  {
    nome: "Gabriel",
    cognome: "Spanu",
    eta: 26
  },
  {
    nome: "Edoardo",
    cognome: "Lannino",
    eta: 24
  },
  {
    nome: "Valentino",
    cognome: "Rossi",
    eta: 46
  },
  {
    nome: "Vasco",
    cognome: "Rossi",
    eta: 8
  },
  {
    nome: "Albus",
    cognome: "Silente",
    eta: 105
  },
  {
    nome: "Albus Severus",
    cognome: "Potter",
    eta: 4
  }
];


// map
const nuovoArray = persone.map((personaAttuale) => {

  if(personaAttuale.eta >= 18) {

    // dot notation
    return `${personaAttuale.nome} ${personaAttuale.cognome}, risulta idoneo.`;

  } else {

    // bracket notation
    return `${personaAttuale['nome']} ${personaAttuale['cognome']}, risolta non idoneo`;

  }
  
  // operatore ternario, super curosità
  // return  `${personaAttuale['nome']} ${personaAttuale['cognome']}, ${personaAttuale.eta >= 18 ? 'idoneo' : "non idoneo"}`;

});

console.log(nuovoArray);