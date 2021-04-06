var b1
var database,g
function preload(){
  balloon = loadImage("balloon.png")
}


function setup() {
   database = firebase.database()
   database.ref("balloon/position").on("value",function(data){
g = data.val()
balloon.x = g.x
balloon.y = g.y
   })

  createCanvas(800,400);
 b1=  createSprite(400, 200, 50, 50);
 b1.addImage(balloon)
 b1.scale = 0.5
}

function draw() {
  background(0);  
 
 if(keyDown("RIGHT_ARROW")){
moveballoon(+3,0)
 }
 if(keyDown("RIGHT_ARROW")){
  moveballoon(+3,0)
   }
   if(keyDown("LEFT_ARROW")){
    moveballoon(-3,0)
     }

     if(keyDown("UP_ARROW")){
      moveballoon(0,-3)
       }
 if(keyDown("DOWN_ARROW")){
        moveballoon(0,3)
         }
 


  drawSprites();

}

function moveballoon(a,b){

database.ref("balloon/position").set({'x':g.x+a,'y':g.y+b})


}

