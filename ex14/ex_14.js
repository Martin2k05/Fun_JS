// Ejercicio de analisis: Pedir a un usuario que digite algun tipo de valor
let a = 1;
let suma = 0;
let valor;

while(a<=4){
    valor = parseInt(prompt('Ingrese cuatro valores numericos para sumarlos'));
    suma = suma + valor;
    a++;
}
document.writeln('La suma es: ', suma, '<br>');


//Rifa
let numero;
do{
    numero = parseInt(prompt('Rifa: numeros entre el 1 y el 15'));

    if(numero !=5){
        document.writeln('Usted dio el numero ', numero, '<br>');
    } else {
        document.writeln('Genial has ganado, el numero correcto era el: ', numero, ' Reclama tu premio')
    }
} while (numero !=5);