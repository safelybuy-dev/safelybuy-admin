import React from 'react';
import moment from 'moment';
import { isToday } from '../NotificationDetails';
import person3 from 'assets/images/image3.jpeg';
import { PaperClip, Send, AngleRight } from 'svg';

const Chat = ({ selectedContact, setSelectedContact }) => {
  if (!selectedContact) return null;
  return (
    <div
      className='w-7/12 md:w-full bg-white border-r flex md:flex-1 border-b relative overflow-scroll md:border-0'
      style={{ flexFlow: 'column' }}
    >
      <header className='sticky md:fixed md:pl-6 md:pt-4 md:top-0 md:left-0 md:z-40 w-full z-10 bg-white shadow-inner md:shadow-none px-4 border-b py-4 border-gray-200'>
        {selectedContact && (
          <div
            className='hidden md:block text-gray-500 z-30 -mt-6 p-4 -ml-6 pl-4 w-full bg-white'
            onClick={() => setSelectedContact(null)}
          >
            <span
              onClick={() => setSelectedContact(null)}
              className='inline-block text-gray-200 transform rotate-180 mr-2'
            >
              <AngleRight scale={1.4} color='#9CA3AF' />
            </span>
            Messaging
          </div>
        )}
        <h3 className='text-2xl'>{selectedContact.name}</h3>
        <span
          className={`inline-block w-3 h-3 mr-2 bg-${
            selectedContact.status === 'online' ? 'green' : 'gray'
          }-400 rounded-full`}
        ></span>
        <span className='capitalize text-gray-400'>
          {selectedContact.status}
        </span>
      </header>
      <div className='flex md:fixed md:left-0 md:px-4 md:pb-44 md:z-50 md:w-full md:h-full bg-white flex-1 overflow-y-scroll flex-col py-6'>
        {selectedContact.messages.map((message) => (
          <div
            key={Math.random()}
            className={`p-6 md:py-4 md:px-1 text-sm md:text-xs flex ${
              message.sent ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`flex items-start ${
                message.sent ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`relative ${message.sent ? 'ml-4' : 'mr-4'}`}>
                <img
                  className='rounded-full flex-shrink-0'
                  height='50'
                  width='50'
                  src={!message.sent ? selectedContact.imageUrl : person3}
                  alt={selectedContact.name}
                />
                <span
                  className={`inline-block border border-white w-3 h-3 mr-2 bg-${
                    selectedContact.status === 'online' || message.sent
                      ? 'green'
                      : 'gray'
                  }-400 rounded-full bottom-1 absolute left-10`}
                ></span>
              </div>
              <div className={!message.sent ? 'text-left' : 'text-right'}>
                <span className='inline-block px-3 font-semibold'>
                  {!message.sent ? selectedContact.name : 'Me'}
                </span>
                <span className='opacity-40'>
                  {isToday(new Date(message.time))
                    ? 'Today, ' + moment(message.time).format('hh:mm a')
                    : moment(message.time).format('MMM D, hh:mm a')}
                </span>
                <div
                  className={`${
                    message.sent ? 'bg-gray-200' : 'border border-gray-200'
                  } px-4 mt-2 py-2 rounded-lg shadow-inner`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='sticky md:fixed z-50 bottom-0 md:w-full bg-white items-center flex justify-center bottom-0 right-0'>
        <span className='inline-block mr-2'>
          <PaperClip />
        </span>
        <input
          className='w-11/12 md:w-10/12 border-2 border-purple-300 focus:outline-none mb-2 px-8 md:px-6 py-3 md:py-2 rounded-full'
          type='search'
          placeholder='Type a message...'
        />
        <span
          style={{ top: '0.4rem', right: '1.5rem' }}
          className='absolute inline-block top-2 bg-green-50 p-3 md:p-2 rounded-full right-12 md:right-10'
        >
          <Send scale={1.1} />
        </span>
      </div>
    </div>
  );
};

export default Chat;
