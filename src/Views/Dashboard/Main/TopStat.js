import React from 'react';

const TopStat = ({ title, value, caption, svg, last, color, loading }) => {
  if (loading)
    return (
      <div
        className={`flex ${
          !last ? 'mr-6' : ''
        } p-4 flex-col bg-white rounded-2xl relative w-1/4 md:w-5/12 md:mr-0 md:mb-6 animate-pulse`}
      >
        <div className='h-6 my-2 bg-gray-400 rounded w-20'></div>
        <div
          className={`absolute bg-${color}-400 p-3 -m-4 rounded-full top-0 right-0 h-12 w-12`}
        ></div>
        <div className='rounded-full my-4 bg-gray-400 h-8 w-8'></div>
        <div className='h-4 my-2 bg-gray-100 rounded w-24'></div>
      </div>
    );
  return (
    <div
      className={`flex ${
        !last ? 'mr-6' : ''
      } p-4 flex-col bg-white rounded-2xl relative w-1/4 md:w-5/12 md:mr-0 md:mb-6`}
    >
      <span className='text-xl md:text-lg pb-1'>{title}</span>
      <span className='block py-4 md:py-2 text-4xl md:text-3xl font-extrabold'>
        {value}
      </span>
      <span className='text-sm opacity-40'>{caption}</span>
      <div
        className={`absolute bg-${color}-400 p-3 -m-4 rounded-full top-0 right-0`}
      >
        {svg}
      </div>
    </div>
  );
};

export default TopStat;
