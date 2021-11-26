var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var btn = document.getElementById('btn');

var alto = canvas.height;
var ancho = canvas.width;
var suiche = true;

var color = ["blue", "red", "#00ff00"];
var paso = 45;
var x = [20, 35, 50];
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

  while (y < alto)
  {

    if (x > ancho - 10)
    {
      // ajuste de linea x
      // cambio el switch
      if (suiche == true)
      {
        x = x_inicial - 22.5;
        suiche = false;
      }
      else
      {
        x = x_inicial;
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
