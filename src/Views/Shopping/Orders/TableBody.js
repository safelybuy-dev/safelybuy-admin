import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';

const TableBody = ({ setSelectedOrder }) => {
  const data = React.useMemo(
    () => [
      {
        status: (
          <>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-gray-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-black h-3 inline-block'></div>
            </div>
            To be confirmed
          </>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <Button roundedFull primary>
              Approve
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Cancel
            </Button>
          </div>
        ),
      },
      {
        status: (
          <>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-gray-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-black h-3 inline-block'></div>
            </div>
            Processing
          </>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <Button roundedFull secondary>
              Confirm Shipping
            </Button>
          </div>
        ),
      },
      {
        status: (
          <div className='text-yellow-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block'></div>
            </div>
            Shipped
          </div>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <Button roundedFull secondary>
              Confirm Delivery
            </Button>
          </div>
        ),
      },
      {
        status: (
          <div className='text-purple-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-purple-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-purple-400 h-3 inline-block'></div>
            </div>
            Delivered
          </div>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <span className='text-gray-400'>2 days left</span>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Return
            </Button>
          </div>
        ),
      },

      {
        status: (
          <div className='text-red-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-red-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-red-400 h-3 inline-block'></div>
            </div>
            Returned
          </div>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <p className='text-gray-400'>There was an issue with the order.</p>
          </div>
        ),
      },
      {
        status: (
          <div className='text-green-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-green-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-green-400 h-3 inline-block'></div>
            </div>
            Completed
          </div>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg'>DHL Delivery</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now())}{' '}
                to{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              00312-2332-343
            </p>
            <p className='text-lg'>iPhone Xmax</p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>2</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>Elvis Presely</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>350,974NGN</p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className=''>Online Payment</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
            </div>
          </div>
        ),

        date: (
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
        ),
        actions: (
          <div>
            <p className='text-gray-400'>Your order has been completed.</p>
          </div>
        ),
      },
    ],
    [setSelectedOrder]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Order Date', accessor: 'date' },
      { Header: 'Order Details', accessor: 'details' },
      { Header: 'Shipping', accessor: 'shipping_details' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Actions', accessor: 'actions' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className='overflow-x-scroll mt-8'>
      <table {...getTableProps()} className='w-full text-sm'>
        <thead className='text-left border-b-2 border-gray-100'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='pb-4 font-normal' {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className='border-b last:border-b-0' {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '280px' }}
                      className='align-top pr-4 min-w-max border-gray-100 py-4'
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
