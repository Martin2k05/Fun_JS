// //Funciones
// function saludo(){
//     document.writeln('Hola mundo', '<br>');
//     console.log('Hola mundo');
// }
// saludo();


// function despedida (){
//     document.writeln('Chaooooo', '<br>');
//     console.log('Chaoooooo')
// }
// despedida();

// function saludaruasuario(nombreUsuario, apellidoUsuario){
//     document.writeln('Hola ', nombreUsuario, ' ', apellidoUsuario, ' Bienvenido(a)')
// }
// let nombre = prompt('Dime tu Nombre')
// let apellido = prompt('Dime tu Apellido')

// saludaruasuario(nombre, apellido);

// function saludarPaciente(nombrePaciente, apellidoPaciente){
//     document.writeln('Hola ', nombrePaciente, ' ', apellidoPaciente, ' Bienvenido(a)')
// }
// let recepcionaNombrePaciente = prompt('Dime tu Nombre')
// let recepcionaApellidoPaciente = prompt('Dime tu Apellido')

// saludarPaciente(recepcionaNombrePaciente, recepcionaApellidoPaciente);

// //funciones con calculos simples
// function calcularAreaRectangulo (base, altura){
//     let area = base * altura;
//     return area;
// }
// console.log('El area del rectangulo es: ', area = calcularAreaRectangulo(5,10));

// function esMayor_o_esMenor(edad){
//     if (edad >= 18){    
//         console.log('Es mayor de Edad');
//     } else {
//         console.log('Es menor de Edad');
//     }
// }
// esMayor_o_esMenor(20);
// esMayor_o_esMenor(12);


// function suma (){
//     let a = parseInt(prompt('Ingrese el valor a sumar:'))
//     let b = parseInt(prompt('Ingrese el valor a sumar:'))
//     return a+b; // Devuelve la suma con los numeros ingresados por el usuario.
// }
// document.writeln('El resultado de la suma es: ', suma(), '<br>');

function verColor(){
    valor = parseInt(prompt('Por favor ingrese un numero entre 1 y 3 para activar el semaforo'));

    switch (valor) {
        case 1:
            return 'Perfecto has elegido el color: Rojo';
        case 2:
            return 'Perfecto has elegido el color: Verde';
        case 3:
            return 'Perfecto has elegido el color: Amarillo';
        default:
            return 'No ah ingresado un valor o numero correcto en la instruccion dada'
    }
}
document.writeln(verColor());
