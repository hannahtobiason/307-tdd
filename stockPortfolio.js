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

exports.uniqueStocks = uniqueStocks;
exports.createPortfolio = createPortfolio;
exports.isempty = isempty;
