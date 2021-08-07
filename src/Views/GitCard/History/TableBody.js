import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';

const TableBody = ({ setSelectedOrder, setSelectedCustomer }) => {
  const data = React.useMemo(
    () => [
      {
        status: (
          <div className='text-red-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-red-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-red-400 h-3 inline-block'></div>
            </div>
            Inactive
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-purple-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block'></div>
            </div>
            Giftcard Bought
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
          </div>
        ),
      },
      {
        status: (
          <div className='text-green-400'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping w-5 bg-green-100 mr-2 h-5 inline-block'></div>
              <div className='absolute top-1 left-1 w-3 bg-green-500 h-3 inline-block'></div>
            </div>
            Active
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-green-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-green-500 h-2 inline-block'></div>
            </div>
            Giftcard Sold
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
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
            Active
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-purple-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block'></div>
            </div>
            Giftcard Bought
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
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
            Active
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-green-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-green-500 h-2 inline-block'></div>
            </div>
            Giftcard Sold
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
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
            Active
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-purple-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block'></div>
            </div>
            Giftcard Bought
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
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
            Active
          </div>
        ),
        value: '$455 / 346,343.56NGN',
        transactionType: (
          <div className='text-green-500'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block'></div>
              <div className='absolute top-1 left-1 mt-1 w-2 bg-green-500 h-2 inline-block'></div>
            </div>
            Giftcard Sold
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        desc: (
          <div>
            <p className='text-purple-600 text-sm'>#122390229384</p>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                card type
                <span className='text-black capitalize'>Amazon Giftcard</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                card Denominator
                <span className='text-black capitalize'>$100</span>
              </div>
            </div>
            <div className='flex mt-3'>
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                Quantity
                <span className='text-black capitalize'>5</span>
              </div>
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                value
                <span className='text-black capitalize'>
                  $1,555 / 46,890NGN
                </span>
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
              Print Details
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Customer', accessor: 'customer' },
      { Header: 'Transaction Details', accessor: 'desc' },
      {
        Header: 'Transaction Type',
        accessor: 'transactionType',
      },
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
                      style={{ minWidth: '150px' }}
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
