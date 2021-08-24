lipX=0;
lipY=0;
function preload(){
    lipstick_filter=loadImage('https://i.postimg.cc/x1bDLv7k/lipstick-filter.png');
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPosses)
}
function modelLoaded(){
    console.log('poseNet is intialized');
}

function gotPosses(results){
    if(results.length > 0){
        console.log(results);
        lipX=results[0].pose.lip.x-5;
        lipY=results[0].pose.lip.y-5;
        console.log("lips x="+lipX);
        console.log("lips y="+lipY);
    }
}

function draw(){
    image(video,0,0,350,350);
    image(lipstick_filter,lipX,lipY,30,30);
}

function take_snapshot(){
    save('lipstick_filter_image.png');
}