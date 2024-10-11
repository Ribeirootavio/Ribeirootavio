function setup() {
    createCanvas(600, 600);
    background("blue")
  }
  
  function draw() {
    
    stroke("blue")  
    fill("red")
  
    
  
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 30, 45)
  
    }
  }