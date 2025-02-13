function setup() {
    // Define as dimensões mínimas
    const minWidth = 800;
    const minHeight = 600;

    // Calcula a largura e altura do canvas, garantindo que não sejam menores que as dimensões mínimas
    const canvasWidth = max(windowWidth - 4, minWidth);
    const canvasHeight = max(windowHeight - 4, minHeight);

    createCanvas(canvasWidth, canvasHeight)
    angleMode(DEGREES);
    background(200, 200, 200)
}

function windowResized() {
    // Define as dimensões mínimas
    const minWidth = 800;
    const minHeight = 600;

    // Calcula a largura e altura do canvas, garantindo que não sejam menores que as dimensões mínimas
    const canvasWidth = max(windowWidth - 4, minWidth);
    const canvasHeight = max(windowHeight - 4, minHeight);

    resizeCanvas(canvasWidth, canvasHeight)
    background(200, 200, 200)
}

let fonte

function preLoad() {
    fonte = loadFont('fonte.otf')
}

let pHori
let pVert

function draw() {
    //orelha externa
    fill(20,20,20)
    noStroke()
    triangle((width / 2) - 120, 50, (width / 2) - 30, 125, (width / 2) - 130, 205)
    arc((width / 2) - 121.5, 132, 20, 162, 94, 274, CHORD)
    triangle((width / 2) + 180, 50, (width / 2) + 90, 125, (width / 2) + 170, 205)
    arc((width / 2) + 175, 122, 20, 162, 274, 94, CHORD)

    //orelha interna
    fill(255,255,255)
    noStroke()
    triangle((width / 2) - 110, 110, (width / 2) - 80, 160, (width / 2) - 120, 205)
    arc((width / 2) - 111.5, 152, 15, 80, 96, 276, CHORD)
    triangle((width / 2) + 160, 110, (width / 2) + 140, 150, (width / 2) + 175, 205)
    arc((width / 2) + 163, 151, 15, 80, 264, 84, CHORD)

    //lenço
    fill(255,232,30)
    triangle((width / 2) - 70, 340, (width / 2) + 130, 340, width / 2 + 30, 540)
    arc((width / 2) + 55, 340, 150, 200, 290, 100, CHORD)
    arc((width / 2) + 5, 340, 150, 200, 80, 250, CHORD)
    triangle((width / 2) + 108, 410, (width / 2) + 80, 430, (width / 2) + 67, 460)
    triangle((width / 2) - 48, 410, (width / 2) - 20, 430, (width / 2) - 7, 460)
    stroke(5)
    arc(width / 2 + 30, 390, 100, 30, 355, 185, OPEN)
    arc(width / 2 + 30, 440, 50, 15, 355, 185, OPEN)
    
    stroke("black")
    fill(0,0,0,0)
    arc((width / 2) + 55, 340, 150, 200, 290, 52, OPEN)
    arc((width / 2) + 5, 340, 150, 200, 120, 250, OPEN)
    line((width / 2) - 48, 410, (width / 2) - 13, 455)
    line((width / 2) + 109, 410, (width / 2) + 73, 455)
    line((width / 2) + 73, 455, width / 2 + 30, 540)
    line(width / 2 + 30, 540, (width / 2) - 13, 455)
    
    //luz rosto
    fill(40, 80, 255)
    arc(width / 2 + 30, 267, 350, 300, 180, 0, CHORD)

    //cabeça
    fill(20, 20, 20);
    arc((width / 2) + 17, 267, 324, 290, 180, 0, CHORD)

    //olhos
    fill(255,255,255)
    ellipse((width / 2) - 40,195,80,110)
    ellipse((width / 2) + 100,195,80,110)

    //pupila
    let eBaseX = width / 2 - 44
    let dBaseX = width / 2 + 96

    pHori = map(mouseX, 0, width, -8.5, 17)
    pVert = map(mouseY, 0, height, -9.5, 13.5)

    fill(0, 190, 255)
    stroke(1)
    ellipse(eBaseX + pHori, pVert + 193, 55, 85)
    ellipse(dBaseX + pHori, pVert + 193, 55, 85)
    fill(0, 130, 255)
    ellipse(eBaseX + pHori, pVert + 193, 35, 65)
    ellipse(dBaseX + pHori, pVert + 193, 35, 65)
    fill(0, 0, 0)
    ellipse(eBaseX + pHori, pVert + 193, 15, 25)
    ellipse(dBaseX + pHori, pVert + 193, 15, 25)
    fill(255, 255, 255)
    noStroke()
    arc(eBaseX + pHori - 28, pVert + 193, 23, 10, 290, 70, CHORD)
    arc(dBaseX + pHori - 28, pVert + 193, 23, 10, 290, 70, CHORD)
    
    //costeletas
    fill(20, 20, 20)
    noStroke()
    arc(width / 2 + 30, 267, 345, 192, 0, 180, CHORD)

    //rosto
    fill(255, 255, 255)
    noStroke()
    arc(width / 2 + 30, 265, 325, 192, 0, 180, CHORD)
    arc(width / 2 + 30, 265, 325, 20, 180, 0, CHORD)
    
    //boca
    fill(120, 46, 47)
    noStroke()
    arc(width / 2 + 30, 270, 200, 150, 0, 180, CHORD)

    //lingua
    fill(197, 104, 105)
    ellipse((width / 2) + 60, 305, 175, 90)
    fill(255,161,162)
    ellipse((width / 2) + 60, 318, 160, 60)

    //labio
    fill(255, 255, 255)
    arc((width / 2) + 82, 270, 112, 30, 0, 180, PIE)
    arc((width / 2) - 27, 270, 112, 30, 0, 180, PIE)
    rect((width / 2) - 20, 260, 138, 10)
    triangle((width / 2), 342, (width / 2) + 5, 360, width / 2 + 30, 345)
    triangle(width / 2 + 30, 345, width / 2 + 30, 360, (width / 2) + 42, 345)
    triangle((width / 2) + 40, 345, (width / 2) + 50, 355, (width / 2) + 55, 342)
    triangle((width / 2) + 55, 342, (width / 2) + 60, 348, (width / 2) + 65, 340)
    triangle((width / 2) + 65, 340, (width / 2) + 70, 346, (width / 2) + 80, 335)
    triangle((width / 2) + 80, 335, (width / 2) + 85, 340, (width / 2) + 86, 332)
    triangle((width / 2) + 86, 332, (width / 2) + 90, 335, (width / 2) + 93, 328)
    triangle((width / 2) + 93, 328, (width / 2) + 97, 335, (width / 2) + 102, 322)
    triangle((width / 2) + 102, 322, (width / 2) + 105, 325, (width / 2) + 111, 314)
    triangle((width / 2) + 111, 314, (width / 2)+ 111, 320, (width / 2) + 120, 303)
    triangle((width / 2) + 120, 303, (width / 2) + 120, 315, (width / 2) + 126, 292)
    triangle((width / 2) + 126, 292, (width / 2) + 126, 305, (width / 2) + 130, 282)
    triangle((width / 2) + 130, 282, (width / 2) + 140, 305, (width / 2) + 129, 265)
    rect((width / 2) + 135, 265, 25, 55)
    triangle((width / 2) + 140, 262, (width / 2) + 145, 330, (width / 2) + 103, 347)
    triangle((width / 2) + 160, 278, (width / 2) + 130, 278, (width / 2) + 128, 300)
    triangle((width / 2) + 127, 290, (width / 2) + 160, 288, (width / 2) + 100, 350)
    triangle((width / 2) + 122, 301, (width / 2) + 102, 323, (width / 2) + 103, 345)
    rect((width / 2) + 25, 345.5, 50, 10)
    rect((width / 2) + 52.5, 342.5, 40, 10)
    triangle((width / 2) + 60, 353, (width / 2) + 103, 322, (width / 2) + 103, 345)
    rect((width / 2) + 64, 340, 10, 10)
    rect((width / 2) + 74, 338, 10, 10)
    rect((width / 2) + 78, 336, 10, 10)
    fill(0,0,0,0)
    stroke(5)
    arc((width / 2) + 82, 270, 112, 30, 10, 176, OPEN)
    arc((width / 2) - 27, 270, 112, 30, 4, 166, OPEN)
    arc(width / 2 + 30, 270, 200, 150, 5, 174.5, OPEN)

    //dente
    fill(255, 255, 255)
    triangle((width / 2) + 90, 285, (width / 2) + 100, 284.5, (width / 2) + 95, 295)
    triangle((width / 2) - 30, 285, (width / 2) - 40, 284.5, (width / 2) - 35, 295)
  }