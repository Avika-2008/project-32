const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;
var ball1,ball2,ball3;
var backgroundImg;
var bg = "bg1.jpeg"

 function preload(){
   getBackgroundImg();
 }

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  
  ground1=new Ground(200,390,400,20);
  ball1=new Ball(200,300,20,20);
  ball2=new Ball(240,100,20,20);
  ball3=new Ball(100,200,20,20);
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
   
  ground1.display();
  ball1.display();
  ball2.display();
  ball3.display();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
  var responseJSON = await response.json();
 
  
  
  var datetime = responseJSON.datetime;
 var hour= datetime.slice(11,13)
  
  if(hour>=06 && hour<=19){
      bg="bg1.jpeg"
  }
  else{
      bg = "bg2.jpeg"
  }
  
  
  
      backgroundImg = loadImage(bg);
 
}