import React, { useState } from 'react';
import TabHeader from './TabHeader';
// import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ProductDetails from './ProductDetails';
import SellerDetails from './SellerDetails';
import {LoadingIcon} from '../../../svg';

const InventoryTableView = ({ loading, items, dispatch }) => {
  const [active, setActive] = useState('all');
  // const [filterInput, setFilterInput] = useState('');
  // const handleFilterChange = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilterInput(value);
  // };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  // console.log(filterInput);
  return (
    <div className='w-full mt-8'>
      <TabHeader
        items={items}
        active={active}
        setActive={setActive}
        length={items?.length}
        activeLength={items.filter((item) => item.status === 'active').length}
        inactiveLength={items.filter((item) => item.status !== 'active').length}
      />
      <div className='bg-white overflow-x relative rounded-b-2xl rounded-tr-2xl p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader
          active={active}
          // setActive={setActive}
          // filterInput={filterInput}
          // handleFilterChange={handleFilterChange}
        /> */}
        {loading ? (
          <div className='mt-20 mb-20 flex justify-center'>
            <LoadingIcon />
            <span className='text-purple-500 animate-pulse'>
              Loading items...
            </span>
          </div>
        ) : (
          <TableBody
            setSelectedProduct={setSelectedProduct}
            setSelectedSeller={setSelectedSeller}
            active={active}
            setActive={setActive}
            items={items}
            dispatch={dispatch}
            // filterInput={filterInput}
          />
        )}
      </div>
      <ProductDetails
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <SellerDetails
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
    </div>
  );
};

export default InventoryTableView;
