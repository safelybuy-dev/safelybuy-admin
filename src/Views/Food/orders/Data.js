import React from 'react';
import image4 from 'assets/images/image4.png';
import Button from 'components/Button';

const Data = () => [
  {
    status: 'Active',
    image: (
      <img
        className='w-12 h-12 object-cover rounded-lg'
        src={image4}
        alt='...'
      />
    ),
    sku: (
      <>
        <div>SB-#2123434343</div>
        <div className='text-sm text-gray-400'>New</div>
      </>
    ),
    desc: (
      <div>
        <p
          onClick={() => {
            // console.log('Loading');
          }}
          className='text-purple-600 cursor-pointer text-sm'
        >
          Xaomi Pocophone F1
        </p>
        <p className='text-sm text-gray-400'>128GB RAM / 64GB ROM</p>
      </div>
    ),
    location: 'Warri, Delta',
    seller: <p className='text-purple-500'>Kareem Chibuzor</p>,
    date: (
      <div>
        <p className=''>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
        <p className='text-sm text-gray-400'>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
      </div>
    ),
    actions: (
      <div>
        <Button roundedFull primary>
          Approve
        </Button>
        <span className='inline-block p-1'></span>
        <Button roundedFull danger>
          Deny
        </Button>
      </div>
    ),
  },
  {
    status: 'Active',
    image: (
      <img
        className='w-12 h-12 object-cover rounded-lg'
        src={image4}
        alt='...'
      />
    ),
    sku: (
      <>
        <div>SB-#2123434343</div>
        <div className='text-sm text-gray-400'>New</div>
      </>
    ),
    desc: (
      <div>
        <p className='text-purple-600 text-sm'>Xaomi Pocophone F1</p>
        <p className='text-sm text-gray-400'>128GB RAM / 64GB ROM</p>
      </div>
    ),
    location: 'Warri, Delta',
    seller: <p className='text-purple-500'>Kareem Chibuzor</p>,
    date: (
      <div>
        <p className=''>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
        <p className='text-sm text-gray-400'>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
      </div>
    ),
    actions: (
      <div className='min-w-max'>
        <div className='justify-around'>
          <Button rounded secondary>
            Edit
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded primary>
            Print Details
          </Button>
        </div>
        <span className='inline-block p-px'></span>
        <div className='justify-around'>
          <Button rounded alternate>
            Sold Out
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded danger>
            Delete
          </Button>
        </div>
      </div>
    ),
  },
  {
    status: 'Active',
    image: (
      <img
        className='w-12 h-12 object-cover rounded-lg'
        src={image4}
        alt='...'
      />
    ),
    sku: (
      <>
        <div>SB-#2123434343</div>
        <div className='text-sm text-gray-400'>New</div>
      </>
    ),
    desc: (
      <div>
        <p className='text-purple-600 text-sm'>Xaomi Pocophone F1</p>
        <p className='text-sm text-gray-400'>128GB RAM / 64GB ROM</p>
      </div>
    ),
    location: 'Warri, Delta',
    seller: <p className='text-purple-500'>Kareem Chibuzor</p>,
    date: (
      <div>
        <p className=''>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
        <p className='text-sm text-gray-400'>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
      </div>
    ),
    actions: (
      <>
        <div className='justify-around'>
          <Button rounded secondary>
            Edit
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded primary>
            Print Details
          </Button>
        </div>
        <span className='inline-block p-px'></span>
        <div className='justify-around'>
          <Button rounded alternate>
            Sold Out
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded danger>
            Delete
          </Button>
        </div>
      </>
    ),
  },
  {
    status: 'Active',
    image: (
      <img
        className='w-12 h-12 object-cover rounded-lg'
        src={image4}
        alt='...'
      />
    ),
    sku: (
      <>
        <div>SB-#2123434343</div>
        <div className='text-sm text-gray-400'>New</div>
      </>
    ),
    desc: (
      <div>
        <p className='text-purple-600 text-sm'>Xaomi Pocophone F1</p>
        <p className='text-sm text-gray-400'>128GB RAM / 64GB ROM</p>
      </div>
    ),
    location: 'Warri, Delta',
    seller: <p className='text-purple-500'>Kareem Chibuzor</p>,
    date: (
      <div>
        <p className=''>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
        <p className='text-sm text-gray-400'>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
      </div>
    ),
    actions: (
      <>
        <div className='justify-around'>
          <Button rounded secondary>
            Edit
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded primary>
            Print Details
          </Button>
        </div>
        <span className='inline-block p-px'></span>
        <div className='justify-around'>
          <Button rounded alternate>
            Sold Out
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded danger>
            Delete
          </Button>
        </div>
      </>
    ),
  },
  {
    status: 'Active',
    image: (
      <img
        className='w-12 h-12 object-cover rounded-lg'
        src={image4}
        alt='...'
      />
    ),
    sku: (
      <>
        <div>SB-#2123434343</div>
        <div className='text-sm text-gray-400'>New</div>
      </>
    ),
    desc: (
      <div>
        <p className='text-purple-600 text-sm'>Xaomi Pocophone F1</p>
        <p className='text-sm text-gray-400'>128GB RAM / 64GB ROM</p>
      </div>
    ),
    location: 'Warri, Delta',
    seller: <p className='text-purple-500'>Kareem Chibuzor</p>,
    date: (
      <div>
        <p className=''>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
        <p className='text-sm text-gray-400'>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          }).format(Date.now())}
        </p>
      </div>
    ),
    actions: (
      <>
        <div className='justify-around'>
          <Button rounded secondary>
            Edit
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded primary>
            Print Details
          </Button>
        </div>
        <span className='inline-block p-px'></span>
        <div className='justify-around'>
          <Button rounded alternate>
            Sold Out
          </Button>
          <span className='inline-block p-2'></span>
          <Button rounded danger>
            Delete
          </Button>
        </div>
      </>
    ),
  },
];

export default Data;
