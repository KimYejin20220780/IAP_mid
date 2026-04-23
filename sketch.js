// 20220780 김예진 - 인터렉티브아트프로젝트 중간 과제

// 게임 규칙 : 
// 방향키(화살표 키)로 조작 
// 흰 점을 모두 먹으면 승리 (281개)
// 적과 충돌할 때마다 라이프 1 감소 및 위치 초기화(중복 충돌 방지)
// 3개의 라이프를 모두 잃으면 실패
// 500점, 1000점마다 적 추가

let map; //눈에 보이는 지도
let mapF; //벽 모서리 채운 지도 (충돌 감지)

let pacX = 300; //팩맨 시작 좌표 (x)
let pacY = 770; //팩맨 시작 좌표 (y)

let mouthAngle = 0; //입이 벌어지는 각도
let mouthSpeed = 0.1; //입이 움직이는 속도

let dots = []; //점 배열
let score = 0;

let enemyImgs = []; //적 배열
let enemies = [];
let enSpeed = 3; //적의 속도
let enDir = 2; //적의 방향
let life = 3;
let isEnemyAdded1 = false; //적 추가 로직 상태
let isEnemyAdded2 = false; 

let gameState = "PLAY"; //초기 게임 상태 = 진행 상태

let dotPositions = [ //흰 점 배열
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

  {x: 470, y: 1110}, //가로줄 7.5

  {x: 620, y: 1110},

  {x: 880, y: 1110},

  {x: 1335, y: 1110},

  {x: 1480, y: 1110},

  {x: 1930, y: 1110},

  {x: 2190, y: 1110}, 
  
  {x: 2345, y: 1110},

  {x: 470, y: 1173}, //가로줄 8

  {x: 620, y: 1173},
  
  {x: 840, y: 1173},  
  {x: 921, y: 1173},
  {x: 1002, y: 1173},
  {x: 1083, y: 1173},
  {x: 1164, y: 1173},
  {x: 1245, y: 1173},
  {x: 1326, y: 1173},
  {x: 1407, y: 1173}, 
  {x: 1489, y: 1173},
  {x: 1570, y: 1173},
  {x: 1651, y: 1173},
  {x: 1732, y: 1173},
  {x: 1813, y: 1173},
  {x: 1894, y: 1173},
  {x: 1975, y: 1173},  

  {x: 2190, y: 1173},

  {x: 2345, y: 1173},

  {x: 470, y: 1235}, //가로줄 8.5

  {x: 620, y: 1235}, 

  {x: 1010, y: 1235}, 

  {x: 1185, y: 1235}, //

  {x: 1635, y: 1235}, //
 
  {x: 1795, y: 1235}, 

  {x: 2190, y: 1235}, 

  {x: 2345, y: 1235},

  {x: 470, y: 1295}, //가로줄 9
  {x: 545, y: 1295}, 
  {x: 620, y: 1295}, 

  {x: 840, y: 1295},
  {x: 925, y: 1295},
  {x: 1010, y: 1295}, 

  {x: 1185, y: 1290}, //
  {x: 1260, y: 1290},
  {x: 1335, y: 1290},

  {x: 1480, y: 1290},
  {x: 1550, y: 1290},
  {x: 1635, y: 1290}, //
 
  {x: 1795, y: 1295}, 
  {x: 1880, y: 1295}, 
  {x: 1965, y: 1295},

  {x: 2190, y: 1295}, 
  {x: 2270, y: 1295},
  {x: 2345, y: 1295},

  {x: 470, y: 1352}, //가로줄 9.5

  {x: 1335, y: 1352},

  {x: 1480, y: 1352},
  
  {x: 2345, y: 1352},

  {x: 470, y: 1410}, //가로줄 10
  {x: 545, y: 1410}, 
  {x: 620, y: 1410}, //
  {x: 700, y: 1410},
  {x: 780, y: 1410},
  {x: 860, y: 1410},
  {x: 940, y: 1410},
  {x: 1020, y: 1410}, //
  {x: 1100, y: 1410}, 
  {x: 1185, y: 1410}, //
  {x: 1260, y: 1410},
  {x: 1335, y: 1410},
  {x: 1410, y: 1410},
  {x: 1480, y: 1410},
  {x: 1550, y: 1410},
  {x: 1635, y: 1410}, //
  {x: 1715, y: 1410},
  {x: 1795, y: 1410}, //
  {x: 1875, y: 1410},
  {x: 1955, y: 1410},
  {x: 2030, y: 1410},
  {x: 2110, y: 1410}, 
  {x: 2190, y: 1410}, //
  {x: 2270, y: 1410},
  {x: 2345, y: 1410},
];

