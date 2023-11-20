//============================================================================================//
//========================== Globals (I'm sorry mama) ========================================//
//============================================================================================//
const color_modes = {   // Available colour modes for the puppy
  MONO: 'MONO',
  SHADOW: 'SHADOW',
  BLACK_WHITE: 'BLACK_WHITE',
  DUO: 'DUO',
  RAINBOW: 'RAINBOW'
};
let iter = 1;
//============================================================================================//
const cell_width  = 200;
const cell_height = 100;
const cell_offset = 100;
//============================================================================================//
const colour_bg = [250, 200, 200];    // light pink colour
const colour_stroke = [110, 40, 40];  // 
const colour_dog = [204, 123, 73];    // sausage dog red colour
const colour_duo = [90, 20, 20];      // the colur of the duo
const push_pop = true;
const colour_mode = color_modes.RAINBOW;


//============================================================================================//
//==================================== Setup =================================================//
//============================================================================================//
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); // DEVELOP_GLYPH   GRID_WALLPAPER    GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cell_width;
  pWallpaper.grid_settings.cell_height = cell_height;
  pWallpaper.grid_settings.row_offset  = cell_offset;
}

function wallpaper_background() {
  background(colour_bg[0], colour_bg[1], colour_bg[2]);
}


//============================================================================================//
//==================================== Design ================================================//
//============================================================================================//
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  push_pop ? push() : {};
  translate(cell_width/2, cell_height/2); // move origin to center of cell

  push();
  translate(-14, 10);

  // TODO: guide lines, remove before outputting 
  // stroke(200, 200, 200);
  // textAlign(CENTER);
  // textSize(8);
  // for (let i = -cell_width / 2; i <= cell_width / 2; i += 20) {
  //   text(i, -cell_width / 2 - 15, i +2);
  //   line(-cell_width / 2, i, cell_width / 2, i);
  // }
  // for (let i = -cell_height/2; i <= cell_height/2; i += 20) {
  //   text(i, i, -cell_height/2 - 10);
  //   line(i, -cell_height/2, i, cell_height/2);
  // }


  switch (colour_mode) {
    case color_modes.MONO:
      fill(colour_dog[0], colour_dog[1], colour_dog[2]);
      break;
    case color_modes.SHADOW:
      (iter += 1) % 2 ==  0 ? fill(colour_dog[0], colour_dog[1], colour_dog[2]) : fill(0,0,0); 
      break;
    case color_modes.BLACK_WHITE:
      (iter += 1) % 2 ==  0 ? fill(0, 0, 0) : fill(256,256,256); 
      break;
    case color_modes.DUO:
      (iter += 1) % 2 ==  0 ? fill(colour_dog[0], colour_dog[1], colour_dog[2]) : 
                              fill(colour_duo[0], colour_duo[1], colour_duo[2]); 
      break;
    case color_modes.RAINBOW:
      fill(random(100,256), random(100,256), random(100,256));
      break;
  }

  switch (colour_mode) {
    case color_modes.SHADOW:
      iter % 2 ==  0 ? stroke(colour_stroke[0], colour_stroke[1], colour_stroke[2]) : stroke(0,0,0);
      break;
    default:
      stroke(colour_stroke[0], colour_stroke[1], colour_stroke[2]);
  }
  strokeWeight(1);


  beginShape(); // Body
  vertex(-47, 10); 
  bezierVertex(-44, 4, -53, 0, -50, -10);   // butt
  bezierVertex(-40, -40, 10, -10, 40, -20); // back
  bezierVertex(60, -30, 60, 0, 40, 10);     // chest
  bezierVertex(20, 20, -20, -5, -40, 11);   // tummy
  bezierVertex(-42, 22, -43, 19, -42, 19); // right back right
  bezierVertex(-37, 19, -37, 22, -42, 22); // right back paw
  bezierVertex(-47, 22, -47, 22, -47, 10); // right back left
  endShape();

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
  beginShape();
  vertex(-47, 5);
  bezierVertex(-58, 5, -49, 6, -55, 10); // left back top
  bezierVertex(-59, 11, -59, 11, -58, 14); // left back ankle
  bezierVertex(-56, 22, -51, 20, -54, 14); // left back paw
  bezierVertex(-47, 10, -49, 9, -47, 9.5); // left back bottom
  endShape();

  beginShape(); // Tail
  vertex(-40, -20);
  bezierVertex(-55, -20, -45, -35, -60, -40); // right
  bezierVertex(-49, -35, -55, -18, -43, -17); // left
  endShape();
  
  translate(13,3);

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
      iter % 2 ==  0 ? fill(256,256,256) : fill(0,0,0);
      break;
    default:
      fill(256,256,256);
  }
  circle(45, -38, 5); // Eyes
  fill(0, 0, 0);
  circle(46, -38, 3);

  noFill();
  bezier(50, -30, 50, -28, 60, -26, 66.5, -27.5); // mouse

  beginShape(); // nose
  fill(0, 0, 0);
  vertex(70, -35);
  bezierVertex(78, -35, 73, -32, 70, -30); // nose right
  bezierVertex(68, -28, 65, -33, 70, -35); // nose left
  endShape();
  pop();
  push_pop ? pop() : {};
}
