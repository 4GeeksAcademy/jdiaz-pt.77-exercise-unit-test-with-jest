const sum = (a , b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // USD
    "GBP": 0.87, // british pound
}



const fromEuroToDollar = (a) => {
    return a * 1.07
}
console.log(fromEuroToDollar(5))


const fromDollarToYen = (a) => {
    return (a / 1.07) * 156.5;
}
console.log(fromDollarToYen(5))


const fromYenToPound = (a) => {
    return (a / 156.5) * 0.87
}
console.log(fromYenToPound(5))


module.exports = {fromEuroToDollar, sum, fromDollarToYen, fromYenToPound} 