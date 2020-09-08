const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let imgA,imgB,imgC,angle;

imgA = new Image(255, 255, 255);
imgA.src = "images/cog.png";

imgB = new Image();
imgB.src = "images/cog.png";

imgC = new Image();
imgC.src = "images/cog.png";

angle = 0.1;
angleRev = -3.5;


//img.addEventListener('load',()=>{
    setInterval(animate,10);
//})

function animate(){
    context.clearRect(0,0,width,height);
    animateC();
    context.save();
    context.translate(300,300);
    context.rotate(angle);
    context.drawImage(imgA,-150,-150,300,300);
    //context.drawImage(imgB,-150,-150,300,300);
    context.restore();
    angle += 0.01;
}

function animateB(){
    context.clearRect(0,0,width,height);
    context.save();
    context.translate(570,300);
    context.rotate(angleRev);
    context.drawImage(imgB,-150,-150,300,300);
    //context.drawImage(imgB,-150,-150,300,300);
    context.restore();
    angleRev += -0.01;
}

function animateC(){
    context.clearRect(0,0,width,height);
    animateB();
    context.save();
    context.translate(840,300);
    context.rotate(angle);
    context.drawImage(imgC,-150,-150,300,300);
    //context.drawImage(imgB,-150,-150,300,300);
    context.restore();
}