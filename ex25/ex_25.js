function focalizar(){
    document.getElementById('').value="";
    document.getElementById('').style.border="";
    document.getElementById('').style.borderRadius="8px";
}
function validarVacios(){
    if (document.getElementById('').value==""){
        document.getElementById('').style.border="2px solid red";
        document.getElementById('').style.borderRadius="8px";
        swal('¡Debe ingresar el nombre!')
    }
}