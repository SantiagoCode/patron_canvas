// FUNCION PRINCIPAL PARA DIBUJAR
function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.lineWidth = 4;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.lineCap = "round";
  lienzo.closePath();
}

// A PARTIR DE ACA ES PINTAR PUNTOS
function punto(color, x, y)
{
  dibujante(color, --x, --y, ++x, ++y);
  dibujante(color, --x, ++y, ++x, --y);
  dibujante(color, --x, y, ++x, y);
}
