const nomi = ['pippo', 'PLUTO', 'Paperino', "PaPeRoNE"];

console.log(nomi);

// useremo il metodo map

// come rendiamo tutte quelle stringhe in minuscolo con l'iniziale maiuscola?

let stringa = "PIPPO";

// trasformiamo tutta la stringa in minuscolo (toLowerCase())
// trasformiamo solo il primo carattere in maiuscolo (toUpperCase())

const nomiCorretti = nomi.map((nomeAttuale, indice) => {
  // pippo

  let nuovoNome = nomeAttuale.toLowerCase();
  
  // rimuovere la prima lettera
  // modificarla
  // aggiungerla all'inizio

  let primaLettera = nuovoNome[0].toUpperCase();
  nuovoNome = primaLettera + nuovoNome.slice(1)

  console.log(nuovoNome);

  return nuovoNome;
  // push della variabile nel nuovo array a sinistra dell'uguale (nomiCorretti)


});

console.log(nomiCorretti);

