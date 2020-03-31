const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;



let myPoint = new Point(200,200,50,"red", true)


function animate(){
	context.clearRect(0,0,width,height)
	myPoint.draw(context)
	//clearRect()
}

setInterval(animate,10);



//addEventListener('mousedown',mouseDownHandler);
//function mouseDownHandler(evt)
//{
//	console.log(evt.clientX,evt.clientY);
//}
//addEventListener('mouseup',mouseUpHandler);
//function mouseUpHandler()
//{
//	console.log('mouse up');
//}
//addEventListener('mousemove',mouseMoveHandler);
//function mouseMoveHandler(evt)
//{
//	console.log(evt.clientX,evt.clientY);
//}