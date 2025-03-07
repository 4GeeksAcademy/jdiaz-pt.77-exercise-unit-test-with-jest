const { sum } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});
const { fromEuroToDollar } = require('./app.js')

test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3);
    const expected = 3 * 1.07; 
     expect(dollars).toBe(expected); 
});

test("One yen should be euro divided by 1.07 times 156.5", function() {
    // Import the function from app.js
    const { fromDollarToYen} = require('./app.js');
    const dollars = fromDollarToYen(5);
    const expected = (5 / 1.07) * 156.5; 
     expect(dollars).toBe(expected); 
});

test("One yen should be euro divided by 156.6 times .87", function() {
    // Import the function from app.js
    const { fromYenToPound} = require('./app.js');
    const dollars = fromYenToPound(5);
    const expected = (5 / 156.5) * 0.87; 
     expect(dollars).toBe(expected); 
});
