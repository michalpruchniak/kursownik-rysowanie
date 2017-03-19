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

ctx.beginPath();
ctx.arc(300, 150, 100, Math.PI/180*45, Math.PI/180*-125, true);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200, 250);
ctx.bezierCurveTo(200, 100, 400, 400, 400, 250);
ctx.stroke();
