import { useState } from "react";
import api from "../services/api";

import FinanceCard from "./FinanceCard";
import AnalysisCard from "./AnalysisCard";
import NewsCard from "./NewsCard";
import Loading from "./Loading";

function SearchBar() {
    const [company, setCompany] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {

        if (!company) return;

        try {

            setLoading(true);

            const response = await api.post("/research", {
                company
            });

            setResult(response.data.data);

        } catch (error) {

            console.log(error);

            alert("Research Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container">

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Enter Company Name..."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <button onClick={handleSearch}>
                    Research
                </button>

            </div>

            {loading && <Loading />}

            {result && (

                <>

                    <FinanceCard finance={result.finance} />

                    <AnalysisCard analysis={result.analysis} />

                    <NewsCard news={result.news} />

                </>

            )}

        </div>

    );
}

export default SearchBar;