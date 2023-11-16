//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
const colour_bg = [240, 255, 240]; //light honeydew green colour

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // DEVELOP_GLYPH   GRID_WALLPAPER    GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(colour_bg[0], colour_bg[1], colour_bg[2]);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // TODO: guide lines, remove before outputting 
  stroke(200, 200, 200);
  textSize(8);
  for (let i = 0; i <= 200; i+=20) {
    text(i, i-5, -5);
    line(0, i, 200, i);
    text(i, -15, i+2);
    line(i, 0, i, 200);
  }

  // test curve vertex
  stroke(0, 0, 0);
  strokeWeight(5);
  point(40,40);
  point(140,40);
  point(140,140);
  point(40,140);

  strokeWeight(1);
  noFill();
  beginShape();
  curveVertex(40, 40);
  curveVertex(40, 40);
  curveVertex(140, 40);
  curveVertex(140, 140);
  curveVertex(40, 140);
  curveVertex(40, 40);
  curveVertex(40, 40);
  endShape();

  
}
