var my_canvas = document.createElement("canvas");
my_canvas.width = 500;
my_canvas.height = 500;
document.body.appendChild(my_canvas);

var ctx = my_canvas.getContext('2d');
// ctx.fillRect(20, 20, 100, 100);
ctx.strokeRect(140, 20, 50, 50);
ctx.clearRect(60, 30, 100, 50);

ctx.beginPath();
ctx.moveTo(30, 40);
ctx.lineTo(100, 140);
ctx.lineTo(60, 250);
ctx.lineTo(20, 150);
ctx.closePath();
ctx.stroke();
