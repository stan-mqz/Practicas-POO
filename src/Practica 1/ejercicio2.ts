class OrdenCafe {
    constructor(public tipocafe: string, public cantidad: number, public precio: number) {

    }

    pagoTotal(cantidad: number) {

        if (cantidad > this.cantidad) {
            return console.log('No hay suficiente cantidad de productos')
        }

        const total = cantidad * this.precio 
        return console.log(`Su precio total a pagar es de: ${total}`)
    }

    imprimirTicket(){
        console.log(`Pedido ${this.tipocafe} * ${this.cantidad}`)
        console.log(`Total a pagar : ${this.pagoTotal(10)}`)
    }
}


const orden = new OrdenCafe('negro', 15, 200)
orden.imprimirTicket()