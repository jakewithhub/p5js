let img;

function preload(){

  img=loadImage('assets/sun_1.jpg');
}

function setup(){
  createCanvas(1000,1000);
}

function draw(){
  background(220);
  image(img,0,0);
}