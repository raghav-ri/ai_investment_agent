import { getCompanyNews } from "../tools/news.tool.js";

export const newsController = async (req, res) => {

    try {

        const { company } = req.body;

        const news = await getCompanyNews(company);

        res.status(200).json({
            success: true,
            data: news
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};