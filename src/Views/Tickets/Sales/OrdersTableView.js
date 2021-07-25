import React, { useState } from 'react';
// import TableHeader from './TableHeader';
// import TableBody from "./TableBody";
import OrderDetails from './OrderDetails';

const OrdersTableView = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl shadow-lg p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader /> */}
        <div className='mt-20 mb-20 flex justify-center'>
          No ticket sales yet
        </div>
        {/* <TableBody setSelectedOrder={setSelectedOrder} /> */}
      </div>
      <OrderDetails
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </div>
  );
};

export default OrdersTableView;
