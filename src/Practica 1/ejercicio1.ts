class Player {
    
    constructor(public nombre: string, public vida: number){

    }

    recibirDanio(puntos : number){
        this.vida -= puntos
        console.log(`${this.nombre} recibió ${puntos} de daño. Vida restante: ${this.vida}`)
    }

    status() {
        if (this.vida > 0) {
            console.log(`${this.nombre} sigue luchando`)
        } else {
            console.log(`${this.nombre} ha sido derrotado`)
        } 

    }

    
}


const player = new Player('stan', 200)
console.log(player)