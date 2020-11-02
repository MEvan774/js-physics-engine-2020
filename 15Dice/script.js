const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let numberOfDices,dices,roll,roll2,pos,diceAmount;

//diceAmount = [];
numberOfDices = 4;
dices = {};

dices.image = new Image();
dices.image.src = "images/dice.png";

pos = 200;

for(let i=numberOfDices;i<2;i++){
//diceAmount[numberOfDices];

while (i < numberOfDices) {
    pos * 2;
    dices.push(makeDice())
  i++;
    }
}


function makeDice(){
  let dice = [];
  for(let i=0;i<6;i++){
    dice[i]=i+1;
  }
  return dice;
}

dices.image.addEventListener('load',()=>{
sw = dices.image.width/6;
sh = dices.image.height;
roll = Math.floor(Math.random()*6);
roll2 = Math.floor(Math.random()*6);

setInterval(animate,10);
})

function animate(){
    context.drawImage(dices.image,(roll)*sw,0,sw,sh,200,200,sw,sh);
        context.drawImage(dices.image,(roll2)*sw,0,sw,sh,400,200,sw,sh);
}
//dices.flat();
//console.log(dices.flatMap(v=>[v*2]))

/*
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice,sw,sh,roll_1,roll_2;
dice = {};

dice.image = new Image();
dice.image.src = "images/dice.png";

dice.image.addEventListener('load',()=>{

  sw = dice.image.width/6;
  sh = dice.image.height;
  roll_1 = Math.floor(Math.random()*6);
  roll_2 = Math.floor(Math.random()*6);
  animate();
})

setInterval(animate,10)

function animate(){
 context.drawImage(dice.image,roll_1*sw,0,sw,sh,200,200,sw,sh);
 context.drawImage(dice.image,roll_2*sw,0,sw,sh,400,200,sw,sh);
 console.log(roll_1,roll_2);
}
*/