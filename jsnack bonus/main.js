// console.log("js ok");

/*
SNACK BONUS
L'utente inserisce un numero di 4 cifre in un input.
 Calcola la somma di tutte le cifre che compongono
  il numero e stampala in pagina.
Esempio: l'utente inserisce 1234, noi stampiamo 10.

 */
/*
1.crea un input
2.meytti l'imput nel js
3.inserisci 4 cifre nell'inpuit e stampa 
4.calcola la somma dei numeri in input
5.stampa in pagina la somma

*/
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const tot = document.getElementById("tot");

btn.addEventListener("click", function () {
  numbers = input.value;
  let result = "";

  if (isNaN(numbers) || numbers.length !== 4) {
    result = "il valori non sono numeri o non sono 4";
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]);
    }
    result = "la somma è" + sum;
  }

  tot.innerText = result;
});
