const { TestWatcher } = require('jest');
const myFunctions = require('./sample_functions.js');

//testing div function
test('Testing div -- success', () => {
    const target = 3;
    const result = myFunctions.div(9, 3);
    expect(target).toBe(result);
});

test('Testing float in div', () =>{
    const target = 3.0;
    const result = myFunctions.div(9.0, 3);
    expect(target).toBe(result);
});

test('Testing non-numerics in div', () =>{
    const result = myFunctions.div('a', 'b');
    expect(result).toBe(NaN);
});

test('Testing div -- divide by 0', () => {
    expect(() => myFunctions.div(9,0).toThrow(Error));
});



//testing containsNumbers function
test('Testing containsNumbers yes', () =>{
    const result = myFunctions.containsNumbers('hi5');
    expect(result).toBeTruthy();
});

test('Testing containsNumbers no', () =>{
    const result = myFunctions.containsNumbers('hannah');
    expect(result).toBeFalsy();
});

test('Testing containsNumbers special characters', () =>{
    const result = myFunctions.containsNumbers('...');
    expect(result).toBeFalsy();
});

test('Testing containsNumbers all numbers', () =>{
    const result = myFunctions.containsNumbers('555');
    expect(result).toBeTruthy();
});

/*test('Testing containsNumbers, non-text entry', () =>{
    const result = myFunctions.containsNumbers(12345);
    expect(result).toBeTruthy();
});*/

test('Testing containsNumbers, empty string', () =>{
    const result = myFunctions.containsNumbers('');
    expect(result).toBeFalsy();
});

test('Testing containsNumbers, whitespace', () =>{
    const result = myFunctions.containsNumbers(' ');
    expect(result).toBeFalsy();
});

test('Testing containsNumbers, newline', () =>{
    const result = myFunctions.containsNumbers('/n');
    expect(result).toBeFalsy();
});

test('Testing containsNumbers, null', () =>{
    const result = myFunctions.containsNumbers('/0');
    expect(result).toBeFalsy();
});
