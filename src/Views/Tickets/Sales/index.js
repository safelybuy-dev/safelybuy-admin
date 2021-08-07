import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import OrdersTableView from './OrdersTableView';

const Orders = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Tickets'
        parentLink='/tickets'
        childText='Manage Tickets Sales'
        childLink='/tickets/sales'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Tickets Sales</h2>
      </div>
      <OrdersTableView />
    </div>
  );
};

export default Orders;
