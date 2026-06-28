import axios from "axios";

export const getCompanyFinancials = async (company) => {
    try {

        // Search company symbol
        const searchURL =
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

        const searchResponse = await axios.get(searchURL);

        const matches = searchResponse.data.bestMatches;

        if (!matches || matches.length === 0) {
            throw new Error("Company not found");
        }

        const bestMatch =
    matches.find(
        (item) =>
            item["4. region"] === "United States" &&
            item["1. symbol"] === "TSLA"
    ) ||
    matches.find((item) => item["4. region"] === "United States") ||
    matches[0];

const symbol = bestMatch["1. symbol"];

        // Company Overview
        const overviewURL =
            `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

        const overviewResponse = await axios.get(overviewURL);

        // Current Price
        const quoteURL =
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

        const quoteResponse = await axios.get(quoteURL);

        const overview = overviewResponse.data;
        const quote = quoteResponse.data["Global Quote"];

        return {

            company: overview.Name,

            symbol: symbol,

            currentPrice: quote["05. price"],

            marketCap: overview.MarketCapitalization,

            peRatio: overview.PERatio,

            eps: overview.EPS,

            currency: overview.Currency,

            exchange: overview.Exchange

        };

    } catch (error) {

        console.log("Alpha Vantage Error:", error.message);

        return {

            company,

            symbol: company,

            currentPrice: "N/A",

            marketCap: "N/A",

            peRatio: "N/A",

            eps: "N/A",

            currency: "USD",

            exchange: "Unavailable"

        };

    }
};