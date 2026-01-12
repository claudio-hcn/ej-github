
document.getElementById('btn-saludo').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('saludoForm').style.display = 'block';
});

document.getElementById('btnCancelar').addEventListener('click', function () {
    document.getElementById('saludoForm').style.display = 'none';
    document.getElementById('btn-saludo').style.display='';
});

document.getElementById('btnSaludar').addEventListener('click', function(){
    nombre = document.getElementById('inputNombre');
    console.log(nombre)
    if(nombre.value!==""){
        alert("hola " + nombre.value);
       
    }else{
 alert("ingrese un nombre")
    }
    nombre.value = "";
})