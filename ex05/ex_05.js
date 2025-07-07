// Operadores Matematicos

let a, b; // Aqui va a dar un error es normal.
let c, d; // Aqui las operaciones van a dar el resultado real.
let suma, resta, mult, div, residuo, potencia; // Variables para obtener los resultados de los operadores.

a=prompt('Ingrese el Valor de A ');
b=prompt('Ingrese el Valor de B ');

// Resultados de las operaciones
suma= a+b; // Aqui las operaciones no se da pues se concatenan los valores con el operando +
resta= a-b;
mult= a*b;
div= a/b;
residuo= a%b;
potencia= a**b;

document.writeln(
    "Resultados de A+B Sin Mezclar Valores", "<br>",
    "La suma es: ", suma, "<br>",
    "La resta es: ", resta, "<br>",
    "La multiplicacion es: ", mult, "<br>",
    "La division es: ", div, "<br>",
    "La potencia es: ", potencia
);

document.writeln('<br>') // Salto de Linea.
document.writeln('<br>') // Salto de Linea.
// Segunda Operacion
// Para que las operaciones numricas se puedan dar correctamente, se deben convertir los datos ingresados con parseInt o parseFloat.

c=parseInt(prompt('Ingrese el Valor de C '));
d=parseFloat(prompt('Ingrese el Valor de D '));

// Resultados de las operaciones
suma= c+d;
resta= c-d;
mult= c*d;
div= c/d;
residuo= c%d;
potencia= c**d;

document.writeln(
    "Resultados de C+D Sin Mezclar Valores", "<br>",
    "La suma es: ", suma, "<br>",
    "La resta es: ", resta, "<br>",
    "La multiplicacion es: ", mult, "<br>",
    "La division es: ", div, "<br>",
    "La potencia es: ", potencia
);