function preload(){ //이미지들 미리 불러오기
  mapF = loadImage("MapF.png");
  map = loadImage("Map.png");
  enemyImgs[0] = loadImage('enemyR.png');
  enemyImgs[1] = loadImage('enemyG.png');
  enemyImgs[2] = loadImage('enemyM.png');
  enemyImgs[3] = loadImage('enemyO.png');
  enemyImgs[4] = loadImage('enemyP.png');
  enemyImgs[5] = loadImage('enemyB.png');
  enemyImgs[6] = loadImage('enemyV.png');
}


function setup() {
  createCanvas(2816, 1536);
  background(0);
  image(mapF, 0, 0); //색 감지를 위해 불러옴
  setupEnemies(); //적 생성 함수

  for (let i = 0; i < dotPositions.length; i++) { //점 배열 기반으로 점 생성
    dots.push({
      x: dotPositions[i].x,
      y: dotPositions[i].y,
      isVisible: true //기본값 = 보임
    });
  }

}

function setupEnemies() {
  enemies = []; //배열 초기화
  enemies.push({ x: 1405, y: 770, dir: 0, speed: 2, img: enemyImgs[0] });
  enemies.push({ x: 1405, y: 770, dir: 1, speed: 2, img: enemyImgs[1] });
  enemies.push({ x: 1405, y: 315, dir: 2, speed: 3, img: enemyImgs[2] });
  enemies.push({ x: 420, y: 120, dir: 2, speed: 3, img: enemyImgs[3] });
  enemies.push({ x: 2390, y: 120, dir: 2, speed: 3, img: enemyImgs[4] });
}

