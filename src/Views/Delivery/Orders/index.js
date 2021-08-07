import React, { useEffect, useReducer } from 'react';
import { fetchDeliveryOrders } from 'actions/shopping';
import Breadcrumb from 'components/Breadcrumb';
import { shopping } from 'reducers/initialState';
import shoppingReducer from 'reducers/shopping';
import OrdersTableView from './OrdersTableView';

const Orders = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  const { deliveryOrders, loading } = state;

  useEffect(() => {
    fetchDeliveryOrders(dispatch);
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Delivery'
        parentLink='/delivery'
        childText='Manage Delivery Orders'
        childLink='/delivery/orders'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Delivery Orders</h2>
      </div>
      <OrdersTableView
        loading={loading}
        orders={deliveryOrders}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Orders;
