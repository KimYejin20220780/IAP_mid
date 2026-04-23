//해야할 일 목록 : 
//1. score 클리어 조건 바꾸기
//흰색 점들 배열 더 만들기
//적 더 만들기

let map; //눈에 보이는 지도
let mapF; //벽 모서리 채운 지도
let enemy1;
let pacX = 300; //팩맨 시작 좌표 (x)
let pacY = 770; //팩맨 시작 좌표 (y)

let mouthAngle = 0; // 입이 벌어지는 각도
let mouthSpeed = 0.1; // 입이 움직이는 속도

let dots = []; //점 배열
let score = 0;

let en1X = 1400, en1Y = 770; // 적의 시작 위치
let enSpeed = 3; // 적의 속도
let enDir = 2; // 적의 방향
let life = 3;

let gameState = "PLAY"; //초기 게임 상태 = 진행 상태

let dotPositions = [
  {x: 415, y: 125}, //가로줄 1
  {x: 491, y: 125},
  {x: 566, y: 125},
  {x: 642, y: 125},
  {x: 718, y: 125},
  {x: 793, y: 125},
  {x: 869, y: 125},
  {x: 944, y: 125},
  {x: 1020, y: 125}, 
  {x: 1105, y: 125},
  {x: 1185, y: 125}, 
  {x: 1260, y: 125},
  {x: 1335, y: 125},

  {x: 1485, y: 125},
  {x: 1560, y: 125},
  {x: 1635, y: 125}, 
  {x: 1715, y: 125},
  {x: 1795, y: 125}, 
  {x: 1871, y: 125},
  {x: 1946, y: 125},
  {x: 2022, y: 125},
  {x: 2098, y: 125},
  {x: 2173, y: 125},
  {x: 2249, y: 125},
  {x: 2324, y: 125},
  {x: 2400, y: 125}, 

  {x: 415, y: 220}, // 가로줄 1.5
  {x: 680, y: 220},
  {x: 1335, y: 220},
  {x: 1485, y: 220},
  {x: 2145, y: 220},
  {x: 2400, y: 220},

  {x: 415, y: 320}, //가로줄 2
  {x: 491, y: 320},
  {x: 566, y: 320},
  {x: 642, y: 320},
  {x: 718, y: 320},
  {x: 793, y: 320},
  {x: 869, y: 320},
  {x: 944, y: 320},
  {x: 1020, y: 320}, //
  {x: 1105, y: 320},
  {x: 1185, y: 320}, //
  {x: 1260, y: 320},
  {x: 1335, y: 320},
  {x: 1410, y: 320},
  {x: 1485, y: 320},
  {x: 1560, y: 320},
  {x: 1635, y: 320}, //
  {x: 1715, y: 320},
  {x: 1795, y: 320}, //
  {x: 1871, y: 320},
  {x: 1946, y: 320},
  {x: 2022, y: 320},
  {x: 2098, y: 320},
  {x: 2173, y: 320},
  {x: 2249, y: 320},
  {x: 2324, y: 320},
  {x: 2400, y: 320}, //

  {x: 415, y: 395}, //가로줄 2.5

  //{x: 650, y: 395},

  {x: 1020, y: 395},

  {x: 1185, y: 395},

  {x: 1635, y: 395},

  {x: 1795, y: 395},

  {x: 415, y: 395},

  //

  {x: 2400, y: 395},

  {x: 415, y: 465}, //가로줄 3
  {x: 480, y: 465},
  {x: 550, y: 465},
  {x: 620, y: 465}, 

  {x: 810, y: 470}, 
  {x: 880, y: 470},
  {x: 950, y: 470}, 
  {x: 1020, y: 470},

  {x: 1185, y: 470},
  {x: 1257, y: 470},
  {x: 1330, y: 470},

  {x: 1482, y: 470},
  {x: 1555, y: 470},
  {x: 1635, y: 470},

  {x: 1795, y: 470},
  {x: 1865, y: 470},
  {x: 1935, y: 470},
  {x: 2005, y: 470},

  {x: 2190, y: 465}, 
  {x: 2260, y: 465},
  {x: 2330, y: 465},
  {x: 2400, y: 465}, 

  {x: 620, y: 540}, //가로줄 3.5

  {x: 810, y: 540}, 

  {x: 1330, y: 540},

  {x: 1482, y: 540},

  {x: 2005, y: 540},

  {x: 2190, y: 540},


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

  {x: 620, y: 840}, //가로줄 5.5
  {x: 700, y: 840},
  {x: 1020, y: 840},
  {x: 1185, y: 840},
  {x: 1635, y: 840},
  {x: 1795, y: 840},
  {x: 2110, y: 840}, 
  {x: 2190, y: 840},

  {x: 620, y: 910}, //가로줄 6
  {x: 700, y: 910},
  {x: 780, y: 910},
  {x: 860, y: 910},
  {x: 940, y: 910},
  {x: 1020, y: 910},

  {x: 1185, y: 910},
  {x: 1275, y: 910},
  {x: 1365, y: 910},
  {x: 1455, y: 910},
  {x: 1545, y: 910},
  {x: 1635, y: 910},

  {x: 1795, y: 910},
  {x: 1875, y: 910},
  {x: 1955, y: 910},
  {x: 2030, y: 910},
  {x: 2110, y: 910}, 
  {x: 2190, y: 910},

  {x: 620, y: 980}, //가로줄 6.5

  {x: 1020, y: 980}, 

  {x: 1185, y: 980},

  {x: 1635, y: 980},

  {x: 1795, y: 980},

  {x: 2190, y: 980},

  {x: 470, y: 1050}, //가로줄 7
  {x: 545, y: 1050}, 
  {x: 620, y: 1050}, //
  {x: 700, y: 1050},
  {x: 780, y: 1050},
  {x: 860, y: 1050},
  {x: 940, y: 1050},
  {x: 1020, y: 1050}, //
  {x: 1100, y: 1050}, 
  {x: 1185, y: 1050}, //
  {x: 1260, y: 1050},
  {x: 1335, y: 1050},

  {x: 1480, y: 1050},
  {x: 1550, y: 1050},
  {x: 1635, y: 1050}, //
  {x: 1715, y: 1050},
  {x: 1795, y: 1050}, //
  {x: 1875, y: 1050},
  {x: 1955, y: 1050},
  {x: 2030, y: 1050},
  {x: 2110, y: 1050}, 
  {x: 2190, y: 1050}, //
  {x: 2270, y: 1050},
  {x: 2345, y: 1050},

  {x: 470, y: 1173}, //가로줄 8

  {x: 620, y: 1173},

  {x: 830, y: 1173},
  {x: 903, y: 1173},
  {x: 975, y: 1173},
  {x: 1047, y: 1173},
  {x: 1119, y: 1173},
  {x: 1191, y: 1173},
  {x: 1263, y: 1173},
  {x: 1335, y: 1173},
  {x: 1407, y: 1173},
  {x: 1480, y: 1173},

  {x: 2190, y: 1173},

  {x: 2345, y: 1173},
];

