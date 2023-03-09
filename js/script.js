

const numeri = [1,2,3,4,5,6];
console.log(numeri);

// modo canonico
// for(let i = 0; i < numeri.length; i++) {
//   console.log(numeri[i]);
// }


// modo più contratto per ciclare l'array
// metodo for each ("per ogni")

// in automatico il nostro metodo forEach ci restituisce come parametro della funzione anonima (o arrow) 
// il PRIMO parametro è l'elemento singolo dell'array
// il SECONDO parametro è l'indice attuale
// il TERZO parametro è l'array
console.log("stampa con foreach: ")
numeri.forEach((pippo, indiceAttuale) => {

  console.log(pippo);

});


// filtrare un array
// let numeriPari = [];
// for (let i = 0; i < numeri.length; i++) {
  
//   if(numeri[i] % 2 == 0) {
//     numeriPari.push(numeri[i]);
//   }

// }

// modo contratto per filtrare un array:
// metodo filter()
const numeriPari = numeri.filter((elementoAttuale) => {
  if(elementoAttuale % 2 == 0) {

    // appena c'è un return true, pusha in automatico l'elemento attuale nell'array
    return true;

  }

});

console.log("array con filter: ", numeriPari);



// map() modifica un array

// nuovoArray dovrà contenere i numeri dell'array precedente, elevati al quadrato
let nuovoArray = [];

// for(let i = 0; i < numeri.length; i++) {
//   let newNumber = numeri[i] * numeri[i];

//   nuovoArray.push(newNumber);
// }

nuovoArray = numeri.map((elementoAttuale) => {

  return elementoAttuale * elementoAttuale;
  
});

console.log("array con map: ", nuovoArray);

