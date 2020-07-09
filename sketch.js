const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var sphere

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var sphereOption={
        restitution:2,
        density:8
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    sphere=Bodies.circle(100,100,30,sphereOption)
    World.add(world,sphere)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS)
    ellipse(sphere.position.x,sphere.position.y,30,30)

}