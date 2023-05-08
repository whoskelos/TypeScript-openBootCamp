
//esto es un comentario en TS

import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
import { Curso } from './models/Curso';
import { Estudiante } from './models/Estudiante';
import { LISTA_CURSOS } from './mock/cursos.mock';

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


// Funciones

/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Kelvin";
    console.log(`Hola! ${nombre}`);
}

// Invocacion de la funcion
saludar();


/**
 * Funcion que muestra un saludo por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log(`Hola! ${nombre}`);
}


saludarPersona("Miguel");


/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a saludar, por defecto sera "Pepe"
 */

function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adios, ${nombre}`);
}

despedirPersona() // Adios, Pepe
despedirPersona("Alba") // Adios, Alba

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */

function despedirOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    } else {
        console.log("Adios");
    }
}

despedirOpcional();
despedirOpcional("Juanjo");

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} anyos`);
    } else {
        console.log(`${nombre} tiene ${edad} anyos`);
    }
}

variosParams("Martin"); //Martin tiene 18 anyos
variosParams("Martin","San Jose"); // Martin san jose tiene 18 anyos
variosParams("Martin", undefined, 30); // Martin tiene 30 anyos
variosParams("Martin","San Jose", 30) // Maritn san jose tiene 30 anyos
// variosParams(nombre="Martin", apellidos="San Jose", edad=30);

function ejemploVariosTipos(a: string | number) {

    if (typeof(a) === 'string') {
        console.log(`A es un string`);
    } else if (typeof(a) === 'number'){
        console.log("A es un number");
    } else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es string ni un number");
    }
}

ejemploVariosTipos("hola");
ejemploVariosTipos(3);

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */

function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Kelvin Miguel", "Guerrero Mite");

console.log(nombreCompleto); // Kelvin Miguel Guerrero Mite
console.log(ejemploReturn("Kelvin Miguel", "Guerrero Mite")); // Kelvin Miguel Guerrero Mite

/**
 * 
 * @param nombres es una lista  de string
 */
function ejemploMultiParam(...nombres: string[]): void {
    
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}

ejemploMultiParam("Martin");
ejemploMultiParam("Martin","Pepe", "Juan", "Alba");

const lista = ["Alberto","Sandra"];
ejemploMultiParam(...lista);

function ejemploParamLista(nombres: string[]): void {
    
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}

ejemploParamLista(lista);


// ** ARROW Functions

type Empleado = {
    nombre: string
    apellidos: string
    edad: number
}

let empleadoKelvin: Empleado = {
    nombre: "Kelvin",
    apellidos: "San Jose",
    edad: 23
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} anyos`;

// Llamamos a la funcion
mostrarEmpleado(empleadoKelvin);

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    } else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
}

datosEmpleado(empleadoKelvin); // Empleado Kelvin esta en edad laboral


const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
    } else {
        cobrar() //callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoKelvin, () => 'Cobrar Kelvin');

// Async Functions

async function ejemploAsync(): Promise<string> {

    // Await
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones.");
    console.log("Tarea completada");
    return "Completado";
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error: ",error);
}).finally(() => "Todo ha terminado");

// Generators

function * ejemploGenerator() {
    
    // yield --> para emitir valores

    let index = 0;

    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }

}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3
console.log(generadora.next().value); // 4

// Worker

function* watcher(valor: number)  {

    yield valor; // emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4 // emitimos el valor final + 10

}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)


// Sobrecarga de funciones
function mostrarError(error: string | number): void {
    console.log(`Ha habido un error ${error}`);
}




// Persistencia de datos
// 1. Localstorage --> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. Sessionstorage --> La diferencia radica en la sesion de navegador. Es decir los datos se persisten en la sesion del navegador
// 3. Cookies --> Tienen una fecha de caducidad y tambien tienen ambito de URL


// LocalStorage y SessionStorage

// function guardarEnLocalStorage(): void {
//     localstorage.set("nombre", "Kelvin");
// }

// function leerDesdeLocalStorage(): void {
//     let nombre = localstorage.get("nombre", "Kelvin");
// }


// Cookies

const cookieOptions = {
    name: "usuario", // string,
    value: "Kelvin", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
  };

  // Leer una cookie
  let cookieLeida = getCookieValue("usuario");

  // Seteamos la cookie
  setCookie(cookieOptions);

  //Eliminar cookie
  deleteCookie("usuario");

  //Eliminar todas las cookies
  deleteAllCookies();

  // Clase Temporizador

  class Temporizador {

    public terminar?: (tiempo:number) => void;

    public empezar(): void {

        setTimeout(() => {
            
            // Comprobamos que exista la funcion terminar como callback
            if (!this.terminar) return;

            // Cuando haya pasado el tiempo, se ejecutara la funcion terminar
            this.terminar(Date.now());
        }, 10000);
    }
  
}

const miTemporizador: Temporizador = new Temporizador();

//Definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en: ", tiempo);
}

// Lanzamos el termporizador
miTemporizador.empezar();

//setInterval(() => console.log("Tic") , 1000) // Imprimir "tic" cada segundo por consola

// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;




// ** CLASES

// Creamos un curso

// const cursoTS = new Curso("Typescript", 15);
// const cursoJS = new Curso("Javascript", 20);

// const listaCursos: Curso[] = [];

// listaCursos.push(cursoTS,cursoJS); // [Lista de cursos]

// usamos el MOCK

const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un estudiante

const kelvin: Estudiante = new Estudiante("Kelvin",listaCursos, "Guerrero Mite");

console.log(`${kelvin.nombre} estudia:`);
kelvin.cursos.forEach((curso: Curso) => {
    console.log(`${curso.nombre} (${curso.horas} horas)`); // Typescript (15 horas)
})

const cursoAngular: Curso = new Curso("Angular",40);
kelvin.cursos.push(cursoAngular); //Add nuevo curso al objeto kelvin

// Conocer las horas estudiadas
kelvin.horasEstudiadas; // number
kelvin.ID_Estudiante = "x8981402v";
kelvin.ID_Estudiante;


// Saber la instancia de un objeto/variable
// - TypeOf
// - InstanceOf



