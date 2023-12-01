//============================================================================================//
//========================== Globals (I'm sorry mama) ========================================//
//============================================================================================//
let iter = 1; // iteration counter, I'm sorry I had to do this D:
//============================================================================================//
const color_modes = {   // Available colour modes for the puppy
  MONO: 'MONO',
  SHADOW: 'SHADOW',
  BLACK_WHITE: 'BLACK_WHITE',
  DUO: 'DUO',
  RAINBOW: 'RAINBOW'
};
const cp_bg = { // colour palette for the background assests
  c1: '#F2A5C9',   // Lavender pink
  c2: '#FAC8C8',   // Tea rose
  c3: '#F9DCED',   // Mimi pink
  c4: '#FAE3F0',   // Pale purple
  c5: '#FDECEC',   // Lavender blush
  r_low: 150, // lower bound for random colour generation
  r_high: 256 // upper bound for random colour generation
}
const cp_dog = { // colour palette for Brook the sausage dog <3
  c1: '#5A1414',   // Chocolate cosmos
  c2: '#6E2828',   // Garnet
  c3: '#CC7B49',   // Caramel
  c4: '#D8A17A',   // Buff
  c5: '#E0BBA9',   // Desert sand
  c6: '#E8D5D3',   // Misty rose
  r_low: 50, // lower bound for random colour generation
  r_high: 200 // upper bound for random colour generation
}
//============================== CONTROL VARIABLES ===========================================//
const cell_width  = 250;
const cell_height = 150;
const cell_offset = 100;
//============================================================================================//
const colour_mode = color_modes.MONO;
const push_pop = true;
const show_grid = false;  // show grid lines, should be false for printing
const show_coockie = true;
const show_line = false;
const show_paw = true;
const show_brook = true; // show the sausage dog <3
const alternate_paw = false; // alternate the paws
const alternate_interval = 1; // how often the paws apears: even = big paws, odd =  both paws
const line_weight = 22;   // stroke weight of the background line
let b_length = 1; // length of Brook the sausage dog <3


//============================================================================================//
//==================================== Setup =================================================//
//============================================================================================//
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); // DEVELOP_GLYPH   GRID_WALLPAPER    GLIDE_WALLPAPER
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cell_width;
  pWallpaper.grid_settings.cell_height = cell_height;
  pWallpaper.grid_settings.row_offset  = cell_offset;

  // param limiting
  b_length = max(b_length, 1);
}

function wallpaper_background() {
  background(cp_bg.c2);
}


//============================================================================================//
//==================================== Design ================================================//
//============================================================================================//
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  push_pop ? push() : {};
  iter++;
  angleMode(DEGREES); 
  translate(cell_width/2, cell_height/2); // move origin to center of cell

  if (show_grid)    draw_grid();
  if (show_line)    draw_line();
  if (show_paw)     draw_paws();
  if (show_coockie) draw_cockie();
  if (show_brook)   draw_brook(); 
  
  push_pop ? pop() : {};
}

//============================================================================================//
//=================================== Elements ===============================================//
//============================================================================================//

function draw_grid() {
  stroke('#C8C8C8');
  textAlign(CENTER);
  textSize(5);
  for (let i = -cell_width / 2; i <= cell_width / 2; i += 10) {
    text(i, i, -cell_height / 2 - 5);
    line(i, -cell_height / 2 , i, cell_height / 2);
  }
  for (let i = -cell_height/2; i <= cell_height/2; i += 10) {
    text(i, -cell_width / 2 - 5, i);
    line(-cell_width / 2, i, cell_width / 2, i);
  }
}

function draw_line() { 
  push();
  stroke(cp_bg.c1);
  strokeWeight(line_weight);
  noFill();
  for (let x = -cell_width / 2; x < cell_width / 2; x += 50) {
    for (let y = -cell_height/2; y < cell_height/2; y += 50) {
      push();
      translate(x + 25, 0);
      bezier(-50, -cell_height/2, -50, cell_height/3, 50, -cell_height/3, 50, cell_height/2);
      pop();
    }
  }
  pop();
}

function draw_cockie() {
  push();
  noStroke();
  for (let x = -cell_width / 2; x <= cell_width / 2; x += 50) {
    for (let y = -cell_height/2; y <= cell_height/2; y += 50) {
      push();
      fill(random(cp_bg.r_low,cp_bg.r_high ), random(cp_bg.r_low,cp_bg.r_high ), random(cp_bg.r_low,cp_bg.r_high ));
      translate(x - 25, y + 25);
      rotate(-25);
      rect(-5, -3, 10, 6); 
      circle(-5, -2.5, 6); 
      circle(-5, 2.5, 6);
      circle(5, -2.5, 6); 
      circle(5, 2.5, 6);
      pop();
    }
  }
  pop();
}

function draw_paws(){
  function paw1(){
    push();
    scale(6);
    translate(-18, -10);
    rotate(-25);
    draw_paw(cp_bg.c3, false);
    pop();
  }
  function paw2(){
    push();
    scale(3);
    translate(5, -25);
    rotate(25);
    draw_paw(cp_bg.c4, false);
    pop();
  }
  if (alternate_paw){
    iter % alternate_interval == 0 ? iter % 2 == 0 ? paw1() : paw2() : {};
  } else {
    paw1();
    paw2();
  }
}

