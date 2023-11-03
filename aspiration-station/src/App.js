import './App.css';
import Header from './components/Header.js';
import BlockQuote from './components/BlockQuote';
import Container from './components/Container';
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
      <Container />
    </div>
  );
}

export default App;
