const fs = require('fs');
const numbers = fs.readFileSync("./numbers.txt").toString().split("\r\n");


function SumOfNumbers(){
    let sum = 0;
    numbers.forEach(number => {sum += +number;})
    return sum;
}
function CountOfNumbers(){
    return numbers.length;
}
function SumOfEven(){
    let sum = 0;
    numbers.forEach(number => {
        let n = +number;
        if(n % 2 === 0){
            sum += n;
        }
    })
    return sum;
}
module.exports = { SumOfNumbers, CountOfNumbers, SumOfEven };