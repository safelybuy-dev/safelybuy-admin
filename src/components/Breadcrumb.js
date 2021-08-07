import React from 'react';
import { Link } from 'react-router-dom';
import { AngleRight } from 'svg';

const Breadcrumb = ({ parentText, parentLink, childText, childLink }) => {
  return (
    <div className='flex -mt-10 text-sm md:mt-0 pb-6'>
      <Link to={parentLink}>{parentText}</Link>
      {childText && (
        <div className='flex ml-4 items-center text-gray-500'>
          <AngleRight color='gray' />
          <Link className='inline-block ml-4' to={childLink}>
            {childText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
