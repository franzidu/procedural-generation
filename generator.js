let width = 1000;
let height = 1000;
let map = null;
let noiseScale = 1/100;
let ocean= "#1ECBE1";
let shore= "#96E8F3";
let sand= "#F7E3A8";
let grass= "#59CD90";
let forest = "#3AAB6E";
let stone= "#9CAFB7";
let snow= "#CAFFFF";

function setup(){
    createCanvas(width, height);
    background(0);
    noiseDetail(6, 0.4);
    makeMap();
    drawMap();
}

function makeMap(){
    map = [];
    for(let i = 0; i < width; i++){
        map[i] = [];
        for(let j = 0; j < height; j++){
          map[i][j] = pickColor(i,j);
        }
   }
}

function drawMap(){
    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
        set(i, j, map[i][j]);
        }
   }
   updatePixels();
}

function pickColor(i, j){
    let h = noise(i*noiseScale, j*noiseScale);
    let c = "DF2FE2";

    if(h < 0.3){
        c = ocean;
    }else if(h < 0.35){
        c = shore;
    }else if(h < 0.4){
        c = sand
    }else if(h < 0.5){
        c = grass;
    }else if(h < 0.6){
        c = forest;  
    }else if(h < 0.65){
        c = stone;  
    }else{
        c = snow;
    }
    return color(c); 
}



function draw(){
   }