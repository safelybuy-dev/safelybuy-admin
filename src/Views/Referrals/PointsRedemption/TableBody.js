import { useMemo } from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { LoadingIcon } from 'svg';

const TableBody = ({ pointsRedeemed, loading }) => {
  console.log(pointsRedeemed);
  const referralsData = pointsRedeemed
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .map((referral) => ({
      referrer: referral.referrer
        ? referral.referrer?.firstname + ' ' + referral.referrer?.lastname
        : null,
      status: (
        <div
          className={`${
            referral.status === 'paid' ? 'text-green-500' : 'bg-yellow-500'
          } capitalize relative ml-4`}
        >
          <div
            style={{ top: '.125rem' }}
            className='absolute w-4 -left-4 top-1 inline-block'
          >
            <div
              className={`absolute animate-ping mt-1 w-2 ${
                referral.status === 'paid' ? 'bg-green-100' : 'bg-yellow-100'
              } mr-2 h-2 inline-block`}
            ></div>
            <div
              style={{ left: '.125rem', marginTop: '.125rem' }}
              className={`absolute top-1  w-1 ${
                referral.status === 'paid' ? 'bg-green-500' : 'bg-yellow-500'
              } h-1 inline-block`}
            ></div>
          </div>
          {referral.status}
        </div>
      ),
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(referral.amount),
      point: referral.point,
      created_at: (
        <div>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(Date.parse(referral.created_at))}
        </div>
      ),
      actions: (
        <div className='justify-around'>
          <div className='justify-around'>
            <Button roundedFull secondary>
              Print Details
            </Button>
          </div>
        </div>
      ),
    }));

  const data = useMemo(() => referralsData || [], [referralsData]);

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'created_at',
      },
      { Header: 'Points Redeemed', accessor: 'point' },
      { Header: 'Naira Value', accessor: 'amount' },
      { Header: 'Beneficiary', accessor: 'referrer' },
      {
        Header: 'Status',
        accessor: 'status',
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

  if (loading && pointsRedeemed.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <LoadingIcon />
        <span className='text-purple-500 animate-pulse'>
          fetching redeemed referral points...
        </span>
      </div>
    );
  }

  if (!loading && referralsData.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <span className='text-purple-500'>
          No redeemed points data available
        </span>
      </div>
    );
  }

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
              <tr {...row.getRowProps()} className='border-b-2 last:border-0'>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '120px' }}
                      className='pr-4 min-w-max border-gray-100 py-4'
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
