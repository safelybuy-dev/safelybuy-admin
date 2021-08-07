import React from 'react';
import {
  // AngleRight,
  SearchIcon,
} from 'svg';
// import ItemsPerPage from "./ItemsPerPage";
// import { useComponentVisible } from "hooks";

export default function TableHeader() {
  // const {
  //   ref: itemsRef,
  //   isComponentVisible: isItemsVisible,
  //   setIsComponentVisible: setIsItemVisible,
  // } = useComponentVisible(false);
  return (
    <div className='flex justify-between w-full md:flex-col md:flex-wrap'>
      {/* Search box */}
      <div className='flex md:w-full md:flex-col md:flex-wrap'>
        <div className='relative w-96 md:w-full'>
          <input
            className='border-2 border-purple-100 w-full focus:outline-none mb-4 px-12 py-2 rounded-full'
            type='search'
            placeholder='Search referrer and referred'
          />
          <span className='absolute top-3 left-4'>
            <SearchIcon color='#8661FF' />
          </span>
        </div>
      </div>
    </div>
  );
}
