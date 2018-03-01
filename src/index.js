module.exports = function solveEquation(equation) {
    let arr = equation.split(" ");
    let a = parseInt(arr[0]);
    let b = parseInt(arr[4]);
    let c = parseInt(arr[8]);
    let bSign = arr[3];
    let cSign = arr[7];
    if(bSign === '-'){
        b = -b;
    }
    if(cSign === '-'){
        c = -c;
    }
    let d = Math.pow(b,2) - 4*a*c;
    arr = [];
    if (d > 0){
        arr[0] = (Math.round((-b + Math.sqrt(d)) / (2 * a)));
        arr[1] = (Math.round((-b - Math.sqrt(d)) / (2 * a)));

    }
    else if (d === 0){
        arr.push(Math.round((-b / (2 * a))));
    }
    arr.sort((a,b) => a - b);
    return arr;
};
