// //Mostrar los numeros del 1 al 5
// //Se usa cuando sabemos cuantas veces queremos repetir algo.
// for (let numero = 1; numero <= 5; numero++) {
//     console.log('Numero Actual: ', numero);
// }


// //Mostrar los datos de una persona
// //Se usa para recorrer las propiedades de un objeto.
// let persona = {
//     nombre: 'Carlos',
//     Edad: 25,
//     Ciudad: 'Bogota'
// };

// for (let propiedad in persona) {
//     console.log(propiedad+': '+ persona [propiedad]);
// }

// //Contar hasta 3 con un while
// //Se uda cuando no sabemos cuantas veces pero tenemos una condicion que se evalua antes de entrar.
// let contador=1;

// while (contador <=3) {
//     console.log("contador", contador);
//     contador++;
// }

// //igual que while pero siempre ejecuta almenos una vez 
// // Mostrar el menu hasta qye el usuario elija "salir"

// let opcion = '';
// do{
//     opcion=prompt('Escribe una opcion (Escribe "Salir" para terminar):')
//     console.log('Elegiste: ',opcion);
// } while (opcion !== 'Salir');

// //Este se usa para recorrer valores de arreglos (no objetos)
// //Recorrer una lista de frutas
// let listaDeFrutas = ['Manzana','Banana','Uva'];

// for (let fruta of listaDeFrutas) {
//     console.log('Fruta: ', fruta);
// }

// //Ciclo de numeros pares.
// document.writeln('Ciclo de numeros pares');
// for (let x=2; x <=20; x+=2){
//     document.writeln(`Valor de x=${x}`,`<br>`);
// }

// let usuario, clave, control;
// control = 0;
// usuario = prompt('Ingrese el usuario...');
// clave = prompt('Ingrese su contraseña: ');

// do {
//     if(clave != 'MiContraseña'){
//         clave=prompt('Contraseña incorrecta, intentelo de nuevo...');
//         control=0; //Continuara valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema.
//     } else{
//         control=1; //Control valdra uno cuando la contraseña ingresada sea la correcta.5tnhm,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//     }
// } while (control!=1);
// //La contraseña ingresada es varificada por el control, si vale 1 le dara acceso al sistema sino continuara pidiendola hasta que se cumpla la condicion o usted programe los intentos
// document.writeln('Acceso concedido!, Bienvenido'); 



// Saber cuantas vocales tiene la palabra murcielago

let Palabra = "Murcielagos"
let vocal = 0; // En esta variable vocal se van a guardar la cantidad de vocales que se encuentren en la palabra

for (let p in Palabra){
    if (Palabra[p]=='a' ||Palabra[p]=='e' ||Palabra[p]=='i' ||Palabra[p]=='o' || Palabra[p]=='u') //El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas
    {
        vocal ++;
    }
}

document.writeln('Cantidad de vocales: ',vocal);