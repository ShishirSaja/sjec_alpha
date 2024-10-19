import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MarketSentiments = () => {
  const { companyName } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [technicalScore, setTechnicalScore] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const newsApiKey = '4a0b1b9d179e4ad28db7caf9a8d7fc69';
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${companyName}`, {
          params: {
            apiKey: newsApiKey
          }
        });
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data', error);
      }
    };

    const fetchTechnicalScore = async () => {
      // Fetch technical score from some API or calculate it
      setTechnicalScore(65);  // Example static value
    };

    fetchNews();
    fetchTechnicalScore();
  }, [companyName]);

  return (
    <div>
      <h3>Market Sentiments for {companyName}</h3>
      <div>
        <h4>Technical Score: {technicalScore}</h4>
        <h4>Recent News</h4>
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketSentiments;
