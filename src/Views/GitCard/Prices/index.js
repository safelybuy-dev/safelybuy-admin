import React, { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import { PlusIcon } from '../../../svg';
import AddGiftCard from './AddGiftCard';

export default function Prices() {
  const [addGiftcard, setAddGiftcard] = useState(false);
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Giftcard'
        parentLink='/giftcard'
        childLink='/giftcard/prices'
        childText='Set Prices'
      />
      <AddGiftCard addGiftcard={addGiftcard} setAddGiftcard={setAddGiftcard} />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Set Prices</h2>
        <span onClick={() => setAddGiftcard(true)}>
          <Button primary text='Add Giftcard' roundedLg icon={<PlusIcon />} />
        </span>
      </div>
      <div className='flex flex-col mt-10 bg-white w-full rounded-3xl p-12 md:p-6'>
        No giftcard added yet.
        {/* <div className='flex md:flex-col mb-3'>
          <div className='flex flex-col w-1/4 md:w-full'>
            <header className='mb-10'>Giftcard</header>
            <h4 className='text-xl'>Amazon Giftcard</h4>
          </div>
          <div className='flex flex-col w-1/4 md:w-full'>
            <h4 className=''>Buying Price</h4>
            <section className='mt-4 flex flex-col'>
              <label className='text-sm my-2' htmlFor=''>
                Amount (NGN)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='129.40'
                  name=''
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127475;&#127468;{' '}
                  <span className='text-xs inline-flex ml-2'>NGN</span>
                </span>
              </div>
              <label className='text-sm my-2' htmlFor=''>
                Amount (USD)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='1.40'
                  name=''
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127482;&#127480;{' '}
                  <span className='text-xs inline-flex ml-2'>USD</span>
                </span>
              </div>
            </section>
          </div>
          <div className='flex flex-col w-1/4 md:w-full md:mt-6'>
            <h4 className=''>Selling Price</h4>
            <section className='mt-4 flex flex-col'>
              <label className='text-sm my-2' htmlFor=''>
                Amount (NGN)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='129.40'
                  name=''
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127475;&#127468;{' '}
                  <span className='text-xs inline-flex ml-2'>NGN</span>
                </span>
              </div>
              <label className='text-sm my-2' htmlFor=''>
                Amount (USD)
              </label>
              <div className='relative w-72 md:w-full'>
                <input
                  type='text'
                  placeholder='1.40'
                  name=''
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span className='flex items-center absolute top-2 right-3'>
                  &#127482;&#127480;{' '}
                  <span className='text-xs inline-flex ml-2'>USD</span>
                </span>
              </div>
            </section>
          </div>
          <div className='w-1/4 md:w-full flex flex-col'>
            <h4 className='mb-10'>Action</h4>
            <Button primary text='Update Price' roundedFull />
          </div>
        </div>
      */}
      </div>
    </div>
  );
}
