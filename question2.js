// function for voltage and current
function getPower(voltage, current) {
    return voltage * current;
}

//value of voltage and current
let v = 10;
let i = 10;

let p = getPower(v, i);
console.log(p);