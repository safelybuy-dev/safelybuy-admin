import React from 'react';
import { AngleRight, CloseIcon, ArrowDown, UserAvatar, LogOut } from 'svg';
import { navMenuItems } from 'data';
import { useComponentVisible } from 'hooks';
import { Link, useHistory } from 'react-router-dom';

const NavItem = ({
  color,
  svg,
  hasDropdown,
  children,
  last,
  dropDownLinks,
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  return (
    <div className='relative py-3'>
      <button
        onClick={(e) => {
          if (isComponentVisible) setIsComponentVisible(false);
          else setIsComponentVisible(true);
          e.stopPropagation();
        }}
        className={`flex ${
          !last ? 'mr-14' : 'mr-0'
        } items-center focus:outline-none cursor-pointer hover:bg-${color}-100 transform active:shadow-sm active:bg-${color}-200 hover:scale-105 active:scale-100 hover:shadow-xl rounded-full pr-4 text-sm`}
      >
        <div className={`bg-${color}-400 mr-2 rounded-full inline-block p-2`}>
          {svg}
        </div>
        <span>{children}</span>
        {hasDropdown && (
          <span
            className={`mt-px ml-2 inline-block transform duration-200 ${
              isComponentVisible ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <ArrowDown className='bg-red-500' color='#000' />
          </span>
        )}
      </button>
      <div ref={ref}>
        {hasDropdown && isComponentVisible && (
          <ul className={`header-dropdown text-gray-400 ml-4`}>
            {dropDownLinks.map((e) => (
              <Link
                key={Date.now() + Math.random()}
                onClick={e.onClick}
                to={e.url}
              >
                <li className={`py-3 px-4 rounded-xl hover:bg-${color}-100`}>
                  {e.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const UserMenuMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const history = useHistory();
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className='invisible left-0 top-0 flex flex-col fixed w-full h-screen bg-white z-30 md:visible'>
      <div className='flex px-6 py-8 fixed w-full justify-between items-center'>
        <div className={`flex px-4 py-2 rounded-full shadow-2xl items-center`}>
          <UserAvatar scale={1.5} />
          <div className='ml-3 flex flex-col'>
            <span className='font-normal text-xs'>Kareem Chibuzor</span>
            <span className='uppercase text-gray-400 text-xs'>
              Administrator
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <div className='flex h-full flex-col pt-28 pb-8 px-6 overflow-y-scroll'>
        <Link onClick={() => setIsMenuOpen(false)} to={'/messages'}>
          <button className='flex py-4 justify-between w-full items-center'>
            <div>
              <span className='font-normal text-xl tracking-wide'>
                Messages
              </span>
              {true && (
                <div className='relative h-2 w-2 ml-1 -top-2 inline-block bg-red-500 rounded-full'></div>
              )}
            </div>
            <AngleRight scale={1.6} />
          </button>
        </Link>
        <small className='pt-10 pb-4 text-xs uppercase'>Navigation</small>
        <div className='flex flex-col py-4 rounded-3xl shadow-2xl p-6'>
          {navMenuItems.map((item) => (
            <NavItem
              key={`${Math.random()}+${Date.now()}`}
              color={item.color}
              hasDropdown={item.hasDropdown}
              svg={<item.SVG scale={0.255319148936} color='white' />}
              dropDownLinks={item.dropdownLinks}
            >
              {item.text}
            </NavItem>
          ))}
        </div>
        <Link
          onClick={(e) => {
            localStorage.removeItem('safelybuy_admin_token');
            history.push('/login');
          }}
          to={'/login'}
        >
          <button className='flex pt-8 w-full items-center'>
            <LogOut />
            <div className='pl-3'>
              <span className='font-normal text-xl tracking-wide'>Logout</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
