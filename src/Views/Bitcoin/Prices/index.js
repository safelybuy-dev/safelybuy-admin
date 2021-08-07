import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import { NotificationIcon } from 'svg';

export default function index() {
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Bitcoin'
        parentLink='/bitcoin'
        childLink='/bitcoin/price'
        childText='Set Price'
      />
      <div className='flex flex-col bg-white w-full rounded-3xl p-16 md:p-6'>
        <h3 className='text-3xl'>Set Price</h3>
        <p className='text-lg mt-4 md:mt-6'>
          Change the buying and selling price for Bitcoin, this information will
          be available for users.
        </p>

        <div className='mt-10 flex md:flex-col'>
          <div className='flex flex-col w-1/2 md:w-full'>
            <h4 className='text-purple-500 text-xl'>Buying Price</h4>
            <section className='mt-4 flex flex-col'>
              <label className='text-sm my-2' htmlFor='buyingPriceNGN'>
                Amount (NGN)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='129.40'
                  name='buyingPriceNGN'
                  id='buyingPriceNGN'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127475;&#127468;{' '}
                  <span className='text-xs inline-flex ml-2'>NGN</span>
                </span>
              </div>
              <label className='text-sm my-2' htmlFor='buyingPriceUSD'>
                Amount (USD)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='1.40'
                  name='buyingPriceUSD'
                  id='buyingPriceUSD'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127482;&#127480;{' '}
                  <span className='text-xs inline-flex ml-2'>USD</span>
                </span>
              </div>
            </section>
          </div>
          <div className='flex flex-col w-1/2 md:w-full md:mt-6'>
            <h4 className='text-purple-500 text-xl'>Selling Price</h4>
            <section className='mt-4 flex flex-col'>
              <label className='text-sm my-2' htmlFor='sellingPriceNGN'>
                Amount (NGN)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='129.40'
                  name='sellingPriceNGN'
                  id='sellingPriceNGN'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127475;&#127468;{' '}
                  <span className='text-xs inline-flex ml-2'>NGN</span>
                </span>
              </div>
              <label className='text-sm my-2' htmlFor='sellingPriceUSD'>
                Amount (USD)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='1.40'
                  name='sellingPriceUSD'
                  id='sellingPriceUSD'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127482;&#127480;{' '}
                  <span className='text-xs inline-flex ml-2'>USD</span>
                </span>
              </div>
            </section>
          </div>
        </div>

        <div className='mt-16 flex items-center md:flex-col-reverse'>
          <Button primary text='Update Prices' roundedFull />
          <div className='ml-16 md:ml-0 text-gray-300 md:mb-4'>
            <span className='inline-flex bg-yellow-100 p-1 rounded-full mr-1'>
              <NotificationIcon />
            </span>
            Last update made 20mins ago
          </div>
        </div>
      </div>
    </div>
  );
}
