

let pantalla = document.querySelector(".background");
let pincel = pantalla.getContext("2d");


//Borde verde de pantalla azul
pincel.fillStyle = "rgb(47,45,10)";
pincel.fillRect(55,55,1090,890);

//Rectangulo azul
pincel.fillStyle = "rgb(0,16,41)";
pincel.fillRect(75,75,1050,850);


//Sombra superior e inferior clara
pincel.strokeStyle = "rgb(188,187,157)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(30,5);
pincel.lineTo(1170,5);
pincel.moveTo(30,1040);
pincel.lineTo(1170,1040);
pincel.stroke();

//Lineas oscuras recuadro
pincel.strokeStyle = "rgb(83,81,42)";
pincel.strokeRect(20,20,1160,1000)

//Sombras superiores de la pantalla azul
//Primer sombra
pincel.strokeStyle = "rgb(31,26,0)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,55);
pincel.lineTo(1145,55);
pincel.stroke();
//Segunda sombra
pincel.strokeStyle = "rgb(65,70,29)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,65);
pincel.lineTo(1145,65);
pincel.stroke();
//Tercer sombra
pincel.strokeStyle = "rgb(72,81,54)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(70,70);
pincel.lineTo(1125,70);
pincel.stroke();

//Sombras inferiores de la pantalla azul
//Primer sombra
pincel.strokeStyle = "rgb(193,188,156)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,945);
pincel.lineTo(1145,945);
pincel.stroke();
//Segunda sombra
pincel.strokeStyle = "rgb(162,160,122)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,940);
pincel.lineTo(1145,940);
pincel.stroke();
//Tercer sombra
pincel.strokeStyle = "rgb(162,165,120)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,935);
pincel.lineTo(1145,935);
pincel.stroke();
//Cuarta sombra
pincel.strokeStyle = "rgb(125,131,105)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,930);
pincel.lineTo(1145,930);
pincel.stroke();

//Sombra izquierda
//Primer sombra
pincel.strokeStyle = "rgb(50,48,10)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(55,55);
pincel.lineTo(55,945);
pincel.stroke();
//Segunda sombra
pincel.strokeStyle = "rgb(98,99,59)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(60,60);
pincel.lineTo(60,940);
pincel.stroke();
//Tercer sombra
pincel.strokeStyle = "rgb(109,112,85)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(65,65);
pincel.lineTo(65,936);
pincel.stroke();
//Cuarta sombra
pincel.strokeStyle = "rgb(121,131,122)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(70,70);
pincel.lineTo(70,930);
pincel.stroke();

//Sombra derecha
//Primer sombra
pincel.strokeStyle = "rgb(50,48,10)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(1142,55);
pincel.lineTo(1142,945);
pincel.stroke();
//Segunda sombra
pincel.strokeStyle = "rgb(98,99,59)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(1137,60);
pincel.lineTo(1137,940);
pincel.stroke();
//Tercer sombra
pincel.strokeStyle = "rgb(109,112,85)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(1132,65);
pincel.lineTo(1132,936);
pincel.stroke();
//Cuarta sombra
pincel.strokeStyle = "rgb(121,131,122)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(1127,70);
pincel.lineTo(1127,930);
pincel.stroke();

//Power
pincel.strokeStyle = "black";
pincel.fillStyle = "rgb(119,145,100)";
pincel.fillRect(900,965,30,30);
pincel.strokeRect(900,965,30,30);
//Texto
pincel.fillStyle = "black"
pincel.font = "30px Arial";
pincel.fillText("ON/OFF", 940,990);

//Pie
pincel.strokeStyle = "rgb(121,131,122)";
pincel.lineWidth = 5;
pincel.beginPath();
pincel.moveTo(1127,70);
pincel.lineTo(1127,930);
pincel.stroke();



function encriptar(){

    var texto = document.querySelector(".textarea").value.toLowerCase();
    
    var textoEncriptado = texto
        .replace(/e/igm, "enter")
        .replace(/i/img, "imes")
        .replace(/a/igm, "ai")
        .replace(/o/img, "ober")
        .replace(/u/img, "ufat");

    texto = textoEncriptado;
    
    document.querySelector(".encriptado").innerHTML = texto;

    ocultarImagen();

    limpiarTexto();
       
}

function desencriptar(){
    
    let texto = document.querySelector(".textarea").value.toLowerCase();

    let textoDesencriptado = texto
        .replace(/enter/igm, "e")
        .replace(/imes/img, "i")
        .replace(/ai/igm, "a")
        .replace(/ober/img, "o")
        .replace(/ufat/img, "u");

    texto = textoDesencriptado;

    document.querySelector(".encriptado").innerHTML = texto;

    ocultarImagen();
  
}

function ocultarImagen(){
    document.querySelector(".imagen1").style.display = "none";
    document.querySelector(".gradient").style.display = "none";
    document.querySelector(".mensaje").style.visibility = "hidden";
    document.querySelector(".botonCopiar").style.visibility = "visible";
}


function limpiarTexto(){

    texto.value = "";

}

function copiar(){
    
    var contenido = document.querySelector(".encriptado").textContent;
    navigator.clipboard.writeText(contenido);

}


let botonEncriptar = document.querySelector(".boton1");
botonEncriptar.onclick = encriptar;

let botonDesencriptar = document.querySelector(".boton2");
botonDesencriptar.onclick = desencriptar;

let botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.onclick = copiar;


