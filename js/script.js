//alert("Hello World!");

/* **** consegna
 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Bonus: effettuate dei controlli sui dati di input 
******** */

//prompt nr. chilometri
const numberKM = parseFloat(prompt("Quanti chilometri devi percorrere?")).toFixed(2);
console.log(numberKM);

//prompt età
const eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

//prezzo al KM
const chilometro = 0.21;
// console.log(chilometro);

//prezzo finale in base ai KM
let price = parseFloat(numberKM * chilometro).toFixed(2);
console.log(price);

//output HTML
document.getElementById("totale").innerHTML = price;

//sconto 20% minorenni
let sconto20 = parseFloat(price * 20 / 100).toFixed(2);

//sconto 40% over65
let sconto40 = parseFloat(price * 40 / 100).toFixed(2);

//condizioni per i minorenni e over65
if (eta < 18) {
    let price18 = parseFloat(price - sconto20).toFixed(2);
    console.log(price18); 
    document.getElementById("sconto-20").innerHTML = sconto20;
    document.getElementById("totale-end").innerHTML = price18;
} else if (eta >= 65) {
    let price65 = parseFloat(price - sconto40).toFixed(2);
    console.log(price65);
    document.getElementById("sconto-40").innerHTML = sconto40;
    document.getElementById("totale-end").innerHTML = price65;
} else {
    console.log(price);
}