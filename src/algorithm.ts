// Write an algorithm that prints the whole integer numbers to the console, starting
// from the number 1, and print all numbers going up to the number 100. However,
// when the number is divisible by 3, do not print the number, but print the word
// “Supply”. If the number is divisible by 5, do not print the number, but print “Stack”. If
// the number if divisible by both 3 & 5, print “SupplyStack”

export function algorithm() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`SupplyStack`)
        } else if (i % 3 === 0) {
            console.log(`Supply`)
        } else if (i % 5 === 0) {
            console.log(`Stack`)
        } else {
            console.log(i)
        }
    }
}
