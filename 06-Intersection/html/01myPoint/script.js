const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,C,D,F,G,S;
A = new Point(100,100,20,"red",true);
B = new Point(600,400,20,"yellow",true);
C = new Point(200,500,20,"green",true);
D = new Point(700,200,20,"purple",true);

F = new LinearFunction(1,1);
G = new LinearFunction(2,1);

S = new Point(1,1,10,"white",false);

function animate(){
context.clearRect(0,0,width,height)
A.draw(context);
B.draw(context);
C.draw(context);
D.draw(context);



F.slope = (B.y - A.y)/(B.x - A.x);
F.intercept = B.y - B.x * F.slope;
F.draw(context);

G.slope = (C.y - D.y)/(C.x - D.x);
G.intercept = C.y - C.x * G.slope;
G.draw(context);

S.draw(context);

S.x = F.intersection(G).x;
S.y = F.intersection(G).y;
}

setInterval(animate,10);