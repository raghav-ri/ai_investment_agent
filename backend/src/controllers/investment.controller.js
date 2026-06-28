import { researchService } from "../services/investment.service.js";

export const researchCompany = async (req, res) => {
    try {
        const { company } = req.body;

        if (!company) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            });
        }

        const result = await researchService(company);

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};