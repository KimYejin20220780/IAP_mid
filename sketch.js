let map; //눈에 보이는 지도
let mapF; //벽 모서리 채운 지도
let pacX = 300; //팩맨 시작 좌표 (x)
let pacY = 770; //팩맨 시작 좌표 (y)
let dots = []; //점 배열
let score = 0;

let dotPositions = [
  {x: 400, y: 770},
  {x: 450, y: 800},
  {x: 520, y: 650},
  {x: 600, y: 300},
];

function preload(){
  mapF = loadImage("MapF.png");
  map = loadImage("Map.png");
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
  image(mapF, 0, 0); //색 감지를 위해 불러옴
  image(map, 0, 0);
  noStroke();
  fill(255, 255, 0);
  arc(pacX, pacY, 40, 40, PI/4.5, PI/0.55);

  for (let i = 0; i < dotPositions.length; i++) { //점 배열 기반으로 점 생성
    dots.push({
      x: dotPositions[i].x,
      y: dotPositions[i].y,
      isVisible: true //기본값 = 보임
    });
  }
  
  
}

function draw() {

  if (keyIsDown(LEFT_ARROW) === true) {
    image(map, 0, 0); //잔상을 지우기 위해 map을 다시 불러옴
    fill(255, 255, 0); //점과 겹치지 않게 노란색도 다시 불러옴
    arc(pacX, pacY, 40, 40, 3.8, 2.4);
    pacX -= 5; //이속, 왼쪽으로 5만큼 이동
    let c0 = mapF.get(pacX - 20, pacY); //팩맨의 왼쪽 가운데 콜라이더
    let c1 = mapF.get(pacX - 20, pacY - 20); //팩맨의 왼쪽 위 콜라이더
    let c2 = mapF.get(pacX - 20, pacY + 20); //팩맨의 왼쪽 아래 콜라이더
    let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10;
    let hit1 = abs(red(c1) - 23) < 10 && abs(green(c1) - 142) < 10 && abs(blue(c1) - 174) < 10;
    let hit2 = abs(red(c2) - 23) < 10 && abs(green(c2) - 142) < 10 && abs(blue(c2) - 174) < 10;

    if (hit0 || hit1 || hit2) { //콜라이더0, 1, 2가 닿은 색이 벽의 색이라면, 5만큼 이동한 거 취소
      pacX += 5;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    image(map, 0, 0);
    fill(255, 255, 0);
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
    fill(255, 255, 0);
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
    fill(255, 255, 0);
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



  for (let i = 0; i < dots.length; i++) { //배치된 점의 충동 확인
    let d = dots[i];

    if (d.isVisible) {
      fill(255);
      noStroke();
      ellipse(d.x, d.y, 15, 15); 

      let distance = dist(pacX, pacY, d.x, d.y);
      if (distance < 25) { //팩맨 중심이 아닌 가장자리가 충돌을 감지하도록 수치 조정
        d.isVisible = false; //닿았으면 점 삭제 
        score += 10;
      }
    }
  }



  fill(255);
  textSize(50);
  text("Score: " + score, 35, 80);



}

