let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let boxes = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < 5; i++){ 
    let x = rnd(-22,-20);
    let y = rnd(5, 10);
    let z = rnd(26,30);
    new Ball(x,y,z);
  }
}

/*
,window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let r = 0; r < 4; r += 2)
    for(let c = 0; c < 4; c += 2)
      boxes.push(new Box(r,c))
      
  loop();
})
*/
,function loop(){
  for(let box of boxes){
    box.update();
  }
    
  window.requestAnimationFrame(loop);
}
  
)