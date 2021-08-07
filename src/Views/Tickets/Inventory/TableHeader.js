import React from 'react';
import { AngleRight, SearchIcon } from 'svg';
// import SortBy from "./SortBy";
import ItemsPerPage from './ItemsPerPage';
import { useComponentVisible } from 'hooks';

export default function TableHeader({ active, setActive }) {
  // const {
  //   ref: sortRef,
  //   isComponentVisible: isSortVisible,
  //   setIsComponentVisible: setIsSortVisible,
  // } = useComponentVisible(false);
  const {
    ref: itemsRef,
    isComponentVisible: isItemsVisible,
    setIsComponentVisible: setIsItemVisible,
  } = useComponentVisible(false);
  return (
    <div className='flex justify-between w-full md:flex-col md:flex-wrap'>
      {/* Search box */}
      <div className='flex md:w-full md:flex-col md:flex-wrap'>
        <div className='relative w-96 md:w-full'>
          <input
            className='border-2 border-purple-100 w-full focus:outline-none mb-4 px-12 py-2 rounded-full'
            type='search'
            placeholder='Search by SKU, Product Name...'
          />
          <span className='absolute top-3 left-4'>
            <SearchIcon color='#8661FF' />
          </span>
        </div>
        {/* Filter Items per page page
        <SortBy
          selectRef={sortRef}
          isVisible={isSortVisible}
          setIsVisible={setIsSortVisible}
        /> */}
      </div>
      <div className='flex items-center md:w-full md:border-t md:border-b md:mt-4 md:py-4 md:justify-between'>
        <ItemsPerPage
          selectRef={itemsRef}
          isVisible={isItemsVisible}
          setIsVisible={setIsItemVisible}
        />
        <div className='flex items-center md:w-1/2 md:justify-center'>
          Page
          <input
            className='inline-block py-1 w-8 text-center mx-1 border rounded-md'
            defaultValue={1}
          />
          of 5
          <div className='flex ml-3'>
            <span className='mr-3 transform rotate-180'>
              <AngleRight scale={1.5} />
            </span>
            <span className=''>
              <AngleRight scale={1.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
