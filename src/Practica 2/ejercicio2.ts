class Persona {
  constructor(
    public nombre: string,
    public edad: number,
  ) {
    if (edad <= 0) {
      throw new Error("La edad debe ser mayor a 0");
    }
    this.edad = edad;
  }
}

class Estudiante extends Persona {
  constructor(
    nombre: string,
    edad: number,
    public carnet: string,
  ) {
    super(nombre, edad);
  }

  presentarse() {
    console.log(
      `Hola, soy el estudiante ${this.nombre}, tengo ${this.edad} años y mi carnet es ${this.carnet}.`,
    );
  }
}

class Docente extends Persona {
  constructor(
    nombre: string,
    edad: number,
    public especialidad: string,
  ) {
    super(nombre, edad);
  }

  presentarse(): void {
    console.log(
      `Hola, soy el docente ${this.nombre}, tengo ${this.edad} años y mi especialidad es ${this.especialidad}.`,
    );
  }
}

const estudiante = new Estudiante("Ana", 20, "C12345");
estudiante.presentarse();

const docente = new Docente("Carlos", 40, "Matemáticas");
docente.presentarse();
