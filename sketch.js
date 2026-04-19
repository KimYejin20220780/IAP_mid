let map;

function preload(){
  map = loadImage("Map.png");
}


function setup() {
  createCanvas(2816, 1536);
}

function draw() {
  image(map, 0, 0);
  fill(255, 255, 0)
  arc(250, 250, 190, 190, PI/4.5, PI/0.55);

}

