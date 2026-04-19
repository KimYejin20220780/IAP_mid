let map;

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
  arc(250, 250, 100, 100, PI/4.5, PI/0.55);
}

