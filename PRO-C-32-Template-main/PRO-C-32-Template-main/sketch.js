const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
//var time = 0;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
     background(backgroundImg);
     //noStroke();
     //textSize(35);
     //fill("white");
    // text("Time:" + time, width-300, 50);
    }

    Engine.update(engine);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");

     //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON);

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime+"  " +hour);

     // add conditions to change the background images from sunrise to sunset
    if(hour >=04 && hour <=06){
        bg = "sunrise1.png";   
    } else if(hour >=06 && hour <=08) {
        bg = "sunrise2.png";
    } else if(hour >=23 && hour <=0) {
        bg = "sunset10.png";
    } else if(hour >=0 && hour <=03) {
        bg = "sunset11.png";
    } else {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
   
