mustachex = 0; 
mustachey = 0;
function preload(){
mustache = loadImage("https://i.postimg.cc/ryCb8PFK/download-10.png");
}

function setup(){
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    image(mustache, mustachex, mustachey,70,55)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = "+results[0].pose.nose.x);
        console.log("Nose Y = "+results[0].pose.nose.y);
        mustachex = results[0].pose.nose.x - 95;
        mustachey = results[0].pose.nose.y + 5;
    }
    else{
        alert("An error occured");
    }
}

function capture(){
    save('Mustache Filter Image');
}

function modelLoaded(){
    console.log("Model Loaded Successfully");
}