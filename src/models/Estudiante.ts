import { Curso } from "./Curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?: string;
    cursos: Curso[];

    private ID: string = "1234k";

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        // Inicializamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }

    get horasEstudiadas (): number {

        let horasEstudiadas = 0;

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })

        return horasEstudiadas;
    }

    get ID_Estudiante (): string {
        return this.ID;
    }

    set ID_Estudiante (id: string) {
        this.ID = id;
    }
}