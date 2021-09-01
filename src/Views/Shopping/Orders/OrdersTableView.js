import React, { useState } from 'react';
// import TableHeader from "./TableHeader";
import TableBody from './TableBody';
import OrderDetails from './OrderDetails';
import { LoadingIcon } from 'svg';

const OrdersTableView = ({ loading, orders, dispatch, sellers, customers }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl shadow-lg p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader /> */}
        {loading ? (
          <div className='mt-20 mb-20 flex justify-center'>
            <LoadingIcon />
            <span className='text-purple-500 animate-pulse'>
              Loading orders...
            </span>
          </div>
        ) : !loading && orders.length === 0 ? (
          <div className='mt-20 mb-20 flex justify-center'>
            No order available
          </div>
        ) : (
          <TableBody
            orders={orders}
            setSelectedOrder={setSelectedOrder}
            dispatch={dispatch}
            sellers={sellers}
            customers={customers}
          />
        )}
      </div>
      <OrderDetails
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        customers={customers}
      />
    </div>
  );
};

export default OrdersTableView;
