function fnEnviar(){
    /*Derando variables */
    var vNombre = vApellido = vCorreo = vInstitucion = "";


    /*Asignando variables */
    vNombre = document.getElementById("idNombre").value;
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;

    /*Insertando datos a la vista html */
    document.getElementById("sNombre").innerHTML = vNombre;
    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sInstitucion").innerHTML = vInstitucion;

    if(validaCampos()==true){
    var Modalhtml = document.getElementById("mRegistro")
    var miModal = new bootstrap.Modal(Modalhtml);
    miModal.show();
    }
    if(validaCampos()==false){
        var Modalhtml = document.getElementById("errorRegistro")
        var miModal = new bootstrap.Modal(Modalhtml);
        miModal.show();
        }    

}
function validaCampos(){
    var valor = true;
    var vNombre = document.getElementById("idNombre").value;
    var vApellido = document.getElementById("idApellido").value;
    var vCorreo = document.getElementById("idCorreo").value;
    var vInstitucion = document.getElementById("idInstitucion").value;
    

if(vNombre.trim().length == 0){
    valor=false;
    document.getElementById("idnombrejs").style.display = "block";
        
}
else{
    document.getElementById("idnombrejs").style.display = "none";
}
if(vApellido.trim().length == 0){
    valor=false;
    document.getElementById("idapellidojs").style.display = "block";
}
else{
    document.getElementById("idapellidojs").style.display = "none";
}
if(vCorreo.trim().length == 0){
    valor=false;
    document.getElementById("idcorreojs").style.display = "block";
}
else{
    document.getElementById("idcorreojs").style.display = "none";
}
if(vInstitucion.trim().length == 0){
    valor=false;
    document.getElementById("idinstitucionjs").style.display = "block";
}
else{
    document.getElementById("idinstitucionjs").style.display = "none";
}
    return valor;
}



function nombreFuncion2(valor){
    //codigo para procesar ese valor
}

function nombreFuncion3(valor){
    //codigo para procesar ese valor
    valor = "Estes es el valor: "+valor
    return valor;
}


function nombreFuncion4(valor){
    //codigo para procesar ese valor
    valor = "Profe Necesito Ayuda, no entiendo nada!!";  
}