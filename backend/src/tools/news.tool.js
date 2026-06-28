import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export const getCompanyNews = async (company) => {
    try {

        const response = await newsapi.v2.everything({
            q: company,
            language: "en",
            sortBy: "publishedAt",
            pageSize: 5
        });

        return response.articles.map(article => ({
            title: article.title,
            description: article.description,
            source: article.source.name,
            url: article.url,
            publishedAt: article.publishedAt
        }));

    } catch (error) {
        throw error;
    }
};