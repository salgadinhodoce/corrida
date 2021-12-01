var caminhoimagem
var corredoranimacao
var corredor
var caminho
var paredeinvisivel1
var paredeinvisivel2


function preload(){
  //imagens pré-carregadas

  caminhoimagem=loadImage("path.png");
  corredoranimacao=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //imagens
  
  caminho=createSprite(200,200,400,400);
  caminho.addImage(caminhoimagem);
  caminho.velocityY=5;
  
  corredor=createSprite(200,300,50,50);
  corredor.addAnimation("correndo",corredoranimacao);
  corredor.scale=0.05

  //paredes invisiveis
  paredeinvisivel1=createSprite(60,50,20,800);
  paredeinvisivel1.visible=false;
  paredeinvisivel2=createSprite(340,50,20,800);
  paredeinvisivel2.visible=false;
 
  

}




function draw() {
  background(0);

  //recarregar fundo
  if(caminho.y>400){
    caminho.y=height/8;
  }

  //controles
  if (keyIsDown(LEFT_ARROW)) 
  {
    corredor.velocityX=-5;

  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    corredor.velocityX=5;

  }
  
  //colisões
  corredor.collide(paredeinvisivel1);
  corredor.collide(paredeinvisivel2);

drawSprites();
}
