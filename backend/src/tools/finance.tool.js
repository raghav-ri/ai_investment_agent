import yahooFinance from "yahoo-finance2";

export const getCompanyFinancials = async (company) => {
    try {
        const quote = await yahooFinance.quote(company);

        return {
            company: quote.longName,
            symbol: quote.symbol,
            currentPrice: quote.regularMarketPrice,
            marketCap: quote.marketCap,
            peRatio: quote.trailingPE,
            eps: quote.epsTrailingTwelveMonths,
            currency: quote.currency,
            exchange: quote.fullExchangeName,
        };
    } catch (error) {
        console.error("Yahoo Finance Error:", error.message);

        return {
            company,
            symbol: company.toUpperCase(),
            currentPrice: null,
            marketCap: null,
            peRatio: null,
            eps: null,
            currency: "USD",
            exchange: "Unavailable",
        };
    }
};