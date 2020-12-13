

//variaveis para o menu/ação
var opcao=1;
var tela=0;

var altura=50;

var largura=220;
var xMenu=40;

var yMenu1=85;

var yMenu2=145;

var yMenu3= 205;

let img;
let img2;
let game_overimg;

//variáves da fase_1
var x1=40
var y1= 40
var xImg=x1
var yImg=y1
let imginstrucoes
let  progamador
var xe=400;
var ye=400;
var x=400;
var y=400;
var xAliado=150;
var yAliado=150;
var rAliado=50;
var sinal = [-1,1], s1, s2;
var rEllipse1=10
var rEllipse2=10
var pontos= 0
var velInimigo=0.7
var x2=400
var y2=400
var barreiraPontos=30
var nivel=1
var x3=400
var y3=400
var x4=400
var y4=400
var cont=3
var xjogar_novamente= 25
var yjogar_novamente= 283
var largura_jogarnovamente= 150
var altura_jogarnovamente= 25
var vidas;
var xlife=230;
var ylife=230;
var rlife=15
var lifeimg;
var xMenu_gameover=200
var yMenu_gameover=283
var largura_menu=60
var altura_menu= 25
var condicao=0
var tempo=0;
var tempoS;
var rate=60;
var xpower=190;
var ypower=290
var tempoPower=0
var tempoSPower;
var condicaoPower=0
var j=0;
let powerImg;
let inimigoImg;
let aliadoImg;
let creditosImg;
let inimigoImg2;
let snd;

function setup() {
  
  //sorteia um número para x e y aleatóriamente
  //sinal = random(-1,1);
 
  frameRate(rate) 
  createCanvas(300, 350);
  x= -random(50)
  y= -random(50)
  
  xe= -random(50)
  ye= -random(50)
  
  x2= -random(50)
  y2= -random(50)
  
  snd.play();


}
function draw() {


 
  
  if(tela==0){
   menu()
}
 
if(tela==1){
   fase_1()
 }  
if(tela==2){
  instrucoes()
}
if(tela==3){
  creditos()
}
if(tela==5){
  game_over()
}
  
}


function game_over (){
 
  background(20);
  fill(20)
  image(game_overimg,-50,0,400,350)
  //as variáveis devem ser resetadas;
  cont=3
  x1=40;
  x1=40;
  xe=400;
  ye=400;

  x=400;
  y=400;
  
  x2=400
  y2=400
  
  x3=400
  y3=400
  
  x4=400
  y4=400
  
  tempo=0
  tempoPower=8
  nivel=0
  
  
  
if(mouseX> xjogar_novamente && mouseX < xjogar_novamente + largura_jogarnovamente && mouseY> yjogar_novamente && mouseY < yjogar_novamente + altura_jogarnovamente){
  

  noFill(); 
  stroke(200); //borda preenchida
  rect(xjogar_novamente,yjogar_novamente,largura_jogarnovamente,altura_jogarnovamente,40); //retângulo 
  opcao=1

}
  
  
if(mouseX> xMenu_gameover && mouseX < xMenu_gameover + largura_menu && mouseY> xMenu_gameover && mouseY < yMenu_gameover + altura_menu){
  

  noFill(); 
  stroke(200); //borda preenchida
  rect(xMenu_gameover,yMenu_gameover,largura_menu,altura_menu,40); //retângulo 
  opcao=0
  
}  
  
  fill(240);
  noStroke();
  textFont('Turret Road');
  textSize(24)
  text("Score:"+pontos,150, 40);
  textSize(14)
  text("Jogar novamente",100, 300);
  text("Menu",230,300);
  
if (mouseIsPressed) {
    tela=opcao
    pontos=0
  
  } 
 
  
  tempoPower=8
  nivel=0
 
}

function preload() {
  img = loadImage('interior.jpg');
  img2= loadImage('vilner2.jpg');
  img3= loadImage('professor.jpg');
  imgtiro= loadImage('tiro.png');
  imgisntrucoes= loadImage('cats.jpg');
  game_overimg= loadImage('game-over-neon-signs_118419-282.jpg')
  lifeimg=loadImage('life.png');
  powerImg = loadImage('power.png');
  inimigoImg= loadImage('virus3.png');
  aliadoImg = loadImage('aliado.png');
  creditosImg= loadImage('creditos.jpg');
  inimigoImg2= loadImage('bacteria.png');
  soundFormats('mp3');
  snd= loadSound('somfundo.mp3')
}



