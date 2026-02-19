function fizz_buzz(numbers) { 
    let result = []

    for (let num of numbers) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push("fizzbuzz");
        } else if (num % 3 === 0) {
            result.push("fizz") ;
        } else if (num % 5 === 0) {
            result.push("buzz") ;
        } else {
            result.push(num);
        }
    }

    return result.join(", ")
}

console.log(fizz_buzz([3,5,15,6,7,11]))

module.exports = fizz_buzz;