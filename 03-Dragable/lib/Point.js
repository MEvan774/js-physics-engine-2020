/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

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
	context.fillStyle="rgba(255,0,0,0.4)";
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



 //printText(){
 //	 context.front = this.front;
//	 context.fillText(this.text, this.x, this.y - this.radius - 10);
 //}
