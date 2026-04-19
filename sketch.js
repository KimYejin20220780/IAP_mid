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
  

  if (keyIsDown(LEFT_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 60, 60, PI/4.5, PI/0.55);
    pacX -= 3;
    let c = map.get(pacX, pacY); // 여기서 작성!
    if (red(c) === 23 && green(c) === 142 && blue(c) === 174) {
      pacX += 3;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 60, 60, PI/4.5, PI/0.55);
    pacX += 3;
  }

  if (keyIsDown(UP_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 60, 60, PI/4.5, PI/0.55);
    pacY -= 3;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 60, 60, PI/4.5, PI/0.55);
    pacY += 3;
  }
}






// function keyPressed(){
//     image(map, 0, 0);
//     if (key === "w") {
//       pacY -= 30; 
//     }
//     if(key==="a"){
//         pacX = pacX-30;
//     }
//     if(key==="s"){
//         pacY = pacY+30;
//     }
//     if(key==="d"){
//         pacX = pacX+30;
//     }
// }