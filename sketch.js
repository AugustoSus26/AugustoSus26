function setup() {
    createCanvas(1500, 1500);
    background('aquamarine');
  }
  
  function draw() {
  
  stroke('blue');
  fill('yellow');
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }