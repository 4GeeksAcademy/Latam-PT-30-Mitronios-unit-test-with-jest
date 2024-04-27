// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Test Euro to dollar
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//Test DollarToYen
test("One dolar should be 158.10 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen (3.5);

    // If 1 dollar is 158.10 Yens, then 3.5 dollars should be (3.5 * 158.10)
    const expected = 3.5 * 158.10; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected);
})

// Test yenToPound
test("One yen should be 0.0057 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 1 yen is 0.0057 pounds, then 3.5 yens should be (3.5 * 0.0057)
    const expected = 3.5 * 0.0057; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected);
})