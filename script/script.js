let round = document.getElementById('round');
let ceil = document.getElementById('ceil');
let floor = document.getElementById('floor');
let min = document.getElementById('math_min');
let max = document.getElementById('math_max');
let abs = document.getElementById('abs');

//Event listeners

round.addEventListener('input', inputRound);
ceil.addEventListener('input', inputCeil);
floor.addEventListener('input', inputFloor);
min.addEventListener('input', inputMin);
max.addEventListener('input', inputMax);
abs.addEventListener('input', inputAbs);

//Functions

function inputRound() {
    let roundOutput = Math.round(round.value);

    document.getElementById('round_output').innerHTML = roundOutput;
}

function inputCeil() {
    let ceilOutput = Math.ceil(ceil.value);

    document.getElementById('ceil_output').innerHTML = ceilOutput;
}

function inputFloor() {
    let floorOutput = Math.floor(floor.value);

    document.getElementById('floor_output').innerHTML = floorOutput;
}

function inputMin() {
    let min1 = document.getElementById('min1');
    let min2 = document.getElementById('min2');

    let minOutput = Math.min(min1.value , min2.value);

    document.getElementById('min_output').innerHTML = minOutput;
}

function inputMax() {
    let max1 = document.getElementById('max1');
    let max2 = document.getElementById('max2');

    let maxOutput = Math.max(max1.value , max2.value);

    document.getElementById('max_output').innerHTML = maxOutput;
}

function inputAbs() {
    let absOutput = Math.abs(abs.value);

    document.getElementById('abs_output').innerHTML = absOutput;
}

let piOutput = Math.PI;
let shortPIOutput = piOutput.toFixed(5);

document.getElementById('pi').innerHTML = shortPIOutput;


let randomOutput = Math.random();
let shortRandomOutput = randomOutput.toFixed(5);

document.getElementById('random').innerHTML = shortRandomOutput;