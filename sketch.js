let histogram;
let roundIndex;

function setup() 
{
  stayColor = color(255,200,100);
  switchColor = color(100,255,200);
  
  histogram = new Histogram();
  
  histogram.setSize([200,100]);
  histogram.setPos([0,300]);
  
  roundIndex = 1;
  
  frameRate(5);
  let c = createCanvas(400, 400);
  
  c.parent("p5-holder");
}

function montyHallSim()
{
  let doors = [1,2,3];
  let correctDoor = doors.random();
  let initialGuess = doors.random();
  
  let openedDoor = getDoorToOpen(initialGuess,correctDoor);
  let switchDoorOffer = getDoorToSwitch(initialGuess,openedDoor);
  
  drawDoors(correctDoor,initialGuess, openedDoor,switchDoorOffer)
  
  let w = [int(correctDoor == initialGuess),
           int(correctDoor == switchDoorOffer)];  
  return w;
}

function draw() 
{
  background(220);
  textAlign(CENTER);
  text("Monty Carlo Hall",200,10);
  textAlign(LEFT);
  text("Round: " + roundIndex,0,10);
  
  histogram.add(montyHallSim());
  histogram.draw();
  
  roundIndex += 1;
}