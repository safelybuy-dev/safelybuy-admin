import React, { useEffect, useReducer } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import TopStat from './TopStat';
import { Archive, Wallet, Invoice } from '../../svg';
import Highlight from '../Dashboard/Main/Highlight';
import { ContextShopping } from '../../context';
import { shopping } from '../../reducers/initialState';
import shoppingReducer from '../../reducers/shopping';
import { fetchTicketsDashboard } from '../../actions/shopping';

import image6 from '../../assets/images/image6.jpeg';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 capitalize'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const Tickets = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  const { ticketsDashboard, loading } = state;

  useEffect(() => {
    fetchTicketsDashboard(dispatch);
  }, [dispatch]);

  console.log(ticketsDashboard, loading);

  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className='flex flex-col w-full items-start'>
        <Breadcrumb parentText='Tickets' parentLink='/tickets' />
        <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
          <TopStat
            title='Inventory'
            value={ticketsDashboard.inventory}
            caption='Total tickets in inventory'
            svg={<Archive color='#8661ff' scale={1.5} />}
            color='purple'
            link='/tickets/inventory'
            linkText='Manage'
            loading={loading}
          />
          <TopStat
            title='Sold Tickets'
            value={ticketsDashboard.soldTickets}
            caption='Total tickets sold in the last 24 hours'
            svg={<Invoice color='#8661ff' scale={1.7} />}
            color='purple'
            link='/tickets/orders'
            loading={loading}
            linkText='View'
          />
          <TopStat
            title='Sales'
            value={Number(ticketsDashboard.sales).toLocaleString('en-NG', {
              style: 'currency',
              currency: 'NGN',
            })}
            caption='Total sales made in last 24 hours'
            svg={<Wallet color='#8661ff' scale={1} />}
            color='purple'
            loading={loading}
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
              Most Sold Ticket
            </h3>
            <div className='mt-5 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
              <div className='relative'>
                <img
                  className='w-full h-96 object-cover rounded-3xl'
                  src={image6}
                  alt='...'
                />
                <div className='absolute bottom-0 p-16 pb-12 pt-24 md:p-6 md:pb-6 md:pt-6 text-overlay w-full text-white bg-gradient-to-t from-black rounded-3xl'>
                  <h2 className='text-4xl md:text-2xl'>
                    Rema’s Beamer live-in concert
                  </h2>
                  <small className='text-lg md:text-sm'>
                    23 Dec 2020, The Muson Center Lagos
                  </small>
                </div>
              </div>
              <div className='p-16 pt-10 md:p-6 md:pt-4'>
                <div className='flex justify-between flex-wrap md:flex-col'>
                  <KeyValue title='Event Category' value='Concerts' />
                  <KeyValue title='Listing Number' value='#2335412334' />
                  <KeyValue
                    title='Event Date / Time'
                    value='12pm. 12 Sept, 2020'
                  />
                  <KeyValue
                    title='Event Location'
                    value='The Muson Centre, Lagos Island'
                  />
                </div>
                <div className='pt-8 md:pt-4'>
                  <KeyValue
                    title='Event Details'
                    value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContextShopping.Provider>
  );
};

export default Tickets;
