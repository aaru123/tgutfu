class ball {
    constructor(x,y) {
    var options = {
           restitution : 1.2,
        friction : 1.5,
        density : 1
      }
      this.body = Bodies.circle(x,y,50,50,options)
      World.add(world,this.body)
    }
    display(){
    push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        ellipseMode(CENTER)
        strokeWeight(3)
        ellipse(0,0,50,50)
        pop ()
    }
    }