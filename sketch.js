var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight=300;
var score =0;
var count=0;
var theparticles;

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var j = 0; j < particles.length; j++) {
    if(theparticles!==null){
      theparticles.display();
      if(theparticles.body.position.y>760){
  
       if(theparticles.body.position.x<300){
         score=score+500;
         count=count+1;
         theparticles=null;
       }
  
       if(theparticles.body.position.x>301){
        score=score+100;
        count=count+1;
        theparticles=null;
       }
  
      if(theparticles.body.position.x>601){
        score=score+200;
        count=count+1;
        theparticles=null;
      }
  
      if(count==5){
        gameState="end";
      }
      
      if(gameState="end"){
        textSize(50);
        text("GAME OVER",400,400)
      }
     }
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(keyCode===32){
     mousePressed()
     
   }
   
}

function mousePressed(){
  if(gameState!=="end"){
    theparticles=new Particle(mouseX,10,10,10)
  }
  
  
}