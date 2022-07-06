

function fnCalcular(){
    if(valida()){
        //Inicio proceso de Calcular
        var NroUno = parseFloat($("#NroUno").val());
        var NroDos = parseFloat($("#NroDos").val());

        debugger

        var radio = $("input[name=radiosCalculadora]:checked");
        switch(true){
            case radio.attr("id") == "idRadioSumar" && radio.length > 0:
                $("#idResultado").text( NroUno + NroDos );
            break;
            case radio.attr("id") == "idRadioRestar" && radio.length > 0:
                $("#idResultado").text( NroUno - NroDos );                
            break;
            case radio.attr("id") == "idRadioMultiplicar" && radio.length > 0:
                $("#idResultado").text( NroUno * NroDos );               
            break;
            case radio.attr("id") == "idRadioDividir" && radio.length > 0:
                if(NroDos>0){
                    $("#idResultado").text( NroUno / NroDos );
                }else{
                    alert("La división entre 0, no esta definida !");
                }                
            break;
            default:
                alert("Estimado usuario, seleccione una operación a realizar")
        }
    }
}

function valida(){
    var token =  true;

    if( $("#NroUno").val().length > 0){
        $("#ErrorUno").hide();
        //document.getElementById("NroUno").style.display = "none";

    }else{
        token =  false; 
        $("#ErrorUno").show();
        //document.getElementById("NroUno").style.display = "block";
        $("#NroUno").focus();
    }

    if( $("#NroDos").val().length > 0){
        $("#ErrorDos").hide();
    }else{
        token =  false; 
        $("#ErrorDos").show();
        $("#NroDos").focus();
    }
    return token;
}



//Funciones
//document.querySelector('input[name="genderS"]:checked').value;
function fnCalcular2(){}
function fnCalcular3(){
    return ""
}
function fnCalcular4(val){
    return ""
}

//Condicionales
if(val = true){
    //Hace Algo
}
if(val = true){
    //Hace Algo
}else{
    //Hace otra cosa
}


//Arreglos, arrays, vectores, objetos

var AlumnoDemo = {
    nombre : "",
    Apellido: "",
    Edad: 20,
    Direccion: ""
}

var  funcionAnonima = function (){
    //Escribes codigo
}


var Alumno = [{
                    nombre : "Cesar",
                    Apellido: "Mantilla",
                    Edad: 30,
                    Direccion: "Tulipanes",
                    Hobby:{
                        Deporte: "Play Station",
                        Musica: "All"
                    },
                    salario: function(){
                        var resultado = 0;
                        if(typeof(this.Edad) == "string"){
                            resultado = parseInt(this.Edad) * 1000;
                        }else{
                            resultado = this.Edad * 1000;
                        }
                        return resultado
                    }
                },
                {
                    nombre : "Cesar2",
                    Apellido: "Mantilla2",
                    Edad: 30,
                    Direccion: "Tulipanes2",
                    Hobby:{
                        Deporte: "Play Station2",
                        Musica: "All2"
                    },
                    salario: function(){
                        var resultado = 0;
                        if(typeof(this.Edad) == "string"){
                            resultado = parseInt(this.Edad) * 2000;
                        }else{
                            resultado = this.Edad * 2000;
                        }
                        return resultado
                    }
                },
                {
                    nombre : "Cesar3",
                    Apellido: "Mantilla3",
                    Edad: 30,
                    Direccion: "Tulipanes3",
                    Hobby:{
                        Deporte: "Play Station3",
                        Musica: "All3"
                    },
                    salario: function(){
                        var resultado = 0;
                        if(typeof(this.Edad) == "string"){
                            resultado = parseInt(this.Edad) * 3000;
                        }else{
                            resultado = this.Edad * 3000;
                        }
                        return resultado
                    }
                }
            ]