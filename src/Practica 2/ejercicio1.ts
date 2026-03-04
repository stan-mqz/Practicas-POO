class Cuenta {
  constructor(
    public titular: string,
    public saldo: number,
  ) {
    if (saldo < 0) {
      throw new Error("No se puede crear una cuenta con saldo negativo");
    }
    this.saldo = saldo;
  }
}

class CuentaAhorro extends Cuenta {
  constructor(
    titular: string,
    saldo: number,
    public tasaInteres: number, 
  ) {
    super(titular, saldo);
  }

  aplicarInteres(){
    const interes = this.saldo * this.tasaInteres;
    this.saldo += interes;
  }
}

const miCuentaAhorro = new CuentaAhorro("Juan Pérez", 1000, 0.05);
miCuentaAhorro.aplicarInteres();
console.log(`Saldo después de aplicar interés: ${miCuentaAhorro.saldo}`);
