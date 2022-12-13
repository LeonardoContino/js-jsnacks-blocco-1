// console.log("js ok");

/*
SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande
 Gatsby, l’utente inserisce il suo nome tramite un input.
 comunicagli se può partecipare o no alla festa. 
(vietato usare includes() )
 */

/*
1. scrivere gli elmenti in html
2.prendere gli elementi dal dom
3.scrivere una lista con array con dei nomi
4. fai un for con denrtro gli array
5. valida se puoi enrtrare o meno
 */

const input = document.getElementById("input");
// console.log(input);
const btn = document.getElementById("btn");

// console.log(btn);
let enter = document.getElementById("enter");

const person = ["marco", "leo", "fabio", "gabri"];
console.log(person);

btn.addEventListener("click", function () {
  const inputName = input.value;
  console.log(inputName);

  let isAuto = false;
  enter.innerText = "";

  for (i = 0; i < person.length; i++) {
    const currentname = person[i];
    console.log(currentname);
    if (currentname === inputName) {
      isAuto = true;
      console.log(isAuto);
      enter.innerText = "benvenuto";
    }
  }
});
