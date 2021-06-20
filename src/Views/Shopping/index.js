import React, { useEffect, useReducer } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import TopStat from './TopStat';
import {
  Archive,
  Wallet,
  Invoice,
  // ArrowRight
} from '../../svg';
import Highlight from '../Dashboard/Main/Highlight';
import RecentSalesTable from './RecentSales';
import { ContextShopping } from '../../context';
import { shopping } from '../../reducers/initialState';
import shoppingReducer from '../../reducers/shopping';
import {
  fetchSellers,
  fetchShoppingDashboard,
  fetchShoppingOrders,
} from '../../actions/shopping';

const Shopping = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  const {
    dashboard,
    isLoadingDashboard,
    // dashboardError,
    // orders,
    // isLoadingOrders,
    // ordersError,
  } = state;

  useEffect(() => {
    fetchShoppingOrders(dispatch);
    fetchShoppingDashboard(dispatch);
    fetchSellers(dispatch);
  }, [dispatch]);

  // console.log(state);

  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className='flex flex-col w-full items-start'>
        <Breadcrumb parentText='Shopping' parentLink='/shopping' />
        <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
          <TopStat
            title='Inventory'
            value={dashboard.inventory}
            caption='Total items in inventory'
            svg={<Archive color='#8661ff' scale={1.5} />}
            color='purple'
            link='/shopping/inventory'
            linkText='Manage'
            loading={isLoadingDashboard}
          />
          <TopStat
            title='Orders'
            value={dashboard.orders}
            caption='Total items sold in orders'
            svg={<Invoice color='#8661ff' scale={1.7} />}
            color='purple'
            link='/shopping/orders'
            linkText='View'
            loading={isLoadingDashboard}
          />

          <TopStat
            title='Sales'
            value={Number(dashboard.sales).toLocaleString('en-NG', {
              style: 'currency',
              currency: 'NGN',
            })}
            caption='Total sales made in last 24 hours'
            svg={<Wallet color='#8661ff' scale={1} />}
            color='purple'
            loading={isLoadingDashboard}
          />
        </div>

        <div className='flex pt-12 w-full md:flex-col md:items-center'>
          <div className='tracking-wide md:w-6/12 sm:w-10/12'>
            <Highlight />
          </div>
          <div
            className='mx-4 md:-mx-6 md:mt-6 md:bg-white md:py-8 md:px-4'
            style={{ width: 'calc(100% + 3rem)' }}
          >
            <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
              Recent Sales
            </h3>
            <div className='mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
              <RecentSalesTable />
              {/* <div className='flex justify-between mt-8 pb-8 w-full'>
                <span className='text-gray-500'>Showing 8 of 100</span>
                <div className='flex items-center text-purple-500'>
                  See all &nbsp; <ArrowRight />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </ContextShopping.Provider>
  );
};

export default Shopping;
