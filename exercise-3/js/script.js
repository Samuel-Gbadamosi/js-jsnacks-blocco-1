
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo array coi nomi degli invitati

var listaNomi = ["jake","tyson","reacher"];
var nome = prompt("inserisci il tuo nome");
var message = false;
//diamo il for per ottenre una sola il check del nome

for (var i = 0; i < listaNomi.length; i++){
//se il nome corrusponte ad un nome della lista = true
  if (nome == listaNomi[i]) {
message = true;
}

// messaggio
}

if(message) {
  console.log("sei stato invitato");
} else {
  console.log("no, mi dispiace");
}