function fase_1 (){  
if(cont>=1){  

  background(20);
  image(img,1,1,300,350);
  fill(255,96,96,96);
  image(inimigoImg,x,y,2*rEllipse1,2*rEllipse1);
  image(inimigoImg2,xe,ye,20,20);
  fill(255,96,96,96);
  image(inimigoImg2,x2,y2,20,20);
  image(inimigoImg,x3,y3,20,20);
  image(inimigoImg,x4,y4,20,20);
  fill(240)
  ellipse(xAliado,yAliado,100,100)
  image(aliadoImg,95,95,110,110)
  fill(153,51,153)
  ellipse(x1,y1,20,20);
  fill(240);
  textSize(24)
  text("Score: "+pontos,210,340);
  text("Vidas: "+cont,80,340);
  
  
//contagem do tempo
  //life
  tempo++
  tempoS= parseInt(tempo/rate) 
  //power
  tempoPower++
  tempoSPower = parseInt(tempoPower/rate);  
  //mover a vermelha até a elippse branca(150,150)
  if(pontos> barreiraPontos){
  nivel= nivel+1
  barreiraPontos= barreiraPontos + 25

  } 

  
  if(nivel>=2){
    velInimigo=1
  
  //1° ellipse
  }
  if(x>150){
    x= x-velInimigo
  }
  if(x<150){
    x = x + velInimigo;
  }
  
  if(y<150){
    y = y + velInimigo;
  }  
  
  if(y>150){
    y = y - velInimigo;
  }

  //2° ellipse vermelha
  
  if(xe>150){
    xe= xe-velInimigo
  }
  if(xe<150){
    xe = xe + velInimigo;
  }
  
  if(ye<150){
    ye = ye + velInimigo;
  }  
  
  if(ye>150){
    ye = ye - velInimigo;
  }
  //3°ellipse 
if(nivel>= 2){  
  if(x2>150){
    x2= x2-velInimigo
  }
  if(x<150){
    x2 = x2 + velInimigo;
  }
  
  if(y2<150){
    y2 = y2 + velInimigo;
  }  
  
  if(y2>150){
    y2 = y2 - velInimigo;
  }
}  
  
  //4° ellipse
if(nivel>=3){ 
  if(x3>150){
    x3= x3-velInimigo
  }
  if(x<150){
    x3 = x3 + velInimigo;
  }
  
  if(y3<150){
    y3 = y3 + velInimigo;
  }  
  
  if(y3>150){
    y3 = y3 - velInimigo;
  }
  
} 
  //5°ellipse
if(nivel>=4) {
  velInimigo= 1.2
 
  if(x4>150){
    x4= x4-velInimigo
  }
  if(x<150){
    x4 = x4 + velInimigo;
  }
  
  if(y4<150){
    y4 = y4 + velInimigo;
  }  
  
  if(y4>150){
    y4 = y4 - velInimigo;
  }
}  
  //quando o jogador colide com o inimigo, este volta para uma posição aleatória
  if(dist(x1,y1, xe,ye) <= rEllipse1+ rEllipse2){
    s1 = random(sinal);
    s2 = random(sinal);
    xe= random(400, 450)*s1;
    ye= random(400,450)*s2;
    pontos= pontos +5
  }
  
  if(dist(x1,y1, x,y) <= rEllipse1+ rEllipse2){
    s1 = random(sinal);
    s2 = random(sinal);
    x= random(400, 450)*s1;
    y= random(400,450)*s2;
    pontos= pontos+5 //contagem de pontos
    
  }
  
  if(dist(x1,y1, x2,y2) <= rEllipse1+ rEllipse2){
    s1 = random(sinal);
    s2 = random(sinal);
    x2= random(400, 450)*s1;
    y2= random(400,450)*s2;
    pontos= pontos+5
  }
  
  if(dist(x1,y1, x3,y3) <= rEllipse1+ rEllipse2){
    s1 = random(sinal);
    s2 = random(sinal);
    x3= random(400, 450)*s1;
    y3= random(400,450)*s2;
    pontos= pontos+5
  }
 
  if(dist(x1,y1, x4,y4) <= rEllipse1+ rEllipse2){
    s1 = random(sinal);
    s2 = random(sinal);
    x4= random(400, 450)*s1;
    y4= random(400,450)*s2;
    pontos= pontos+5
  }
  
  
  //faz com que as ellipses voltem a posição aleatória ao entrar no aliado
  if(xe>=148 && xe<160 && ye>=148 && ye<160){
    s1 = random(sinal);
    s2 = random(sinal);
    xe= random(400, 500)*s1;
    ye= random(400,500)*s2;
    cont--
  }
  
  if(x>=148 && x<160 && y>=148 && y<160){
    s1 = random(sinal);
    s2 = random(sinal);
    x= random(400, 500)*s1;
    y= random(400,500)*s2;
    cont--
  }
  
    if(x2>=148 && x2<160 && y2>=148 && y2<160){
    s1 = random(sinal);
    s2 = random(sinal);
    x2= random(400, 500)*s1;
    y2= random(400,500)*s2;
    cont--
  }
  
    if(x3>=148 && x3<160 && y3>=148 && y3<160){
    s1 = random(sinal);
    s2 = random(sinal);
    x3= random(400, 500)*s1;
    y3= random(400,500)*s2;
    cont--
  }
   
  if(x4>=148 && x4<160 && y4>=148 && y4<160){
    s1 = random(sinal);
    s2 = random(sinal);
    x4= random(400, 500)*s1;
    y4= random(400,500)*s2;
    cont--
  }


if(dist(x1,y1,xAliado,yAliado) >= rAliado+rEllipse1) {
  if(tempoSPower<=7 && j>=1){
    vel=5  
  }else{
    vel = 3;
  }
    
}
else{
  vel = 0.1;
}

if(tempoS>=40){
  
  if(cont==1){ 
   
      image(lifeimg,xlife,ylife,30,30)
      if(dist(x1,y1, xlife,ylife) <= rEllipse1+ rlife){       
      
        cont++
        condicao=1
      
        tempo=1500;  //parseInt(1500/rate)= 20s 
     
      }else{
      condicao=0
      
    }    
}
  if(condicao==1){
    xlife= random(0,300);
    ylife= random(0,300);
  }
} 

    
  
if(nivel>=3 && tempoSPower>=30){
 
  fill(250);
  image(powerImg,xpower,ypower,30,30);
    if(dist(x1,y1,xpower,ypower) <= 20 ){
     tempoPower=0
     condicaoPower=1
     vel=10 
     j++ 
    }else{
      condicaoPower=0
    }

if(condicaoPower==1){  
  xpower= random(0,300);
  ypower= random(0,300);
}
}
if(keyIsDown(LEFT_ARROW) ){
  if(x1>10){

  x1= x1-vel;

  }

}

if(keyIsDown(RIGHT_ARROW) ){
  if(x1<290){
    x1= x1+vel;
  } 
} 
if(keyIsDown(UP_ARROW) ){
    if(y1>10){
     y1= y1-vel;
  }
}
if(keyIsDown(DOWN_ARROW) ){
   if(y1<340){
    y1= y1+vel;
  }
}

  

}else{
  opcao=5
  tela=5
}
}
function instrucoes(){
  image(imgisntrucoes,2,2);
  
  
  
  textSize(12);
  textStyle(NORMAL);
}
function creditos(){
  image(creditosImg,2,2,300,350);

}



