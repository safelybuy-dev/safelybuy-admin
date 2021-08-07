import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import OrdersTableView from './OrdersTableView';

const Orders = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Bitcoin'
        parentLink='/bitcoin'
        childText='Transaction History'
        childLink='/bitcoin/history'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Transaction History</h2>
      </div>
      <OrdersTableView />
    </div>
  );
};

export default Orders;
