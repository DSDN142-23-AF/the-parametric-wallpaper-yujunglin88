//============================================================================================//
//========================== Globals (I'm sorry mama) ========================================//
//============================================================================================//
const cell_width  = 200;
const cell_height = 200;
// const colour_bg = [240, 255, 240]; // original light honeydew green colour
const colour_bg = [250, 200, 200]; // light pink colour


//============================================================================================//
//==================================== Setup =================================================//
//============================================================================================//
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // DEVELOP_GLYPH   GRID_WALLPAPER    GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cell_width;
  pWallpaper.grid_settings.cell_height = cell_height;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(colour_bg[0], colour_bg[1], colour_bg[2]);
}


//============================================================================================//
//==================================== Design ================================================//
//============================================================================================//
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  translate(cell_width/2, cell_height/2); // move origin to center of cell

  // TODO: guide lines, remove before outputting 
  stroke(200, 200, 200);
  textAlign(CENTER);
  textSize(8);
  for (let i = - cell_width / 2; i <= cell_width / 2; i += 20) {
    text(i, - cell_width / 2 - 15, i);
    line(- cell_width / 2, i, cell_width / 2, i);
  }
  for (let i = -cell_height/2; i <= cell_height/2; i+=20) {
    text(i, i, -cell_height/2 - 10);
    line(i, -cell_height/2, i, cell_height/2);
  }

  // test curve vertex
  stroke(0, 0, 0);
  strokeWeight(5);

  point(30, -40); // head anchors
  point(70, -40);
  point(30, -20);
  point(70, -20);

  point(-50,- 20); // body anchors
  point(-50, 20);
  point(40, -20);
  point(40, 20);

  point(-50, 20); // feet anchors
  point(-50, 30);
  point(-40, 20);
  point(-40, 30);
  point(40, 20); 
  point(40, 30);
  point(30, 20);
  point(30, 30);

  point(-60, -40); // tail anchors

  strokeWeight(1);
  noFill();
  bezier(-50,-10,-40,-40, 10,-10,40,-20); // back

  beginShape();
  // curveVertex(40, 40);
  // curveVertex(40, 40);
  // curveVertex(140, 40);
  // curveVertex(140, 140);
  // curveVertex(40, 140);
  // curveVertex(40, 40);
  // curveVertex(40, 40);
  endShape();

  
}
