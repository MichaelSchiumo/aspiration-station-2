import './App.css';
import Header from './components/Header.js';
import BlockQuote from './components/BlockQuote';
import NewDailyThought from './components/NewDailyThought';
import DailyThoughtList from './components/DailyThoughtList';
import React, { useState } from 'react';
import dateFormat from 'dateformat';

function App() {
  //do we need a date picker?
  //probs need to set up a backend for this
  //to check whether the user has added a daily thought, filter by the date add to see whether one exists
  const [thoughtsState, setThoughtsState] = useState({
    todayThoughtId: undefined,
    thoughts: [],
  });

  function handleAddThought(thoughtData) {
    setThoughtsState((prevState) => {
      const newThought = {
        ...thoughtData,
        id: Math.random(),
        date: dateFormat(new Date(), 'mmmm dS, yyyy'),
      };

      return {
        ...prevState,
        thoughts: [...prevState.thoughts, newThought],
      };
    });
  }

  let content;

  //I think this logic is still broken
  if (thoughtsState.thoughts.length === 0) {
    content = <NewDailyThought onAddThought={handleAddThought} />;
  } else {
    content = <DailyThoughtList thought={thoughtsState.thoughts[0]} />;
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
