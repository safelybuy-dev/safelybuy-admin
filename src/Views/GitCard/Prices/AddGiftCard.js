import React, { useState } from 'react';
import Button from 'components/Button';
import { CloseIcon } from 'svg';
import { useToasts } from 'react-toast-notifications';
import { addGiftcard as submitGiftcard } from 'api/shopping';

const AddGiftcard = ({ addGiftcard, setAddGiftcard }) => {
  const { addToast } = useToasts();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [values, setValues] = useState({
    denomination: '',
    sell_rate: '',
    buy_rate: '',
    name: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('denomination', values.denomination);
    formData.append('sell_rate', values.sell_rate);
    formData.append('buy_rate', values.buy_rate);
    formData.append('name', values.name);
    formData.append('card_image', selectedFile);
    console.log(formData);
    setLoadingSubmit(true);
    submitGiftcard(
      (res) => {
        setLoadingSubmit(false);
        addToast('Giftcard added successfully', {
          appearance: 'success',
          autoDismiss: true,
        });
        setAddGiftcard(false);
      },
      (err) => {
        setLoadingSubmit(false);
        // console.log(err.message);
      },
      formData
    );
  };

  if (!addGiftcard) return null;
  return (
    <div
      onClick={() => setAddGiftcard(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30 flex items-center justify-center'
    >
      <form
        onSubmit={(e) => onSubmit(e)}
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <div className='w-96'>
            <h3 className='text-xl text-purple-500'>
              Add Giftcard Denomination and Rates
            </h3>
            <p className='mt-6 leading-relaxed'>
              Update the denomination or/and rates of the giftcard in your
              inventory.
            </p>
          </div>
          <span
            onClick={() => setAddGiftcard(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='flex w-full md:flex-col'>
          <div className='md:w-full'>
            <label className='text-sm my-2' htmlFor='name'>
              Giftcard Name
            </label>
            <div className='relative w-96 md:w-full'>
              <input
                type='text'
                placeholder='Ex; Apple giftcard'
                name='name'
                required
                id='name'
                onChange={handleChange}
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-between w-96 md:flex-col'>
          <section className='mt-4 flex flex-col'>
            <label className='text-sm my-2' htmlFor='denomination'>
              Denomination (USD)
            </label>
            <div className='relative w-44 md:w-full'>
              <input
                type='text'
                placeholder='100'
                name='denomination'
                required
                onChange={handleChange}
                id='denomination'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
              <span className='flex items-center absolute top-2 right-3'>
                &#127482;&#127480;{' '}
                <span className='text-xs inline-flex ml-2'>USD</span>
              </span>
            </div>
            <label className='text-sm my-2' htmlFor='denomination'>
              Upload Image
            </label>
            <div className='relative w-44 md:w-full'>
              <input
                type='file'
                name='card_image'
                required
                // value={selectedFile}
                onChange={handleFileChange}
                id='card_image'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
            </div>
          </section>
          <section className='mt-4 flex flex-col'>
            <label className='text-sm my-2' htmlFor='buy_rate'>
              Buy Rate per USD
            </label>
            <div className='relative w-44 md:w-full'>
              <input
                type='text'
                placeholder='Enter price'
                name='buy_rate'
                onChange={handleChange}
                id='buy_rate'
                required
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
              <span className='flex items-center absolute top-2 right-3'>
                &#127475;&#127468;{' '}
                <span className='text-xs inline-flex ml-2'>NGN</span>
              </span>
            </div>
            <label className='text-sm my-2' htmlFor='sell_rate'>
              Sell Rate per USD
            </label>
            <div className='relative w-44 md:w-full'>
              <input
                type='text'
                placeholder='Enter price'
                onChange={handleChange}
                name='sell_rate'
                required
                id='sell_rate'
                className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
              />
              <span className='flex items-center absolute top-2 right-3'>
                &#127475;&#127468;{' '}
                <span className='text-xs inline-flex ml-2'>NGN</span>
              </span>
            </div>
          </section>
        </div>
        <div className='md:w-full mt-12 flex flex-col items-start'>
          {loadingSubmit ? (
            'Submitting Giftcard'
          ) : (
            <Button primary text='Add Giftcard' submit roundedFull />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddGiftcard;
