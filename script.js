var ciudad = document.querySelector('#userInput').value
var boton = $('button')


function cargarCiudad (){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es', function(data){
        console.log(data)
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").textContent = data.main.temp
        document.querySelector("#grados").innerHTML = '<sup>°C</sup>'
        document.querySelector('img').src ='http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
        document.querySelector('#descripcion').textContent = data.weather[0].description
             
    }).fail(function() {
        alert("Ciudad no encontrada");
      }) 
}

boton.click(function (){
    if(document.querySelector('#userInput').value != '' ){
        ciudad = document.querySelector('#userInput').value
        cargarCiudad()
        document.querySelector('#userInput').value=''
    }
    else{
        alert('Introduzca una ciudad.')
    }
    
})