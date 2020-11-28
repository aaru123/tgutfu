const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var a,b,c,d,e,f,g,i

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    a = new box(400,375,50,50)
    b = new box(400,325,50,50)
    c = new ball(300,300)
    ground = new Ground(600,height,1200,20);
   ;
}

function draw(){
    background(150);
    Engine.update(engine);
    ground.display();
    a.display()
    b.display()
    c.display()
}

