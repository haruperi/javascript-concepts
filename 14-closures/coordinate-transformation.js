// 1. Translate the coordinates
 function translate2d(dx, dy) {
  return (x,y) => [x+dx,y+dy]
}

// 2. Scale the coordinates
 function scale2d(sx, sy) {
  return (x,y) => [x*sx,y*sy]
}

// 3. Compose transformation functions
function composeTransform(f, g) {
  return function (x, y) {
    const fResult = f(x, y);
    return g(fResult[0], fResult[1]);
  };
}

// 4. Save the results of functions
function memoizeTransform(f) {
  let lastX = undefined;
  let lastY = undefined;
  let lastResult = undefined;

  return function (x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    }

    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  };
}


export {translate2d, scale2d, composeTransform, memoizeTransform}