import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

abstract class Edificio {
    abstract activarAlerta(emergencia:string): void;
}

class Alarmas extends Edificio {
    activarAlerta(emergencia: string): void {
        console.log("Se activo la alarma del edificio debido a "+emergencia);
    }
}

class Aspersores extends Edificio {
    activarAlerta(emergencia: string): void {
        console.log("Se activaron los aspersores debido a "+emergencia);   
    }
}

class Luces extends Edificio {
    activarAlerta(emergencia: string): void {
        console.log("Se activaron las luces debido a "+emergencia);
    }
}

class detectarEmergencia{
    private lista: Edificio[] = [];

    agregar(s:Edificio): void {
        this.lista.push(s);
    }

    activarAlertas(id:string): void{
        this.lista.forEach(s => s.activarAlerta(id));
    }
}

let alarma = new Alarmas();
let aspersor = new Aspersores();
let luz = new Luces();
let emergencia = new detectarEmergencia();

rl.question("Ingrese el tipo de emergencia: ", (respuesta) => {
    emergencia.activarAlertas(respuesta);
    rl.close();
});

emergencia.agregar(alarma);
emergencia.agregar(aspersor);
emergencia.agregar(luz);