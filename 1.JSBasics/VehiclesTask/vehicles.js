function solve(args) {
    var s = parseInt(args),
        count = 0;

    for (var car = 0; car <= (s / 4) ; car++) {
        for (var truck = 0; truck <= (s / 10) ; truck++) {
            for (var trike = 0; trike <= (s / 3) ; trike++) {
                if (4 * car + 10 * truck + 3 * trike === s) {
                    count++;
                }
            }
        }
    }

    return count;
}

var firstTest = '7';
var secondTest = '10';
var thirdTest = '40';

console.log(solve(firstTest));
console.log(solve(secondTest));
console.log(solve(thirdTest));