function preload(){
  mapF = loadImage("MapF.png");
  map = loadImage("Map.png");
  enemy1 = loadImage("Enemy1.png");
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
  image(mapF, 0, 0); //색 감지를 위해 불러옴

  for (let i = 0; i < dotPositions.length; i++) { //점 배열 기반으로 점 생성
    dots.push({
      x: dotPositions[i].x,
      y: dotPositions[i].y,
      isVisible: true //기본값 = 보임
    });
  }
}

function draw() {
  image(map, 0, 0); //첫 화면 세팅
  fill(255, 255, 0); //첫 화면 세팅
  arc(pacX, pacY, 40, 40, PI/4.5, PI/0.55); //첫 화면 세팅

  if (gameState === "PLAY") { //게임 진행 상태일 떄
    playGame(); //게임 실행
    
    function playGame() {

      mouthAngle += mouthSpeed;
  if (mouthAngle > PI / 4 || mouthAngle < 0) {
    mouthSpeed *= -1; // 최대치에 도달하면 방향 반전
  }
      //--------------------------------------팩맨 움직임 로직----------------------------------------
      if (keyIsDown(LEFT_ARROW) === true) {
        image(map, 0, 0); //잔상을 지우기 위해 map을 다시 불러옴
        fill(255, 255, 0); //점과 겹치지 않게 노란색도 다시 불러옴
        arc(pacX, pacY, 40, 40, PI + mouthAngle, PI - mouthAngle)
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
        arc(pacX, pacY, 40, 40, mouthAngle, TWO_PI - mouthAngle)
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
        arc(pacX, pacY, 40, 40, -HALF_PI + mouthAngle, -HALF_PI - mouthAngle)
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
        arc(pacX, pacY, 40, 40, HALF_PI + mouthAngle, HALF_PI - mouthAngle)
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

      //--------------------------------------워프 로직----------------------------------------
      if (pacX < 10) { //워프
        pacX = 2780; 
      } 
      else if (pacX > 2806) { 
        pacX = 36;  
      }

      //--------------------------------------흰 점 로직----------------------------------------      
      for (let i = 0; i < dots.length; i++) { //배치된 점의 충돌 확인
        let d = dots[i];

        if (d.isVisible) { //배열대로 흰 점 생성
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

      //--------------------------------------적 벽 감지 로직----------------------------------------
      isWallAt();
      function isWallAt(checkX, checkY) {
        if (checkX < 0 || checkX >= width || checkY < 0 || checkY >= height) {
          return true; 
        }

        let c = mapF.get(checkX, checkY);

        if (c && Array.isArray(c) && c.length >= 3) {
          let r = c[0]; 
          let g = c[1];
          let b = c[2];

          return (abs(r - 23) < 10 && abs(g - 142) < 10 && abs(b - 174) < 10);
        }

        return false;
      }

      //--------------------------------------적 움직임 로직----------------------------------------
      moveEnemy(); //적 로직 호출
      function moveEnemy() {
        let nextX = en1X;
        let nextY = en1Y;
        let hit = false;

        if (enDir === 0) { //오른쪽
          nextX += enSpeed;
          if (isWallAt(nextX + 45, nextY) || 
              isWallAt(nextX + 45, nextY + 25) || 
              isWallAt(nextX + 45, nextY + 50)) hit = true;
        } 

        else if (enDir === 1) { //왼쪽
          nextX -= enSpeed;
          if (isWallAt(nextX, nextY) || 
              isWallAt(nextX, nextY + 25) || 
              isWallAt(nextX, nextY + 50)) hit = true;
        } 

        else if (enDir === 2) { //위
          nextY -= enSpeed;
          if (isWallAt(nextX, nextY) || 
              isWallAt(nextX + 22, nextY) || 
              isWallAt(nextX + 45, nextY)) hit = true;
        } 

        else if (enDir === 3) { //아래
          nextY += enSpeed;
          if (isWallAt(nextX, nextY + 50) || 
              isWallAt(nextX + 22, nextY + 50) || 
              isWallAt(nextX + 45, nextY + 50)) hit = true;
        }


        if (!hit) {
          en1X = nextX;
          en1Y = nextY;
        } 
        else {
          enDir = floor(random(4)); 
        }

        image(enemy1, en1X, en1Y, 45, 50);
      }

      //--------------------------------------적 충돌 라이프 감소 로직----------------------------------------
      let distanceToEnemy = dist(pacX, pacY, en1X + 22, en1Y + 25); 

      if (distanceToEnemy < 40) { 
        life -= 1; 
        
        pacX = 300;    
        pacY = 770;

        if (life <= 0) gameState = "OVER";
      }

      //--------------------------------------스코어 및 라이프 텍스트----------------------------------------
      fill(255);
      textSize(50);
      textAlign(LEFT, TOP); //게임 종료 때 바꾼 거 초기화
      text("Score: " + score, 35, 50);
      text("Life: " + life, 35, 120);
      

      //--------------------------------------게임 클리어 로직----------------------------------------
      if (score >= 100) {
        gameState = "FINISHED";
      }
    }///플레이게임 중괄호

  }//play의 중괄호

  //--------------------------------------게임 클리어 후 로직----------------------------------------
  else if (gameState === "FINISHED") { //if 게임 실행 상태일 때의 else
    showGameClear();
  }

  else if (gameState === "OVER") { //if 게임 실행 상태일 때의 else
    showGameOver();
  }

  function showGameClear() { //클리어 창 표시
    background(0, 150); 
    
    fill(255, 255, 0);
    textAlign(CENTER, CENTER); 
    textSize(80);
    text("GAME CLEAR!", width/2, height/2 - 20);
    
    textSize(50);
    fill(255);
    text("Press 'R' to Restart", width/2, height/2 + 60);
  }

  function showGameOver() { //게임오버 창 표시
    background(0, 150); 
    
    fill(255, 0, 0);
    textAlign(CENTER, CENTER); 
    textSize(80);
    text("GAME OVER", width/2, height/2 - 20);
    
    textSize(50);
    fill(255);
    text("Press 'R' to Restart", width/2, height/2 + 60);
  }
}

function keyPressed() { //재시작 
  if (gameState === "FINISHED" || gameState === "OVER") {
    if (key === 'r' || key === 'R') { //대소문자 구분X
      resetGame();
    }
  }
}
  
function resetGame() { //변수값 초기화
  score = 0;
  life = 3;
  pacX = 300;
  pacY = 770;
  en1X = 1400, en1Y = 770;
  enDir = 2;
  
  for (let d of dots) { //배열(흰 점)도 초기화
    d.isVisible = true;
  }
  
  gameState = "PLAY";
  loop(); 
}

