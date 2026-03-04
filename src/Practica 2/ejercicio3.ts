class Producto {
  constructor(
    public nombre: string,
    public precioBase: number,
  ) {}
}

class ProductoFisico extends Producto {
  constructor(
    nombre: string,
    precioBase: number,
    public pesoKG: number,
  ) {
    super(nombre, precioBase);
  }

  calcularPrecioFinal(): number {
    return this.precioBase + this.pesoKG * 2;
  }
}

class ProductoDigital extends Producto {
  constructor(
    nombre: string,
    precioBase: number,
    public plataforma: string,
  ) {
    super(nombre, precioBase);
  }

  calcularPrecioFinal(): number {
    return this.precioBase;
  }
}

const productoFisico = new ProductoFisico("Laptop", 1000, 3);
console.log(
  `Precio final del producto físico "${productoFisico.nombre}": $${productoFisico.calcularPrecioFinal()}`,
);

