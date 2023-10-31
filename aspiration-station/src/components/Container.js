import React from "react";
import "./Container.css";

const Container = () => {
  return (
    <div className="row-height">
      <div className="grid grid-cols-12 gap-3 mt-10 px-20">
        <div className="col-span-6 text-center">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] row-height">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Sample
            </h3>
            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
              Sample sub
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-400">Ex text</p>
          </div>
        </div>
        <div className="col-span-6 text-center">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] row-height">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Sample title
            </h3>
            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
              Card subtitle
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
