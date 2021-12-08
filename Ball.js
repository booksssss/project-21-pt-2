class Ball {
    constructor(x,y,r){
    var options ={
        restitution: 0.3,
        friction: 0,
        density: 1.2
        
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body)
}

show() {
   var position = this.body.position
push();
ellipseMode(RADIUS)
fill("pink")
stroke("white")
ellipse(position.x,position.y,this.r)
pop();



}
}
