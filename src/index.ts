
//esto es un comentario en TS


/**
 * Se puede comentar asi tambien bloques de comentarios
 * 
 * Comentario
 * multilinea
*/
console.log("Hola Kelvin");
console.log("Adios Kelvin");

// Declaracion de variables
var nombre: string = 'Kelvin';

console.log("Hola, " + nombre);
console.log("How are you ", nombre, "?");
console.log(`How was your holidays, ${nombre} ?`);

let email = "kelvinguerrero2199@gmail.com"; //variable de ambito local
console.log(`Email de ${nombre} es ${email}`);

const PI: number = 3.1416; //variable constante este valor no puede ser reasignado

var apellidos: any = "St. Peter"; //ojo con el tipo any que hace que la varibale cambie de tipo
apellidos = 3;

var $error: boolean;
$error = false;

console.log(`Hay error: ${$error}`);

// Instanciacion multiple de variables

let a: string, b: boolean, c: number; // instancia 3 varibales sin valor inicial
a = "Guerrero";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null y undefined

//tipos mas complejos

// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];


// Combinacion de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", 56];

// Enumarados

enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number

}

// Podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);

// Asignacion multiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagacion)

//Declaracion con factor de propagacion
let {titulo: string, estado: Estado, urgencia: number} = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];


// En objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1284943"
}

// Cambiar un valor por propagacion
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

// Types de TypeScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}


// ** Condicionales:

// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo` );

// If - else
if ($error) {
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

// If - else if - else
if (coche.anio < 2010) {
    console.log("El coche es viejo");
} else if (coche.anio === 2010) {
    console.log("El coche es del 2010");
} else {
    console.log("El coche es nuevo");
}

// Switch

switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta compleatada.");
        break;
    case Estados.Incompleto:
        console.log("La tarea esta incompleta");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente");
        break;
    default:
        break;
}

// ** Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 15
    },
]

// For clasico

for (let i = 0; i < listaTareasNueva.length; i++) {
    const tarea = listaTareasNueva[i];
}

// ForEach

listaTareasNueva.forEach((tarea: Tarea,index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
    }
);

// Bucles while

while (tarea1.estado !== Estados.Completado) {

    if (tarea1.urgencia == 20) {
        tarea1.estado = Estados.Completado
    } else {
        tarea1.urgencia ++;
    }
}

// DO While (Se ejecuta al menos una vez)

do {
    if (tarea1.urgencia == 20) {
        tarea1.estado = Estados.Pendiente;
    }
    tarea1.urgencia++;
} while (tarea1.estado !== Estados.Completado);

