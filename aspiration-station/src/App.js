import './App.css';
import Header from './components/Header.js';
import BlockQuote from './components/BlockQuote';
import NewDailyThought from './components/NewDailyThought';
import DailyThoughtList from './components/DailyThoughtList';
import React, { useState } from 'react';

function App() {
  //probs need to set up a backend for this
  //to check whether the user has added a daily thought, filter by the date add to see whether one exists
  const [thoughtsState, setThoughtsState] = useState({
    todayQuoteId: undefined,
    thoughts: ['here'],
  });

  function handleStartAddTodayThought() {
    setThoughtsState((prevState) => {
      return {
        ...prevState,
        todayQuoteId: null,
      };
    });
  }

  let content;

  //I think this logic is still broken
  if (thoughtsState.todayQuoteId === undefined) {
    content = <NewDailyThought />;
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
