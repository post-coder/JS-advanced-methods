

const buttonAnonym = document.getElementById("button-anonym");
const buttonArrow = document.getElementById("button-arrow");


// anonymous function
buttonAnonym.addEventListener("click", function() {

  // "this" vuol dire "questo"
  // this è la variabile che contiene l'elemento che ha scatenato l'evento
  console.log("click funzione anonima");
  console.log(this);

});

// arrow function
// () => {}

buttonArrow.addEventListener("click", () => {
  console.log("click arrow function");
  console.log(this);
});