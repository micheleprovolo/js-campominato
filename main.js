// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

//aray vuoto da popolare con numeri casuali mai doppi
var userNumbers = []

//var i = 0;
//ciclo che genera 16 numeri da 1 a 100
while (userNumbers.length  < 16) {
        var cpuNum = getRandomIntInclusive (1,100);
        var found = findInArray (cpuNum, userNumbers); //controllo se il numero random è già stato inserito nell'array
        if (found == false) { //se non c'è
                userNumbers.push(cpuNum); //viene inserito
        }
        console.log(found);
        console.log("lunghezza array", userNumbers.length);
}

console.log(userNumbers);


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

