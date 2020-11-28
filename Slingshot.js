class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       this.i1 = loadImage("sprites/sling1.png")
        this.i2 = loadImage("sprites/sling2.png")
        this.i3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.i1,200,20)
        
        image(this.i2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x>(200)){
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+50, pointB.y);
                image(this.i3,pointA.x+25,pointA.y-20,10,40)
            }else{
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+50, pointB.y);
            image(this.i3,pointA.x-25,pointA.y-20,10,40)
           
        }}
    }
    
}