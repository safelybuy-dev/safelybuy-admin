import React from 'react';
import { Link } from 'react-router-dom';
import { AngleRight, Bell, ArrowRight, Invoice, Archive } from 'svg';

const Notifications = ({ notIsVisible, setNotIsVisible, notRef, openNav }) => (
  <div className='relative'>
    <button
      onClick={(e) => {
        if (notIsVisible) setNotIsVisible(false);
        else setNotIsVisible(true);
        e.stopPropagation();
      }}
      className={`transform p-3 focus:outline-none rounded-xl md:rounded-lg shadow-xl md:shadow-lg mr-2 md:mr-1 hover:bg-purple-100 active:shadow-sm active:bg-purple-200 hover:scale-105 active:scale-100 hover:shadow-xl`}
    >
      <Bell />
    </button>
    <div ref={notRef}>
      {notIsVisible && (
        <div
          className={`absolute w-80 -right-24 md:-right-14 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2`}
        >
          <div className='flex justify-between px-6 py-4 border-gray-100 border-b-2'>
            <span className='text-purple-500'>Notifications</span>
            <div className='relative inline-block px-2 py-px text-sm bg-purple-500 text-white rounded-full'>
              3
            </div>
          </div>
          <ul>
            {[
              {
                url: '#',
                text: 'Order #1233434434 has been delivered.',
                svg: <Invoice scale={1.2} />,
                color: 'orange',
              },
              {
                url: '#',
                text: 'Order #1233434434 has been delivered.',
                svg: <Invoice scale={1.2} />,
                color: 'orange',
              },
              {
                url: '#',
                text: 'One or more products are out of stock.',
                svg: <Archive scale={1.2} />,
                color: 'blue',
              },
            ].map((e) => (
              <Link key={Date.now() + Math.random()} to={e.url}>
                <li
                  className={`py-2 px-6 hover:bg-purple-100 flex items-center justify-between`}
                >
                  <div>
                    <div className={`flex text-gray-800`}>
                      <div>
                        <div
                          className={`bg-${e.color}-100 mr-3 mt-2 rounded-full p-2`}
                        >
                          {e.svg}
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        {e.text}
                        <span className='text-xs text-gray-300'>
                          a min. ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='inline-block ml-4'>
                    <AngleRight scale={1.7} />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <button
            onClick={() => {
              setNotIsVisible(false);
              openNav();
            }}
            className='align-center rounded-b-xl hover:bg-purple-100 w-full p-4 border-gray-100 border-t-2'
          >
            <span className='text-purple-500 inline-block mr-4'>See more</span>
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  </div>
);
export default Notifications;
