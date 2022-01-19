const portfolio = {
    stocks: [
        {
            stock,
            shares,
        }
    ]
}

function createPortfolio(){
    p = portfolio;
    return p;
}

function isempty(portfolio){
    return (portfolio.shares === null && portfolio.tickers === null);

};

exports.createPortfolio = createPortfolio;
exports.isempty = isempty;