function draw_paw(hex='#000000', fill_paw=true) {
  stroke(hex);
  fill(hex);
  fill_paw ? {} : noFill();
  push();
  rotate(-20);
  ellipse(-8, -3, 6, 10);
  pop();
  push();
  rotate(-10);
  ellipse(-2.5, -5, 6, 10);
  pop();
  push();
  rotate(10);
  ellipse(2.5, -5, 6, 10);
  pop();
  push();
  rotate(20);
  ellipse(8, -3, 6, 10);
  pop();
  beginShape();
  vertex(0, 0);
  bezierVertex(-28, 18, 28, 18, 0, 0);
  endShape();
}


function draw_brook(){
  push();
  translate(-14, 10);

  switch (colour_mode) {
    case color_modes.MONO:
      fill(cp_dog.c3);
      break;
    case color_modes.SHADOW:
      iter % 2 ==  0 ? fill(cp_dog.c3) : fill('#000000'); 
      break;
    case color_modes.BLACK_WHITE:
      iter % 2 ==  0 ? fill('#000000') : fill('#FFFFFF'); 
      break;
    case color_modes.DUO:
      iter % 2 ==  0 ? fill(cp_dog.c3) : fill(cp_dog.c2);
      break;
    case color_modes.RAINBOW:
      fill(random(cp_dog.r_low,cp_bg.r_high ), random(cp_dog.r_low,cp_bg.r_high ), random(cp_dog.r_low,cp_bg.r_high ));
      break;
  }

  switch (colour_mode) {
    case color_modes.SHADOW:
      iter % 2 ==  0 ? stroke(cp_dog.c1) : stroke('#000000');
      break;
    default:
      stroke(cp_dog.c1);
  }
  strokeWeight(1);


  beginShape(); // Body
  vertex(-47 - b_length, 10); 
  bezierVertex(-44 - b_length, 4,  -53 - b_length, 0,  -50 - b_length, -10); // butt
  bezierVertex(-40 - b_length, -40, 10 + b_length, -10, 40 + b_length, -20); // back
  bezierVertex(60  + b_length, -30, 60 + b_length, 0,   40 + b_length, 10); // chest
  bezierVertex(20  + b_length, 20, -20 - b_length, -5, -40 - b_length, 11); // tummy
  bezierVertex(-42 - b_length, 22, -43 - b_length, 19, -42 - b_length, 19); // leg right back right
  bezierVertex(-37 - b_length, 19, -37 - b_length, 22, -42 - b_length, 22); // leg right back paw
  bezierVertex(-47 - b_length, 22, -47 - b_length, 22, -47 - b_length, 10); // leg right back left
  endShape();

  push();
  translate(b_length, 0);
  beginShape(); // Legs
  vertex(40, 8);
  bezierVertex(42, 18, 52, 8, 55, 13);  // right front left
  bezierVertex(56, 15, 60, 14, 58, 11); // right front paw
  bezierVertex(57, 5, 46, 10,  45, 5);  // right front right
  endShape();
  beginShape();
  vertex(30, 13);
  bezierVertex(30, 22, 30, 22, 35, 22); // left front left
  bezierVertex(40, 22, 40, 19, 35, 19); // left front paw
  bezierVertex(34, 19, 35, 22, 36, 12); // left front right
  endShape();
  pop();
  push();
  translate(-b_length,0);
  beginShape();
  vertex(-47, 5);
  bezierVertex(-58, 5, -49, 6, -55, 10); // left back top
  bezierVertex(-59, 11, -59, 11, -58, 14); // left back ankle
  bezierVertex(-56, 22, -51, 20, -54, 14); // left back paw
  bezierVertex(-47, 10, -49, 9, -47, 9.5); // left back bottom
  endShape();

  push();
  translate(0, b_length/18 > 0 ? b_length/18 : 0);
  beginShape(); // Tail
  vertex(-40, -20);
  bezierVertex(-55, -20, -45, -35, -60, -40); // right
  bezierVertex(-49, -35, -55, -18, -43, -17); // left
  endShape();
  pop();
  pop();

  translate(13+b_length,3);

  beginShape(); // Head
  vertex(30, -40);
  bezierVertex(45, -55, 50, -30, 70, -35); // head top
  bezierVertex(78, -35, 73, -32, 70, -30); // nose
  bezierVertex(58, -20, 40, -30, 40, -21); // head bottom
  endShape();

  beginShape(); // Ears
  vertex(35, -42);
  bezierVertex(15, -35, 25, -25, 35, -18); // left ear
  bezierVertex(35, -18, 42, -15, 40, -20); // ear tip
  bezierVertex(38, -35, 38, -35, 38, -43); // right ear
  endShape();

  switch (colour_mode) {
    case color_modes.SHADOW:
      iter % 2 ==  0 ? fill('#FFFFFF') : fill('#000000');
      break;
    default:
      fill('#FFFFFF');
  }
  circle(45, -38, 5); // Eyes
  fill('#000000');
  circle(46, -38, 3);

  noFill();
  bezier(50, -30, 50, -28, 60, -26, 66.5, -27.5); // mouse

  beginShape(); // nose
  fill('#000000');
  vertex(70, -35);
  bezierVertex(78, -35, 73, -32, 70, -30); // nose right
  bezierVertex(68, -28, 65, -33, 70, -35); // nose left
  endShape();
  pop();
}
