class Drop {
    constructor(x,y){
        var options = {
            
        }
        this.drop = Bodies.circle(x,y,3,options);
        this.radius = 3;
        World.add(world, this.drop)
       
    }

    display(){
        var pos = this.drop.position;
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }

    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x : random(0,400), y : random(0,400)} )
        }
    }
}