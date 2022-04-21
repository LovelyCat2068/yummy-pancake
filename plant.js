pickett: "";

function preload() {
    image = loadImage('plant.jpg');
}
    
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    magizoologist = ml5.objectDetector("cocossd", modeLLoaded);
    document.getElementById("teddy").innerHTML = "Status : Detecting Things"
}

function modeLLoaded(){
    pickett = true;
    magizoologist.detect(image, gotResults);
}

function gotResults(error, resultds){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}