
function golfScore(par, strokes) {
  // Only change code below this line
  var a;
  if (strokes<2) {a="Hole-in-one!";}
  else if (strokes<=par-2) {a="Eagle";}
  else if (strokes==par-1) {a="Birdie";}
  else if (strokes==par) {a="Par";}
  else if (strokes==par+1) {a="Bogey";}
  else if (strokes==par+2) {a="Double Bogey";}
  else  {a="Go Home!";}
  return a;
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
