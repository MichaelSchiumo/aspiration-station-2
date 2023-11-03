import './App.css';
import Header from './components/Header.js';
import BlockQuote from './components/BlockQuote';
import NewQuote from './components/NewQuote';
import React, { useState } from 'react';

function App() {
  const [quotesState, setQuotesState] = useState({
    todayQuote: undefined,
    allQuotes: [],
  });
  return (
    <div id='container'>
      <Header />
      <BlockQuote />
      <NewQuote />
    </div>
  );
}

export default App;
