
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(200,300,90,20);
	ground = new Ground(350,399,700,10);
	stone = new Stone(500,340,80,80);
	rubber = new Rubber(36,46);
	iron = new Iron(400,200,60,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  
  drawSprites();
 
}



