import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CompanyDetails from './components/CompanyDetails';
import MarketSentiments from './components/MarketSentiments';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/company/:companyName" element={<CompanyDetails />} />
          <Route path="/marketsentiments/:companyName" element={<MarketSentiments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

