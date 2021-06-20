import React, { useEffect, useReducer } from 'react';
import Highlight from './Highlight';
import TopStat from './TopStat';
import RecentSalesTable from './RecentSales';
import {
  Bag,
  GiftCardIcon,
  Tickets as TicketsSVG,
  DeliveryIcon,
  // ArrowRight,
} from '../../../svg';
import { fetchMainDashboard } from '../../../actions/shopping';
import shoppingReducer from '../../../reducers/shopping';
import { shopping } from '../../../reducers/initialState';
import { ContextShopping } from '../../../context';

const Main = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const { admin, loading } = state;
  useEffect(() => {
    fetchMainDashboard(dispatch);
  }, [dispatch]);
  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className='flex flex-col tracking-wide md:w-6/12 sm:w-10/12'>
        <Highlight loading={loading} />
      </div>
      <div className='flex flex-col flex-1 w-7/12 md:w-full md:mt-8'>
        <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
          <TopStat
            title='Shopping'
            value={admin.shopping}
            caption='New orders in the last 24 hours'
            svg={<Bag color='white' scale={0.5} />}
            color='lime'
            loading={loading}
          />
          <TopStat
            title='Delivery'
            value={admin.delivery}
            caption='Delivery orders in the last 24 hours'
            svg={<DeliveryIcon color='white' scale={0.5} />}
            loading={loading}
            color='green'
          />
          <TopStat
            title='Tickets'
            value={admin.tickets}
            caption='Tickets sold in the last 24 hours'
            svg={<TicketsSVG color='white' scale={0.5} />}
            color='purple'
            loading={loading}
          />
          <TopStat
            title='Trading'
            value={admin.trading}
            // last
            caption='Items traded in the last 24 hours'
            svg={<GiftCardIcon color='white' scale={2} />}
            color='yellow'
            loading={loading}
          />
        </div>
        <div className='mt-8 mb-4 md:-mx-6 md:bg-white md:py-8 md:px-4'>
          <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
            Recent Sales
          </h3>
          <div className='mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
            <RecentSalesTable />
            {/* <div className="flex justify-between mt-8 pb-8 w-full">
              <span className="text-gray-500">Showing 8 of 100</span>
              <div className="flex items-center text-purple-500">
                See all &nbsp; <ArrowRight />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </ContextShopping.Provider>
  );
};

export default Main;
