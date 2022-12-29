nosex=0
nosey=0
function preload() {
clown_nose = loadImage('https://i.postimg.cc/W1kyfZQJ/mushtash.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    vedio = createCapture(VIDEO);
    vedio.size(300,300);
    vedio.hide();

    poseNet = ml5.poseNet(vedio, modelLoded);
    poseNet.on('pose', gotPoses);

}

function modelLoded() {
    console.log('PoseNet Is Insitialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
       nosey = results[0].pose.nose.y;
    console.log("nose x =" + nosex);
    console.log("nose y =" + nosey);
    }
}



function draw() {
image(vedio, 0, 0, 300, 300);
  circle(nosex,nosey,20);
  image(clown_nose,nosex-20,nosey-13,40,40)

}

function take_snapshot(){
    save('myFilterImage.png')
}