//Create namespace for Engine
const Engine= Matter.Engine;
//Create namespace for World
const World= Matter.World;
//Create namespace for Bodies
const Bodies=Matter.Bodies;
//Create namespace for Body
const Body=Matter.Body;                          


function setup() {
  createCanvas(400,400);
//create the engine
 engine=Engine.create();
  //Add world to the engine
  Engine.update(engine);
   world=engine.world;
  


  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01,
    isStatic: false
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground =Bodies.rectangle(200,400,400,10,ground_options)
  World.add(world,ground);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.X,ground.position.Y,400,20)


  
  
}

