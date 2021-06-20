import React, { useContext } from 'react';
import { useTable } from 'react-table';
import { ContextShopping } from '../../context';

const RecentSales = () => {
  const [state] = useContext(ContextShopping);

  const {
    dashboard,
    sellers,
    // isLoadingSellers,
    isLoadingDashboard,
  } = state;

  const { recentSales } = dashboard;

  console.log(recentSales, sellers);

  const salesData =
    recentSales &&
    recentSales.slice(-10).map((item) => ({
      createdAt: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      }).format(Date.parse(item.created_at)),
      status: (
        <>
          <div className='relative w-8 h-4 inline-block'>
            <div className='absolute animate-ping mt-1 w-4 bg-gray-100 mr-2 h-4 inline-block'></div>
            <div className='absolute top-1 left-1 mt-1 w-2 bg-black h-2 inline-block'></div>
          </div>
          {item.shipped
            ? 'Shipped'
            : item.delivered
            ? 'Delivered'
            : 'Processing'}
        </>
      ),
      desc: (
        <div>
          <p className='text-purple-600 text-sm'>#{item.order_number}</p>
          <p className='text-sm mt-2'>{item.title}</p>
          <div className='flex mt-3'>
            {item.buyer?.firstname && (
              <div className='flex flex-col text-xs text-gray-300 uppercase'>
                contact buyer
                <a href={`tel:${item.buyer?.phone}`}>
                  <span className='text-purple-500 capitalize'>
                    {item.buyer?.firstname} {item.buyer?.lastname}
                  </span><br />
                  ({item.buyer?.phone})
                </a>
              </div>
            )}
            {sellers[item.seller_id] && (
              <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
                contact seller
                <a href={`tel:${sellers[item.seller_id]?.phone}`}>
                  <span className='text-purple-500 capitalize'>
                    {sellers[item.seller_id]?.firstname}{' '}
                    {sellers[item.seller_id]?.lastname}
                  </span><br />
                  ({sellers[item.seller_id]?.phone})
                </a>
              </div>
            )}
          </div>
        </div>
      ),
      orderId: '12230223938489',
      amount: (
        <p className='text-right'>
          {Number(item.total_price).toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
          })}
        </p>
      ),
    }));

  const data = React.useMemo(() => salesData || [], [salesData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Data', accessor: 'createdAt' },
      { Header: 'Order Information', accessor: 'desc' },
      { Header: 'Status', accessor: 'status' },
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

  if (isLoadingDashboard) {
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
