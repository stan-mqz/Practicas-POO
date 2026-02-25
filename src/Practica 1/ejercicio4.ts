class Alarma {

     private estado : boolean = true

    constructor(
        private codigo : string,
        
      
    ){ }

    desactivar(codigo : string ){
        if (codigo !== this.codigo) {
             return console.log(`Código incorrecto. EL estado es : ${this.estado}`)
        }

        this.estado = false

         console.log(`EL estado es : ${this.estado}`)
    }
}

const alarma = new Alarma('13432')
alarma.desactivar('134322')