var bgGameplay,bgGameplayImg;
var bgStart, bgStartImg;
var bgStory, bgStoryImg;

var bulletImg;

var collider1, collider2, collider3, collider4;

var player, shooterImg, shooter_shooting;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombie, zombieImg, destroyer, destroyerImg;

var playButton, playButtonImg;
var howButton, howButtonImg;
var homeButton, homeButtonImg;

var invisibleCollider1,invisibleCollider2,invisibleCollider3,invisibleCollider4;

var zombieGroup, destroyerGroup, bulletGroup;
var life = 3;
var kills = 0;
var no_of_bullet = 100;

var gameState = "start"


function preload(){
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgStartImg = loadImage("assets/start.jpeg")
  bgGameplayImg = loadImage("assets/gameplay.jpeg")
  bgStoryImg = loadImage("assets/story.jpeg")

  zombieImg = loadImage("assets/zombie.png")
  destroyerImg = loadImage("assets/destroyer.png")

  playButtonImg = loadImage("assets/play_button.png")
  howButtonImg = loadImage("assets/doubt.png")
  homeButtonImg = loadImage("assets/home.png")

  bulletImg = loadImage("assets/bullet.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);



  //adding the background image
  bgGameplay = createSprite(displayWidth/2,displayHeight/2,20,20)
bgGameplay.addImage(bgGameplayImg)
bgGameplay.scale = 1.2

bgStart = createSprite(displayWidth/2,displayHeight/2-60,20,20)
bgStart.addImage(bgStartImg)
bgStart.scale = 3.5

bgStory = createSprite(displayWidth/2,displayHeight/2-60,20,20)
bgStory.addImage(bgStoryImg)
bgStory.scale = 3.25

//creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.25
  //player.debug = true
  player.setCollider("rectangle",0,0,280,420)

  playButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2-125, 50, 50);
  playButton.addImage(playButtonImg)
  playButton.scale = 0.09

  howButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2+75, 50, 50);
  howButton.addImage(howButtonImg)
  howButton.scale = 0.09

  homeButton = createSprite(75,40,50,50)
  homeButton.addImage(homeButtonImg)
  homeButton.scale = 0.05

  heart1 = createSprite(displayWidth - 150,40,20,20)
  heart1.visible = false
  heart1.addImage("heart1",heart1Img)
  heart1.scale = 0.4 

  heart2 = createSprite(displayWidth - 100,40,20,20)
  heart2.visible = false
  heart2.addImage("heart2",heart2Img)
  heart2.scale = 0.4 

  heart3 = createSprite(displayWidth - 150,40,20,20)
  heart3.visible = false
  heart3.addImage("heart3",heart3Img)
  heart3.scale = 0.4 

  invisibleCollider1 = createSprite(width/2,height/2-10,width,25)
  invisibleCollider1.visible = false

  invisibleCollider2 = createSprite(width/2,height,width,10)
  invisibleCollider2.visible = false

  invisibleCollider3 = createSprite(1,height/2,10,height)
  invisibleCollider3.visible = false

  invisibleCollider4 = createSprite(width,height/2,10,height)
  invisibleCollider4.visible = false

  zombieGroup = new Group();
  destroyerGroup = new Group();
  bulletGroup = new Group();

  player.visible = false;
  bgGameplay.visible = false;
  bgStart.visible = false;
  playButton.visible = false;
  howButton.visible = false;
  bgStory.visible = false;
  homeButton.visible = false;
}

