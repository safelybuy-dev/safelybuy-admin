import React, { useState, useEffect } from 'react';
import { getReferrals } from '../../../api/shopping';
import Breadcrumb from '../../../components/Breadcrumb';
import ReferralTable from './ReferralTable';

const Referrals = () => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () =>
    getReferrals(
      (res) => {
        setLoading(false);
        setReferrals(res.data.referrals);
      },
      (err) => {
        setLoading(false);
        console.log(err.message);
      }
    );

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <Breadcrumb
        parentText='Referrals'
        parentLink='/referrals'
        childText='Referral Management'
        childLink='#'
      />
      <h2 className='text-xl'>Referral Management</h2>
      <ReferralTable
        loading={loading}
        referrals={referrals}
        fetchData={fetchData}
      />
    </div>
  );
};

export default Referrals;
