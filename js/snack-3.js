const animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];


const mammiferi = animali.filter((animaleCorrente) => {

  // if( animaleCorrente.classe == "mammiferi" ) {
  //   return true;
  // }

  return animaleCorrente.classe == "mammiferi";

});

console.log(mammiferi);
