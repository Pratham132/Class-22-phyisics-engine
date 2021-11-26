//namespace - giving nickname to variable
const Engine = Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies
//global variables
var engine,world,body1

var ground,ball

function setup() {
  createCanvas(800,600);

  //creating the engine
  engine = Engine.create()
  //creating world and linking it to the engine
  world = engine.world
  //creating body1
  body1 = Bodies.rectangle(200,200,20,80)
  //adding body to world
  World.add(world,body1)
  console.log(body1.position.y)

  //creating ground
  var groundOption={
    isStatic:true
  }
  ground = Bodies.rectangle(width/2,height,width,20,groundOption)
  World.add(world,ground)

  //creating ball
  var ballOption={
    isstatic:false,restitution:1
  }
  ball=Bodies.circle(400,100,50,ballOption)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  console.log(body1.position.y)
rectMode(CENTER)
rect(body1.position.x,body1.position.y,20,80)
rect(ground.position.x,ground.position.y,width,20)
ellipse(ball.position.x,ball.position.y,100,100)
 
}