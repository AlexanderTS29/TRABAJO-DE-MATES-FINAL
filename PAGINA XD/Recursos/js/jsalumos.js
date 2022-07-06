$( document).ready(function(){

}







var Alumno = [{
    id:101,
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
    id:102,
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
    id:103,
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
},
{
    id:104,
    nombre : "Cesar4",
    Apellido: "Mantilla4",
    Edad: 30,
    Direccion: "Tulipanes4",
    Hobby:{
        Deporte: "Play Station4",
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