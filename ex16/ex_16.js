/* POO

Los paradigmas principalmente que dan paso a la POO son con Estado, junto con el imperativo y el Declarativo

Pilares de la Progamacion Orientada a Objetos

Abstraccion: Oculta detalles internos y muesyta las caracteristicas relevantes.

Encapsulamiento: Protege los datos de un objeto para evtiar accesos indebidos, promoviendo el uso de meotodos publicos para interactuar con ellos.

Herencia: Permite que una clase reutilice los atributos y metodos de otra, promoviendo la extension y personalizacion.

Polimorfismo: Habilidad de un metodo o funcion para comportarse de diferentes maneras segun el objeto o los argumentos con los que interactua.

*/

class vehiculo {
    constructor(marca, modelo, color, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
        this.encendido = false;
    }

    encender(){
        this. encendido = true;
        console.log(`${this.marca} ${this.modelo} Esta encendido.`)
    }
    apagar(){
        this. encendido = false;
        console.log(`${this.marca} ${this.modelo} Esta apagado.`)
    }
    tocarBocina(){
        this. encendido = true;
        console.log('¡Beep Beep!');
    }        
    mostrarinfo(){
        console.log(`vehiculo: ${this.marca} ${this.modelo} (${this.anio}) - Color: ${this.color}.`)
    }    
}

//Crear instancia
const miAuto = new vehiculo('Toyota', 'Corolla', 'Rojo', 2020);

//Probar los metodos
miAuto.mostrarinfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//Clase Animal
class Animal {
    constructor(nombre, especie, sonido){
        this.nombre=nombre;
        this.especie=especie;
        this.sonido=sonido;
    }

    hacerSonido(){
        console.log(`${this.nombre} dice: ${this.sonido}`);
    }
    describir(){
        console.log(`${this.nombre} dice: ${this.especie}`);
    }
}


//Crear Instancia
const miPerro = new Animal ("Kiara", 'Perrita', 'Guau Guau');
const miGato = new Animal ("Rayas", 'Gato Naranja', 'Miawwwww');

//Probar los metodos
miPerro.describir();
miPerro.hacerSonido();

miGato.describir();
miGato.hacerSonido();

