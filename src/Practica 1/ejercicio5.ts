class TanqueCombustible {
  constructor(
    public capacidadMaxima: number,
    public nivelActual: number,
  ) {}

  agregarCombustible(cantidad: number) {
    if (this.nivelActual + cantidad > this.capacidadMaxima) {
      return console.log("No se puede llenar más");
    }

    this.nivelActual += cantidad;
    console.log(`Nivel de combustible: ${this.nivelActual}`);
  }

  consumirCombustible(cantidad: number) {
    if (this.nivelActual - cantidad < 0) {
      return console.log("No se puede vaciar más");
    }

    this.nivelActual -= cantidad

    console.log(`Nivel de combustible: ${this.nivelActual}`);
  }
}

const tanque = new TanqueCombustible(200, 100);
tanque.agregarCombustible(50);
tanque.consumirCombustible(100);
