import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useComponentVisible } from 'hooks';
import { ArrowDown } from 'svg';

const NavItem = ({
  color,
  svg,
  hasDropdown,
  children,
  last,
  url,
  dropDownLinks,
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  const history = useHistory();

  return (
    <div className='relative'>
      <button
        onClick={(e) => {
          if (url) {
            history.push(url);
            return;
          }
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
          <ul
            className={`absolute header-dropdown mt-2 bg-white w-60 z-10 rounded-xl border-gray-100 border-2`}
          >
            {dropDownLinks.map((e) => (
              <Link key={Date.now() + Math.random()} to={e.url}>
                <li className={`py-2 px-4 rounded-xl hover:bg-${color}-100`}>
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

export default NavItem;
