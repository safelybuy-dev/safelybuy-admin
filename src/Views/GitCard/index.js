import React, { useEffect, useReducer } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import TopStat from '../Delivery/TopStat';
import {
  Wallet,
  History,
  AreaChart,
  //  ArrowRight
} from 'svg';
import Highlight from './Highlight';
// import RecentSalesTable from './RecentSales';
import { ContextShopping } from 'context';
import shoppingReducer from 'reducers/shopping';
import { shopping } from 'reducers/initialState';
import { fetchGiftcardDashboard } from 'actions/shopping';

const Giftcard = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  // const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { giftcard, loading } = state;
  console.log(giftcard, loading);

  useEffect(() => {
    fetchGiftcardDashboard(dispatch);
    // fetchCustomers(dispatch);
  }, [dispatch]);

  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className='flex flex-col w-full items-start'>
        <Breadcrumb parentText='Giftcard' parentLink='/giftcard' />
        <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
          <TopStat
            title='Giftcard History'
            value={0}
            caption='Total times a giftcard has been traded in the last 3 months'
            svg={<History color='#8661ff' />}
            color='purple'
            link='/giftcard/history'
            linkText='View history'
            loading={loading}
          />
          <TopStat
            title='Giftcard Rates'
            value={giftcard.rates?.length && giftcard.rates[0]}
            caption='The buying and selling price of giftcards'
            svg={<AreaChart />}
            color='purple'
            link='/giftcard/prices'
            linkText='Set Rates'
            loading={loading}
          />
          <TopStat
            title='Sales'
            value={'₦' + giftcard.sales}
            caption='Total sales made in last 24 hours'
            svg={<Wallet color='#8661ff' scale={1} />}
            color='purple'
            loading={loading}
          />
        </div>

        <div className='flex pt-12 w-full md:flex-col md:items-center'>
          <div className='tracking-wide w-96 md:w-6/12 sm:w-10/12'>
            <Highlight loading={loading} />
          </div>
          <div className='mx-4 md:-mx-6 md:mt-6 md:bg-white md:py-8 md:px-4 w-full'>
            <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
              Recent Sales
            </h3>
            <div className='mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
              {/* <RecentSalesTable
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
              /> */}
              {/* <div className='flex justify-between mt-8 pb-8 w-full'>
                <span className='text-gray-500'>Showing 8 of 100</span>
                <div className='flex items-center text-purple-500'>
                  See all &nbsp; <ArrowRight />
                </div>
              </div> */}
              No sales yet.
            </div>
          </div>
        </div>
      </div>
    </ContextShopping.Provider>
  );
};

export default Giftcard;
