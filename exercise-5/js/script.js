//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var nome1 = prompt("inserisci il tuo nome");
var nome2 = prompt("inserisci il tuo nome");
var message;

if (nome1.length > nome2.length) {
  console.log("il numero pi lunga " + nome1);

  // console.log();
} else if ( nome1.length > nome2.length) {
  console.log("il numero pi corto " + nome2);

} else {
console.log(nome1== nome2);
}

console.log("il numero pi corto " + nome1);
console.log("il numero pi lungo " + nome2);
