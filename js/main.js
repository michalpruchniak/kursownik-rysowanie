var my_canvas = document.createElement("canvas");
my_canvas.width = 500;
my_canvas.height = 500;
document.body.appendChild(my_canvas);

var ctx = my_canvas.getContext('2d');
ctx.fillRect(20, 20, 100, 100);
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

ctx.beginPath();
ctx.moveTo(40, 300);
ctx.lineTo(300, 320);
ctx.lineTo(400, 380);
ctx.bezierCurveTo(400, 500, 60, 500, 40, 350);
ctx.lineTo(40, 300);
ctx.moveTo(150, 350);
ctx.lineTo(175, 400);
ctx.lineTo(200, 350);
ctx.lineTo(150, 350);
ctx.fill();
ctx.stroke();
ctx.fillStyle="#83e8ee";
ctx.fillRect(10, 20, 120, 120);
ctx.strokeStyle="#3cb865";
ctx.strokeRect(150, 20, 120, 120);

ctx.lineWidth = 10;
ctx.strokeStyle = "#5ebff1";
ctx.strokeRect(10, 160, 80, 80);

ctx.lineJoin = 'round';
ctx.strokeStyle = "#8af9ce";
ctx.strokeRect(120, 160, 80, 80);

my_gradient = ctx.createLinearGradient(10, 310, 450, 10);
my_gradient.addColorStop(0, "#8af9ce");
my_gradient.addColorStop(0.35, "#6dcae8");
my_gradient.addColorStop(1, "#d7b052");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 500, 500);
