import { FORMERR } from "node:dns";
import { stringify } from "node:querystring";

abstract class Sensor{
    constructor(protected id:string, protected valorActual:number){}

    abstract procesarLectura():void

    public actualizarValor(nuevoValor: number):void {
    this.valorActual = nuevoValor;  
        console.log(`Sensor: ${this.id} actualizó su valor a: ${this.valorActual} `)
        this.procesarLectura()
    }
}

class SensorTemperatura extends Sensor{
    override procesarLectura(): void {
        if (this.valorActual > 40){
            console.log(`ALERTA: Temperatura crìtica en ${this.valorActual}º `)
        }
    }
}

class SensorHumedad extends Sensor{
    override procesarLectura(): void {
        if (this.valorActual < 20){
            console.log(`ALERTA: Humedad baja en ${this.id}`)
        }
    }
}

const sensorCalor = new SensorTemperatura("TEMP_01", 25)
sensorCalor.actualizarValor(45)
const sensorAgua = new SensorHumedad("HUM_01", 30)
sensorAgua.actualizarValor(15)

abstract class MetodoPago{
    abstract procesarPago(monto:number):void
}

class TarjetaCredito extends MetodoPago{
    override procesarPago(monto:number): void {
        console.log(`Validando tarjeta y cobrando $${monto}`)
    }
}

class PayPal extends MetodoPago{
    override procesarPago(monto: number): void {
        console.log(`Redirigiendo API de PayPal para cobrar $${monto}`)
    }
}


function realizarCompra(metodo: MetodoPago, total:number){
    metodo.procesarPago(total);
}

const metodoCobro = new TarjetaCredito()
const metodoDigital = new PayPal()
metodoCobro.procesarPago(100)
metodoDigital.procesarPago(1000)

abstract class Habilidad{
    constructor(protected nombre:string, protected costo: number){}
    abstract usar():void
}

class HechizoFuego extends Habilidad{
    override usar(): void {
        console.log(`Lanzando ${this.nombre} (Costo: ${this.costo}) maná`)
    }
}

class GolpeEspada extends Habilidad{
    override usar(): void {
        console.log(`Ejecutando ${this.nombre} (Costo: ${this.costo}) estamina`)
    }
}

function activarHabilidad(h:Habilidad){
    h.usar();
}

const hechizo = new HechizoFuego("Lanzallamas", 20)
const ataqueFisico = new GolpeEspada("Judgement Cut", 20)

abstract class Empleado{
    constructor(protected nombre:string, protected id:number){
        if (!nombre) throw new Error("Nombre requerido")
    }
    abstract calcularSalario():number;

    public mostrarRecibo():void {
        console.log(`Empleado ${this.nombre} | ID: ${this.id}`)
        console.log(`Salario neto: ${this.calcularSalario()}`)
    }
}

class Desarrollador extends Empleado{
    constructor(nombre:string, id:number, private proyecto:string){
        super(nombre,id)
    }

    override calcularSalario(): number {
        return 2500;
    }
}

class Freelancer extends Empleado{
    constructor(nombre:string, id:number, private horas:number, private tarifa:number){
        super(nombre,id)
        if (horas < 0 || tarifa < 0) throw new Error("Valores invalidos.")
    }
    override calcularSalario(): number {
        return this.horas * this.tarifa
        
    }
}

try{
    const dev = new Desarrollador("Carlos", 1, "App Movil")
    const independiente = new Freelancer("Rivera", 2, 20, 250)

    dev.mostrarRecibo()
    console.log("---")
    independiente.mostrarRecibo()
} catch(e:any){
    console.log(`Error ${e.message}`);
}

// Ejercicios
// Ejercicio 1
abstract class Heroe{
    constructor(nombre:string){}

    abstract usarPoder():void
}

class Volador extends Heroe{
    override usarPoder(): void {
        console.log(`Estoy volando por los cielos`)
    }
}

class Fuerte extends Heroe{
    override usarPoder(): void {
        console.log(`Estoy levantando un camión`)
    }
}

const superVuelo = new Volador("Mario")
superVuelo.usarPoder()
const superFuerza = new Fuerte("Bruno")
superFuerza.usarPoder()

// Ejercicio 2

abstract class MaquinaBebida{
    abstract servir():void
}

class Cafetera extends MaquinaBebida{
    override servir(): void {
        console.log(`Sirviendo un cafè caliente`)
    }
}

class DispensadorSoda extends MaquinaBebida{
    override servir(): void {
        console.log(`Sirviendo soda con hielo`)
    }
}

const maquinaCafe = new Cafetera();
const maquinaSoda = new DispensadorSoda();
maquinaCafe.servir()
maquinaSoda.servir()


// Ejercicio 3
abstract class Persona{
    constructor(protected nombre:string){}
    abstract saludar():void
}

class Formal extends Persona{
    nombre:string;
    constructor(nombre:string){
        super(nombre)
        this.nombre = nombre
    }
    override saludar(): void {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`)
    }
}

class Informal extends Persona{
    nombre:string;
    constructor(nombre:string){
        super(nombre)
        this.nombre = nombre
    }
    override saludar(): void {
        console.log(`Que onda, soy ${this.nombre}`)
    }
}

const ejecutivo = new Formal("Rodrigo")
ejecutivo.saludar()
const amigo = new Informal("Pipe")
amigo.saludar()

// Ejercicio 4
abstract class Electrodomestico{
    constructor(protected marca:string){}
    abstract funcionar():void
}

class Licuadora extends Electrodomestico{
    override funcionar(): void {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`)
    }
}

class Microondas extends Electrodomestico{
    override funcionar(): void {
        console.log(`El microondas ${this.marca} esta calentando comida`)
    }
}

const procesadora = new Licuadora("Oster")
procesadora.funcionar()
const horno = new Microondas("Samsung")
horno.funcionar()