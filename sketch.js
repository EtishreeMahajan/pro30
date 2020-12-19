const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg, polygon;
var engine, world;
var bodies;
var gameState = "onsling";
function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(100, 300, 20,);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon, { x: 100, y: 300 });

  //Create the Bodies Here.
  //level 1
  box11 = new Box(385, 45, 30, 50);
  box12 = new Box(415, 45, 30, 50);

  //level 2
  box7 = new Box(355, 100, 30, 60);
  box8 = new Box(385, 100, 30, 60);
  box9 = new Box(415, 100, 30, 60);
  box10 = new Box(445, 100, 30, 60);

  // level 3
  box1 = new Box(325, 160, 30, 60);
  box2 = new Box(355, 160, 30, 60);
  box3 = new Box(385, 160, 30, 60);
  box4 = new Box(415, 160, 30, 60);
  box5 = new Box(445, 160, 30, 60);
  box6 = new Box(475, 160, 30, 60);

  //level 1
  box13 = new Box(685, 400, 30, 60);
  box14 = new Box(715, 400, 30, 60);
  box37 = new Box(700, 340, 30, 60);

  //level 2
  box15 = new Box(655, 460, 30, 60);
  box16 = new Box(685, 460, 30, 60);
  box17 = new Box(715, 460, 30, 60);
  box18 = new Box(745, 460, 30, 60);

  // level 3
  box19 = new Box(625, 520, 30, 60);
  box20 = new Box(655, 520, 30, 60);
  box21 = new Box(685, 520, 30, 60);
  box22 = new Box(715, 520, 30, 60);
  box23 = new Box(745, 520, 30, 60);
  box24 = new Box(775, 520, 30, 60);

  //level 1
  box25 = new Box(985, 250, 30, 60);
  box26 = new Box(1015, 250, 30, 60);
  box38 = new Box(1000, 190, 30, 60);

  //level 2
  box27 = new Box(955, 310, 30, 60);
  box28 = new Box(985, 310, 30, 60);
  box29 = new Box(1015, 310, 30, 60);
  box30 = new Box(1045, 310, 30, 60);

  // level 3
  box31 = new Box(925, 370, 30, 60);
  box32 = new Box(955, 370, 30, 60);
  box33 = new Box(985, 370, 30, 60);
  box34 = new Box(1015, 370, 30, 60);
  box35 = new Box(1045, 370, 30, 60);
  box36 = new Box(1075, 370, 30, 60);

  ground1 = new Ground(400, 200, 182, 20);
  ground2 = new Ground(700, 550, 182, 20);
  ground3 = new Ground(1000, 400, 182, 20);
}

function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();

  ground1.display();
  ground2.display();
  ground3.display();

  slingshot.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);

  drawSprites();
}

function mouseDragged() {
  if (gameState === "onsling") {
    Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  slingshot.fly();
  gameState = "launch";
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(this.polygon);
    gameState = "onsling";
  }
}
