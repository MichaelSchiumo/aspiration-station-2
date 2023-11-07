import React, { useState, useRef } from 'react';
import './NewDailyThought.css';

//add create daily thought fn here
const NewDailyThought = ({ onAddThought }) => {
  const thoughtOfDay = useRef();

  const [enteredThought, setEnteredThought] = useState('');

  function handleSave() {
    const thoughtText = thoughtOfDay.current.value;

    if (thoughtText.trim() === '') {
      return;
    }

    onAddThought({ thoughtText });
  }

  return (
    <div id='new-daily-thought-container'>
      <div className='grid grid-cols-12 gap-3 mt-10 px-20'>
        <div className='col-span-4 text-center'>
          <div className='flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-72 w-100'>
            <h3 className='p-2 text-lg font-bold text-gray-800 dark:text-white text-left'>
              Thought of the Day
            </h3>
            {enteredThought ? (
              <>
                <blockquote className='mt-5 text-md font-medium text-white whitespace-normal'>
                  <p>{enteredThought}</p>
                </blockquote>
                <p className='mt-5 text-sm font-medium text-white whitespace-normal'>
                  User, Today's Date
                </p>
              </>
            ) : (
            <div>
                <p className='mt-2 text-gray-800 dark:text-gray-400'>
                  <textarea
                    ref={thoughtOfDay}
                    className='py-3 px-4 block w-full resize-none border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    rows='3'
                    placeholder="Jot down something that's on your mind today..."
                    maxLength={120}
                  ></textarea>
                </p>
                <button
                  onClick={handleSave}
                  type='button'
                  className='py-[.688rem] mt-2 w-24 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-gray-300'
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDailyThought;