//menu
function menu() {
 
  background(220);
  image(img, 2,2,300,350 );
  textAlign(CENTER);
  textSize(26);
  textStyle(NORMAL);
   
  
  if(mouseX> xMenu && mouseX < xMenu + largura && mouseY> yMenu1 && mouseY < yMenu1 + altura){
  //iniciar
   //cor do preenchimento 
  noFill(); 
  stroke(200); //borda preenchida
  rect(xMenu,yMenu1,largura,altura,40); //retângulo 
  opcao=1
  }else{
    opcao=0
  }
  fill(240);
  noStroke();
  textSize(36 )
  textFont('Russo One');
  text("Jogar",150,120);
//info
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY> yMenu2 && mouseY < yMenu2 + altura){
    noFill();
    stroke(200); //borda preenchida
    rect(xMenu,yMenu2,largura,altura,40);  
    opcao=2
  }

    fill(240);
    noStroke();
    textSize(30)
    text("Instruções",150,180);
//ajuda 
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY> yMenu3 && mouseY < yMenu3 + altura){
    noFill();
    stroke(200); //borda preenchida
    rect(xMenu,yMenu3,largura,altura,40);  
    opcao=3
  }
    fill(240);
    noStroke();
    text("Créditos",150,240);

if (mouseIsPressed) {
    tela=opcao
  } 
  
  
}
function keyPressed(){
 if(key=="Escape"){
    tela=0
   
  } 
                                                               
}