function draw() {
  image(map, 0, 0); //첫 화면 세팅
  fill(255, 255, 0); //첫 화면 세팅
  arc(pacX, pacY, 40, 40, PI/4.5, PI/0.55); //첫 화면 세팅

  if (gameState === "PLAY") { //게임 진행 상태일 떄
    playGame(); //게임 실행
    
    function playGame() {
      //--------------------------------------팩맨 애니메이션 로직----------------------------------------
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
        let hit0 = abs(red(c0) - 23) < 10 && abs(green(c0) - 142) < 10 && abs(blue(c0) - 174) < 10; //콜라이더0과 닿은 색이 벽의 색(오차범위 10고려)이라면 = hitt0
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
      if (pacX < 10) { //팩맨의 x좌표가 10보다 작다면
        pacX = 2780; //x2780 으로 수정(이동)
      } 
      else if (pacX > 2806) { //2806보다 크다면
        pacX = 36; //36으로 이동
      }

      //--------------------------------------흰 점 로직----------------------------------------      
      for (let i = 0; i < dots.length; i++) { //배치된 점의 충돌 확인
        let d = dots[i]; //배열 불러오기

        if (d.isVisible) { //불러온 배열대로 흰 점 생성
          fill(255);
          noStroke();
          ellipse(d.x, d.y, 15, 15); 

          let distance = dist(pacX, pacY, d.x, d.y);
          if (distance < 40) { //팩맨 중심이 아닌 가장자리가 충돌을 감지하도록 수치 조정
            d.isVisible = false; //닿았으면 점 삭제 
            score += 10; //점수는 10점 추가
          }
        }
      }

      //--------------------------------------적 벽 감지 로직----------------------------------------
      isWallAt();
      function isWallAt(checkX, checkY) {
        let c = mapF.get(checkX, checkY); //체크x와 체크y가 닿은 곳의 색 불러오기

        if (c && Array.isArray(c) && c.length >= 3) {
          let r = c[0]; 
          let g = c[1];
          let b = c[2];

          return (abs(r - 23) < 10 && abs(g - 142) < 10 && abs(b - 174) < 10);
        }
        return false;
      }

      //--------------------------------------적 로드 및 충돌 로직----------------------------------------
      updateEnemies();
      function updateEnemies() {
        for (let i = 0; i < enemies.length; i++) { 
          let en = enemies[i]; //배열에 있는 적 로드
          
          moveEnemy(en);

          let d = dist(pacX, pacY, en.x + 22, en.y + 25); //적과 팩맨의 거리로 충돌 체크
          
          if (d < 40) { //적과 닿으면 라이프 감소, 위치 초기화
            life -= 1;
            pacX = 300;
            pacY = 770;
            if (life <= 0) gameState = "OVER"; //라이프가 0이 될 경우, 게임 오버 상태로 변경
            break; 
          }
        }
      }

      //--------------------------------------적 움직임 로직----------------------------------------
      function moveEnemy(en) { //적 움직임 로직 호출
        let nextX = en.x;
        let nextY = en.y;
        let hit = false;

        if (en.dir === 0) { // 오른쪽
          nextX += en.speed;
          if (isWallAt(nextX + 45, nextY) || isWallAt(nextX + 45, nextY + 25) || isWallAt(nextX + 45, nextY + 50)) hit = true;
        } 
        else if (en.dir === 1) { // 왼쪽
          nextX -= en.speed;
          if (isWallAt(nextX, nextY) || isWallAt(nextX, nextY + 25) || isWallAt(nextX, nextY + 50)) hit = true;
        } 
        else if (en.dir === 2) { // 위
          nextY -= en.speed;
          if (isWallAt(nextX, nextY) || isWallAt(nextX + 22, nextY) || isWallAt(nextX + 45, nextY)) hit = true;
        } 
        else if (en.dir === 3) { // 아래
          nextY += en.speed;
          if (isWallAt(nextX, nextY + 50) || isWallAt(nextX + 22, nextY + 50) || isWallAt(nextX + 45, nextY + 50)) hit = true;
        }

        if (!hit) {
          en.x = nextX;
          en.y = nextY;
        } else {
          en.dir = floor(random(4));
        }

        image(en.img, en.x, en.y, 45, 50); 
      }
    
      //--------------------------------------적 추가 로직----------------------------------------
      checkScoreEvents();
      function checkScoreEvents() {
        if (score >= 500 && !isEnemyAdded1) { //점수가 500점이 되면 적 추가
          enemies.push({ 
            x: 1405, 
            y: 315, 
            dir: floor(random(4)), 
            speed: 3, 
            img: enemyImgs[5] 
          });
          isEnemyAdded1 = true; 
        }

        if (score >= 1000 && !isEnemyAdded2) { //점수가 1000점이 되면 적 추가
          enemies.push({ 
            x: 1405, 
            y: 315, 
            dir: floor(random(4)), 
            speed: 3, 
            img: enemyImgs[6] 
          });
          isEnemyAdded2 = true; 
        }
      }

      //--------------------------------------스코어 및 라이프 텍스트----------------------------------------
      fill(255);
      textSize(50);
      textAlign(LEFT, TOP); //게임 종료 때 바꾼 거 초기화
      text("Score: " + score, 35, 50);
      text("Life: " + life, 35, 120);
      

      //--------------------------------------게임 클리어 로직----------------------------------------
      if (score >= 2810) {
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
  setupEnemies(); //적 배열 초기화(배열 내의 위치 정보 등)
  isEnemyAdded1 = false; //적 추가 로작 초기화
  isEnemyAdded2 = false;
  
  for (let d of dots) { //배열(흰 점)도 초기화
    d.isVisible = true;
  }
  
  gameState = "PLAY";
  loop(); 
}