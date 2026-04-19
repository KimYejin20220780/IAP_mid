let map; //눈에 보이는 지도
let mapF; //벽 모서리 채운 지도
let pacX = 300; //팩맨 시작 좌표 (x)
let pacY = 770; //팩맨 시작 좌표 (y)
let dots = []; //점 배열
let score = 0;
let life = 3;
let gameState = "PLAY";

let dotPositions = [
  {x: 620, y: 620}, //가로줄 4
  {x: 700, y: 620},
  {x: 780, y: 620},
  {x: 860, y: 620},
  {x: 940, y: 620},
  {x: 1020, y: 620},

  {x: 1185, y: 620},
  {x: 1275, y: 620},
  {x: 1365, y: 620},
  {x: 1455, y: 620},
  {x: 1545, y: 620},
  {x: 1635, y: 620},

  {x: 1795, y: 620},
  {x: 1875, y: 620},
  {x: 1955, y: 620},
  {x: 2030, y: 620},
  {x: 2110, y: 620}, 
  {x: 2190, y: 620},

  {x: 620, y: 695}, //가로줄 4.5
  {x: 700, y: 695},
  {x: 1020, y: 695},
  {x: 1185, y: 695},
  {x: 1635, y: 695},
  {x: 1795, y: 695},
  {x: 2110, y: 695}, 
  {x: 2190, y: 695},
  
  
  {x: 60, y: 770}, //가로줄 5 (가운데)
  {x: 140, y: 770},
  {x: 220, y: 770},
  //(팩맨)
  {x: 380, y: 770}, 
  {x: 460, y: 770},
  {x: 540, y: 770},
  {x: 620, y: 770},
  {x: 700, y: 770},

  {x: 1025, y: 770},
  {x: 1105, y: 770},
  {x: 1185, y: 770},

  {x: 1635, y: 770},
  {x: 1715, y: 770},
  {x: 1795, y: 770},

  {x: 2110, y: 770},
  {x: 2190, y: 770},
  {x: 2270, y: 770},
  {x: 2350, y: 770},
  {x: 2430, y: 770},
  {x: 2510, y: 770},
  {x: 2590, y: 770},
  {x: 2670, y: 770},
  {x: 2750, y: 770},
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
  if (gameState === "PLAY") { //플레이 상태
    playGame();
    
    function playGame() { //플레이 게임 
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


      if (pacX < 10) { //워프
        pacX = 2780; 
      } 
      else if (pacX > 2806) { 
        pacX = 36;  
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
      text("Life: " + life, 35, 150);
      


      if (score >= 100) {
        gameState = "FINISHED";
      }
    }///플레이게임 중괄호

  }//play의 중괄호

  else if (gameState === "FINISHED") {
    showGameOver();
  }

}

