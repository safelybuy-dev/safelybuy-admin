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
            Bitcoin Bought
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
            Bitcoin Sold
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
            Bitcoin Bought
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
            Bitcoin Sold
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
            Bitcoin Bought
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
            Bitcoin Sold
            <p className='text-black text-xs m-1'>$1/436NGN</p>
          </div>
        ),
        customer: (
          <span className='text-purple-500 capitalize'>Don Norman</span>
        ),
        order_no: '#9003122332343',

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
      { Header: 'Transaction ID', accessor: 'order_no' },
      { Header: 'Value (Dollar/Naira)', accessor: 'value' },
      {
        Header: (
          <div className='flex flex-col'>
            <span>Transaction Type</span>
            <span className='text-gray-400 text-sm'>Transaction Rate</span>
          </div>
        ),
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
