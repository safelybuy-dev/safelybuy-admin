import React 
// { useState } 
from 'react';
import {
  useTable,
  // useFilters,
  // useGlobalFilter,
  // useAsyncDebounce,
} from 'react-table';
import Button from '../../../components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
// import TableHeader from './TableHeader';
import {
  postApproveItem,
  postDenyItem,
  postDeleteItem,
  // postSelloutItem,
} from '../../../actions/shopping';

const TableBody = ({
  active,
  setActive,
  setSelectedProduct,
  setSelectedSeller,
  items,
  dispatch,
}) => {
  const handleDelete = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Delete Item',
        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postDeleteItem(dispatch, id),
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

  const handleApprove = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Approve Item',
        message: 'Are you sure you want to approve this item?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postApproveItem(dispatch, id),
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

  const handleDeny = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Reject Item',
        message: 'Are you sure you want to reject this item??',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postDenyItem(dispatch, id),
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

  // const handleSellout = React.useCallback(
  //   (id) => {
  //     confirmAlert({
  //       title: 'Sellout Item',
  //       message: 'Are you sure you want to mark this item as sold out??',
  //       buttons: [
  //         {
  //           label: 'Yes',
  //           onClick: () => postSelloutItem(dispatch, id),
  //         },
  //         {
  //           label: 'No',
  //           onClick: () => {},
  //         },
  //       ],
  //     });
  //   },
  //   [dispatch]
  // );

  const itemsData =
    items &&
    items
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .filter((item) => item.status === active || active === 'all')
      .map((item) => ({
        id: item.id,
        // status: <div className='min-w-max capitalize'>{item.status}</div>,
        image: (
          <div>
            <img
              className='w-12 h-12 object-cover rounded-lg'
              src={item.main_image}
              alt='...'
            />
          </div>
        ),
        sku: (
          <div>
            <div>{item.seller_sku}</div>
            <div className='text-sm text-gray-400'>{item.condition}</div>
          </div>
        ),
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className='text-purple-600 cursor-pointer text-sm'
            >
              {item.title}
            </p>
            <p className='text-sm text-gray-400'>{item.description}</p>
          </div>
        ),
        location: (
          <div className='min-w-max'>{`${item.shipping_city}, ${item.shipping_state}`}</div>
        ),
        seller: (
          <p
            onClick={() => setSelectedSeller(item.seller)}
            className='text-purple-500 cursor-pointer min-w-max'
          >
            {item?.seller?.business_name}
          </p>
        ),
        date: (
          <div className='min-w-max'>
            <p className=''>
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              }).format(Date.parse(item.created_at))}
            </p>
            <p className='text-sm text-gray-400'>
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              }).format(Date.parse(item.updated_at))}
            </p>
          </div>
        ),
        actions: (
          <div className='min-w-max'>
            {item.approval_status === 'pending' ? (
              <>
                {' '}
                <div onClick={() => handleApprove(item.id)}>
                  <Button roundedFull primary>
                    Approve
                  </Button>
                </div>
                <span className='inline-block p-1'></span>
                <div onClick={() => handleDeny(item.id)}>
                  <Button roundedFull danger>
                    Reject
                  </Button>
                </div>
              </>
            ) : item.approval_status === 'approved' ? (
              <>
                <span className='inline-block p-px'></span>
                <div className='justify-around'>
                  {/* <span onClick={() => handleSellout(item.id)}>
                    <Button rounded alternate>
                      Sold Out
                    </Button>
                  </span> */}
                  <span className='inline-block p-2'></span>
                  <span onClick={() => handleDelete(item.id)}>
                    <Button rounded danger>
                      Delete
                    </Button>
                  </span>
                </div>
              </>
            ) : (
              <>
                <p className='text-gray-300 p-4'>Item denied</p>
                <div className='inline-block p-2'></div>
                <span onClick={() => handleDelete(item.id)}>
                  <Button rounded danger>
                    Delete
                  </Button>
                </span>
              </>
            )}
          </div>
        ),
      }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = React.useMemo(() => itemsData || [], [itemsData]);

  const columns = React.useMemo(
    () => [
      // { Header: 'Status', accessor: 'status' },
      { Header: 'Image', accessor: 'image' },
      {
        Header: (
          <div className='flex flex-col'>
            <div>SKU</div>
            <div className='text-sm text-gray-400'>Condition</div>
          </div>
        ),
        accessor: 'sku',
      },
      {
        Header: (
          <div className='flex flex-col'>
            <div>Product Name</div>
            <div className='text-sm text-gray-400'>Description</div>
          </div>
        ),
        accessor: 'desc',
      },
      { Header: 'Product Location', accessor: 'location' },
      { Header: 'Seller', accessor: 'seller' },
      {
        Header: (
          <div className='flex flex-col'>
            <div>Date created</div>
            <div className='text-sm text-gray-400'>Last updated</div>
          </div>
        ),
        accessor: 'date',
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
    // state,
    // visibleColumns,
    // preGlobalFilteredRows,
    // setGlobalFilter,
  } = useTable({ columns, data }, 
    // useFilters,  useGlobalFilter
    );

  // const [filterInput, setFilterInput] = useState(state.globalFilter);
  // const handleFilterChange = useAsyncDebounce((value) => {
  //   setGlobalFilter(value || undefined);
  // }, 200);

  return (
    <>
      {/* <TableHeader
        active={active}
        setActive={setActive}
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
        setFilterInput={setFilterInput}
      /> */}
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
                        style={{ minWidth: '50px', maxWidth: '100px' }}
                        className='border-b-2 pr-4 border-gray-100 py-4'
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
