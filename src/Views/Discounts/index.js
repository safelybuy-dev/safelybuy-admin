import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDiscountDashboard } from 'api/shopping';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import { ArrowRight, Discount, Receipt } from 'svg';

export const TopStat = ({
  title,
  subtitle,
  svg,
  color,
  link,
  linkText,
  number,
  numberText,
  loading,
}) => {
  if (loading)
    return (
      <div className={`px-12 md:px-6 rounded-3xl py-8 md:py-4 bg-white`}>
        <div className='flex justify-between items-center w-full'>
          <div className=''>
            <div className='h-6 my-2 bg-purple-200 rounded w-32'></div>
            <div className='h-4 my-2 bg-gray-100 rounded w-48'></div>
          </div>
          <div
            className={`bg-${color}-100 p-6 rounded-full top-0 right-0 h-20 w-20`}
          ></div>
        </div>
        <div className='p-12 md:p-6'></div>
        <div className='flex my-2 justify-between items-center'>
          <div className='rounded-full bg-gray-300 h-16 w-16'></div>
          <div className='h-6 bg-green-200 rounded w-1/4'></div>
        </div>
      </div>
    );
  return (
    <div className={`px-12 md:px-6 rounded-3xl py-8 md:py-4 bg-white`}>
      <div className='flex justify-between items-center w-full'>
        <div className=''>
          <h3 className='text-purple-500 text-2xl md:text-xl'>{title}</h3>
          <p className=''>{subtitle}</p>
        </div>
        <span className={`bg-${color}-200 p-6 rounded-full`}>{svg}</span>
      </div>
      <div className='p-12 md:p-6'></div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col'>
          <span className='text-7xl'>{number}</span>
          <span className=''>{numberText}</span>
        </div>
        <Link to={link} className='md:ml-2'>
          <Button
            primary
            roundedLg
            text={linkText}
            icon={<ArrowRight color='white' />}
          />
        </Link>
      </div>
    </div>
  );
};

const Discounts = () => {
  const [discountDash, setDiscountDash] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDiscountDashboard(
      (res) => {
        setLoading(false);
        setDiscountDash({
          codes: res.data.codes,
          promotions: res.data.promotions,
        });
      },
      (err) => {
        setLoading(false);
        console.log(err.message);
      }
    );
  }, []);

  return (
    <div className='w-full'>
      <Breadcrumb
        parentText='Discount and Promotions'
        parentLink='/discounts'
      />
      <h2 className='text-xl'>Discount and Promotion Code</h2>
      <div className='grid mt-10 mx-16 md:mx-0 grid-cols-2 md:grid-cols-1 gap-40 md:gap-6'>
        <TopStat
          linkText='Manage'
          link='/discounts/code'
          color='orange'
          svg={<Discount scale={0.7} />}
          title='Create Code'
          subtitle='Create new discount or promotion code'
          number={discountDash?.codes}
          numberText='Created codes in the last 3 days'
          loading={loading}
        />
        <TopStat
          linkText='View'
          link='/discounts/promotions'
          color='blue'
          svg={<Receipt scale={0.7} />}
          title='Ongoing Promotions'
          subtitle='Manage Ongoing promotions'
          number={discountDash?.promotions}
          numberText='Ongoing Promotions'
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Discounts;
