function scale_x(shape, frac) {
  return scale(shape, frac, 1, 1);
}

function scale_y(shape, frac) {
  return scale(shape, 1, frac, 1);
}

function scale_z(shape, frac) {
  return scale(shape, 1, 1, frac);
}

function scale_horizontal(shape, frac) {
  return scale_x(scale_y(shape, frac), frac);
}

function move_x(shape, distance) {
  return translate(shape, distance, 0, 0);
}

function move_y(shape, distance) {
  return translate(shape, 0, distance, 0);
}

function move_z(shape, distance) {
  return translate(shape, 0, 0, distance);
}


function stack_frac_x(frac, shape1, shape2) {
  return union(move_x(scale_x(shape1, frac), -(1 - frac) / 2),
               move_x(scale_x(shape2, 1 - frac), frac / 2));
}

function stack_frac_y(frac, shape1, shape2) {
  return union(move_y(scale_y(shape1, frac), -(1 - frac) / 2),
               move_y(scale_y(shape2, 1 - frac), frac / 2));
}

function stack_frac_z(frac, shape1, shape2) {
  return union(move_z(scale_z(shape1, frac), (1 - frac) / 2),
               move_z(scale_z(shape2, 1 - frac), -frac / 2));
}

function stackn_x(shape, n) {
  return n === 1
      ? shape
      : stack_frac_x(1 / n, shape, stackn_x(shape, n - 1));
}

function stack_x(shape1, shape2) {
  return stack_frac_x(0.5, shape1, shape2);
}


function stack_y(shape1, shape2) {
  return stack_frac_y(0.5, shape1, shape2);
}

function stack_z(shape1, shape2) {
  return stack_frac_z(0.5, shape1, shape2);
}


function sierpinski(shape) {
  const base = stack_y(stack_x(shape, shape), stack_x(shape, shape));
  return stack_z(scale_horizontal(shape, 0.5), base);
}

function hypofractional(n, shape) {
return n === 0
  ? shape
  : sierpinski(hypofractional(n - 1, shape));
}

// Testing
// render(sierpinski(unit_pyramid));
// render(hypofractional(3, unit_cube));
// render(hypofractional(5, unit_pyramid));

function sponge(cube) {
  const ring = stack_frac_y(
                  2 / 3,
                  stack_y(
                      stackn_x(cube, 3), 
                      union(
                          move_x(scale_x(cube, 1 / 3), - 1 / 3),
                          move_x(scale_x(cube, 1 / 3), 1 / 3))
                      ),
                  stackn_x(cube, 3));
  
  const pair_with_gap = union(
                            move_x(scale_x(cube, 1 / 3), - 1 / 3),
                            move_x(scale_x(cube, 1 / 3), 1 / 3));

  const middle_row = union(
                         move_y(scale_y(pair_with_gap, 1 / 3), - 1 / 3),
                         move_y(scale_y(pair_with_gap, 1 / 3), 1 / 3));
                         
  return stack_frac_z(2 / 3, stack_z(ring, middle_row), ring);
}

function menger_sponge(n) {
  return n === 0
      ? unit_cube
      : sponge(menger_sponge(n - 1));
}

render(menger_sponge(3));















