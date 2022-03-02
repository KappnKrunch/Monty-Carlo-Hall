let stayColor;
let switchColor;

Array.prototype.random = function() 
{
  return this[Math.floor((Math.random()*this.length))];
}

function getDoorToSwitch(openedDoor, initialGuess)
{
  let doors = [1,2,3];
  
  let door = doors.filter(d => d != initialGuess && d != openedDoor).random();
  
  return door;
}

function getDoorToOpen(correctDoor,initialGuess)
{
  let doors = [1,2,3];
  
  let door = doors.filter(d => d != initialGuess && d != correctDoor).random();
               
  return door;
}

function setFillColorForDoor(index,correctDoor,initialGuess,openedDoor,switchDoorOffer)
{
  if(index==initialGuess)
  { 
    if(index==correctDoor)
    {
      fill(stayColor);
    }
    else
    {
      fill(lerpColor(stayColor,color(0,0,0),0.65));
    }
     
  }
  else if(index==switchDoorOffer)
  { 
    if(index==correctDoor)
    {
      fill(switchColor); 
    }
    else
    {
      fill(lerpColor(switchColor,color(0,0,0),0.65)); 
    }
  }
  else if(index==openedDoor)
  { 
    fill(color(60,60,60)); 
  }
  else
  { 
    fill(color(255,255,255)); 
  }
}

function drawDoors(correctDoor,initialGuess, openedDoor,switchDoorOffer)
{
  setFillColorForDoor(1,correctDoor,initialGuess,openedDoor,switchDoorOffer);
  rect(55,75,90,130);
  setFillColorForDoor(2,correctDoor,initialGuess,openedDoor,switchDoorOffer);
  rect(155,75,90,130);
    setFillColorForDoor(3,correctDoor,initialGuess,openedDoor,switchDoorOffer);
  rect(255,75,90,130);
}