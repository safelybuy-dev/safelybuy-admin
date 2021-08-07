import React from 'react';
import { SafelyBuyLogo } from 'svg';

export default function Logo({ text, color, allowSub }) {
  return (
    <div className='flex items-center'>
      <div className='hidden md:inline-block'>
        {<SafelyBuyLogo scale={0.625} />}
      </div>
      <div className='md:hidden'>{<SafelyBuyLogo />}</div>
      <div
        className={`bg-${
          color === 'black' ? 'black' : `${color}-500`
        } h-12 md:h-8 w-px border-0 mx-6 md:mx-3 ${
          !allowSub ? 'md:hidden' : ''
        }`}
      ></div>
      <div
        className={`uppercase text-sm md:text-xs ${
          !allowSub ? 'md:hidden' : ''
        } text-${color === 'black' ? 'black' : `${color}-500`}`}
      >
        {text}
      </div>
    </div>
  );
}
