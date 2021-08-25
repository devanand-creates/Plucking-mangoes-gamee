class Stone {
    constructor(x,y,diameter){
var options ={
isStatic:false,
restituition:0,
friction:1,
density:1.2
}

this.body=bodies.circle(x,y,diameter,options);
this.diameter=diameter;
this.image=loadImage("stone.png");
world.add(world,this.body);
}
display(){
Push();
Translate(this.body.position.x,this.body.position.y);
ImageMode(CENTER);
image(this.image,0,0,this.diameter);
Pop();
}}