function preload() {}

function setup() {
    canvas = createCanvas(450, 500);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(450, 500)
    video.hide();
    image(video, 0, 0, 450, 500);
    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded() {
    console.log('model loaded !');
}