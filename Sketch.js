const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground,BlockBlue1,BlockBlue2,BlockBlue3,BlockBlue4,BlockBlue5,BlockBlue6,BlockBlue7;
var BlockRed1,BlockRed2,BlockRed3,BlockRed4,BlockRed5,BlockRed6,BlockRed7;
var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var polygon;

function setup(){
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world

    ground = new Ground(170,200,320,20);

     //first level
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  BlockBlue7 = new Box(320, 182, 20, 20);

   //second level
   BlockRed1 = new BoxPink(201, 2, 20, 20); 

   BlockRed2 = new BoxPink(220, 2, 20, 20);
 
   BlockRed3 = new BoxPink(240, 2, 20, 20);
 
   BlockRed4 = new BoxPink(260, 2, 20, 20);
 
   BlockRed5 = new BoxPink(280, 2, 20, 20);
 
   BlockRed6 = new BoxPink(300, 2, 20, 20);
 
   BlockRed7 = new BoxPink(320, 2, 20, 20);
  
   //third level
  BlockBlue8  = new Box(202, 182, 20, 20);

  BlockBlue9  = new Box(220, 182, 20, 20);

  BlockBlue10 = new Box(240, 182, 20, 20);

  BlockBlue11 = new Box(260, 182, 20, 20);

  BlockBlue12 = new Box(280, 182, 20, 20);

  BlockBlue13 = new Box(300, 182, 20, 20);

  BlockBlue14 = new Box(320, 182, 20, 20);

  polygon1 = new Polygon(110, 100, 20, 20);

  sling = new SlingShot(polygon1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw(){
    background(56,45,44);
    ground.display();

    BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockRed1.display ();

  BlockRed2.display ();

  BlockRed3.display ();

  BlockRed4.display ();

  BlockRed5.display ();

  BlockRed6.display ();

  BlockRed7.display (); 

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  polygon1.display();

  sling.display();

}
function mouseDragged() {
    Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
  }
  
  function mouseReleased() {
    sling.fly();
  }