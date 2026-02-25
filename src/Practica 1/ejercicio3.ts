class Mascota {
    constructor(public nombre: string, public hambre: number){
        if (hambre >= 0 && hambre <= 100) {
            this.hambre = hambre
        } else {
            console.log('El hambre solo puede estar de 0 a 100')
        }
    }

    comer(){
        if (this.hambre >= 0 && this.hambre <= 100) {
            this.hambre -= 20
        } else {
            return console.log(`No se puede modificar el hambre`)
        }

        console.log(`El hambre es: ${this.hambre}`)
    }

    correr(){

        if (this.hambre >= 0 && this.hambre <= 100) {
            this.hambre += 10
        } else {
            return console.log(`No se puede modificar el hambre`)
        }

        console.log(`El hambre es: ${this.hambre}`)

    }
}

const mascota = new Mascota('puppy', 100)
mascota.comer()
mascota.correr()