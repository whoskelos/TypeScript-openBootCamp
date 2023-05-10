export class Persona {

    nombre: string;
    apellidos: string;
    edad: number;

    constructor(nombre:string,apellido:string,edad:number) {
        this.nombre = nombre;
        this.apellidos = apellido;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad}`);
    }
}

export class Empleado extends Persona {

    sueldo: number;

    constructor(nombre:string,apellidos:string,edad:number,sueldo:number) {
        super(nombre,apellidos,edad);
        this.sueldo = sueldo;
    }

    saludar(): void {
        super.saludar();
        console.log(`Mi sueldo es de ${this.sueldo}`);
    }
}

export class Jefe extends Persona {

    empleados: Empleado[] = [];

    constructor(nombre:string,apellidos:string,edad:number) {
        super(nombre,apellidos,edad);
    }
}