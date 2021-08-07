import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import { ArrowRight, WalletAlt, Clock } from 'svg';

export const TopStat = ({
  title,
  subtitle,
  svg,
  color,
  link,
  linkText,
  number,
  numberText,
}) => (
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

const index = () => {
  return (
    <div className='w-full'>
      <Breadcrumb parentText='Payment Request' parentLink='/discounts' />
      <h2 className='text-xl'>Payment Request</h2>
      <div className='grid mt-10 mx-16 md:mx-0 grid-cols-2 md:grid-cols-1 gap-40 md:gap-6'>
        <TopStat
          linkText='Manage'
          link='#'
          color='green'
          svg={<WalletAlt scale={0.7} />}
          title='Requests'
          subtitle='Manage payment requests'
          number={23}
          numberText='Pending Requests'
        />
        <TopStat
          linkText='View'
          link='#'
          color='blue'
          svg={<Clock scale={0.7} />}
          title='History'
          subtitle='View previous transactions made'
          number={34}
          numberText='Transactions in the last 3 days'
        />
      </div>
    </div>
  );
};

export default index;
