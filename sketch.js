let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 25;
let vxBolinha = 5;
let vyBolinha = 5;
let raio = dBolinha / 2;

let xP1 = 5;
let yP1 = 150;

let hP = 90;
let wP = 10;

let xP2 = 585;
let yP2 = 10;
let vyP2;
let error = 0;

let colide = false;

let pP1 = 0;
let pP2 = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Bolinha();
  P1();
  P2();
  colisao(xP1, yP1);
  colisao(xP2, yP2);
  placar();
  pontos();
}

function Bolinha(){
  circle(xBolinha, yBolinha, dBolinha);
  
  xBolinha += vxBolinha;
  yBolinha += vyBolinha;
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
    vxBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    vyBolinha *= -1;
  }
  
  if (xBolinha - raio < 0){
    xBolinha = 23;
  }
}

function P1(){
  rect(xP1, yP1, wP, hP);
  
  if (keyIsDown(UP_ARROW)){
    yP1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yP1 += 10;
  }
}

function P2(){
  rect(xP2, yP2, wP, hP);
  
  vyP2 = yBolinha - yP2 - wP / 2 -30;
  yP2 += vyP2 + error;
  chance()
}

function chance(){
  if (pP2 >= pP1) {
    error += 1
    if (error >= 39){
      error = 40
    }
  } else {
    error -= 1
    if (error <= 35){
    error = 35
    }
  }
}

function colisao(x, y){
  colidiu = collideRectCircle(x,y, wP, hP, xBolinha,         yBolinha,raio)
  if(colidiu){
    vxBolinha *= -1;
  }
}

function pontos(){
  if(xBolinha > 585){
    pP1 += 1;
  }
  
  if(xBolinha < 15){
    pP2 += 1;
  }
}

function placar(){
  textAlign(CENTER);
  textSize(16);
  fill(255);

  text(pP1, 278, 26);
  text(pP2, 321, 26);
}