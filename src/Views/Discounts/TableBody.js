import React, { useState } from 'react';
import { useTable } from 'react-table';
import { useToasts } from 'react-toast-notifications';
import Button from '../../components/Button';
import { confirmAlert } from 'react-confirm-alert';
import { LoadingIcon } from '../../svg';
import { endPromo } from '../../api/shopping';

const TableBody = ({ promos, loading, fetchData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [removeLoading, setRemoveLoading] = useState(false);
  const { addToast } = useToasts();

  const handleDelete = React.useCallback(
    (id) => {
      const removePromo = (id) => {
        setRemoveLoading(true);
        endPromo(
          (res) => {
            fetchData();
            setRemoveLoading(false);
            addToast('Promotion ended', {
              appearance: 'success',
              autoDismiss: true,
            });
          },
          (err) => {
            setRemoveLoading(false);
            addToast('Error ending promotion', {
              appearance: 'error',
              autoDismiss: true,
            });
          },
          id
        );
      };
      setSelectedId(id);
      confirmAlert({
        title: 'End Promotion',
        message: 'Are you sure you want to remove this promotion?',
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

  function getNumberOfDays(end) {
    const date1 = new Date();
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  const promosData = promos
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .map((promo) => ({
      code: promo.code,
      category:
        promo.category.charAt(0).toUpperCase() + promo.category.slice(1),
      use_case: promo.use_case,
      created_at: (
        <div>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(Date.parse(promo.created_at))}
          <br />
          <span className='text-gray-400 text-xs'>
            {getNumberOfDays(promo.expires)} days left
          </span>
        </div>
      ),
      actions: (
        <div className='justify-around'>
          {promos.length && removeLoading && selectedId === promo.id ? (
            <LoadingIcon />
          ) : (
            <div className='justify-around'>
              <span onClick={() => handleDelete(promo.id)}>
                <Button roundedFull danger>
                  End Promotion
                </Button>
              </span>
            </div>
          )}
        </div>
      ),
    }));

  const data = React.useMemo(() => promosData || [], [promosData]);

  const columns = React.useMemo(
    () => [
      {
        Header: (
          <p>
            Date Created <br />
            <span className='text-gray-400 text-xs'>Days Left</span>
          </p>
        ),
        accessor: 'created_at',
      },
      { Header: 'Discount Code', accessor: 'code' },
      { Header: 'Category', accessor: 'category' },
      {
        Header: (
          <p>
            Use Case <br />
            <span className='text-gray-400 text-xs'>For each account</span>
          </p>
        ),
        accessor: 'use_case',
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

  if (loading && promos.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <LoadingIcon />
        <span className='text-purple-500 animate-pulse'>
          Loading promotions...
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '120px' }}
                      className='border-b-2 pr-4 min-w-max border-gray-100 py-4'
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
