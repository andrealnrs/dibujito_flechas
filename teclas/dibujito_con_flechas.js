var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cajita = document.getElementById("dibujito")
var lienzo = cajita.getContext("2d");
var x = 10;
var y = 252;

dibujarLiena("red", 10, 250, 12, 252, lienzo);

function dibujarLiena (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
 var colours = "red";
 var movement = 10;
 switch (evento.keyCode)
 {
   case teclas.UP:
    dibujarLiena(colours, x, y, x, y - movement, lienzo);
    y = y - movement;
   break;
   case teclas.DOWN:
    dibujarLiena(colours, x, y, x, y + movement, lienzo);
    y = y + movement;
   break;
   case teclas.LEFT:
    dibujarLiena(colours, x, y, x - movement, y, lienzo);
    x = x - movement;
   break;
   case teclas.RIGHT:
    dibujarLiena(colours, x, y, x + movement, y, lienzo);
    x = x + movement;
   break;
  default:
   console.log("otra tecla")
 }
}
