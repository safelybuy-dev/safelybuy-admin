import React, { useEffect, useReducer } from 'react';
import moment from 'moment';
import Breadcrumb from 'components/Breadcrumb';
import TopStat from './TopStat';
import {
  Wallet,
  History,
  AreaChart,
  BitcoinAlt,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  LoadingIcon,
} from 'svg';
import RecentSalesTable from './RecentSales';
import { ContextBitcoin } from 'context';
import { bitcoin } from 'reducers/initialState';
import bitcoinReducer from 'reducers/bitcoin';
import { fetchBitcoinDashboard, fetchBitcoinHistory } from 'actions/bitcoin';

const LiveStat = ({ dollar, percentage, time }) => (
  <div className='flex shadow-md items-center hover:shadow-2xl my-6 py-4 px-6 rounded-md'>
    <div className='w-5/12'>
      <span className=''>1 BTC</span>
      <span className='inline-block mx-2'>=</span>
      <span className=''>{dollar}</span>
    </div>
    <div className='w-4/12 text-center'>
      {' '}
      <span
        className={`inline-flex text-${
          percentage > 0 ? 'green' : percentage < 0 ? 'red' : 'gray'
        }-600 items-center`}
      >
        {percentage > 0 ? '+' : percentage < 0 ? '-' : null}
        {Math.abs(percentage)}%<span className='inline-block ml-1'></span>
        {percentage > 0 ? (
          <ArrowUp
            scale={1.1}
            color='rgba(5, 150, 105, var(--tw-text-opacity))'
          />
        ) : percentage < 0 ? (
          <ArrowDown
            scale={1.1}
            color='rgba(220, 38, 38, var(--tw-text-opacity))'
          />
        ) : null}
      </span>
    </div>
    <div className='w-3/12 text-center'>
      <span className='text-gray-400 text-xs'>{time}</span>
    </div>
  </div>
);

