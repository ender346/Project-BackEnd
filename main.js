class animal {
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
  }
  verInfo = ()=>{
    document.write(this.info)
  }
}


class Perro extends Animal {
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = null;
  }
  set modifict(newName){
    this.raza = newName;
  }
}


const perro = new animal("perro",5,"Cafe");
const gato = new animal("gato",2,"Negro")
const pajaro = new animal("Pajaro",2,"Verde")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
