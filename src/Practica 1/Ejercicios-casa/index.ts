
// Ejercicio 1 - Clase Empleado


class Empleado {

    constructor(
        private nombre: string,
        private salarioBase: number,
        private horasExtras: number
    ) {}

    calcularSalarioTotal(pagoHoraExtra: number) {
        const total = this.salarioBase + (this.horasExtras * pagoHoraExtra)
        return total
    }
}

const empleado = new Empleado('Carlos', 500, 10)
console.log(`Salario total: ${empleado.calcularSalarioTotal(5)}`)



// Ejercicio 2 - Clase CuentaBancaria


class CuentaBancaria {

    private saldo: number = 0

    constructor(
        private titular: string
    ) {}

    depositar(monto: number) {
        this.saldo += monto
        console.log(`Nuevo saldo: ${this.saldo}`)
    }

    retirar(monto: number) {
        if (monto > this.saldo) {
            return console.log('Fondos insuficientes')
        }

        this.saldo -= monto
        console.log(`Nuevo saldo: ${this.saldo}`)
    }

    consultarSaldo() {
        console.log(`Saldo actual: ${this.saldo}`)
    }
}

const cuenta = new CuentaBancaria('Ana')
cuenta.depositar(100)
cuenta.retirar(30)
cuenta.consultarSaldo()



// Ejercicio 3 - Clase Vehiculo


class Vehiculo {

    constructor(
        private marca: string,
        private modelo: string,
        private año: number
    ) {}

    mostrarInformacion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`)
    }
}

const vehiculo1 = new Vehiculo('Toyota', 'Corolla', 2022)
const vehiculo2 = new Vehiculo('Honda', 'Civic', 2021)

vehiculo1.mostrarInformacion()
vehiculo2.mostrarInformacion()



// Ejercicio 4 - Clase ProductoTienda


class ProductoTienda {

    constructor(
        private nombre: string,
        private precio: number
    ) {}

    aplicarDescuento(porcentaje: number) {
        const descuento = this.precio * (porcentaje / 100)
        const precioFinal = this.precio - descuento
        return precioFinal
    }
}

const producto = new ProductoTienda('Laptop', 1000)
console.log(`Precio con descuento: ${producto.aplicarDescuento(10)}`)



// Ejercicio 5 - Clase Personaje


class Personaje {

    private nivel: number = 1

    constructor(
        private nombre: string
    ) {}

    subirNivel() {
        this.nivel += 1
    }

    verEstado() {
        console.log(`Nombre: ${this.nombre}, Nivel: ${this.nivel}`)
    }
}

const personaje = new Personaje('Guerrero')

personaje.verEstado()
personaje.subirNivel()
personaje.verEstado()