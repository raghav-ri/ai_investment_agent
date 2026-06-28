import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export const getCompanyFinancials = async (company) => {
    try {
        const search = await yahooFinance.search(company);

        if (!search.quotes || search.quotes.length === 0) {
            throw new Error("Company not found");
        }

        const symbol = search.quotes[0].symbol;

        const quote = await yahooFinance.quote(symbol);

        return {
            company: quote.longName,
            symbol: quote.symbol,
            currentPrice: quote.regularMarketPrice,
            marketCap: quote.marketCap,
            peRatio: quote.trailingPE,
            eps: quote.epsTrailingTwelveMonths,
            sector: quote.sector,
            industry: quote.industry,
            currency: quote.currency,
            exchange: quote.fullExchangeName
        };
    } catch (error) {
        throw error;
    }
};