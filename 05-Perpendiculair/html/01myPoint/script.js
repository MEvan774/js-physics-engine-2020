const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,C,L,M;
A = new Point(100,200,20,"red",true);
B = new Point(600,400,20,"yellow",true);
C = new Point(200,500,20,"green",true);
L = new LinearFunction(-0.5,0);

M = new LinearFunction(1,1);

function animate(){
context.clearRect(0,0,width,height)
A.draw(context);
B.draw(context);
C.draw(context);

L.slope = (B.y - A.y)/(B.x - A.x);
L.intercept = B.y - B.x * L.slope;
L.draw(context);

M.slope = -1/L.slope;
M.intercept = C.y - C.x * M.slope;
M.draw(context);
}

setInterval(animate,10);