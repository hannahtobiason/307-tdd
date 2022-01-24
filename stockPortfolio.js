const ShareSaleException = 'Not enough shares to sell desired amount';
const portfolio = {
    stocks: [
    ]
}


function createPortfolio(){
    p = portfolio;
    return p;
};

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

//had to write findStockByName and findIndex to accomplish this function//
function sale(portfolio, name, value){
    idx = findIndex(portfolio, findStockByName(portfolio, name));    
    console.log(portfolio.stocks[idx]);
    if(portfolio.stocks[idx].value < value){
        //Cannot sell more than owned//
        throw new Error(ShareSaleException);
    }
    portfolio.stocks[idx].value -= value;
    console.log(portfolio.stocks[idx]);
}

//had to write findStockByName and findIndex to accomplish this function//
function numberOfShares(portfolio, name){
    idx = findIndex(portfolio, findStockByName(portfolio, name));
    return(portfolio.stocks[idx].value);
}

//useful for grabbing a whole stock object if given name//
function findStockByName(portfolio, name){
    return portfolio.stocks.find( (stock) => stock.name === name);
};

//to help with locating specific stock, useful for removing stocks//
function findIndex(portfolio, stock){
    console.log(stock);
    return(portfolio.stocks.indexOf(stock));
};

//iterate through stocks list, find stock with value zero, get index, splice out//
function onlyOwned(portfolio){
    portfolio.stocks.forEach(stock =>{
        if(stock.value === 0){
            portfolio.stocks.splice(findIndex(portfolio, stock), 1);
        }
    })
    return portfolio;
};

exports.onlyOwned = onlyOwned;
exports.findIndex = findIndex;
exports.findStockByName = findStockByName;
exports.numberOfShares = numberOfShares;
exports.sale = sale;
exports.purchase = purchase;
exports.uniqueStocks = uniqueStocks;
exports.createPortfolio = createPortfolio;
exports.isempty = isempty;
exports.portfolio = portfolio;
