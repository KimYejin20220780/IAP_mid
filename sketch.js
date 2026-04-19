let map;
let pacX = 300;
let pacY = 770;

function preload(){
  map = loadImage("Map.png");
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
  image(map, 0, 0);
}

function draw() {
  noStroke();
  fill(255, 255, 0);
  arc(pacX, pacY, 60, 60, PI/4.5, PI/0.55);

}

function keyPressed(){
    image(map, 0, 0);
    if (key === "w") {
    pacY = pacY - 30; 
      let c = map.get(pacX, pacY); 
      if (red(c) === 23 && green(c) === 142 && blue(c) === 174) {
        pacY = pacY + 30; 
      }
    }
    if(key==="a"){
        pacX = pacX-30;
    }
    if(key==="s"){
        pacY = pacY+30;
    }
    if(key==="d"){
        pacX = pacX+30;
    }
}