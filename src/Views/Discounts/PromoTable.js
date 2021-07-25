import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const PromoTable = ({ promos, loading, fetchData }) => {
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl p-10 z-40 md:p-4 md:-mx-6'>
        <TableHeader />
        <TableBody
          promos={promos}
          loading={loading}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default PromoTable;
