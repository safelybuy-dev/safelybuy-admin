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
}) => {
  return (
    <div
      className={`flex ${
        !last ? 'mr-10' : ''
      } p-8 flex-col bg-white w-1/3 md:w-full md:mr-0 md:mb-10 rounded-2xl relative`}
    >
      <div className='flex justify-between items-start'>
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
