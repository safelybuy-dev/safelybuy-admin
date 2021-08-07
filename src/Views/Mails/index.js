import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
const index = () => {
  return (
    <div className='w-full'>
      <Breadcrumb parentText='Email Marketing' parentLink='/mails' />
      <h2 className='text-xl'>Email Marketing</h2>
      <div className='bg-white p-16 md:p-6 w-full flex flex-col rounded-3xl mt-6'>
        <div className='w-full flex md:flex-col'>
          <div className='w-6/12 md:w-full'>
            <label className='text-sm my-2' htmlFor='mailTemplate'>
              Template
            </label>
            <div className='relative md:w-full mb-6 mt-2'>
              <input
                type='text'
                placeholder='Delivery Shipped'
                name='mailTemplate'
                id='mailTemplate'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
            </div>
            <label className='text-sm my-2' htmlFor='mailTo'>
              Mail to
            </label>
            <div className='relative md:w-full mb-6 mt-2'>
              <input
                type='text'
                placeholder='Don Norman'
                name='mailTo'
                id='mailTo'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
            </div>
            <label className='text-sm my-2' htmlFor='mailTitle'>
              Title
            </label>
            <div className='relative md:w-full mb-6 mt-2'>
              <input
                type='text'
                placeholder='Discounts and Promotion'
                name='mailTitle'
                id='mailTitle'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
            </div>
          </div>
          <div className='w-6/12 ml-8 md:ml-0 md:w-full md:mb-6'>
            <label className='text-sm my-2' htmlFor='mailBody'>
              Message Body
            </label>
            <div className='relative md:w-full mt-2'>
              <textarea
                type='text'
                placeholder='Enter a custom message'
                name='mailBody'
                id='mailBody'
                className='border w-full border-gray-200 rounded-xl px-6 py-2 focus:outline-none focus:shadow-xl h-72'
              />
            </div>
          </div>
        </div>
        <div className='flex space-between md:flex-col w-6/12 md:w-full'>
          <Button secondary roundedFull full>
            Save as template
          </Button>
          <div className='p-8 md:p-2'></div>
          <Button primary roundedFull full>
            Send mail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
