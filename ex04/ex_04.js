// Pedir datos a un usuario (Como ejercicio pues cuando se piden datos de utilizan inputs).

let nombre, edad, direccion, movil, email; //Se puede crear tantas variables como se necesiten con una declaracion let.

// Prompt es una palabra reservada que despliega una funcion y sale un mensaje de tipo alert para pedir datos.

nombre=prompt("Escriba Su Nombre: "); // Se piden los datos
document.writeln("Su Nombre es: ", nombre, '<br>'); // Se imprimen los datos.

edad=prompt("Escriba Su Edad: "); // Se piden los datos
document.writeln("Su Edad es: ", edad, '<br>'); // Se imprimen los datos.

direccion=prompt("Escriba Su Direccion: "); // Se piden los datos
document.writeln("Su direccion es: ", direccion, '<br>'); // Se imprimen los datos.

movil=prompt("Escriba Su Movil: "); // Se piden los datos
document.writeln("Su Movil es: ", movil, '<br>'); // Se imprimen los datos.

email=prompt("Escriba Su Email: "); // Se piden los datos
document.writeln("Su Email es: ", email, '<br>'); // Se imprimen los datos.

// Con la etiqueta <br> se pueden realizar saltos de pagina.

console.log("Su Nombre es: ", nombre, '<br>');
console.log("Su Edad es: ", edad, '<br>');
console.log("Su direccion es: ", direccion, '<br>');
console.log("Su Movil es: ", movil, '<br>');
console.log("Su Email es: ", email, '<br>');
console.log("Su Nombre es: ", nombre, "\nSu Edad es: ", edad, "\nSu direccion es: ", direccion, "\nSu Movil es: ", movil, "\nSu Email es: ", email)