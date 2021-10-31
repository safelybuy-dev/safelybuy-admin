import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { LoadingIcon } from 'svg';
import Input from 'components/Input';
import { useState } from 'react';

export default function CodeInformation({ categoryError, loading, onSubmit }) {
  const [endDateKey, setEndDateKey] = useState(0);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <div className='pl-20'>
      <h4 className='text-purple-500 text-lg'>Code Information</h4>
      <form
        onSubmit={(e) => {
          // console.log(
          //   getValues('start_date'),
          //   getValues('end_date'),
          //   getValues('start_date') < getValues('end_date')
          // );
          if (getValues('start_date') > getValues('end_date')) {
            e.preventDefault();
            setEndDateKey(endDateKey + 1);
            return;
          }
          handleSubmit(onSubmit)(e);
        }}
        className='flex mt-6 flex-col md:px-8 w-full'
      >
        <Input
          label='Threshold'
          register={register}
          required
          type='number'
          placeholder='Least amount of purchase'
          name='threshold'
          errors={errors}
          errorMessage='Percentage is required'
          width={96}
        />
        <Input
          label='Percentage'
          register={register}
          required
          type='number'
          placeholder='Enter a number between 1 and 99'
          name='percentage'
          errors={errors}
          errorMessage='Percentage is required'
          width={96}
          min={1}
          max={99}
        />
        <Input
          label='Use Case (per user)'
          register={register}
          required
          type='number'
          placeholder='2'
          name='use_case'
          errors={errors}
          errorMessage='Use case is required'
          width={96}
        />
        <div className='flex justify-between'>
          <Input
            label='Start Date'
            register={register}
            required
            type='date'
            placeholder='2'
            name='start_date'
            errors={errors}
            errorMessage='Start date is required'
            width={44}
            min={new Date().toISOString().split('T')[0]}
          />
          <Input
            label='End Date'
            register={register}
            required
            key={endDateKey}
            type='date'
            placeholder='2'
            name='end_date'
            errors={errors}
            errorMessage='Start date is required'
            width={44}
            min={
              getValues('start_date') || new Date().toISOString().split('T')[0]
            }
          />
        </div>

        <div className='mt-6'>
          <div className='text-red-500'>{categoryError || null}</div>
          {loading ? (
            <LoadingIcon />
          ) : (
            <Button submit primary text='Create Code' roundedFull />
          )}
        </div>
      </form>
    </div>
  );
}
