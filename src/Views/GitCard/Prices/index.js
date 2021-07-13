import React, { useState, useReducer, useEffect } from 'react';
import { fetchGiftcardDashboard } from '../../../actions/shopping';
import Breadcrumb from '../../../components/Breadcrumb';
import Button from '../../../components/Button';
import { shopping } from '../../../reducers/initialState';
import shoppingReducer from '../../../reducers/shopping';
import { updateGiftcard } from '../../../api/shopping';
import { PlusIcon } from '../../../svg';
import { useToasts } from 'react-toast-notifications';
import AddGiftCard from './AddGiftCard';

export default function Prices() {
  const { addToast } = useToasts();
  const [addGiftcard, setAddGiftcard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  // const [error, setError] = useState('');
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const [values, setValues] = useState({});

  const handleChange = (e, id) => {
    setValues({
      ...values,
      [Number(id)]: {
        ...values[id],
        [e.target.name]: Number(e.target.value),
      },
    });
  };

  const onSubmit = (e, id) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setSelectedCard(id);
    updateGiftcard(
      (res) => {
        setLoadingSubmit(false);
        addToast('Giftcard update successfull', {
          appearance: 'success',
          autoDismiss: true,
        });
      },
      (err) => {
        setLoadingSubmit(false);
        // console.log(err.message);
      },
      id,
      {
        buy_rate: values[id].buyRate,
        sell_rate: values[id].sellRate,
        denomination: values[id].denomination,
      }
    );
  };

  const { giftcard, loading } = state;

  useEffect(() => {
    if (addGiftcard === false) {
      fetchGiftcardDashboard(dispatch);
    }
  }, [dispatch, addGiftcard]);

  useEffect(() => {
    const ratesObject = {};
    giftcard?.giftcardRates?.forEach((e) => {
      ratesObject[e.id] = {
        denomination: e.denomination,
        buyRate: e.buy_rate,
        sellRate: e.sell_rate,
        name: e.name,
      };
    });
    setValues(ratesObject);
  }, [giftcard]);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Giftcard'
        parentLink='/giftcard'
        childLink='/giftcard/prices'
        childText='Set Prices'
      />
      <AddGiftCard
        addGiftcard={addGiftcard}
        setAddGiftcard={setAddGiftcard}
        values={values}
        setValues={setValues}
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Set Prices</h2>
        <span onClick={() => setAddGiftcard(true)}>
          <Button primary text='Add Giftcard' roundedLg icon={<PlusIcon />} />
        </span>
      </div>
      <div className='flex flex-col mt-6 bg-white w-full rounded-3xl p-12 md:p-6'>
        {/* No giftcard added yet. */}
        {loading ? (
          'loading...'
        ) : (
          <>
            {giftcard?.giftcardRates
              ?.sort((a, b) => new Date(b.updated_at) - new Date(a))
              ?.map((item) => (
                <form
                  onSubmit={(e) => onSubmit(e, item.id)}
                  key={item.id}
                  className='flex md:flex-col py-5 border-b'
                >
                  <div className='flex flex-col w-1/5 md:w-full'>
                    <header className='mb-10'>Giftcard</header>
                    <h4 className='text-xl capitalize'>{item.name}</h4>
                  </div>
                  <div className='flex flex-col w-1/5 md:w-full'>
                    <h4 className=''>Denomination</h4>
                    <section className='mt-4 flex flex-col'>
                      <label className='text-sm my-2' htmlFor=''>
                        Value in USD
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='number'
                          placeholder='100'
                          name='denomination'
                          required
                          value={values[item.id]?.denomination || ''}
                          onChange={(e) => handleChange(e, item.id)}
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127482;&#127480;{' '}
                          <span className='text-xs inline-flex ml-2'>USD</span>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div className='flex flex-col w-1/5 md:w-full'>
                    <h4 className=''>Buying Price</h4>
                    <section className='mt-4 flex flex-col'>
                      <label className='text-sm my-2' htmlFor=''>
                        Rate per 1 USD
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='text'
                          placeholder='450'
                          name='buyRate'
                          value={values[item.id]?.buyRate || ''}
                          onChange={(e) => handleChange(e, item.id)}
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127475;&#127468;{' '}
                          <span className='text-xs inline-flex ml-2'>NGN</span>
                        </span>
                      </div>
                      <label className='text-sm my-2' htmlFor=''>
                        Value in NGN
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='text'
                          value={
                            (values[item.id]?.buyRate || 0) *
                            (values[item.id]?.denomination || 0)
                          }
                          name=''
                          disabled
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127475;&#127468;{' '}
                          <span className='text-xs inline-flex ml-2'>NGN</span>
                        </span>
                      </div>
                    </section>
                  </div>

                  <div className='flex flex-col w-1/5 md:w-full md:mt-6'>
                    <h4 className=''>Selling Price</h4>
                    <section className='mt-4 flex flex-col'>
                      <label className='text-sm my-2' htmlFor=''>
                        Rate per 1 USD
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='number'
                          placeholder='550'
                          name='sellRate'
                          required
                          value={values[item.id]?.sellRate || ''}
                          onChange={(e) => handleChange(e, item.id)}
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127475;&#127468;{' '}
                          <span className='text-xs inline-flex ml-2'>NGN</span>
                        </span>
                      </div>
                      <label className='text-sm my-2' htmlFor=''>
                        Value in NGN
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='text'
                          value={
                            (values[item.id]?.sellRate || 0) *
                            (values[item.id]?.denomination || 0)
                          }
                          name=''
                          disabled
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127475;&#127468;{' '}
                          <span className='text-xs inline-flex ml-2'>NGN</span>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div className='w-1/5 md:w-full flex flex-col items-center'>
                    <h4 className='mb-10'>Action</h4>
                    <div className='m-1'></div>
                    {loadingSubmit && selectedCard === item.id ? (
                      'Updating'
                    ) : (
                      <Button primary text='Update Price' submit roundedFull />
                    )}
                  </div>
                </form>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
