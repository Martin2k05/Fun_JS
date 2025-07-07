function tiempoFinalizado(){
    alert('¡se ha agotado el tiempo!')
}

function cuentaRegresiva(){
    let elegirsegundos = document.getElementById('tiempoCronometro').value;

    let contador = document.getElementById('contador');
    let textotiempo = document.getElementById('txtTiempo');
    let sonidoalarma = document.getElementById('audioAlarma');
    textoTiempo.style.display = 'blueviolet';
    textoTiempo.style.display = 'none';

    if(!elegirSegundos || elegirSegundos <= 0){
        alert("ingrese un tiempo valido");
        return;
    }

    textoTiempo.style.display = "block";
    textoTiempo.textContent = "¡Tiempo Inizializado";
    textoTiempo.style.display = "green";

    function actualizaContador(segundosRestantes){
        contador.textContent = segundosRestantes;

        if(segundosRestantes > 0){
            setTimeout(() => actualizarContador(segundosrestantes - 1),1000);
            } else{
                document.getElementById("tiempoCronometro").value = '';
                sonidoAlarma.play()

                textoTiempo.textContent = "¡Tiempo Finalizado!";
                textoTiempo.style.color = "blueviolet";

                setTimeout(()=> alert ("¡Se ha agotado el tiempo!"), 1000);
            }
    }
    actualizarContador(elegirSegundos);
}