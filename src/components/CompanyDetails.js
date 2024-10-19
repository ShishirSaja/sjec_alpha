import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Or use fetch if you're not using axios

function CompanyDetails() {
  const { companyName } = useParams(); // This extracts companyName from the route URL
  const [companyData, setCompanyData] = useState(null); // Stores fetched company data
  const [loading, setLoading] = useState(true); // Tracks if loading

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true); // Start loading
        const apiKey = '76f8bf30a220ded327279cb5ed3861aa'; // Your API key
        const response = await axios.get(
          `https://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=${companyName}`
        );

        // Handle successful response
        setCompanyData(response.data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      } finally {
        setLoading(false); // Stop loading once the fetch is done
      }
    };

    fetchCompanyData();
  }, [companyName]);

  if (loading) {
    return <div className="loading">Loading...</div>; // While loading, show loading state
  }

  if (!companyData) {
    return <div className="error">No data available for this company</div>; // Handle no data
  }

  // After data is fetched, display the company data
  return (
    <div className="container">
        <div className="page-content">
            <h1 className="page-header">{companyName}</h1>
            <div className="company-info">
                <p>Price: {companyData.data[0].close}</p>
                <p>Volume: {companyData.data[0].volume}</p>
                <p>Market Cap: {companyData.data[0].market_cap}</p>
                </div>
      
      {/* Add more fields as necessary */}

      {/* Add the "More Info" button to navigate to MarketSentiments */}
      <Link to={`/marketsentiments/${companyName}`}>
        <button>More Info</button>
      </Link>
      
      </div>
      
    </div>
  );
}

export default CompanyDetails;
