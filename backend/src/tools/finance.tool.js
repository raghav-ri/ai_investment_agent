import axios from "axios";

export const getCompanyFinancials = async (symbol) => {
    try {
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

        const { data } = await axios.get(url);

        return {
            company: data.Name,
            symbol: data.Symbol,
            marketCap: data.MarketCapitalization,
            peRatio: data.PERatio,
            eps: data.EPS,
            exchange: data.Exchange,
            currency: data.Currency,
            currentPrice: "Use GLOBAL_QUOTE API if required"
        };
    } catch (error) {
        console.error(error);

        return {
            company: symbol,
            symbol,
            currentPrice: null,
            marketCap: null,
            peRatio: null,
            eps: null,
            exchange: "Unavailable"
        };
    }
};