import { getCompanyFinancials } from "../tools/finance.tool.js";

export const financeController = async (req, res) => {
    try {

        const { company } = req.body;

        const data = await getCompanyFinancials(company);

        res.json({
            success: true,
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};