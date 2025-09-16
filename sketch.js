let blackCat; // This variable will hold our cat object.

// The blueprint for creating our visual animal.
class Animal {
  // The constructor now includes x and y to know WHERE to be drawn.
  constructor(breed, name, language, x, y) {
    this.breed = breed;
    this.name = name;
    this.language = language;
    this.x = x;
    this.y = y;
  }

  // This method contains all the p5.js drawing commands for the cat.
  display() {
    // --- Body ---
    noStroke();
    fill(0); // Black
    ellipse(this.x, this.y + 65, 180, 150);

    // --- Tail ---
    noFill();
    stroke(0); // Black
    strokeWeight(12);
    // arc(x, y, width, height, startAngle, endAngle)
    arc(this.x + 70, this.y + 95, 100, 120, HALF_PI, PI);

    // --- Head ---
    noStroke();
    fill(0); // Pink
    ellipse(this.x, this.y, 120, 100);

    // --- Ears ---
    // triangle(x1, y1, x2, y2, x3, y3)
    triangle(this.x - 70, this.y - 40, this.x - 45, this.y - 80, this.x - 15, this.y - 40);
    triangle(this.x + 15, this.y - 40, this.x + 45, this.y - 80, this.x + 60, this.y - 40);

    // --- Eyes ---
    fill(255, 255, 0); // red
    ellipse(this.x - 25, this.y - 10, 20, 30);
    ellipse(this.x + 25, this.y - 10, 20, 30);

    // --- Pupils ---
    fill(0);
    ellipse(this.x - 25, this.y - 10, 8, 15);
    ellipse(this.x + 25, this.y - 10, 8, 15);

    // --- Whiskers ---
    stroke(255); // yellow
    strokeWeight(1);
    // Left whiskers
    line(this.x - 30, this.y + 15, this.x - 70, this.y + 10);
    line(this.x - 30, this.y + 20, this.x - 70, this.y + 20);
    line(this.x - 30, this.y + 25, this.x - 70, this.y + 30);
    // Right whiskers
    line(this.x + 30, this.y + 15, this.x + 70, this.y + 10);
    line(this.x + 30, this.y + 20, this.x + 70, this.y + 20);
    line(this.x + 30, this.y + 25, this.x + 70, this.y + 30);
    
    // --- Text Display ---
    // Display the cat's name below it using its 'this.name' property.
    noStroke();
    fill(255); // White text
    textAlign(CENTER);
    textSize(18);
    // Adjusted y-position to be below the new body
    text(this.name, this.x, this.y + 170);

    // Display what the cat says
    textSize(14);
    text('says:{this.language}!' , this.x, this.y + 195);
  }
}

function setup() {
  createCanvas(600, 400);
  
  // Create a new 'instance' of our Animal class.
  // We pass in its properties, including its center position on the canvas.
  blackCat = new Animal('Cat', 'Kua', 'eu', width / 2, height / 2 - 50);
}

function draw() {
  background(50, 80, 100); // Set the background
  
  // In every frame, tell our cat object to draw itself.
  blackCat.display();
}