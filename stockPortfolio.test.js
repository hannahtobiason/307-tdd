const { TestWatcher } = require('jest');
const myFuncs = require('./stockPortfolio.js');


function setup(){
    p = myFuncs.createPortfolio();
}
setup();

test('testing portfolio created', () => {
    expect(p).not.toBeNull();
});

test('testing portfolio has no stocks', () =>{
    expect(myFuncs.isempty(p)).toBeTruthy;
});

test('returning number of unique stocks', () =>{
    result = myFuncs.uniqueStocks(p);
    expect(result).toBe(0);
});

test('making a purchase', () =>{
    symbol = 'JOE';
    num = 1000;
    myFuncs.purchase(p, symbol, num);
    expect(p.stocks[p.stocks.length-1]).not.toBeNull();
});

test('make a sale', () =>{
    symbol = 'JOE';
    num = 0;
    myFuncs.sale(p, symbol, num);
    idx = myFuncs.findIndex(p, myFuncs.findStockByName(p, symbol));
    expect(p.stocks[idx].value).toBe(1000);
});

test('shares by symbol', () =>{
    symbol = 'HAN';
    num = 9;
    myFuncs.purchase(p, symbol, num);
    result = myFuncs.numberOfShares(p, symbol);
    expect(result).toBe(9);
});

test('find stock by name', () => {
    symbol = 'HAN';
    result = myFuncs.findStockByName(p, symbol);
    console.log(result);
});

test('index of given stock', () =>{
    result = myFuncs.findStockByName(p, 'HAN');
    console.log(result);
    idx = myFuncs.findIndex(p, result);
    expect(idx).toBe(1);
});

