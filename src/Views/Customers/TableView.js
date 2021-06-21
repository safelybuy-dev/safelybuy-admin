import React, { useState } from 'react';
import TabHeader from "./TabHeader";
import TableHeader from "./TableHeader";
import TableBody from './TableBody';
import SellerDetails from './SellerDetails';

const CustomerTableView = () => {
  const [active, setActive] = useState('all');
  const [selectedSeller, setSelectedSeller] = useState(null);
  return (
    <div className='w-full mt-8'>
      <TabHeader active={active} setActive={setActive} />
      <div className='bg-white overflow-x relative rounded-b-2xl rounded-tr-2xl p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader active={active} setActive={setActive} /> */}
        <TableBody
          setSelectedSeller={setSelectedSeller}
          active={active}
          setActive={setActive}
        />
      </div>
      <SellerDetails
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
    </div>
  );
};

export default CustomerTableView;
