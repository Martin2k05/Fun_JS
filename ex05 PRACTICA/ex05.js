// Operacion en consola.
let e, f, b, a, suma, resta, mult, div, pot, at;
// Solicitar Datos.
e=parseInt(prompt("Ingrese el valor de E "));
f=parseFloat(prompt("Ingrese el valor de F "));
b=prompt("Ingrese el valor de la base del triangulo");
a=prompt("Ingrese el valor de la altura del triangulo");

// Operaciones.
suma=e+f
resta=e-f
mult=e*f
div=e/f
pot=e**f
at=b*a/2

// Impresion en Consola.
console.log(
    "Resultados de E+F Cuyos Valores Son E= ",e ," F= ", f,
    "\nLa suma es: ", suma,
    "\nLa resta es: ", resta,
    "\nLa multiplicacion es: ", mult,
    "\nLa division es: ", div,
    "\nLa potencia es: ", pot,
    "\nEl Area de el triangulo cuya base es: ",b ,"CM Y su altura es: ",a , "CM Es AREA = ",at, "CM"
);