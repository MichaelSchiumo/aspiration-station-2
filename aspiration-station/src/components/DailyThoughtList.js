const DailyThoughtList = ({ thought }) => {
  //how should we display daily thoughts? Should it be a separate page?
  return (
    <div id='new-daily-thought-container'>
      <div className='grid grid-cols-12 gap-3 mt-10 px-20'>
        <div className='col-span-6 text-center'>
          <div className='flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-60'>
            <h3 className='text-lg font-bold text-gray-800 dark:text-white text-left'>
              Thought of the Day
            </h3>
            <h6 className='text-left text-white'>{thought.date}</h6>
            <p className='text-white text-4xl italic p-12'>
              "{thought.thoughtText}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyThoughtList;
