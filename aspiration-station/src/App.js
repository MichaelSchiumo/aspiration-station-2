import './App.css';
import Header from './components/Header.js';
import BlockQuote from './components/BlockQuote';
import NewQuote from './components/NewQuote';
import DailyThoughtList from './components/DailyThoughtList';
import React, { useState } from 'react';

function App() {
  const [thoughtsState, setQuotesState] = useState({
    todayQuoteId: undefined,
    thoughts: ['here'],
  });

  let content;

  if (thoughtsState.todayQuoteId === null) {
    content = <NewQuote />;
  } else if (thoughtsState.todayQuoteId === undefined) {
    content = <DailyThoughtList thoughts={thoughtsState.thoughts} />;
  }

  return (
    <div id='container'>
      <Header />
      <BlockQuote />
      {content}
    </div>
  );
}

export default App;
