/* ------------------ INITIALISATION --------------------- */
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

/* ------------------ FONCTIONS --------------------- */

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

// Le tableau passer en param peut seulement etre lu et ne peut etre modifer on peut faire pareil pour le retour
function reverse<T>(arr: readonly T[]): T[]{ 
  return [...arr].reverse();
}

/* ------------------ CLASS --------------------- */


class A {
  private a = 3 // peut etre acceder que dans la class avec this (impact que Ts pas Js)
  protected b = 4 // pareil que private mais autorise enfant (impact que Ts pas Js)
  public c = 5 // peut etre accepter par tout, valeur par default donc on peut ne pas l'ecrire 
  #d = 6 // nouvelle fonctionnalité qui rend reelement la prop privé meme en js
}

class B extends A {
  log(){
    console.log(this.b)
  }
}

class C {
  constructor (
    public a: number
  ){

  }
}

class Collection<T> {
  constructor(private items: T[]) {
  }

  add (item: T): this{
    this.items.push(item)
    return this
  }

  first () : T | null{
    return this.items[0] || null
  }
}
const e = new Collection(["1",2]);
const g = e.add(3)
const f = e.first()


class Subscriber {
  on(this: HTMLInputElement, name: string, cb: Function){
    // this prendra les valeur de HTMLInputElement
  }

  on2 = () => {
    //methode alternative qui prend un eu plus de memoire
  }
}
/* ------------------ TYPE & INTERFACE --------------------- */

//les deux sont similaire, quelque legere difference
//Vaut mieux choisir les convention des le debut, "type" par defaut mais si besoin de definir un objet ou on va implementer ou pour une librairie "interface"

type Point = {} // Pas ouvert donc non modifiable et peut servir d'alias pour les types primaire char, tab...

interface Carre {} // Moin flexible, mais reste ouverte (peut etre plus tard modifié), on peut implementer une interface à une class par ex, se raproche des classe abstraite sans generer de chose au fichier de sortie

/* ------------------ TUPLE & ENUM --------------------- */

// type => "unknow" similaire à "any" mais ne peut pas etre utilisé avant d'etre precisé

// On evite le "any" quand on connais pas le type a l'avance mais qu'on veut le preciser plus tard on utilise "unknow"
function aaa(arg: unknown){
  if(arg instanceof HTMLInputElement){
    arg.value = "Hello"
  }
}

const zz = { isPrivate: true, isPublic: false } as const // on peut plus modifier les valeurs
const yy = [1,2,3] as const //c'est un tuple
const ww: [string, number] = ['tomate',2] // plus precis ne change pas
const xx: (string | number)[] = ['tomate',2] // diff on peut mettre [1,2] ou ["1",2] ou ["1","1"] alors que le premier l'ordre compte
type ListItem = [string, number] // on peut aussi faire un alias
const uu: ListItem = ['pomme',4]
const vv: ListItem = ['raisin',3]

function merge<R extends unknown[], U extends unknown[]>(a: R,b: U):[...R, ...U]{
  return [...a,...b]
}

const ll = merge(uu,vv)
/* ---------------------------------------- */

const compteur = document.querySelector<HTMLButtonElement>('#compteur') // On precise element de type button car lui sait seulement qu'il attend un type Element 
let i = 0;

const increment = (e: Event) => {
  i++;
  const span = compteur?.querySelector('span');
  if(span) span.innerText = i.toString()
 
}

compteur?.addEventListener('click',increment);