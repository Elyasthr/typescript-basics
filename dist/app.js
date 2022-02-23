"use strict";
// Possibilité de creer des Alias pour des types qui sont complexes et donc eviter la repetition
// Possibilité de creer des Generics pour avoir des sorte de param dans nos types <Type>
const a = "Bismillah";
const n = 3;
const b = true;
const d = null;
const arr = ["e", 'ef'];
const an = "Ce que l'ont veut"; //A eviter
const user = { firstname: "Touahria", lastname: "Elyas" };
const user2 = { firstname: "Touahria", lastname: "djamel" };
const waitingUser = {}; // Signifie que l'ont attend un objet avec une chaine de char en clef et en valeur
const date = new Date();
const cb = (e) => { }; // Le type de retour de la f() est void car ne retourne rien
const cb2 = (e) => { }; // Pareil que cb mais avec plus de precision sur la f() attendu 
const user3 = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
};
/* ---------------------------------------- */
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const ee = consoleSize([4, "4"]); // N'accepter qu'un argument qui possede length comme un tableau ou un string car preciser dans le type de la function 
function printId(id) {
    if (typeof id === 'number') {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function identity(arg) {
    return arg;
}
const aa = identity(3); // aa est de type number
const bb = identity(5); // ts devine que bb est de type 5 car valeur litteral
function first(arg) {
    return arg[0];
}
const cc = first(["aa", "ee", "ff"]); // Il sait que c'est un type string
const dd = ["bb", "cc", "gg", 3]; // Il sait que c'est un tableau de string et de number
/* ---------------------------------------- */
const compteur = document.querySelector('#compteur'); // On precise element de type button car lui sait seulement qu'il attend un type Element 
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span)
        span.innerText = i.toString();
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
