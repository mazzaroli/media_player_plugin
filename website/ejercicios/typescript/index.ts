// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resulado = numerador / denominador

// String
let nombre: string = "Carlos";
let saludo = `Me llamo ${nombre}`

console.log(saludo)

// Arreglos
let people: string[] = [];
people = ['Carlos', 'Melani', 'Pancho', 'Pitu'];

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Carlos')
peopleAndNumbers.push('Melani')
console.log(peopleAndNumbers)
console.log(people)

// Enum
enum Color {
    Rojo = "Rojo",
    verde = 'verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}

// Object
let someObject: Object = { type: 'Wildcard' }

// Funciones
function add(a:number, b:number): number {
    return a + b;
}

const sum = add(4,6);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus = addFour(6);
console.log(fourPlus)

function fullName(firstName: string, lastName: string = "SinApellido"): string {
    return `${firstName} ${lastName}`;
}

const carlos = fullName('Carlos');
console.log(carlos)

// Interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul
}

function area(r:Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect)

rect.toString = function () {
    return this.color? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())