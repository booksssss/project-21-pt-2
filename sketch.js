var ball, ground, wall_1, wall_2
var engine, world
var keyPressed;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	engine = Engine.create();
  
	world = engine.world;

	
	   
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	// ball = new Ball(100,100,20);
	// ground = new Ground(200,390,400,10);

	ball = new Ball(260,height-400,20);
	ground = new Ground(width/2,height-50,width,10);


	// wall_1 = new Ground(200,365,10,40);
	// wall_2  = new Ground(350,365,10,40);

	wall_1 = new Ground(1100,height-115,20,120);
	wall_2  = new Ground(900,height-115,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  Engine.update(engine);
  ball.show();
  ground.show();
  wall_1.show();
  wall_2.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-95});
}
	
	
}




