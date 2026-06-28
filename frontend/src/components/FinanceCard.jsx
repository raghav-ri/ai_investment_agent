function FinanceCard({ finance }) {

    return (

        <div className="card">

            <h2>Company Information</h2>

            <p><b>Name:</b> {finance.company}</p>

            <p><b>Symbol:</b> {finance.symbol}</p>

            <p><b>Price:</b> ${finance.currentPrice}</p>

            <p><b>Market Cap:</b> {finance.marketCap}</p>

            <p><b>PE Ratio:</b> {finance.peRatio}</p>

            <p><b>EPS:</b> {finance.eps}</p>

            <p><b>Exchange:</b> {finance.exchange}</p>

        </div>

    );

}

export default FinanceCard;