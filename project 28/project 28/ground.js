class ground
{
	constructor(){
	
		var options={
			isStatic:true

			}
		
		
		this.body=Bodies.rectangle(500, 625, 1200, 20 , options);
 		World.add(world, this.body);

	}
	display()
	{		
			rectMode(CENTER)
			fill("silver")
			rect(500,625,1200,20,);
			
	}

}