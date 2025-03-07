const sum = (a , b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // USD
    "GBP": 0.87, // british pound
}



const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07
    return valueInDollar
}
console.log(fromEuroToDollar(5))


const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = (valueInDollar / 1.07) 
    let valueInYen = valueInEuro * 156.5
    return valueInYen
}
console.log(fromDollarToYen(5))


const fromYenToPound = (valueInYen) => {
    let valueInEuro = (valueInYen / 156.5)
    let valueInPound =  valueInEuro * .87
    return valueInPound
}
console.log(fromYenToPound(5))


module.exports = {fromEuroToDollar, sum, fromDollarToYen, fromYenToPound} 