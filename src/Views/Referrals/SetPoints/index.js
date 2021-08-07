import React, { useState, useReducer, useEffect } from 'react';
import { fetchCustomers } from 'actions/shopping';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import { shopping } from 'reducers/initialState';
import shoppingReducer from 'reducers/shopping';
import { addReferralPoint } from 'api/shopping';
import { useToasts } from 'react-toast-notifications';

export default function PointsRedemption() {
  const { addToast } = useToasts();
  const [selectedReferral, setSelectedReferral] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  // const [error, setError] = useState('');
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const [values, setValues] = useState({});
  const { customersArray, isLoadingCustomers } = state;

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
    setSelectedReferral(id);
    addReferralPoint(
      (res) => {
        setLoadingSubmit(false);
        addToast('Referral points updated successfully', {
          appearance: 'success',
          autoDismiss: true,
        });
      },
      (err) => {
        setLoadingSubmit(false);
        // console.log(err.message);
      },
      {
        points: values[id].points,
        amount: values[id].amount,
        user_id: id,
      }
    );
  };

  // useEffect(() => {
  //   const ratesObject = {};
  //   giftcard?.giftcardRates?.forEach((e) => {
  //     ratesObject[e.id] = {
  //       denomination: e.denomination,
  //       buyRate: e.buy_rate,
  //       sellRate: e.sell_rate,
  //       name: e.name,
  //     };
  //   });
  //   setValues(ratesObject);
  // }, [giftcard]);

  useEffect(() => {
    fetchCustomers(dispatch);
  }, [dispatch]);

  // console.log(customersArray);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Referral'
        parentLink='/referrals'
        childLink='/referrals/points'
        childText='Set Points'
      />
      <div className='flex flex-col mt-6 bg-white w-full rounded-3xl p-12 md:p-6'>
        {/* No giftcard added yet. */}
        {isLoadingCustomers ? (
          'loading...'
        ) : (
          <>
            {customersArray
              ?.sort((a, b) => new Date(b.updated_at) - new Date(a))
              ?.map((item, index) => (
                <form
                  onSubmit={(e) => onSubmit(e, item.id)}
                  key={item.id}
                  className='flex md:flex-col py-5 border-b'
                >
                  <div className='flex flex-col w-1/4 md:w-full'>
                    {index === 0 && <h4 className='text-sm mb-4'>Points</h4>}
                    <section className='mt-4 mb-5 flex flex-col'>
                      <label className='text-sm my-2' htmlFor=''>
                        Referral Points
                      </label>
                      <div className='relative w-40 md:w-full'>
                        <input
                          type='number'
                          placeholder='100'
                          name='points'
                          required
                          value={values[item.id]?.points || ''}
                          onChange={(e) => handleChange(e, item.id)}
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                      </div>
                    </section>
                  </div>
                  <div className='flex flex-col w-1/4 md:w-full'>
                    {index === 0 && (
                      <h4 className='text-sm mb-4'>Naira Value</h4>
                    )}
                    <section className='mt-4 mb-5 flex flex-col'>
                      <label className='text-sm my-2' htmlFor=''>
                        Amount
                      </label>
                      <div className='relative w-44 md:w-full'>
                        <input
                          type='text'
                          placeholder='450'
                          name='amount'
                          value={values[item.id]?.amount || ''}
                          onChange={(e) => handleChange(e, item.id)}
                          className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        />
                        <span className='flex items-center absolute top-2 right-3'>
                          &#127475;&#127468;{' '}
                          <span className='text-xs inline-flex ml-2'>NGN</span>
                        </span>
                      </div>
                    </section>
                  </div>

                  <div className='flex flex-col w-1/4 md:w-full md:mt-6'>
                    {index === 0 && (
                      <h4 className='text-sm mb-4'>Referral Code</h4>
                    )}
                    <section className='mt-4 mb-5 flex flex-col'>
                      <div className='flex my-3 flex-col'>
                        <small className='text-gray-400 text-xs uppercase'>
                          customer name
                        </small>
                        <h5 className='font-bold text-purple-500 uppercase'>
                          {item.firstname} {item.lastname}
                        </h5>
                      </div>
                      <div className='flex my-3 flex-col'>
                        <small className='text-gray-400 text-xs uppercase'>
                          Referral Code
                        </small>
                        <h5 className='font-bold uppercase'>
                          {item.referral_code}
                        </h5>
                      </div>
                    </section>
                  </div>
                  <div className='w-1/4 md:w-full flex flex-col items-center'>
                    {index === 0 && <h4 className='text-sm mb-4'>Action</h4>}
                    <div className='m-1 pt-6'></div>
                    {loadingSubmit && selectedReferral === item.id ? (
                      'Updating'
                    ) : (
                      <Button primary text='Update Point' submit roundedFull />
                    )}
                    {/* <div className='m-4'></div>
                    <Button
                      onClick={() => console.log('Array is tested')}
                      primary
                      text='Apply to others'
                      roundedFull
                    /> */}
                  </div>
                </form>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
