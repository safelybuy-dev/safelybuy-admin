import React, { useState } from 'react';
import { useTable } from 'react-table';
import { useToasts } from 'react-toast-notifications';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert';
import { LoadingIcon } from 'svg';
import { suspendReferrer } from 'api/shopping';

const TableBody = ({ referrals, loading, fetchData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [removeLoading, setRemoveLoading] = useState(false);
  const { addToast } = useToasts();

  const handleDelete = React.useCallback(
    (id) => {
      const removePromo = (id) => {
        setRemoveLoading(true);
        suspendReferrer(
          (res) => {
            fetchData();
            setRemoveLoading(false);
            addToast('Referrer suspended', {
              appearance: 'success',
              autoDismiss: true,
            });
          },
          (err) => {
            setRemoveLoading(false);
            addToast('Error suspending the referrer', {
              appearance: 'error',
              autoDismiss: true,
            });
          },
          id
        );
      };
      setSelectedId(id);
      confirmAlert({
        title: 'Suspend Referrer',
        message: 'Are you sure you want to remove this referrer?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => removePromo(id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [addToast, fetchData]
  );

  const referralsData = referrals
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .filter((e) => e.referred)
    .map((referral) => ({
      code: referral.code,
      referrer:
        referral.referrer?.firstname + ' ' + referral.referrer?.lastname,
      referred:
        referral.referred?.firstname + ' ' + referral.referred?.lastname,
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
          }).format(Date.parse(referral.created_at))}
        </div>
      ),
      actions: (
        <div className='justify-around'>
          {referrals.length && removeLoading && selectedId === referral.id ? (
            <LoadingIcon />
          ) : (
            <div className='justify-around'>
              <span onClick={() => handleDelete(referral.id)}>
                <Button roundedFull danger>
                  Suspend
                </Button>
              </span>
            </div>
          )}
        </div>
      ),
    }));

  const data = React.useMemo(() => referralsData || [], [referralsData]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'created_at',
      },
      { Header: 'Referrer', accessor: 'referral' },
      { Header: 'Referrer Code', accessor: 'code' },
      { Header: 'Purchase Amount', accessor: 'amount' },
      { Header: 'Points Earned', accessor: 'point' },
      {
        Header: 'Referred',
        accessor: 'referred',
      },
      { Header: 'Actions', accessor: 'actions' },
    ],
    []
  );

  //   amount: 0
  // created_at: "2021-04-02T16:47:50.000000Z"
  // id: 1
  // payment_account: ""
  // point: "20"
  // referred:
  // firstname: "Ayobami"
  // id: 1
  // lastname: "Ade"
  // [[Prototype]]: Object
  // referred_id: "1"
  // referrer: null
  // referrer_id: "119"
  // status: null
  // type: "referral"
  // updated_at: "2021-04-02T16:47:50.000000Z"

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  if (loading && referrals.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <LoadingIcon />
        <span className='text-purple-500 animate-pulse'>
          Loading referrals...
        </span>
      </div>
    );
  }

  if (!loading && referralsData.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <span className='text-purple-500'>No referral data available</span>
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
