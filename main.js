function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}   


function modelLoaded()
    {
     console.log('PoseNet is initialized');
    }
function draw()
{
    image(video, 0, 0, 450, 450);
}

function take_snapshot()
{
    save('myfilter.png');
}

function setup() {
    canvas=createCanvas(450, 450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}