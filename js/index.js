// Canvas
var canvas = document.getElementById("test");
var context = canvas.getContext("2d");

canvas.width = 500;

context.strokeStyle = "#00008B";
context.fillStyle = "#00008B";
context.lineWidth = 2;

//first robot
//body
context.fillRect(110,100,40,50);
//neck
context.fillRect(125,90,10,10);
//head
context.strokeRect(117.5,65,25,25);
//start draw
context.beginPath();
//eyes
context.arc(123,75,1,0,360,false);
context.closePath();

context.moveTo(137,75);
context.arc(137,75,1,0,360,false);
context.closePath();
//mouth
context.moveTo(125,83);
context.lineTo(135,83);
//arms
context.moveTo(110,110);
context.lineTo(80, 100);
context.moveTo(150,110);
context.lineTo(180,100);
//phrase
context.moveTo(150,80);
context.lineTo(170,65);
context.lineTo(220,65);
context.arcTo(240,65,240,45,20);
context.lineTo(240,25);
context.arcTo(240,5,220,5,0);
context.lineTo(190,5);
context.arcTo(170,5,170,25,20);
context.lineTo(170,65);
context.closePath();

context.font = "14px sans-serif";
context.fillText("How it", 182,25);
context.fillText("works?",182,50);

//second robot
//body
context.moveTo(350,100);
context.lineTo(390,100);
context.lineTo(400,150);
context.lineTo(360,150);
context.lineTo(350,100);
context.closePath();
//neck
context.moveTo(362.5,90);
context.lineTo(372.5,90);
context.lineTo(375,100);
context.lineTo(365,100);
context.lineTo(362.5,90);
context.closePath();
//head
context.moveTo(350,65);
context.lineTo(375,65);
context.lineTo(380,90);
context.lineTo(355,90);
context.lineTo(350,65);
context.closePath();
//eye
context.moveTo(357,75);
context.arc(357,75,1,0,360,false);
context.closePath();
//mouth
context.moveTo(357,83);
context.lineTo(365,83);
//arms
context.moveTo(335,130);
context.lineTo(370, 110);
//laptop
context.moveTo(300,100);
context.lineTo(310,133);
context.lineTo(345,133);
//phrase
context.moveTo(390,80);
context.lineTo(410,65);
context.lineTo(450,65);
context.arcTo(470,65,470,35,20);
context.lineTo(470,25);
context.lineTo(430,25);
context.arcTo(410,25,410,35,20);
context.lineTo(410,65);
context.closePath();

context.font = "bold 18px sans-serif";
context.fillText("Easy!", 417,50);

context.stroke();
