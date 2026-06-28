import client from "../config/openai.js";
import { investmentPrompt } from "../prompts/investment.prompt.js";

import { getCompanyFinancials } from "../tools/finance.tool.js";
import { getCompanyNews } from "../tools/news.tool.js";

export const researchService = async (company) => {

    const finance = await getCompanyFinancials(company);

    const news = await getCompanyNews(company);

    const completion = await client.chat.completions.create({

        model: "openai/gpt-oss-120b",

        messages: [
            {
                role: "system",
                content: "You are an expert investment research analyst."
            },
            {
                role: "user",
                content: investmentPrompt(finance, news)
            }
        ],

        temperature: 0.2

    });

    const analysis = JSON.parse(
        completion.choices[0].message.content
    );

    return {
        finance,
        news,
       analysis
    };

};