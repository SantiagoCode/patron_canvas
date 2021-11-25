var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var btn = document.getElementById('btn');

var alto = canvas.height;
var ancho = canvas.width;
var paso = 30;
var suiche = false;


var color = ["red", "#00ff00", "blue"];
var x = [0, 10, 20];
var y = 5;

btn.addEventListener("click", patrones);


function patrones()
{

  for (var i = 0; i < 3; i++)
  {
    patron(color[i], x[i], y)
  }

}




function patron(color, x, y)
{

  var x_inicial = x;

  while(y < alto)
  {

    if (x > ancho - 5)
    {
      // ajuste de linea x
      // cambio el switch
      if (suiche == true)
      {
        x = x_inicial - 5;
        suiche = false;
      }
      else
      {
        x = x_inicial - 15;
        suiche = true;
      }

      // bajamos una linea en y
      y += 10;
    }

    var sub_color = color;
    var sub_x = x;
    var sub_y = y;

    punto(sub_color, sub_x, sub_y);

    // pasamos al siguiente punto
    x += paso;
  }

}
