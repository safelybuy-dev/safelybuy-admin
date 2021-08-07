import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getOngoingPromotions } from 'api/shopping';
import Breadcrumb from 'components/Breadcrumb';
import PromoTable from './PromoTable';

const Discounts = () => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () =>
    getOngoingPromotions(
      (res) => {
        setLoading(false);
        setPromos(res.data.promotions);
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
        parentText='Discount and Promotions'
        parentLink='/discounts'
      />
      <h2 className='text-xl'>Ongoing Promotions</h2>
      <PromoTable loading={loading} promos={promos} fetchData={fetchData} />
    </div>
  );
};

export default Discounts;
