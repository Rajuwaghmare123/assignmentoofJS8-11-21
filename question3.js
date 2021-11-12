//function for complite wall
function paintWall(n, h, w) {
    
    var areaOfWall = h * w;

    if (areaOfWall % n == 0){
        return areaOfWall / n;
    }else{
        return (areaOfWall/n)+1;
    }
       
}

var n = 8;
var h = 6;
var w = 6;

var totalWallPaint = paintWall(n, h, w);

console.log(totalWallPaint);