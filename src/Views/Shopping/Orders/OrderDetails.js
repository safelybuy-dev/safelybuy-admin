import React from 'react';
import { Card, CloseIcon, Home, Time } from 'svg';
import image5 from 'assets/images/image5.png';
import Button from 'components/Button';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 capitalize'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const KeyValueWithIcon = ({ title, value, heading, icon }) => (
  <div className='flex my-3 md:my-8'>
    <div className='flex mt-1'>{icon}</div>
    <div className='flex ml-4 flex-col'>
      <small className='text-gray-500'>{title}</small>
      <h5 className='text-xl'>{heading}</h5>
      <p className='text-gray-800'>{value}</p>
    </div>
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
          <h3 className='text-2xl'>Order #00312-2332-343</h3>
          <span
            onClick={() => setSelectedOrder(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='mt-2 text-yellow-400 hidden md:block'>
          <div className='relative w-8 h-4 inline-block'>
            <div className='absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block'></div>
            <div className='absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block'></div>
          </div>
          Shipped
        </div>
        <p className='mb-10 hidden md:block'>11th - Sept - 2020</p>
        <div className='flex flex-col mr-4 md:mr-0'>
          <div className='flex w-full pb-8 border-b border-gray-100 justify-between md:flex-col'>
            <div className='flex items-center'>
              <img
                className='w-28 object-cover md:w-24 rounded-xl h-28 md:h-24'
                src={image5}
                alt='order representation'
              />
              <div className='ml-6'>
                <p className=''>
                  Apple iPad Air 2 -<br /> Cellular Wifi Gray
                </p>
                <p className='text-sm hidden md:block'>
                  <span className='text-gray-400'>Quantity:</span> 1 item
                </p>
                <p className='text-sm hidden md:block'>
                  <span className='text-gray-400'>Price:</span> 79,900NGN
                </p>

                <div className='mt-2 text-yellow-400 md:hidden'>
                  <div className='relative w-8 h-4 inline-block'>
                    <div className='absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block'></div>
                    <div className='absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block'></div>
                  </div>
                  Shipped
                </div>
              </div>
            </div>
            <div className='py-6 text-center hidden md:block'>
              <Button secondary full roundedLg>
                Track Order
              </Button>
            </div>
            <div className='flex flex-col md:hidden'>
              <KeyValue title='Quantity' value='2' />
              <KeyValue title='Contact Buyer' value='Elvis Presely' />
            </div>
            <div className='flex flex-col md:hidden'>
              <KeyValue title='Price' value='350,974NGN' />
              <KeyValue
                title='Contact Email'
                value={
                  <a
                    className='text-purple-500'
                    href='mailto:elvispresley@gmail.com'
                  >
                    elvispresley@gmail.com
                  </a>
                }
              />
            </div>
            <div className='flex flex-col md:hidden'>
              <KeyValue title='SKU' value='SB-#2123434343' />
              <KeyValue title='Payment Type' value='Payment on Delivery' />
            </div>
          </div>
          <div className='flex flex-col mt-8 w-full md:ml-0 md:mt-4'>
            <h4 className='text-xl text-purple-500 md:hidden'>
              Delivery Information
            </h4>
            <div className='flex mt-6 md:mt-0 flex-wrap'>
              <div className='flex w-full justify-between md:flex-col'>
                <KeyValueWithIcon
                  icon={<Home />}
                  title='Shipping information'
                  heading='Adegoke Aramide.'
                  value={
                    <span>
                      11, Ota-Etiosa road, Palmgrove,
                      <br />
                      Redemption State, LGA.
                      <br />
                      +2348234920382
                    </span>
                  }
                />
                <KeyValueWithIcon
                  icon={<Card />}
                  title='Payment method'
                  heading='Pay on delivery'
                />
                <KeyValueWithIcon
                  icon={<Time />}
                  title='Estimated delivery date'
                  heading='13- Sept - 2020, 11:00 - 15:00'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
