class Rubber {
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1
    }
    this.body = Bodies.circle(x, y, 36,options);
   
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    translate(pos.x, pos.y);
    
    ellipseMode(RADIUS);
    
    fill(0);
    ellipse(0, 0,36,36);
    pop();
  }
};
  