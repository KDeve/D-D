
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1
var paper
var db1,db2,db3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
    ground1= new Ground(400,650,800,20)
    db1= new DB (650,630,20,150)
    db2= new DB (725,600,100,20)
    db3= new DB (575,600,100,20)
    paper= new Paper(100,200,40)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  db1.display();
  db2.display();
  db3.display();
  paper.display();
 ground1.display();
 

}



function keyPressed(){
  if(keyDown("up")){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});

  }

}





