class box {
constructor(x,y) {
var options = {
       restitution : 1.2,
    friction : 1.5,
    density : 1
  }
  this.body = Bodies.rectangle(x,y,50,50,options)
  World.add(world,this.body)
}
display(){
push()
    translate(this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    strokeWeight(3)
    rect(0,0,50,50)
    pop ()
}
}