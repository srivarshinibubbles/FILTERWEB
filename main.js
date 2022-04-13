nose_X = 0;
nose_Y = 0;
function preload()
{
   lipstick_image = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}


function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized')
}

function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("nose x = " + nose_X);
        console.log("nose y = " + nose_Y);
    }
}



function draw()
{
    image(video,0,0,300,300);
    image(lipstick_image, nose_X-10, nose_Y+10, 35, 35);

}


function take_snapshot()
{
    save('MYFILTER.png')
}

