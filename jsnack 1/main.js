// console.log("js ok");
// SNACK 1
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
//  (qui potete usare un prompt).
//  Il programma stampa la somma di tutti i numeri inseriti.

/*
1.aggiungi elementi nel dom
2. chiedi con un promt 10 numeri
3.stampa la somma
*/

const text = document.getElementById("text");
// console.log(text);
somma = 0;
for (i = 1; i <= 10; i++) {
  let i = parseInt(prompt("che numeri vuoi?").trim());
  console.log(i);
  somma += i;
  console.log(somma);
}

text.innerHTML = "la somma dei numeri è = " + somma;
