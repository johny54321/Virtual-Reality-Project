class sDoor{
  constructor(x,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("color","blue");
    base.setAttribute("position","10 10 10");
    base.setAttribute("scale", ".75 3 .75");
    this.obj.append( base );

    scene.append(this.obj)
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }

}