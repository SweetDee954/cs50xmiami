/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 5;

var diameter = 2 * radius;

var circumference = Math.PI * diameter;

var radiusSquared = radius * radius;

var area = Math.PI * radiusSquared;

console.log("The circumference is "+ circumference+". The area is "+ area+".");