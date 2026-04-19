let map;
let mapF;
let pacX = 300;
let pacY = 770;
let dots = [];
let score = 0;

function preload(){
  mapF = loadImage("MapF.png");
  map = loadImage("Map.png");
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
  image(mapF, 0, 0);
  image(map, 0, 0);
  noStroke();
  fill(255, 255, 0);
  arc(pacX, pacY, 40, 40, PI/4.5, PI/0.55);

  for (let x = 50; x < width; x += 60) {
    for (let y = 50; y < height; y += 60) {
    }
  }
}

function draw() {

  if (keyIsDown(LEFT_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 40, 40, 3.8, 2.4);
    pacX -= 5;
    let c0 = mapF.get(pacX - 20, pacY);
    let c1 = mapF.get(pacX - 20, pacY - 20); 
    let c2 = mapF.get(pacX - 20, pacY + 20);
    let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10;
    let hit1 = abs(red(c1) - 23) < 10 && abs(green(c1) - 142) < 10 && abs(blue(c1) - 174) < 10;
    let hit2 = abs(red(c2) - 23) < 10 && abs(green(c2) - 142) < 10 && abs(blue(c2) - 174) < 10;

    if (hit0 || hit1 || hit2) {
      pacX += 5;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 40, 40, PI/4.5, PI/0.55);
    pacX += 5;
    let c0 = mapF.get(pacX + 20, pacY);
    let c1 = mapF.get(pacX + 20, pacY - 20);
    let c2 = mapF.get(pacX + 20, pacY + 20); 
    let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10;
    let hit1 = abs(red(c1) - 23) < 10 && abs(green(c1) - 142) < 10 && abs(blue(c1) - 174) < 10;
    let hit2 = abs(red(c2) - 23) < 10 && abs(green(c2) - 142) < 10 && abs(blue(c2) - 174) < 10;
    
    if (hit0 || hit1 || hit2) {
      pacX -= 5;
    }
  }

  if (keyIsDown(UP_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 40, 40, -0.9, -2.2);
    pacY -= 5;
    let c0 = mapF.get(pacX, pacY - 20);
    let c1 = mapF.get(pacX - 20, pacY - 20);
    let c2 = mapF.get(pacX + 20, pacY - 20);
    let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10;
    let hit1 = abs(red(c1) - 23) < 10 && abs(green(c1) - 142) < 10 && abs(blue(c1) - 174) < 10;
    let hit2 = abs(red(c2) - 23) < 10 && abs(green(c2) - 142) < 10 && abs(blue(c2) - 174) < 10;
    
    if (hit0 || hit1 || hit2) {
      pacY += 5;
    }
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    image(map, 0, 0);
    arc(pacX, pacY, 40, 40, 2.3, 0.9);
    pacY += 5;
    let c0 = mapF.get(pacX, pacY + 20);
    let c1 = mapF.get(pacX - 20, pacY + 20);
    let c2 = mapF.get(pacX + 20, pacY + 20);
    let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10;
    let hit1 = abs(red(c1) - 23) < 10 && abs(green(c1) - 142) < 10 && abs(blue(c1) - 174) < 10;
    let hit2 = abs(red(c2) - 23) < 10 && abs(green(c2) - 142) < 10 && abs(blue(c2) - 174) < 10;
    
    if (hit0 || hit1 || hit2) {
      pacY -= 5;
    }
  }


  for (let i = 0; i < dots.length; i++) {
    let d = dots[i];
    fill(255);
    noStroke();
    ellipse(d.x, d.y, 10, 10);
  }

}

