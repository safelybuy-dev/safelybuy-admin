import React from 'react';
import { Hamburger } from 'svg';
import { mainMenuItems } from 'data';
import { buttonStyles } from './Header';
import { Link } from 'react-router-dom';

const MenuBar = ({ barIsVisible, setBarIsVisible, barRef }) => (
  <div className='relative'>
    <button
      onClick={(e) => {
        if (barIsVisible) setBarIsVisible(false);
        else setBarIsVisible(true);
        e.stopPropagation();
      }}
      className={`bg-purple-100 block px-2 py-3 rounded-md ${buttonStyles()}`}
    >
      {<Hamburger />}
    </button>
    <div ref={barRef}>
      {barIsVisible && (
        <ul
          className={`absolute right-0 w-72 mt-2 bg-white z-10 rounded-xl border-gray-100 border-2`}
        >
          {mainMenuItems.map((e) => (
            <Link key={Date.now() + Math.random()} to={e.url}>
              <li className={`py-2 px-4 rounded-xl hover:bg-purple-100`}>
                {e.text}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default MenuBar;
