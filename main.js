nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/fy5whJP9/Clown-nose-large.png');

}
function setup(){

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResults );
}
function modelLoaded(){
console.log('model is loaded!');

}
function gotResults(results){
    if(results.length>0){
console.log(results);
console.log("nosex="+results[0].pose.nose.x);
console.log("nosey"+results[0].pose.nose.y);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;

    }
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x-20,nose_y-20,60,60);
}
function take_snapshot(){
    save('MyFilterImage.png');
}
