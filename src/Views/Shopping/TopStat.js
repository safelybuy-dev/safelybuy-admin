import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'svg';

const TopStat = ({
  title,
  value,
  caption,
  svg,
  last,
  color,
  link,
  linkText,
  loading,
}) => {
  if (loading)
    return (
      <div
        className={`flex ${
          !last ? 'mr-10' : ''
        } p-8 flex-col bg-white w-1/3 md:w-full md:mr-0 md:mb-10 rounded-2xl relative animate-pulse`}
      >
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <div className='h-6 my-2 bg-gray-200 rounded w-32'></div>
            <div className='h-4 my-2 bg-gray-100 rounded w-48'></div>
          </div>
          <div
            className={`bg-${color}-100 p-6 rounded-full top-0 right-0 h-10 w-10`}
          ></div>
        </div>
        <div className='flex my-2 justify-between items-center'>
          <div className='rounded-full bg-gray-300 h-8 w-8'></div>
          <div className='h-6 bg-purple-200 rounded w-1/4'></div>
        </div>
      </div>
    );
  return (
    <div
      className={`flex ${
        !last ? 'mr-10' : ''
      } p-8 flex-col bg-white w-1/3 md:w-full md:mr-0 md:mb-10 rounded-2xl relative`}
    >
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <span className='text-xl md:text-lg pb-1'>{title}</span>
          <span className='text-sm opacity-40'>{caption}</span>
        </div>
        <div className={`bg-${color}-100 p-4 rounded-full top-0 right-0`}>
          {svg}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <span className='block pt-8 md:py-2 text-4xl md:text-3xl font-extrabold'>
          {value}
        </span>
        {link && (
          <Link className='flex text-purple-500 pt-8' to={link}>
            <span className=''>{linkText}</span>
            <div className='ml-4'>
              <ArrowRight />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopStat;
