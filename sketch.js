
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var ground2;
var angle = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground2 = Bodies.rectangle(100, 300, 100, 20, ground_options);
  World.add(world,ground2);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  //ball
  ellipse(ball.position.x,ball.position.y,20);
  //ground
  rect(ground.position.x,ground.position.y,400,20);


  console.log(ground.position.y);

  Matter.Body.rotate(ground2, angle);
  push();
  translate(ground2.position.x, ground2.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();
  angle = angle + 0.1;

}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  