function draw() {
  background(0); 
  if(gameState==="start") {
    bgStart.visible = true,
    playButton.visible = true,
    howButton.visible = true

if(mousePressedOver(playButton)) {
      gameState = "gameplay";
    }

if(mousePressedOver(howButton)) {
  gameState = "controls";
}

    drawSprites();
  }

else if(gameState === "controls") {
  bgStart.visible = false,
    playButton.visible = false,
    howButton.visible = false,
    player.visible = false,
    bgGameplay.visible = false,
    bgStory.visible = true,
    homeButton.visible = true

    if(mousePressedOver(homeButton)) {
      gameState = "start",
      homeButton.visible = false,
      bgStory.visible = false
    }
  
  drawSprites();

  fill("yellow")
textFont("Algerian")
textSize(40)
text("Spacebar",50, displayHeight/2-350)

fill("yellow")
textFont("Algerian")
textSize(40)
text("up Arrow",50, displayHeight/2-270)

fill("yellow")
textFont("Algerian")
textSize(40)
text("down arrow",50, displayHeight/2-190)

fill("yellow")
textFont("Algerian")
textSize(40)
text("right arrow",50, displayHeight/2-110)

fill("yellow")
textFont("Algerian")
textSize(40)
text("left arrow",50, displayHeight/2-40)

fill("red")
textFont("Algerian")
textSize(40)
text("To shoot bullets from shotgun",displayWidth/2+25, displayHeight/2-350)

fill("red")
textFont("Algerian")
textSize(40)
text("to move upside",displayWidth/2+200, displayHeight/2-270)

fill("red")
textFont("Algerian")
textSize(40)
text("to move downside",displayWidth/2+175, displayHeight/2-190)

fill("red")
textFont("Algerian")
textSize(40)
text("to move front",displayWidth/2+200, displayHeight/2-110)

fill("red")
textFont("Algerian")
textSize(40)
text("to move back",displayWidth/2+200, displayHeight/2-40)
}

else if(gameState === "gameplay") {
  bgStart.visible = false,
  playButton.visible = false,
  howButton.visible = false,
  player.visible = true,
  bgGameplay.visible = true

    if(life===3){
      heart3.visible = true
      heart2.visible = false
      heart1.visible = false
    }

    if(life===2){
      heart3.visible = false
      heart2.visible = true
      heart1.visible = false
    }

    if(life===1) {
      heart3.visible = false
      heart2.visible = false
      heart1.visible = true
    }

    if(life===0){
      heart3.visible = false
      heart2.visible = false
      heart1.visible = false
      player.destroy();
      gameState = "end"
    }

    if(life===-1){
      life = 0
    }

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  createBullet();
  no_of_bullet = no_of_bullet-1

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 player.addImage(shooterImg)
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-20
}

if(zombieGroup.isTouching(player)) {
  for(var i=0;i<zombieGroup.length;i++) {
    if(zombieGroup[i].isTouching(player)) {
      zombieGroup[i].destroy()
      life=life - 1
    }
  }
}

if(zombieGroup.isTouching(bulletGroup)){
  kills = kills+1
  for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
        bulletGroup.destroyEach()
       
        } 
  
  }
}

if(destroyerGroup.isTouching(player)) {
  for(var i=0;i<destroyerGroup.length;i++) {
    if(destroyerGroup[i].isTouching(player)) {
      destroyerGroup[i].destroy()
      life=life - 2

    }
  }
}

if(destroyerGroup.isTouching(bulletGroup)){
  kills = kills+2
  for(var i=0;i<destroyerGroup.length;i++){     
    if(destroyerGroup[i].isTouching(bulletGroup)){
        destroyerGroup[i].destroy()
        bulletGroup.destroyEach()
    } 
  }
}

if(no_of_bullet === 0) {
  gameState="end"
}

player.collide(invisibleCollider1)
player.collide(invisibleCollider2)
player.collide(invisibleCollider3)
player.collide(invisibleCollider4)

enemy();
enemy2();

drawSprites();

textSize(30)
fill("#dc143c")
textFont("Algerian")
text("Lives = "+life,displayWidth/1.5 + displayWidth/5, displayHeight/2-330)

textSize(30)
fill("#dc143c")
textFont("Algerian")
text("Kills = "+kills,displayWidth/1.5 + displayWidth/5, displayHeight/2-280)

textSize(30)
fill("#ff7a00")
textFont("Algerian")
text("Bullets = "+no_of_bullet,displayWidth/1.5 + displayWidth/6, displayHeight/2-230)
}

else if (gameState === "end") {
  textSize(100)
fill("#dc143c")
textFont("Algerian")
text("You Lose",displayWidth/2-175, displayHeight/2-50)
}

}



function enemy(){
  if(frameCount%120===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -5
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }
}
function enemy2() {
  if(frameCount%280===0){
    destroyer = createSprite(random(width,width-25),random(height-25,height/2+55),40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -32.75
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }
}

function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = player.x+7.5;
  bullet.y=player.y-20;
  bullet.velocityX = 25;
  bullet.lifetime = 500;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);
   }

