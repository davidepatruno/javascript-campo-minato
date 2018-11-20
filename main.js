// creiamo un array dove verranno memorizzati gli N numeri vietati e con la funzione random ed un ciclo for definiamo il sistema di identificazione dei numeri vietati.
var numeri_vietati = [];

function random(max,min) {
  var numeroRandom = Math.floor(Math.random()*(max-min+1)+min);
  return numeroRandom;
}

for (var i = 0; i < 16; i++) {
  var numero_vietato = random(1,100);
  numeri_vietati.push(numero_vietato);
  console.log(numero_vietato);
  console.log(numeri_vietati);
}

// Ora strutturiamo il prompt in cui l'utente inserirà i numeri da confrontare con quelli vietati
var numero_utente = [];
var vietato = false;
var gia_inserito = false;
var punteggio = 0;
var contatore = 0;

while (contatore < 16) {
  var prompt_utente = parseInt(prompt("inserisci un numero"));
  numero_utente.push(prompt_utente);
  while (gia_inserito == true) {
    for (i = 0; i < numero_utente.lenght; i++){
      if (prompt_utente == numero_utente[i]){
        var gia_inserito = true;
        console.log(prompt_utente);
        console.log(numero_utente);
      }
    }
    if (gia_inserito == true){
      alert("Numero già inserito! inserire un altro numero");
      // var prompt_utente = parseInt(prompt("Numero già inserito"));
    }
  }
  punteggio++;
  contatore++;
  // document.writeln("continua così" + "<br>");
  for (i=0; i < 16; i++) {
    if (prompt_utente == numeri_vietati[i]){
      var vietato = true;
      console.log(vietato);
    }
  }
  if (vietato == true){
    punteggio--;
    contatore = 17;
    document.writeln("GAME OVER" + "<br>" + "hai indovinato: " + punteggio + " numeri");
  }
  if (contatore == 16) {
    document.writeln("COMPLIMENTI" + "<br>" + "hai indovinato tutti i numeri");
  }
}
