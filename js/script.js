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


//prompt età
const eta = parseInt(prompt("Quanti anni hai?"));

// console.log(numberKM + " " + eta);

//prezzo al KM
const chilometro = 0.21;
// console.log(chilometro);

//prezzo finale in base ai KM
let price = (numberKM * chilometro);
// console.log(price);

//output HTML
// document.getElementById("totale").innerHTML = price;

//sconto 20% minorenni
// let sconto20 = parseFloat(price * 20 / 100).toFixed(2);

//sconto 40% over65
// let sconto40 = parseFloat(price * 40 / 100).toFixed(2);

//condizioni per i minorenni e over65
if (eta < 18) {
    // price = parseFloat(price - price * 20 / 100).toFixed(2);
    // price = price * .8;
    price *= 0.8;
    console.log(price);
} else if (eta >= 65) {
    // price = parseFloat(price * 0.6).toFixed(2);
    price *= 0.6
} 