// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array




var listaNumeri =[];

var numero;
for (var i = 0; i < 6; i++){
  numero = parseInt(prompt('Inserisci un numero'));
  var resto = numero % 2;
  // IF DENTRO FOR
  if (resto != 0){
    listaNumeri.push(numero);
  }
}
console.log("your number is " + listaNumeri);
