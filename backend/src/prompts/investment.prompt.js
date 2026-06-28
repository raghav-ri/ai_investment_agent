export const investmentPrompt = (finance, news) => `
You are a senior investment analyst at Goldman Sachs.

Analyze the following company.

Return ONLY valid JSON.

Financial Data:

${JSON.stringify(finance, null, 2)}

Latest News:

${JSON.stringify(news, null, 2)}

Return ONLY this JSON format:

{
    "company":"",
    "recommendation":"",
    "score":0,
    "confidence":"",
    "summary":"",
    "strengths":[],
    "weaknesses":[],
    "opportunities":[],
    "threats":[],
    "riskLevel":"",
    "futureOutlook":"",
    "reasoning":""
}
`;