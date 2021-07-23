import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDiscountDashboard } from '../../api/shopping';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import { ArrowRight, Discount, Receipt } from '../../svg';

const CheckMark = ({ id, name, state, handleChange }) => (
  <div className='relative inline-flex my-4 items-center'>
    <input
      type='checkbox'
      name={id}
      checked={state[id]}
      onChange={handleChange}
      id={id}
      className=' mr-2'
    />
    <label
      htmlFor={id}
      className={`leading-none text-sm ${
        state[id] ? 'text-gray-900' : 'text-gray-400'
      }`}
    >
      {name}
    </label>
  </div>
);

const Discounts = () => {
  // const [discountDash, setDiscountDash] = useState(3null);
  // const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState({
    all: false,
    tickets: false,
    shopping: false,
    giftcard: false,
    delivery: false,
  });

  const handleCheckbox = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: !categories[e.target.name],
    });
  };

  // useEffect(() => {
  //   setLoading(true);
  //   getDiscountDashboard(
  //     (res) => {
  //       setLoading(false);
  //       console.log(res.data);
  //       setDiscountDash({
  //         codes: res.data.codes,
  //         promotions: res.data.promotions,
  //       });
  //     },
  //     (err) => {
  //       setLoading(false);
  //       console.log(err.message);
  //     }
  //   );
  // }, []);

  return (
    <div className='w-full'>
      <Breadcrumb
        parentText='Discount and Promotions'
        parentLink='/discounts'
        childText='Create Code'
        childLink='#'
      />
      <h2 className='text-xl'>Create Code</h2>
      <div className='bg-white mt-8 py-12 px-10 rounded-2xl flex shadow-md'>
        <div className='border-r w-44'>
          <h4 className='text-purple-500 text-lg'>Category</h4>
          <div className='my-4 flex flex-col'>
            <CheckMark
              handleChange={handleCheckbox}
              id='all'
              state={categories}
              name='All'
            />
            <CheckMark
              handleChange={handleCheckbox}
              id='shopping'
              state={categories}
              name='Shopping'
            />
            <CheckMark
              handleChange={handleCheckbox}
              id='delivery'
              name='Delivery'
              state={categories}
            />
            <CheckMark
              handleChange={handleCheckbox}
              id='tickets'
              state={categories}
              name='Tickets'
            />
            <CheckMark
              handleChange={handleCheckbox}
              id='giftcard'
              state={categories}
              name='Giftcard'
            />
          </div>
        </div>
        <div className='pl-10'>
          <h4 className='text-purple-500 text-lg'>Code Information</h4>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
