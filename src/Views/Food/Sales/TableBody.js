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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Activate
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Delete
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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Print
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deactivate
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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Print
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deactivate
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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Print
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deactivate
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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Print
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deactivate
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
        order_no: (
          <p
            onClick={() => setSelectedOrder({ name: 'New Meaning' })}
            className='text-purple-600 cursor-pointer text-sm'
          >
            00312-2332-343
          </p>
        ),
        details: (
          <div>
            <p className='text-lg'>Joeboy’s Bad Boy Live in Concert</p>
            <div className='flex flex-wrap justify-between mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    Buyer's Name
                  </p>
                  <p>Adegoke Aramide</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>SB-#2123434343</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>45,000NGN</p>
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
              Print
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deactivate
            </Button>
          </div>
        ),
      },
    ],
    [setSelectedOrder]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Ticket Order Number', accessor: 'order_no' },
      { Header: 'Ticket Details', accessor: 'details' },
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
