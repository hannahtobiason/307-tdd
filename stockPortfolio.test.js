const { TestWatcher } = require('jest');
const myFuncs = require('./stockPortfolio.js');

function setup(){
    p = myFuncs.createPortfolio();
};

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
    num = 1;
    myFuncs.sale(p, symbol, num);
    idx = myFuncs.findIndex(p, myFuncs.findStockByName(p, symbol));
    expect(p.stocks[idx].value).toBe(999);
});

test('shares by symbol', () =>{
    symbol = 'HAN';
    num = 9;
    myFuncs.purchase(p, symbol, num);
    result = myFuncs.numberOfShares(p, symbol);
    expect(result).toBe(9);
});

test('testing unique stocks with a few', () => {
    result = myFuncs.uniqueStocks(p);
    expect(result).toBe(2);   
})

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

//make a more robust test with more stocks, some empty//
test('only owned stocks', () => {
    myFuncs.onlyOwned(p);
    for(let i = 0; i < p.stocks.length; i++){
        expect(p.stocks[i].value).not.toBe(0);
    }
});

//works now//
test('only owned stocks start with some unowned', () =>{
    myFuncs.purchase(p, 'APL', 5);
    myFuncs.sale(p, 'APL', 5);
    myFuncs.onlyOwned(p);
    console.log(p);
    //iterate through all stocks, none should have value = 0 now//
    for(let i = 0; i < p.stocks.length; i++){
        console.log(p.stocks[i]);
        expect(p.stocks[i].value).not.toBe(0);
    }
});

test('sold too many shares', () => {
    expect(() => myFuncs.sale(p, 'JOE', 2000).toThrow(ShareSaleException));
});
