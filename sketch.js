
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite( 400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   
  score = 0;
FoodGroup=createGroup();
obstacleGroup=createGroup();
}

function draw() {
  
  background(255);
  score = score + Math.round(getFrameRate()/60);
  textSize(30)
  text(" survival time:"+score,300,50)
  if(ground.x<0){
     ground.x=ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>250){
    monkey.velocityY = -12
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
  //console.log(monkey.y)
  
spawnBananas();
 spawnobstacles ();
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0)
    monkey.velocityY=0
    
  }
  

  drawSprites();
}


function spawnBananas(){
  
  if(frameCount % 60===0){
    var banana = createSprite(600,Math.round(random(165,250)),10,40);
    banana.addImage(bananaImage)
    banana.velocityX = -(6 +score/100 )
    banana.scale=0.1
  FoodGroup.add(banana)
  
  }
}
  

function spawnobstacles (){
  if(frameCount % 80===0){
    var obstacle = createSprite(600,330,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -(6 +score/100 )
    obstacle.scale=0.1
  obstacleGroup.add(obstacle)
  
  }
  
}





