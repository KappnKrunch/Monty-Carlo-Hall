class Histogram
{
  constructor()
  {
    this.barCount = 2;
    this.barSupposedLength = [1.0/3,2.0/3];
    this.barLabels = ["stay","switch"]
    this.barColors = [stayColor,switchColor]
    this.pos = [0,0];
    this.size = [50,50];
    this.barLength = [];
    this.totalLength = 0;
    
    for(let i = 0; i < this.barCount; i++)
    {
      this.barLength.push(0);
    }
  }
  
  draw()
  {
    let sY = (1.0/this.barCount)*this.size[1];
    
    for(let i = 0; i < this.barCount; i++)
    {
      let p = [this.pos[0],this.pos[1]+sY*i];
      let sX = this.size[0]*this.barLength[i]/this.totalLength;
      
      fill(this.barColors[i]);
      rect(p[0],p[1],sX,sY);
      
      let out = "Simulated value ";
      out += (this.barLength[i]/this.totalLength).toFixed(2)+"\n";
      out += "Analytical value ";
      out += (this.barSupposedLength[i]).toFixed(2);
      
      let textPos = [p[0]+0.5*sX,p[1]+0.5*sY];
      
      fill(color(0,0,0));
      
      textAlign(CENTER);
      text(this.barLabels[i],textPos[0],textPos[1]);
      
      textAlign(LEFT);
      text(out,p[0]+this.size[0]+7,p[1]+0.4*sY);
    }
    line(this.pos[0]+this.size[0],this.pos[1],this.pos[0]+this.size[0],this.pos[1]+this.size[1]);
  }
  
  setPos(s)
  {
    this.pos = [s[0],s[1]];
  }
  
  setSize(s)
  {
    this.size = [s[0],s[1]];
  }
  
  add(v)
  {
    for(let i = 0; i < v.length; i++)
    {
      this.barLength[i] += v[i];
      this.totalLength += v[i];
    }
  }
}