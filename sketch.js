var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 10, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  
  bullet.velocityX = speed;

  bullet.shapeColor = color(255);
  wall.shapeColor = color(80,80,80);

  if (hasCollided(bullet,wall)){
 
    bullet.velocityX = 0;
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / thickness of wall * thickness of wall * thickness of wall;
  
  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if (damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

  }
  
}

function draw() {
  background(0);  
  

  }
  drawSprites();

function hasCollided(Lbullet, Lwall){
 
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= bulletLeftEdge){
    return true;
  }
 
 return false;
}


