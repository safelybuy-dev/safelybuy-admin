import React, { useContext } from 'react';
import { useTable } from 'react-table';
import { ContextShopping } from '../../context';

const RecentSales = ({ setSelectedSender }) => {
  const [state] = useContext(ContextShopping);

  const { deliveryDashboard, loading } = state;

  const { recent } = deliveryDashboard;

  const deliveryData =
    recent &&
    recent.slice(-10).map((item) => ({
      createdAt: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      }).format(Date.parse(item.created_at)),
      name: <p className='text-purple-500'>{item.sender}</p>,
      sender: (
        <p
          // onClick={() => setSelectedSender({ name: "New Meaning" })}
          className='text-purple-500'
        >
          {item.sender_name || 'NIL'}
        </p>
      ),
      desc: (
        <div>
          <p className='text-purple-600 text-sm'>{item.package}</p>
          <div className='flex mt-3'>
            <div className='flex flex-col text-xs text-gray-300 uppercase'>
              weight
              <span className='text-black capitalize'>{item.weight}Kg</span>
            </div>
            <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
              price
              <span className='text-black capitalize'>
                {Number(item.price).toLocaleString('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                })}
              </span>
            </div>
          </div>
          <div className='flex mt-3'>
            <div className='flex flex-col text-xs text-gray-300 uppercase'>
              receiver's name
              <span className='text-black capitalize'>
                {item.receiver_name}
              </span>
            </div>
            <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
              pickup type
              <span className='text-black capitalize'>Pickup selected</span>
            </div>
          </div>
        </div>
      ),
      orderId: '#' + item.id,
      amount: (
        <p className='text-right'>
          {Number(item.price).toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
          })}
        </p>
      ),
    }));

  const data = React.useMemo(() => deliveryData || [], [deliveryData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Date', accessor: 'createdAt' },
      { Header: "Sender's Name", accessor: 'sender' },
      { Header: 'Other Details', accessor: 'desc' },
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
