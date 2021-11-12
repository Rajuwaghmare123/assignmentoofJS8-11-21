// calcuate the valume and surface area of cylinder

//fuction to find volume of cylinder
function volumeOfCylinder(height, radius) {
    
    return (22 / 7) * radius * radius * height;
}

//function to find surface area of cylinder 
function surfaceAreaOfCylinder(height, radius) {
    return (2 * (22 / 7) * radius * height) + (2 * (22 / 7) * radius * radius);
}

// height and radius of cylinder
let cylinder = {
    "height": 10,
    "radius":5,
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radius);
console.log(volume);
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radius);
console.log(surfaceArea);