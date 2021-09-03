nosex = 0;
nosey = 0;
function preload(){
mustache_image = loadImage("https://i.postimg.cc/pdc2Tz2d/R.png");

};
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',getresults);
}
function getresults(results){
if(results.length >0){
    console.log(results);
    nosex=results[0].pose.nose.x -15;
    nosey=results[0].pose.nose.y -0;
    console.log("nose x =" +nosex);
    console.log("nose y = " +nosey);
}
}
function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(nosex, nosey, 20);
image(mustache_image, nosex, nosey,30,30);
};
function takesnap(){
    save('pratitifilter.png');
}
function modelLoaded(){
    console.log("poseNet has started");
} 