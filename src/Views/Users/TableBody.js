import React, { useEffect, useContext, useState } from 'react';
import { useTable } from 'react-table';
import Button from '../../components/Button';
import { confirmAlert } from 'react-confirm-alert';
import { ContextShopping } from '../../context';

import { fetchUsers, terminateUser } from '../../actions/shopping';
import { LoadingIcon } from '../../svg';

const TableBody = ({ active, setActive, setSelectedSeller }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [{ usersArray, loading }, dispatch] = useContext(ContextShopping);

  useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch]);

  const handleDelete = React.useCallback(
    (id) => {
      setSelectedId(id);
      confirmAlert({
        title: 'Remove User',
        message: 'Are you sure you want to remove this user?',
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

  const usersData = usersArray
    ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .map((user) => ({
      email: user.email,
      user: (
        <p
          onClick={() => setSelectedSeller(user)}
          className='text-purple-500 cursor-pointer'
        >
          {user.firstname} {user.lastname}
          <span className='text-muted text-gray-400'>
            <br />
            Super Admin
          </span>
        </p>
      ),
      date: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
      }).format(Date.parse(user.updated_at)),
      actions: (
        <div className='justify-around'>
          {usersArray.length && loading && selectedId === user.id ? (
            <LoadingIcon />
          ) : (
            <div className='justify-around'>
              {/* <span onClick={() => setSelectedSeller(user)}>
                <Button roundedFull secondary>
                  Manage User
                </Button>
              </span>
              <span className='inline-block p-2'></span> */}
              <span onClick={() => handleDelete(user.id)}>
                <Button roundedFull dangerOutline>
                  Remove
                </Button>
              </span>
            </div>
          )}
        </div>
      ),
    }));

  const data = React.useMemo(() => usersData || [], [usersData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'user' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Last Edited', accessor: 'date' },
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

  if (loading && usersArray.length === 0) {
    return (
      <div className='mt-20 mb-20 flex justify-center'>
        <LoadingIcon />
        <span className='text-purple-500 animate-pulse'>Loading users...</span>
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
