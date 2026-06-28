function AnalysisCard({ analysis }) {

    return (

        <div className="card">

            <h2>Investment Analysis</h2>

            <h1>{analysis.recommendation}</h1>

            <h3>Score : {analysis.score}/100</h3>

            <h3>Confidence : {analysis.confidence}</h3>

            <h3>Risk : {analysis.riskLevel}</h3>

            <br />

            <p>{analysis.summary}</p>

            <br />

            <h3>Future Outlook</h3>

            <p>{analysis.futureOutlook}</p>

        </div>

    );

}

export default AnalysisCard;