import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Button from 'components/Button';
import { ContextUser } from 'context';
import { useHistory } from 'react-router-dom';
import { login } from 'actions/auth';
import { useToasts } from 'react-toast-notifications';

const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const SamplePage = () => {
  const history = useHistory();
  const { addToast } = useToasts();
  const [state, dispatch] = useContext(ContextUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(dispatch, data, history, addToast);
  };
  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };
  localStorage.removeItem('safelybuy_admin_token');
  const togglePassword = () => {
    const password = document.querySelector('#password');
    const passwordHide = document.querySelector('#passwordHide');
    password.type = password.type === 'password' ? 'text' : 'password';
    passwordHide.hidden = password.type === 'password' ? true : false;
  };

  return (
    <div className='relative justify-between flex flex-col min-h-screen text-center'>
      <div>
        <header className='flex tracking-wide justify-center mx-12 my-8 md:mx-6 md:my-3'>
          <Logo color='black' text='transact with no regret' />
        </header>
        <h1 className='tracking-wide pt-8 pb-2 font-bold px-12 text-4xl z-10 md:px-8 md:text-3xl'>
          Login to Safelybuy
        </h1>
        <div className='flex justify-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex my-12 flex-col w-96 md:max-w-7xl md:px-8'
          >
            {state.loadingUser && (
              <div className={`animate-pulse`}>
                <div className='flex flex-col'>
                  <div className='h-6 my-2 bg-gray-200 rounded w-1/4'></div>
                  <div className='h-12 my-2 bg-gray-300 rounded-full w-full'></div>
                </div>
                <div className='flex mt-6 flex-col'>
                  <div className='h-6 my-2 bg-gray-200 rounded w-1/4'></div>
                  <div className='h-12 my-2 bg-gray-300 rounded-full w-full'></div>
                </div>
              </div>
            )}
            {!state.loadingUser && (
              <>
                {' '}
                <div className='text-left'>
                  <label className='text-sm my-2' htmlFor='email'>
                    Email
                  </label>
                  <div className='relative md:w-full mb-6 mt-2'>
                    <input
                      type='email'
                      placeholder='email@example.com'
                      {...register('email', {
                        required: true,
                        validate: handleEmailValidation,
                      })}
                      className={`border ${
                        errors.email ? 'border-red' : 'border-black'
                      } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
                    <span className='text-red-500'>
                      {errors.email && 'Email is not valid'}
                    </span>
                  </div>
                </div>
                <div className='text-left'>
                  <label className='text-sm my-2' htmlFor='password'>
                    Password
                  </label>
                  <div className='relative md:w-full mb-6 mt-2'>
                    <input
                      type='password'
                      placeholder='*********'
                      {...register('password', {
                        required: true,
                        minLength: {
                          value: 6,
                          message: 'Password must have at least 6 characters',
                        },
                      })}
                      id='password'
                      className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                    />
                    <span className='text-red-500'>
                      {errors.password && errors.password.message}
                    </span>
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
                        id='passwordHide'
                        className='bg-black absolute transform rotate-45'
                      ></div>
                    </span>
                  </div>
                  <div className='my-12 flex justify-center'>
                    <Button
                      primaryOutline
                      roundedMd
                      icon={
                        <div className='animate-bounceSide'>
                          <ArrowRight color='black' />
                        </div>
                      }
                      text='Sign In'
                      submit
                    />
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <div className='relative z-10'>
        <Footer />
      </div>
    </div>
  );
};

export default SamplePage;
