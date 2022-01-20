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
    console.log(portfolio.stocks[0]);
    portfolio.stocks[0].value -= num;
}

function numberOfShares(portfolio, name){
    return(portfolio.stocks[1].value);
}

function findStockByName(p, name){
    return(p.stocks.filter( (stock) => stock.name === name));
};

function findIndex(p, stock){
    return(p.stocks.indexOf(stock));
};

exports.findIndex = findIndex;
exports.findStockByName = findStockByName;
exports.numberOfShares = numberOfShares;
exports.sale = sale;
exports.purchase = purchase;
exports.uniqueStocks = uniqueStocks;
exports.createPortfolio = createPortfolio;
exports.isempty = isempty;
