import React from 'react';
import { AppleIcon } from 'svg';

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

export default function Highlight() {
  const date = new Date();

  return (
    <div className='rounded-2xl bg-purple-500 md:text-center py-4 px-6 pb-8 text-white mr-8 md:mr-0'>
      <p className='text-xs opacity-70'>
        {new Intl.DateTimeFormat('en-GB', options).format(date)}
      </p>
      <h3 className='text-2xl pb-4'>Most sold giftcard</h3>
      <div className='flex flex-col bg-purple-700 rounded-2xl p-3 divide-y divide-purple-500'>
        {/* <div className="flex pb-4 items-center md:justify-center">
          <span className="inline-block px-4 py-3 bg-white rounded-full mr-2">
            {<AppleIcon />}
          </span>
          <div className="flex flex-col">
            <p className="text">Apple GiftCard</p>
          </div>
        </div>
        <div className="py-6">
          <span className="block text-7xl tracking-widest font-extrabold">
            30
          </span>
          <span className="text opacity-60">Quantity sold this month</span>
        </div>
        <div className="py-5">
          <span className="block text-2xl tracking-widest font-semibold">
            500,590<span className="text-lg">NGN</span>
          </span>
          <div className="text mt-2 opacity-60">Total sales this month</div>
        </div> */}
        No data available
      </div>
    </div>
  );
}
