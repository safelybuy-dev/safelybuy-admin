import React, { useState, useEffect } from 'react';
import { getPointsRedemption } from 'api/shopping';
import Breadcrumb from 'components/Breadcrumb';
import RedemptionTable from './RedemptionTable';

export default function PointsRedemption() {
  const [pointsRedeemed, setPointsRedeemed] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    getPointsRedemption(
      (res) => {
        setLoading(false);
        setPointsRedeemed(res.data.history);
      },
      (err) => {
        setLoading(false);
        console.log(err.message);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Referral'
        parentLink='/referrals'
        childLink='/referrals/redemption'
        childText='Points Redemption'
      />
      <h2 className='text-xl'>Points Redemption</h2>
      <RedemptionTable
        loading={loading}
        pointsRedeemed={pointsRedeemed}
        fetchData={fetchData}
      />
    </div>
  );
}
