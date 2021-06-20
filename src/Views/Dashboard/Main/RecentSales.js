import React, { useContext } from 'react';
import { useTable } from 'react-table';
import { ContextShopping } from '../../../context';

const RecentSales = () => {
  const [state] = useContext(ContextShopping);
  const { admin, loading, isLoadingCustomers, customers } = state;
  const { resentSales } = admin;
  
  const salesData =
    resentSales &&
    resentSales.slice(-10).map((item) => ({
      id: item.id,
      date: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      }).format(Date.parse(item.created_at)),
      name: (
        <div>
          {isLoadingCustomers ? (
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            <p
              // onClick={() => setSelectedProduct(item)}
              className='text-purple-600 cursor-pointer text-sm'
            >
              {`${customers[item.user_id]?.firstname || ''} ${
                customers[item.user_id]?.lastname || ''
              }`}
            </p>
          )}
        </div>
      ),
      type: (
        <div className='capitalize'>
          <div className='relative w-8 h-4 inline-block'>
            {item.transaction_type === 'bitcoin' ||
            item.transaction_type === 'giftcard' ? (
              <>
                <div className='absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block rounded-full'></div>
                <div className='absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block rounded-full'></div>
              </>
            ) : item.receiver_address ? (
              <>
                <div className='absolute animate-ping w-5 bg-green-100 mr-2 h-5 inline-block rounded-full'></div>
                <div className='absolute top-1 left-1 w-3 bg-green-400 h-3 inline-block rounded-full'></div>
              </>
            ) : (
              <>
                <div className='absolute animate-ping w-5 bg-lime-100 mr-2 h-5 inline-block rounded-full'></div>
                <div className='absolute top-1 left-1 w-3 bg-lime-400 h-3 inline-block rounded-full'></div>
              </>
            )}
          </div>
          {item.transaction_type === 'bitcoin' ||
          item.transaction_type === 'giftcard'
            ? 'Trading'
            : item.receiver_address
            ? 'Delivery'
            : 'Shopping'}
        </div>
      ),
      description: (
        <div className='capitalize'>
          <p className='text-gray-400 text-xs'>
            {item.transaction_type === 'bitcoin'
              ? 'Bitcoin bought'
              : item.transaction_type === 'giftcard'
              ? 'Giftcard bought'
              : item.receiver_address
              ? 'Item shipped'
              : 'Item bought'}
          </p>
          <p className='text-purple-600 text-xs'>#{item.id}</p>
        </div>
      ),
      amount: (
        <p className='text-right'>
          {Number(item.price || item.total_naira).toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
          })}
        </p>
      ),
    }));
  const data = salesData || [];

  const columns = React.useMemo(
    () => [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Amount', accessor: 'amount' },
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

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className='overflow-x-scroll'>
      <table {...getTableProps()} className='w-full text-sm'>
        <thead className='text-left border-b-2 border-gray-100'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className='pb-4 font-normal last:text-right'
                  {...column.getHeaderProps()}
                >
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '120px' }}
                      className='border-b-2 pr-4 min-w-max last:pr-0 border-gray-100 py-4'
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

export default RecentSales;
