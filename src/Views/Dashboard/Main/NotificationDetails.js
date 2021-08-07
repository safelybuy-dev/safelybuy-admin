/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CloseIcon } from 'svg';
import moment from 'moment';
import { Invoice, Settings } from 'svg';
import { Link } from 'react-router-dom';

export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const isYesterday = (someDate) => {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return (
    someDate.getDate() === yesterday.getDate() &&
    someDate.getMonth() === yesterday.getMonth() &&
    someDate.getFullYear() === yesterday.getFullYear()
  );
};

const colors = {
  profile: 'purple',
  orders: 'orange',
};

const svgs = {
  profile: <Settings scale={1.2} />,
  orders: <Invoice scale={1.2} />,
};

const data = [
  {
    type: 'orders',
    message: 'Order #1233434434 has been delivered.',
    time: new Date(Date.now() - 60 * 1000),
    url: '#',
  },
  {
    type: 'orders',
    message: 'Order #1233434434 has been delivered.',
    time: new Date(Date.now() - 2 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'profile',
    message: 'Do ensure you complete your profile.',
    time: new Date(Date.now() - 26 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'profile',
    message: 'Do ensure you complete your profile.',
    time: new Date(Date.now() - 29 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'orders',
    message: 'Order #1233434434 has been delivered.',
    time: new Date(Date.now() - 44 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'profile',
    message: 'Do ensure you complete your profile.',
    time: new Date(Date.now() - 45 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'orders',
    message: 'Order #1233434434 has been delivered.',
    time: new Date(Date.now() - 80 * 3600 * 1000),
    url: '#',
  },
  {
    type: 'profile',
    message: 'Do ensure you complete your profile.',
    time: new Date(Date.now() - 90 * 3600 * 1000),
    url: '#',
  },
];

const dataByDay = (data) => {
  // create a key for today
  // create key for yesterday
  const obj = { today: [], yesterday: [] };
  // for each item in data,
  data.forEach((e) => {
    // if time falls to today, add to today.
    if (isToday(e.time)) obj.today.push(e);
    // else if it falls to yesterday, add to yesterday.
    else if (isYesterday(e.time)) obj.yesterday.push(e);
    // else check if that date already has a key.
    // If it has, add it to it
    // else create a key for the date and the item to it.
    else {
      if (!obj[new Date(e.time).toLocaleDateString('en-GB')])
        obj[new Date(e.time).toLocaleDateString('en-GB')] = [];
      obj[new Date(e.time).toLocaleDateString('en-GB')].push(e);
    }
  });
  return obj;
  // for every key in obj, there will be a tab with the key as title
};

const NotificationItem = ({ color, text, svg, time, url }) => (
  <Link key={Date.now() + Math.random()} to={url}>
    <div className={`py-3 mr-10 md:mr-5 hover:bg-${color}-50`}>
      <div className={`flex text-gray-800 w-full items-center`}>
        <div className={`bg-${color}-100 mr-3 rounded-full p-2`}>{svg}</div>
        <div className='flex justify-between items-center w-full'>
          {text}
          <span className='text-xs text-gray-400 ml-2 text-right'>{time}</span>
        </div>
      </div>
    </div>
  </Link>
);

const NotificationDetails = ({ closeNav }) => {
  return (
    <div
      id='myNav'
      className='h-full flex flex-row-reverse w-0 fixed bg-white z-40 top-0 right-0 overflow-x-hidden transition-all duration-300 ease-in-out'
    >
      <div className='overlay-content pl-8 py-16 md:py-6 relative flex flex-col opacity-100 relative w-4/12 lg:w-7/12 md:w-full bg-white min-h-full'>
        <div className='flex justify-between items-center w-full pr-6 text-3xl tracking-wide'>
          <h3 className='text-purple-500'>Notifications</h3>
          <a
            className='closebtn opacity-40 hover:opacity-90 z-20 cursor-pointer'
            onClick={closeNav}
          >
            <CloseIcon scale={1.3} />
          </a>
        </div>
        <div className='flex flex-col pt-10 md:pt-4'>
          {Object.keys(dataByDay(data)).map((e, n) => {
            if (isNaN(Date.parse(e)))
              return (
                <div
                  className={`${
                    n === 0 ? 'border-t-0' : 'border-t-2'
                  } border-gray-200 my-4`}
                  key={Math.random()}
                >
                  <div className='capitalize text-sm text-gray-400 py-6'>
                    {e}
                  </div>
                  <div className='flex flex-col'>
                    {dataByDay(data)[e].map((i) => (
                      <NotificationItem
                        key={Math.random()}
                        text={i.message}
                        color={colors[i.type]}
                        url={i.url}
                        time={moment(
                          i.time,
                          'MMMM Do YYYY, h:mm:ss a'
                        ).fromNow()}
                        svg={svgs[i.type]}
                      />
                    ))}
                  </div>
                </div>
              );
            else
              return (
                <div
                  className='border-t-2 mb-2 border-gray-200 first:border-t-0'
                  key={Math.random()}
                >
                  <div className='text-sm text-gray-400 py-6 md:py-3'>
                    {moment(new Date(e.split('/').reverse().join('/'))).format(
                      'dddd Do MMM, YYYY'
                    )}
                  </div>
                  <div className='flex flex-col'>
                    {dataByDay(data)[e].map((i) => (
                      <NotificationItem
                        key={Math.random()}
                        text={i.message}
                        color={colors[i.type]}
                        url={i.url}
                        time={moment(
                          i.time,
                          'MMMM Do YYYY, h:mm:ss a'
                        ).fromNow()}
                        svg={svgs[i.type]}
                      />
                    ))}
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <div
        onClick={closeNav}
        className='flex-grow bg-purple-200 opacity-70'
      ></div>
    </div>
  );
};

export default NotificationDetails;
