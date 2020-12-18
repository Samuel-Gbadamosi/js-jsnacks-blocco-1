//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore


var numero1 = parseInt(prompt("inserisci il numero"));
var numero2 = parseInt(prompt("inserisci il numero"));
if (numero1 > numero2) {
  document.getElementById('one').innerHTML = "the highest number is " + numero1;
  // console.log("this number is higher than the other " + numero1);
} else {
  document.getElementById('two').innerHTML = "the highest number is " + numero2;


}


if (numero1 > numero2) {
  console.log("the highest number is " + numero1);
} else {
  console.log("the highest number is " + numero2);
}
