

let engine;
let world;
var ground;


var mainPlayer,mainPlayerImage,goldCoin,goldCoinImage,bricks,brickImage,brickGroup;
var backgoundImage;
var back;
var dogAnimation;
var dogStanding;
var wrongImg;
var coin,coinGroup;

var PLAY,END

var gameState = "PLAY";

var score = 0;


function preload(){
  mainPlayerImage = loadImage("./assests/player.jpeg")
  goldCoinImage = loadImage("./assests/goldCoin.png")
  brickImage = loadImage("./assests/bricks.jpeg")
  backgoundImage = loadImage("./assests/background.jpeg")
  dogStanding = loadImage("./assests/dog3.png")


  wrongImg = loadImage("./assests/wrong.png")


  dogAnimation = loadAnimation("./assests/dog1.png","./assests/dog2.png","./assests/dog3.png")

}

function setup() 
{


  createCanvas(windowWidth,windowHeight);
  back = createSprite(displayWidth/2-10,displayHeight/2-40,20,20)
  back.addImage("background",backgoundImage);
  back.scale = 13
  

  ground = createSprite(displayWidth-800,displayHeight+200,3000,20)
  ground.visible = true;


  dog = createSprite(300,height-70,180,920)
  dog.addAnimation("running",dogAnimation)
  dog.scale = 3.5

  


  

  coinGroup = createGroup();
  brickGroup = createGroup();




  
  


  
  

  

  

}



function draw() 
{


  

  
  background(221);


  fill("red")
  stroke(200)
  text(score,500,500)
  //  back.velocityX = -1
  
  // if(back.x<600){
  //  back.x=back.width/2
  //  console.log("work")
  // }

  if(gameState === "PLAY"){
    
  

  if(keyIsDown(UP_ARROW)){
    dog.velocityY = -12
    dog.addImage(dogStanding);

  }

  dog.velocityY = dog.velocityY + 0.8
   dog.collide(ground);



  


  // if(dog.collide(coin)){
  //   coin.remove();
  //   dog.velocityX=0.2
  // }

  // brick.velocityX = -5 

  


  
  if(coinGroup.collide(dog)){
    coinGroup[0].destroy();
    dog.velocityX=0.1
    score = score+2
  }


  if(brickGroup.collide(dog)){
    gameState = "END";
    
  }

  
  
  spawnCoins();
  spawnBricks();
  
  drawSprites();
  }

  else if(gameState === "END"){
    dog.velocityX = 0
    dog.velocityY = 0
  
    coinGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);

    fill("red")
    stroke(200)
    textSize(100)
    textAlign(CENTER)
    text("Game Over",600,400)
   
    
    
  }
  


  

 
   
}


function spawnCoins(){
  if(frameCount % 100 === 0){
  coin = createSprite(2000,800,180,920)
  coin.addImage("coin",goldCoinImage)
  coin.scale = 0.5

  coin.velocityX = -5

   coin.y = Math.round(random(700,900))


  coin.lifetime = 1000


  coinGroup.add(coin)

  




  




    
  }
}

function spawnBricks(){
  if(frameCount % 150 === 0){
    brick = createSprite(3000,height-70,180,920)
    brick.addImage("brick",brickImage)
    brick.scale = 0.5
  

  brick.velocityX = -5

  brick.x = Math.round(random(windowWidth+300,windowHeight))

  brick.lifetime = 1000


  brickGroup.add(brick)




  




    
  }
}
