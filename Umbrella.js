class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.umbrella = Bodies.circle(x,y,95,options);
        this.radius = 95;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        ellipseMode(RADIUS)
        ellipse(pos.x ,pos.y,this.radius,this.radius)
    }
}
