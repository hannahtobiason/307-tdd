const { TestWatcher } = require('jest');
const myFuncs = require('./stockPortfolio.js');

test('testing portfolio created', () => {
    p = myFuncs.createPortfolio();
    expect(p).not.toBeNull();
});

test('testing portfolio has no stocks', () =>{
    p = myFuncs.createPortfolio();
    expect(p.shares).toBe(0);
})
