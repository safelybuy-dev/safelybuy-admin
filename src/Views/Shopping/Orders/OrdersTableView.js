import React, { useState } from 'react';
// import TableHeader from "./TableHeader";
import TableBody from './TableBody';
import OrderDetails from './OrderDetails';

const OrdersTableView = ({ loading, orders, dispatch }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl shadow-lg p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader /> */}
        {loading ? (
          <div className='mt-20 mb-20 flex justify-center'>
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            <span className='text-purple-500 animate-pulse'>
              Loading orders...
            </span>
          </div>
        ) : !loading && orders.length === 0 ? (
          <div className='mt-20 mb-20 flex justify-center'>
            No order available
          </div>
        ) : (
          <TableBody setSelectedOrder={setSelectedOrder} />
        )}
      </div>
      <OrderDetails
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </div>
  );
};

export default OrdersTableView;
