//Create variables here
var dog, database, foodS, foodStock;
var dogImg,dogImg1;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogimg1.png")
  dogImg1 = loadImage("images/happydog.png")
}

function setup() {

  database=firebase.database();
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 1.3;
  
  
  foodStock= database.ref('Food')
  foodStock.on("value", readStock)

  textSize(20)
}


function draw() {  
  background (46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  
  drawSprites();


  //add styles here
  fill(255,255,255)
  stroke(0,0,0)
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



