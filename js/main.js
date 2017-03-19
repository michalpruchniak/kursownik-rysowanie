var my_canvas = document.createElement("canvas");
my_canvas.width = 500;
my_canvas.height = 500;
document.body.appendChild(my_canvas);

var ctx = my_canvas.getContext('2d');
ctx.fillRect(100, 150, 250, 50);
