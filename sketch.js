const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(215,50,10,90);
    box2=new Box(200,100,40,30);
    ground=new Ground(200,390,400,40);
}

function draw(){
    background(2,5,5);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
   
}

