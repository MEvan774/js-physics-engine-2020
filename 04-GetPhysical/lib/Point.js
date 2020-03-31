class Point{

  constructor(x,y,radius,color,draggable){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.draggable = false || draggable;
	
	if(this.draggable){
	this.drag();
	}
  }

      draw(){
	context.beginPath();
	context.fillStyle = this.color;
	//context.fillStyle="rgba(255,0,0,0.4)";
	context.arc(this.x,this.y,this.radius,0,Math.PI*2);
	context.stroke();
	context.fill();
 }

 drag(){
		let mouse ={};
		let distance;
		let dragging = false;

		addEventListener('mousedown', (evt) => {
			mouse.x = evt.clientX;
			mouse.y = evt.clientY;

			let dx = mouse.x - this.x;
			let dy = mouse.y - this.y;
			distance = Math.sqrt(dx*dx + dy*dy);

			if(distance < this.radius){
				dragging = true;
			}else{
				dragging = false;
			}

		})
		
		addEventListener('mouseup', () => {
		dragging = false;
		})

		addEventListener('mousemove',(evt) => {
			if(dragging){
				this.x = evt.clientX;
				this.y = evt.clientY;
			}
		})

}}


