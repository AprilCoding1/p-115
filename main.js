function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log('pose net is initialized.');
}

function gotPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
}

function draw(){

}

function take_snapshot(){
    save('Aaira.png')
}