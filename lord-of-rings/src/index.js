function sumNumbers(numbers, type) {
    if (numbers.length === 0) {
        return 0 ;
    }

    let sum = 0 ; 

    for (let num of numbers) {
        if (type === "even" && num % 2 === 0 ) {
            sum += num ;
        }

        if (type === "odd" && num % 2 !== 0) {
            sum += num ;
        }
    }

    return sum ;
}

console.log(sumNumbers([1,2,3,4,5,6,7,8,9,10],"even"))
console.log(sumNumbers([1,2,3,4,5,6,7,8,9,10],"odd"))
console.log(sumNumbers([],"even"))

module.exports = sumNumbers;
