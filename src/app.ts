// Possibilité de creer des Alias pour des types qui sont complexes et donc eviter la repetition
// Possibilité de creer des Generics pour avoir des sorte de param dans nos types <Type>

type User = {firstname: string, lastname: string, age?: number}
type DateString = string; // Pour une date au format "YYYY-MM-DD" par ex
type Id = string | number // Pour une union

const a: string = "Bismillah";
const n: number = 3;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["e",'ef'];
const an: any = "Ce que l'ont veut"; //A eviter
const user: {firstname: string, lastname: string, age?: number} = {firstname: "Touahria", lastname: "Elyas"};
const user2: User = {firstname: "Touahria", lastname: "djamel"}
const waitingUser: {[key: string]: string} = {}; // Signifie que l'ont attend un objet avec une chaine de char en clef et en valeur
const date: Date = new Date();
const cb: Function = (e: MouseEvent): void => {}; // Le type de retour de la f() est void car ne retourne rien
const cb2: (e: MouseEvent) => void = (e: MouseEvent): void => {}; // Pareil que cb mais avec plus de precision sur la f() attendu 

type Username = User['firstname'];
type  K = keyof User;

const user3 = {
  firstname: 'John',
  lastname: 'Doe',
  age: 32
}
type User2 = typeof user3; // Extrait un type à partir de user3 peut etre utile si on veut creer des types aà la voler generealement on fera le type dabord pour etre sur que l'objet correspond, la un changement ds la forme peut changer le type et apporter des soucis

/* ---------------------------------------- */

function consoleSize<Type extends {length: number}>(arg: Type): Type {
  console.log(arg.length);
  return arg
}
const ee = consoleSize([4,"4"]) // N'accepter qu'un argument qui possede length comme un tableau ou un string car preciser dans le type de la function 

function printId(id: number | string): void { 
  if(typeof id === 'number'){
    console.log((id * 3).toString())
  } else {
    console.log(id.toUpperCase())
  }
}

function identity<ArgType>(arg: ArgType): ArgType {
  return arg
}
const aa = identity<number>(3); // aa est de type number
const bb = identity(5); // ts devine que bb est de type 5 car valeur litteral

function first<Type>(arg: Type[]): Type {
  return arg[0]
} 
const cc = first(["aa","ee","ff"]) // Il sait que c'est un type string
const dd: Array<string | number> = ["bb","cc","gg",3] // Il sait que c'est un tableau de string et de number

/* ---------------------------------------- */

const compteur = document.querySelector<HTMLButtonElement>('#compteur') // On precise element de type button car lui sait seulement qu'il attend un type Element 
let i = 0;

const increment = (e: Event) => {
  i++;
  const span = compteur?.querySelector('span');
  if(span) span.innerText = i.toString()
 
}

compteur?.addEventListener('click',increment);