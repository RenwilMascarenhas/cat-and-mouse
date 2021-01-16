var jerry, tom, bg, 



function preload() {
    //load the images here
    jerryimg = loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
    tomimg= loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        
    }


    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomTwo);
    tom.changeAnimation("tomRunning");
}


}
