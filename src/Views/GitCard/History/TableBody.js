import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';

const TableBody = ({
  setSelectedOrder,
  setSelectedCustomer,
  loading,
  fetchData,
  history,
}) => {
  const historyData = history
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .map((hist) => ({
      value: `$${hist.total_dollar}/${hist.total_naira.toLocaleString()}NGN`,
      transactionType: (
        <div className='text-purple-500'>
          <div className='relative w-8 h-4 inline-block'>
            <div className='absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block'></div>
            <div className='absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block'></div>
          </div>
          {hist.description}
        </div>
      ),
      customer: <span className='text-purple-500 capitalize'>{hist.user?.firstname} {hist.user?.lastname}</span>,
      desc: (
        <div>
          <p className='text-purple-600 text-sm'>#{hist.id}</p>
          <div className='flex mt-3'>
            <div className='flex flex-col text-xs text-gray-300 uppercase'>
              card type
              <span className='text-black uppercase'>{hist.card_type}</span>
            </div>
            <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
              card Denominator
              <span className='text-black capitalize'>
                ${hist.card_denomination}
              </span>
            </div>
          </div>
          <div className='flex mt-3'>
            <div className='flex flex-col text-xs text-gray-300 uppercase'>
              Quantity
              <span className='text-black capitalize'>
                {hist.card_quantity}
              </span>
            </div>
            <div className='flex ml-4 flex-col text-xs text-gray-300 uppercase'>
              value
              <span className='text-black capitalize'>{`$${
                hist.total_dollar
              }/₦${Number(hist.total_naira).toLocaleString()}`}</span>
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
          }).format(Date.parse(hist.created_at))}
        </p>
      ),
      actions: (
        <div>
          <Button roundedFull secondary>
            Print Details
          </Button>
        </div>
      ),
    }));
  const data = React.useMemo(() => historyData || [], [historyData]);

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
