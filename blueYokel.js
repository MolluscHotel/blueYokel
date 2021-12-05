
document.write ('hi there');
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var c = canvas.getContext ('2d');
c.fillStyle = 'pink';
c.fillRect (10, 10, 10, 10);


function Qcircle(x,y, radius) {
    this.x = x;
    this.y = y;
    this.radius= radius;

    this.draw = function(){
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI*2, false);
        //c.strokeStyle = 'blue';
        c.stroke();   
    }
}

var Qcircle= new Qcircle(350,200, 80);



var radius = 10;
var dr = 0.3;
var x=200;
var dx=3;
var ddx= 0.3;
var y=300;
var dy = 4;
var ddy = 0.1;
c.strokeStyle = 'red';
function animate (){
    requestAnimationFrame (animate);
//c.clearRect(0, 0,  window.innerWidth - 100, window.innerHeight - 100);
//c.beginPath();
c.arc(x, y, radius, 0, Math.PI*ddx/2, false);
//c.fillRect(x+7, y-5, 100, 10);
c.stroke();
c.fill();
Qcircle.draw();
if (x +  radius > window.innerWidth - 120){dx = -dx; 
    c.strokeStyle = 'white'; c.fillStyle = 'blue'};
if (x -  radius < 20){dx = -dx; c.strokeStyle = 'blue';};
if (y +  radius > window.innerHeight - 100){dy = -dy; 
    c.strokeStyle = 'purple'; c.fillStyle = 'black';};
if (y -  radius < 100){dy = -dy; c.strokeStyle = 'yellow';};
if (radius>200){dr= -dr; c.strokeStyle = 'red';c.fillStyle = 'black';
/*x= 100+radius;*/};
if (radius<20){dr= -dr; c.strokeStyle = 'orange';c.fillStyle = 'gray';};
x+=dx;
dx+=ddx;
if (dx> 11){ddx=-ddx; c.fillStyle = 'red';};
if (dx< -18){ddx=-ddx/0.9;c.fillStyle = 'green'; y+=1;};
y+= dy;
dy+=ddy;
if (dy> 15){ddy=-ddy; c.fillStyle = 'purple';x=450; y=250;};
if (dy< -20){ddy=-ddy;c.fillStyle = 'green'; /*x=y+100; y=300+ radius;*/};
radius += dr;
}

c.fillRect (100, 100, 100, 100);
c.stroke();

animate();
