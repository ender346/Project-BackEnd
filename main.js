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


console.log("Hello world!");
console.log( 100 );
console.log( false );

console.log(typeof "Hello world!");
console.log(typeof 100);
console.log(typeof false);

console.log(typeof [ ]);
console.log(typeof { });

console.log(typeof Date());
console.log(typeof RegExp());

console.log( new Number(100))
console.log( new String("Hello world!"));
console.log( new Boolean(true));

/* creacion de un POO*/

let animal = {
    name: "Perro",
    numLengs: 4,
};
console.log(animal);

/* Como llamar a las propiedades de JavaScript */

let persont = {
    name: "Ender",
    levelofstudy: "Universidad",
    city: "Mexico",
    address: "ejemplo@gmail.com"
};

console.log(persont.name);
console.log(persont.levelofstudy);
console.log(persont.city);
console.log(persont.address);

console.log("Hola me llamo: " + persont.name + " ,Nivel de Estudio: " + persont.levelofstudy);

/* Como Crear un metodo en js */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.nameLegs + " legs."}
};
console.log(dog.sayLegs());

let suma = {
    dat1: new Number (3),
    dat2: new Number (4),
    dat3: new Number (5)
};

console.log("Resultado de la suma: " + suma.dat1 + suma.dat2 + suma.dat3 + " $ ")
