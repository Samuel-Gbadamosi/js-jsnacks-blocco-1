//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var nome1 = prompt("inserisci il tuo nome");
var nome2 = prompt("inserisci il tuo nome");

if (nome1.length > nome2.length) {
  // if number one is greater than nome 2 print num2 first then num1
  console.log(nome2);
  console.log(nome1);


  // console.log();
} else if ( nome2.length > nome1.length) {
  // if number two is greater than nome 1 print num1 first then num2

  console.log(nome1);
  console.log(nome2);

} else {
console.log(nome1== nome2);
}
// it gives you a true if the same
