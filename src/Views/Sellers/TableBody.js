import React, { useEffect, useContext, useState } from 'react';
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table';
import Button from '../../components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ContextShopping } from '../../context';
import TableHeader from './TableHeader';

import {
  fetchSellers,
  suspendUser,
  terminateUser,
} from '../../actions/shopping';

const TableBody = ({ active, setActive, setSelectedSeller }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [{ sellersArray, isLoadingSellers }, dispatch] = useContext(
    ContextShopping
  );

  useEffect(() => {
    fetchSellers(dispatch);
  }, [dispatch]);

  const handleDelete = React.useCallback(
    (id) => {
      setSelectedId(id);
      confirmAlert({
        title: 'Terminate Seller',
        message: 'Are you sure you want to terminate this seller?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => terminateUser(dispatch, id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [dispatch]
  );

  const handleSuspend = React.useCallback(
    (id) => {
      setSelectedId(id);
      confirmAlert({
        title: 'Suspend Seller',
        message: 'Are you sure you want to suspend this seller?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => suspendUser(dispatch, id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [dispatch]
  );

  const customersData = sellersArray
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .filter((item) => item.status === active || active === 'all')
    .map((user) => ({
      status: 'Active',
      referral: user.referral_code,
      email: user.email,
      seller: user.firstname + ' ' + user.lastname,
      // (
      //   <p
      //     // onClick={() => setSelectedSeller(user)}
      //     className='text-purple-500 cursor-pointer'
      //   >
      //     {user.firstname} {user.lastname}
      //     <br /> <span className='text-gray-800'>({user.phone})</span>
      //   </p>
      // ),
      date: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      }).format(Date.parse(user.created_at)),
      actions: (
        <div className='justify-around'>
          {sellersArray.length && isLoadingSellers && selectedId === user.id ? (
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
            <>
              <span onClick={() => handleSuspend(user.id)}>
                <Button rounded secondary>
                  Suspend
                </Button>
              </span>
              <span className='inline-block p-2'></span>
              <span onClick={() => handleDelete(user.id)}>
                <Button rounded danger>
                  Terminate
                </Button>
              </span>
            </>
          )}
        </div>
      ),
    }));

  const data = React.useMemo(() => customersData || [], [customersData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      { Header: 'Name', accessor: 'seller' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Date Joined', accessor: 'date' },
      // { Header: "Orders", accessor: "orders" },
      // { Header: 'Referral Code', accessor: 'referral' },
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
    state,
    // visibleColumns,
    // preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, autoResetGlobalFilter: false },
    useGlobalFilter
  );

  if (isLoadingSellers && sellersArray.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
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
        <span className='text-purple-500 animate-pulse'>
          Loading sellers...
        </span>
      </div>
    );
  }

  return (
    <>
      <TableHeader
        active={active}
        setActive={setActive}
        // preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        useAsyncDebounce={useAsyncDebounce}
      />
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
                        style={{ minWidth: '150px' }}
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
    </>
  );
};

export default TableBody;
