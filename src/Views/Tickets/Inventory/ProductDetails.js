import React from 'react';
import { CloseIcon } from 'svg';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-500'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const ProductDetails = ({ selectedProduct, setSelectedProduct }) => {
  if (!selectedProduct) return null;
  console.log(selectedProduct);
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen py-40 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <h3 className='text-2xl'>Event Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='flex mr-4 md:mr-0 md:flex-col'>
          <div className='flex flex-col w-6/12 md:w-full'>
            <div className='border-b border-gray-100 pb-4 w-full'>
              {selectedProduct.images[0] ? (
                <img
                  className='w-28 md:w-24 rounded-xl object-cover h-28 md:h-24'
                  alt={selectedProduct.title}
                  src={selectedProduct.images[0]?.image_url}
                />
              ) : (
                'No image provided'
              )}
            </div>
            <div className='flex flex-wrap'>
              {selectedProduct.images.map((e) => (
                <img
                  className='w-28 md:w-24 object-cover rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200'
                  alt={selectedProduct.title}
                  src={e.image_url}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col w-6/12 ml-4 md:w-full'>
            <div className='flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4'>
              <h4 className='text-xl text-purple-500'>Display Information</h4>
              <div className='flex mt-6 flex-col'>
                <div className='flex justify-between w-full'>
                  <KeyValue title='Event Category' value='Concerts' />
                  <KeyValue title='Event Title' value={selectedProduct.title} />
                </div>
                <div className='flex justify-between w-full'>
                  <KeyValue
                    title='Event Details'
                    value={selectedProduct.details}
                  />
                </div>
                <div className='flex justify-between w-full'>
                  <KeyValue
                    title='Event Date/Time'
                    value='12pm. 12 Sept, 2020'
                  />
                  <KeyValue
                    title='Event Location'
                    value={selectedProduct.location}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full pt-4 md:ml-0 md:mt-4'>
              <h4 className='text-xl text-purple-500'>Ticket Number & Seats</h4>
              <div className='flex mt-6 flex-col'>
                <KeyValue
                  title='Listing Number'
                  value={selectedProduct.listing_number}
                />
                {selectedProduct.seats.length > 0 && (
                  <h5 className='text-lg text-purple-500'>Seat Category</h5>
                )}
                {selectedProduct.seats.map((seat) => (
                  <div className='flex border-b justify-between w-full'>
                    <KeyValue title='Seat Type' value={seat.type} />
                    <KeyValue title='Seat Price' value={seat.price} />
                    <KeyValue title='Available Seats' value={seat.available} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
