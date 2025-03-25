import React, { useEffect, useState } from 'react';

function App() {
    const [news, setNews] = useState([]);
    const [exchangeRates, setExchangeRates] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch financial news
        fetch('http://localhost:3001/api/news')
            .then((response) => response.json())
            .then((data) => setNews(data.articles))
            .catch((error) => setError(error.message));

        // Fetch exchange rates
        fetch('http://localhost:3001/api/exchange-rates')
            .then((response) => response.json())
            .then((data) => {
                setExchangeRates(data.conversion_rates);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Financial News</h1>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                style={{ width: '200px', height: 'auto' }}
                            />
                        )}
                    </li>
                ))}
            </ul>

            <h1>Exchange Rates (USD)</h1>
            <ul>
                {Object.entries(exchangeRates).map(([currency, rate]) => (
                    <li key={currency}>
                        <strong>{currency}:</strong> {rate}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;