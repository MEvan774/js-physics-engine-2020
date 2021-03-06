const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,C,ab,bc,ca,mAB,lAB,lBC,circumCenter,distance;
A = new Point(0.10 * width,0.10 * height,20,"red",true);
C = new Point(0.90 * width,0.10 * height,20,"green",true);
B = new Point(0.50 * width,0.90 * height,20,"blue",true);
ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);

mAB = new Point(0,0,10,"black",false);
mBC = new Point(0,0,10,"black",false);
lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);

circumCenter = new Point(0,0,10,"black",false,"circumCenter");

function animate(){
context.clearRect(0,0,width,height);
context.beginPath();
context.fillStyle = "rgba(255,255,0,0.2)";
context.moveTo(A.x,A.y);
context.lineTo(B.x,B.y);
context.lineTo(C.x,C.y);
context.closePath();
context.stroke();
context.fill();

ab.slope = (B.y - A.y) / (B.x - A.x);
ab.intercept = B.y - B.x*ab.slope;
ab.draw(context);

bc.slope = (B.y - C.y) / (B.x - C.x);
bc.intercept = B.y - B.x*bc.slope;
bc.draw(context);

ca.slope = (C.y - A.y) / (C.x - A.x);
ca.intercept = C.y - C.x*ca.slope;
ca.draw(context);

A.draw();
B.draw();
C.draw();

mAB.x = (A.x + B.x)/2;
mAB.y = (A.y + B.y)/2;
mAB.draw();

mBC.x = (C.x + B.x)/2;
mBC.y = (C.y + B.y)/2;
mBC.draw();

lAB.slope = -1/ab.slope;
lAB.intercept = mAB.y - mAB.x*lAB.slope;
lAB.draw(context);

lBC.slope = -1/bc.slope;
lBC.intercept = mBC.y - mBC.x*lBC.slope;
lBC.draw(context);

circumCenter.x = lAB.intersection(lBC).x;
circumCenter.y = lAB.intersection(lBC).y;

circumCenter.draw();

let dx = circumCenter.x - A.x;
let dy = circumCenter.y - A.y;
distance = Math.sqrt(dx*dx + dy*dy);

context.beginPath();
context.arc(circumCenter.x,circumCenter.y,distance,0,2*Math.PI);
context.stroke();

}

setInterval(animate,10);