const Bitcoin = () => {
  const [state, dispatch] = useReducer(bitcoinReducer, bitcoin);

  const {
    dashboard,
    // dashboardError
    // history,
    // loadingHistory,
    // historyError,
    loadingDashboard,
    recent_rates,
  } = state;

  useEffect(() => {
    fetchBitcoinDashboard(dispatch);
    fetchBitcoinHistory(dispatch);
  }, [dispatch]);

  // console.log(
  //   // dashboard
  //   // dashboardError,
  //   // history,
  //   // loadingHistory,
  //   // historyError,
  //   // loadingDashboard,
  //   recent_rates
  // );

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('Bitcoin rates updated');
      fetchBitcoinDashboard(dispatch);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContextBitcoin.Provider value={[state, dispatch]}>
      <div className='flex flex-col w-full items-start'>
        <Breadcrumb parentText='Bitcoin' parentLink='/bitcoin' />
        <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
          <TopStat
            title='Bitcoin History'
            value={dashboard?.history}
            caption='Total times bitcoin has been traded in the last 3 months'
            svg={<History color='#8661ff' />}
            color='purple'
            link='/bitcoin/history'
            linkText='View History'
            loading={loadingDashboard}
          />
          <TopStat
            title='Bitcoin Rates'
            value={`${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(dashboard?.rate)}`}
            caption='The buying and selling price of Bitcoin'
            svg={<AreaChart />}
            color='purple'
            link='/bitcoin/price'
            linkText='Set Price'
            loading={loadingDashboard}
          />
          <TopStat
            title='Sales'
            value={`${new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN',
            }).format(dashboard?.sales)}`}
            caption='Total sales made in last 24 hours'
            svg={<Wallet color='#8661ff' scale={1} />}
            color='purple'
            loading={loadingDashboard}
          />
        </div>

        <div className='flex items-start pt-12 w-full md:flex-col md:items-center'>
          <div className='tracking-wide w-5/12 md:w-full rounded-3xl p-10 bg-white'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <span className='inline-block px-3 py-2 mr-2 bg-yellow-400 rounded-full'>
                  <BitcoinAlt />
                </span>
                <span className='text-xl'>Bitcoin</span>
              </div>
              <span className='text-xl ml-4 inline-block text-gray-400'>
                Live Updates
              </span>
              <span
                onClick={() => fetchBitcoinDashboard(dispatch)}
                className='flex items-center border rounded-lg px-2 py-1 text-purple-400 hover:shadow-lg cursor-pointer active:shadow:md'
              >
                <svg
                  className='inline-block'
                  width='16'
                  height='16'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.66667 18.1852L4.11082 17.7818L4.10317 17.7734L4.09521 17.7653L3.66667 18.1852ZM5.13333 19.8001V20.4001H5.73333V19.8001H5.13333ZM10.2667 21.2409L10.2878 20.6413L10.2244 21.8395L10.2667 21.2409ZM11 11.0001H10.4C10.4 11.1592 10.4632 11.3118 10.5757 11.4243L11 11.0001ZM20.6667 11.0001C20.6667 16.3388 16.3388 20.6667 11 20.6667V21.8667C17.0015 21.8667 21.8667 17.0016 21.8667 11.0001H20.6667ZM11 1.3334C16.3388 1.3334 20.6667 5.66131 20.6667 11.0001H21.8667C21.8667 4.99857 17.0015 0.133398 11 0.133398V1.3334ZM11 0.133398C4.99851 0.133398 0.133333 4.99857 0.133333 11.0001H1.33333C1.33333 5.66131 5.66125 1.3334 11 1.3334V0.133398ZM4.09521 17.7653C2.38611 16.0212 1.33333 13.6342 1.33333 11.0001H0.133333C0.133333 13.9607 1.31814 16.6459 3.23812 18.6052L4.09521 17.7653ZM3.22252 18.5886L4.68918 20.2035L5.57748 19.3967L4.11082 17.7818L3.22252 18.5886ZM11 20.6667C10.7675 20.6667 10.5371 20.6585 10.3089 20.6424L10.2244 21.8395C10.4807 21.8575 10.7393 21.8667 11 21.8667V20.6667ZM11.0211 20.6671L10.2878 20.6413L10.2456 21.8406L10.9789 21.8664L11.0211 20.6671ZM10.4 4.40006V11.0001H11.6V4.40006H10.4ZM10.5757 11.4243L14.9757 15.8243L15.8243 14.9758L11.4243 10.5758L10.5757 11.4243ZM0 20.4001H5.13333V19.2001H0V20.4001ZM5.73333 19.8001V14.6667H4.53333V19.8001H5.73333Z'
                    fill='#8661FF'
                  />
                </svg>
              </span>
            </div>
            <div className='py-8'>
              {loadingDashboard && !recent_rates[0] && (
                <div className='mt-20 mb-20 flex justify-center'>
                  <LoadingIcon color='gray' />
                  <span className='text-gray-500 animate-pulse'>
                    Loading rates...
                  </span>
                </div>
              )}
              {recent_rates &&
                recent_rates.map((rate) => (
                  <LiveStat
                    key={Math.random()}
                    dollar={new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(rate.rate)}
                    percentage={rate.percentage}
                    time={moment(
                      new Date(rate.time),
                      'MMMM Do YYYY, h:mm:ss a'
                    ).fromNow()}
                  />
                ))}
            </div>
          </div>
          <div className='ml-12 md:ml-0 md:mt-6 md:bg-white md:py-8 w-7/12 md:w-full md:px-4'>
            <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
              Recent Sales
            </h3>
            <div className='mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
              <RecentSalesTable />
              <div className='flex justify-between mt-8 pb-8 w-full'>
                <span className='text-gray-500'>Showing 8 of 100</span>
                <div className='flex items-center text-purple-500'>
                  See all &nbsp; <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContextBitcoin.Provider>
  );
};

export default Bitcoin;
