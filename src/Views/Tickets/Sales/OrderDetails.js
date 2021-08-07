import React from 'react';
import { CloseIcon } from 'svg';
import image6 from 'assets/images/image6.jpeg';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 capitalize'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const ProductDetails = ({ selectedOrder, setSelectedOrder }) => {
  if (!selectedOrder) return null;
  return (
    <div
      onClick={() => setSelectedOrder(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen pt-40 px-40 md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <h3 className='text-2xl md:text-lg'>Ticket #00312-2332-343</h3>
          <span
            onClick={() => setSelectedOrder(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3 md:p-2'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='flex flex-col mr-4 md:mr-0'>
          <div className='flex w-full pb-8 justify-between md:flex-col'>
            <div className='relative w-8/12 md:w-full'>
              <img
                className='w-full h-96 object-cover rounded-3xl'
                src={image6}
                alt='...'
              />
              <div className='absolute bottom-0 p-16 pb-12 pt-24 md:p-6 md:pb-6 md:pt-6 text-overlay w-full text-white bg-gradient-to-t from-black rounded-3xl'>
                <h2 className='text-4xl md:text-2xl'>
                  Rema’s Beamer live-in concert
                </h2>
                <small className='text-lg md:text-sm'>
                  23 Dec 2020, The Muson Center Lagos
                </small>
              </div>
            </div>
            <div className='ml-20 md:ml-0 w-4/12 md:w-full md:px-4'>
              <div className='flex justify-between w-full'>
                <KeyValue title="Buyer's Name" value='Elvis Presely' />
                <KeyValue title='Total Price (Tax Incl.)' value='350,974NGN' />
              </div>
              <div className='flex justify-between w-full'>
                <KeyValue title='Ticket Quantity' value='2' />
                <KeyValue title='Total Order Number' value='#2123434343' />
              </div>
              <hr className='my-8' />
              <h4 className='text-xl text-purple-500'>Ticket Information</h4>
              <div className='flex justify-between w-full'>
                <KeyValue title='Seat type' value='VVIP' />
                <KeyValue title='Seat Price' value='15,000NGN' />
              </div>
              <div className='flex justify-between w-full'>
                <KeyValue title='Seat type' value='Table for 6' />
                <KeyValue title='Seat Price' value='335,000NGN' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
