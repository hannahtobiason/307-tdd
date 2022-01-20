const { TestWatcher } = require('jest');
const myFuncs = require('./stockPortfolio.js');


function setUp(){
    p = createPortfolio();
}

test('testing portfolio created', () => {
    p = myFuncs.createPortfolio();
    expect(p).not.toBeNull();
});

test('testing portfolio has no stocks', () =>{
    p = myFuncs.createPortfolio();
    expect(myFuncs.isempty(p)).toBeTruthy;
})

test('returning number of unique stocks', () =>{

})
