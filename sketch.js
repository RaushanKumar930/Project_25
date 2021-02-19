
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1,dbi,db
var world;

function preload(){
	dbi=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	db=createSprite(1200,530,150,175)
	db.addImage(dbi)
	db.scale=0.9
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,40);
	dustbinObj=new Dustbin(1200,670);
	paper1=new Paper(400,650,80,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
keyPr()
  dustbinObj.display();
  groundObject.display();
  db.display()
  paper1.display();
}
function keyPr(){
	if (keyDown("up")){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	}
}
