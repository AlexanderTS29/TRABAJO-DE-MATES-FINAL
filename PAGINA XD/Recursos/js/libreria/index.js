$( document ).ready(function() {
    console.log("Prueba");/// llegas hasta acá
    action();
    getData();
    //$("#idModalBienvenida").show();
});

//Declaración de variables
var Alumno = [];


function action(){
    Alumno = [{
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




    if(Alumno.length > 0){

        //console.log(Alumno);
        fnItearar(Alumno)
    }
}



function fnItearar(arr){
    for(let a=0; a<arr.length; a++){
        
        console.log("Hola " + arr[a].nombre);
    }
}


function getData(){
    //idItems
    var settings = {
    "url": "https://api.publicapis.org/entries",
    "method": "GET",
    "timeout": 0,
    };
    
    $.ajax(settings).done(function (data) {
    console.log(data);
    objet=data.entries;
    });

    if(objet.length > 0){
        for(let i = 0; i<10; i++ ){
            $("#idItems").append('<li>'+ objet.entries[i].APO+'</li>')
        }
    }
}









///VARIABLES

/*
var ejemploVariable = ""; // Tipo de dato String
var ejemploVariable = 2; // Tipo de dato Number
var ejemploVariable = true; // Tipo de dato boolean
var ejemploVariable = []; // Tipo de dato Array
var ejemploVariable = {}; // Tipo de dato Objet
var ejemploVariable = function(){}; // Tipo de funcion anonima
function funcion(){} //Tipo de Dato Funcion 
function funcion(val){return val} //Tipo de Dato Funcion con retorno
for(){} // bucles
if(){} // Condicionales
onclick //Evento de clic
onblur // 
onchange
*/