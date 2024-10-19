import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (companyName) {
        navigate(`/company/${companyName}`);
    }
  };

  return (
    <div>
        <h1>Alpha</h1>
        <h4>Real Time Equity Analysis Tool</h4>
        <br></br>
        <hr></hr>
        <div className="search-bar">
      <input
        type="text"
        placeholder="Enter company name or ticker"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
    
  );
};

export default SearchBar;
