import React from 'react';
import { Location } from 'svg';

export const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const optionsAlt = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export default function Highlight({
  loading,
  heading = 'Most delivered location',
  location,
  totalDelivered,
  totalSales,
}) {
  const date = new Date();

  return (
    <div className='rounded-2xl bg-purple-500 md:text-center py-4 px-6 pb-8 text-white mr-8 md:mr-0'>
      <p className='text-xs opacity-70'>
        {new Intl.DateTimeFormat('en-GB', options).format(date)}
      </p>
      <h3 className='text-2xl pb-4'>Most delivered to location</h3>
      <div className='flex flex-col bg-purple-700 rounded-2xl p-3 divide-y divide-purple-500'>
        {location ? (
          <div className='flex pb-4 items-center md:justify-center'>
            <span className='inline-block p-2 bg-purple-800 rounded-full mr-2'>
              {<Location />}
            </span>
            <div className='flex flex-col'>
              <p className='text'></p>
            </div>
          </div>
        ) : loading ? (
          'Loading...'
        ) : (
          'No Data Available'
        )}
        {/* <div className='py-6'>
          <span className='block text-7xl tracking-widest font-extrabold'>
            No data
          </span>
          <span className='text opacity-60'>
            Items delivered to this location
          </span>
        </div>
        <div className='py-5'>
          <span className='block text-2xl tracking-widest font-semibold'>
            No data<span className='text-lg'></span>
          </span>
          <div className='text mt-2 opacity-60'>
            Total sales made from this location
          </div>
        </div> */}
      </div>
    </div>
  );
}
