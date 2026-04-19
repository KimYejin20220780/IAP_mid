let map;
let pacX;

function preload(){
  map = loadImage("Map.png");
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
}

function draw() {
  image(map, 0, 0);
  noStroke();
  fill(255, 255, 0);
  arc(300, 770, 60, 60, PI/4.5, PI/0.55);

}

function keyPressed(){
    background(0);
    if(key==="d"){
        pacX = pacX+10;
    }
}