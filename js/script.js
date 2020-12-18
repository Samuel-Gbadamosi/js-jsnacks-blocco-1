// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var empty = [];
for (var i = 0; i < 5; i++) {
var numero = parseInt(prompt("inserire un numero"));
empty = numero % 2;
if (empty == 0) {
  alert ("il numero e pari");
} else {
  alert ("il numero e dispari");
}
}







console.log("your number is " + empty);
