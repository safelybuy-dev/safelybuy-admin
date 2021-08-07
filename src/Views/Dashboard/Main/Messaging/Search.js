import React from 'react';
import { SearchIcon } from 'svg';

const Search = () => {
  return (
    <div className='relative md:hidden'>
      <input
        className='w-11/12 border-2 border-purple-300 focus:outline-none mb-4 px-8 py-2 rounded-full'
        type='search'
        placeholder='Search chats'
      />
      <span className='absolute top-3 right-16'>
        <SearchIcon />
      </span>
    </div>
  );
};

export default Search;
