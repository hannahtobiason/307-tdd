const ShareSaleException = 'Not enough shares to sell desired amount';
const portfolio = {
    stocks: [
    ]
}


function createPortfolio(){
    p = portfolio;
    return p;
}

function isempty(portfolio){
    return (portfolio.stocks === null);

};

function uniqueStocks(portfolio){
    return(portfolio.stocks.length);
}

function purchase(portfolio, name, value){
    portfolio.stocks.push({name, value});
    console.log(portfolio.stocks);
}

function sale(portfolio, name, value){
    idx = findIndex(portfolio, findStockByName(portfolio, name));    
    console.log(portfolio.stocks[idx]);
    if(portfolio.stocks[idx].value < value){
        throw new Error(ShareSaleException);
    }
    portfolio.stocks[idx].value -= value;
}

function numberOfShares(portfolio, name){
    idx = findIndex(portfolio, findStockByName(portfolio, name));
    return(portfolio.stocks[idx].value);
}

//Why two functions doing same find?? //
function findStockByName(portfolio, name){
    return portfolio.stocks.find( (stock) => stock.name === name);
};

//PLEASE combine this function with the one above >:( //
function findIndex(portfolio, stock){
    console.log(stock);
    return(portfolio.stocks.indexOf(stock));
};

function onlyOwned(portfolio){
    return portfolio.stocks.filter( (stock) => stock.value != 0);
}

exports.onlyOwned = onlyOwned;
exports.findIndex = findIndex;
exports.findStockByName = findStockByName;
exports.numberOfShares = numberOfShares;
exports.sale = sale;
exports.purchase = purchase;
exports.uniqueStocks = uniqueStocks;
exports.createPortfolio = createPortfolio;
exports.isempty = isempty;
