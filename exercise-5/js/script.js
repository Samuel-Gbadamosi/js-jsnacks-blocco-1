//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var nome1 = prompt("inserisci il tuo nome");
var nome2 = prompt("inserisci il tuo nome");

if (nome1.length > nome2.length) {
  console.log(nome2);
  console.log(nome1);


  // console.log();
} else if ( nome2.length > nome1.length) {
  console.log(nome1);
  console.log(nome2);

} else {
console.log(nome1== nome2);
}
