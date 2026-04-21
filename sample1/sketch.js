let img;

function preload(){

  img=loadImage('assets/sunflower.png');
}

function setup(){
  createCanvas(600,600);
}

function draw(){
  background(220);
  image(img,0,0);
}