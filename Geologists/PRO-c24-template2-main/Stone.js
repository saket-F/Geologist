class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var option = {
        restitution:0.8,
        friction:0.9,
        density:12,
    }
  
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, option)
		World.add(world, this.body);


	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r)
			pop()
	}

}