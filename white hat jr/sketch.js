var ball,img,paddle;

function preload() {
  ballimg = loadImage("ball.png")
  paddleimg = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,10,10)
  ball.addAnimation("bb", ballimg)
  ball.velocityX = 3
  paddle = createSprite(380,200,10,10)
  paddle.addAnimation("pp", paddleimg)
}

function draw() {
  background(205,153,0);
   
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
   paddle.y = paddle.y-20; 
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+20
  }
  drawSprites();
  
}

function explosion()
{
 ball.velocityY = random(-8,8) 
}

