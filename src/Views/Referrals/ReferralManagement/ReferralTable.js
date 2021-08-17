import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const ReferralTable = ({ referrals, loading, fetchData }) => {
  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl p-10 z-40 md:p-4 md:-mx-6'>
        <TableHeader />
        <TableBody
          referrals={referrals}
          loading={loading}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default ReferralTable;
