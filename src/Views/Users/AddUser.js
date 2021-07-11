import React from 'react';
import Button from '../../components/Button';
import { CloseIcon } from '../../svg';

const SellerDetails = ({ selectedSeller, setSelectedSeller }) => {
  if (!selectedSeller) return null;
  const togglePassword = () => {
    const password = document.querySelector('#userPassword');
    const passwordHide = document.querySelector('#userPasswordHide');
    password.type = password.type === 'password' ? 'text' : 'password';
    passwordHide.hidden = password.type === 'password' ? true : false;
  };
  return (
    <div
      onClick={() => setSelectedSeller(null)}
      className='fixed overflow-scroll flex justify-center items-start top-0 left-0 z-50 w-screen py-20 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100'
      >
        <div className='flex justify-between w-full pb-4 items-start'>
          <h3 className='text-2xl'>Add new User</h3>
          <span
            onClick={() => setSelectedSeller(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='overflow-scroll w-96 pt-6'>
          <div className=''>
            <div className=''>
              <label className='text-sm my-2' htmlFor='userFullname'>
                Full Name
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  type='text'
                  placeholder='Ana Pence'
                  name='userFullname'
                  id='userFullname'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
              </div>
            </div>
            <div className=''>
              <label className='text-sm my-2' htmlFor='userEmail'>
                Email
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  type='email'
                  placeholder='email@example.com'
                  name='userEmail'
                  id='userEmail'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
              </div>
            </div>
            <div className=''>
              <label className='text-sm my-2' htmlFor='userPassword'>
                Password
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  type='password'
                  placeholder='*********'
                  name='userPassword'
                  id='userPassword'
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                />
                <span
                  onClick={togglePassword}
                  className='absolute top-3 right-3'
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M11.0009 3.6665C13.5011 3.6665 15.8919 4.97791 18.12 7.13256C18.8801 7.86763 19.5678 8.6524 20.1731 9.43749C20.5384 9.91124 20.7978 10.2839 20.9398 10.5059L21.2557 10.9998L20.9398 11.4937C20.7978 11.7158 20.5384 12.0884 20.1731 12.5622C19.5678 13.3473 18.8801 14.132 18.12 14.8671C15.8919 17.0218 13.5011 18.3332 11.0009 18.3332C8.50062 18.3332 6.10984 17.0218 3.88178 14.8671C3.12166 14.132 2.43399 13.3473 1.82863 12.5622C1.46333 12.0884 1.20398 11.7158 1.06198 11.4937L0.746094 10.9998L1.06198 10.5059C1.20398 10.2839 1.46333 9.91124 1.82863 9.43749C2.43399 8.6524 3.12166 7.86763 3.88178 7.13256C6.10984 4.97791 8.50062 3.6665 11.0009 3.6665ZM18.7213 10.557C18.1671 9.83816 17.5369 9.11902 16.8456 8.45045C14.9266 6.59468 12.9306 5.49984 11.0009 5.49984C9.07129 5.49984 7.07531 6.59468 5.15632 8.45045C4.46497 9.11902 3.8348 9.83816 3.28055 10.557C3.16084 10.7122 3.05023 10.8603 2.9491 10.9998C3.05023 11.1393 3.16084 11.2875 3.28055 11.4427C3.8348 12.1615 4.46497 12.8807 5.15632 13.5492C7.07531 15.405 9.07129 16.4998 11.0009 16.4998C12.9306 16.4998 14.9266 15.405 16.8456 13.5492C17.5369 12.8807 18.1671 12.1615 18.7213 11.4427C18.8411 11.2875 18.9517 11.1393 19.0528 10.9998C18.9517 10.8603 18.8411 10.7122 18.7213 10.557ZM7.33417 10.9998C7.33417 13.0249 8.97579 14.6665 11.0008 14.6665C13.0259 14.6665 14.6675 13.0249 14.6675 10.9998C14.6675 8.97479 13.0259 7.33317 11.0008 7.33317C8.97579 7.33317 7.33417 8.97479 7.33417 10.9998ZM12.8342 10.9998C12.8342 12.0124 12.0134 12.8332 11.0008 12.8332C9.98831 12.8332 9.1675 12.0124 9.1675 10.9998C9.1675 9.98731 9.98831 9.1665 11.0008 9.1665C12.0134 9.1665 12.8342 9.98731 12.8342 10.9998Z'
                      fill='black'
                    />
                  </svg>
                  <div
                    style={{
                      width: '.15rem',
                      height: '1.4rem',
                      top: '-.03rem',
                      left: '.6rem',
                    }}
                    id='userPasswordHide'
                    className='bg-black absolute transform rotate-45'
                  ></div>
                </span>
              </div>
            </div>
          </div>

          <div className='mt-16'>
            <Button primary text='Add User' roundedFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
