// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.


//array vuoto da popolare con numeri casuali mai doppi
var mine = [];

//ciclo che genera 16 numeri da 1 a 100
while (mine.length  < 16) {
        var cpuNum = getRandomIntInclusive (1,100);
        var found = findInArray (cpuNum, mine); //controllo se il numero random è già stato inserito nell'array
        if (found == false) { //se non c'è
                mine.push(cpuNum); //viene inserito
        }
        console.log(cpuNum);
        
}

console.log("I numeri vietati sono: " + mine);


//l'utente deve inserire un numero da 1 a 100
var userNumbers = [];

//finchè l'utente non gioca, il suo numero non sarà riscontrato tra quelli vieti e dunque sarà valorizzato a false
var trovato = false;

//il punteggio dell'utente parte da zero
var score = 0;

while (score < 84 && trovato == false) {

        var askUser = parseInt(prompt("Inserisci un numero da 1 a 100"));
        console.log("L'utente ha scelto " + askUser);

if (askUser > 0 && askUser < 101) {
        if (userNumbers.includes(askUser) == true){
                alert("occhio! hai già inserito questo numero!")
        } else if (mine.includes(askUser) == true){
                alert("Hai pestato la mina: game over");
                trovato = true;
        } else {
                alert("Hai fatto punto! Prosegui")
                userNumbers.push(askUser);
                score ++;
        }
} else {
        alert("Inserisci numero valido cioè da 0 a 100");
}
}

        
       

//BLOCCO FUNZIONI
//funzione per controllare un valore dentro un array: restituisce true o false
function findInArray (value, array) {
        var found = false;
        var i = 0;
        while (found == false && i < array.length) {
                if (array[i] == value) {
                        found = true;
                }
                i++
        }
          return found;      
}


//funzione che genera un numero casuale compreso fra un min e max che imposto come argomento quando la invoco
function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}