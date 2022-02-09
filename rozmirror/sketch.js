let capture;
const w = 640;
const h = 420;

function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  
  rectMode(CENTER)
}

function draw() {
  background(220);
  
  const stepSize = 10;
  
  
  noStroke();
  
  capture.loadPixels();
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      
      const i = (x + y * width) * 4;
      
      const r = capture.pixels[i]; // red channel
      const g = capture.pixels[i+1]; // green channel
      const b = capture.pixels[i+2]; // blue channel
      capture.pixels[i+3] = 1; // alpha channel
      
      const brightness = (r + g + b) / 4
      
      fill(g, b, r);
      ellipse(x, y, brightness-mouseX, brightness-mouseY);
      push();
      translate(width, 0);
      scale(-1,1);
      //ellipse(x, y, brightness/3);
      pop();
      
      
    }
    
  }
  
  capture.updatePixels();
  
  // image(capture, 0, 0);
  //print(capture.pixels.length)
  
}