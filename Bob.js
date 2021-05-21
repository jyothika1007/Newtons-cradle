class Bob{
    constructor(x,y,radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.85,
            'friction':0.5,
            'density':1.2
}
this.x=x;
this.y=y;
  this.radius=radius;
  this.body = Bodies.circle(x,y,this.radius/2,options);

World.add(world, this.body);
}

display(){
    var pos =this.body.position;

    ellipseMode(CENTER);
    fill("violet");
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
}