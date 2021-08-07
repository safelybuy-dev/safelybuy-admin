import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPromotionCode } from 'api/shopping';
import Breadcrumb from 'components/Breadcrumb';
import Category from './Category';
import { useToasts } from 'react-toast-notifications';
import CodeInformation from './CodeInformation';

const Discounts = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const [categoryError, setCategoryError] = useState('');
  const [categories, setCategories] = useState({
    all: false,
    tickets: false,
    shopping: false,
    giftcard: false,
    delivery: false,
  });

  const handleCheckbox = (e) => {
    setCategoryError('');
    if (e.target.name === 'all') {
      const newCat = {};
      Object.keys(categories).forEach((v) => (newCat[v] = !categories['all']));
      setCategories(newCat);
    } else
      setCategories({
        ...categories,
        [e.target.name]: !categories[e.target.name],
      });
  };

  function generateCode() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (let i = 0; i < 4; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    let error = true;
    Object.values(categories).forEach((category) => {
      if (category) error = false;
    });
    if (error) {
      setCategoryError('Please select at least one category');
      return;
    }
    const selectedCategories = [];
    Object.entries(categories).forEach((category) => {
      if (category[1] && category[0] !== 'all')
        selectedCategories.push(category[0]);
    });

    Promise.all(
      selectedCategories.map((category) => {
        return createPromotionCode(
          (res) => {
            return res;
          },
          (err) => err,
          {
            ...data,
            category,
            expires: data.end_date,
            code: generateCode(),
          }
        );
      })
    )
      .then((values) => {
        setLoading(false);
        console.log('values', values);
        addToast('Promotion code created', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/discounts/promotions');
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        addToast('Error creating promotion code', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  return (
    <div className='w-full'>
      <Breadcrumb
        parentText='Discount and Promotions'
        parentLink='/discounts'
        childText='Create Code'
        childLink='#'
      />
      <h2 className='text-xl'>Create Code</h2>
      <div className='bg-white mt-8 py-12 px-10 rounded-2xl flex items-start shadow-md'>
        <Category categories={categories} handleCheckbox={handleCheckbox} />
        <CodeInformation
          categoryError={categoryError}
          loading={loading}
          onSubmit={onSubmit}
          categories={categories}
          setCategoryError={setCategoryError}
        />
      </div>
    </div>
  );
};

export default Discounts;
