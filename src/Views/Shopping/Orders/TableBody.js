import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert';
import {
  postReturnOrder,
  postDeliverOrder,
  postShipOrder,
  // postAcceptOrder,
  // postDenyOrder,
} from 'actions/shopping';

const isDate = (_date) => {
  const _regExp = new RegExp(
    '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$'
  );
  return _regExp.test(_date);
};

const TableBody = ({
  setSelectedOrder,
  orders,
  dispatch,
  sellers,
  customers,
  loading,
}) => {
  const handleShipping = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Ship Order',
        message: 'Are you sure you want to ship this order?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postShipOrder(dispatch, id),
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

  const handleDelivery = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Deliver Order',
        message: 'Are you sure you want to mark this order as delivered?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postDeliverOrder(dispatch, id),
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

  const handleReturn = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Return Order',
        message: 'Are you sure you want to return this order?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postReturnOrder(dispatch, id),
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

  // const acceptOrder = React.useCallback(
  //   (id) => {
  //     confirmAlert({
  //       title: 'Accept Order',
  //       message: 'Are you sure you want to accept this order??',
  //       buttons: [
  //         {
  //           label: 'Yes',
  //           onClick: () => postAcceptOrder(dispatch, id),
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

  // const denyOrder = React.useCallback(
  //   (id) => {
  //     confirmAlert({
  //       title: 'Deny Order',
  //       message: 'Are you sure you want to deny this order?',
  //       buttons: [
  //         {
  //           label: 'Yes',
  //           onClick: () => postDenyOrder(dispatch, id),
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

  const ordersData =
    orders &&
    orders
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .map((order) => ({
        status: (
          <div className='capitalize'>
            {
              <div className='relative w-8 h-4 inline-block'>
                <div
                  className={`absolute animate-ping w-5 ${
                    order.status === 'processed'
                      ? 'bg-gray-100'
                      : order.status === 'shipped'
                      ? 'bg-yellow-100'
                      : order.status === 'delivered'
                      ? 'bg-purple-100'
                      : order.status === 'returned'
                      ? 'bg-red-100'
                      : 'bg-green-100'
                  } mr-2 h-5 inline-block`}
                ></div>
                <div
                  className={`absolute top-1 left-1 w-3 ${
                    order.status === 'processed'
                      ? 'bg-gray-600'
                      : order.status === 'shipped'
                      ? 'bg-yellow-600'
                      : order.status === 'delivered'
                      ? 'bg-purple-600'
                      : order.status === 'returned'
                      ? 'bg-red-600'
                      : 'bg-green-600'
                  } h-3 inline-block`}
                ></div>
              </div>
            }
            {order.status}
          </div>
        ),
        shipping_details: (
          <div className=''>
            <p className='text-lg uppercase'>{order.courier}</p>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>
                Expected Ship Date
              </p>
              <p className=''>
                {isDate(order.shipping_estimate)
                  ? new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(Date.parse(order.shipping_estimate))
                  : 'Not specified'}
              </p>
            </div>
            <div className='my-3'>
              <p className='text-xs uppercase text-gray-400'>Deliver by</p>
              <p className=''>
                {order.delivery_estimate_start
                  ? new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(Date.parse(order.delivery_estimate_start))
                  : 'Not specified'}{' '}
                to{' '}
                {order.delivery_estimate_end
                  ? new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(Date.parse(order.delivery_estimate_end))
                  : 'Not specified'}
              </p>
            </div>
          </div>
        ),

        details: (
          <div>
            <p
              onClick={() => setSelectedOrder(order)}
              className='text-purple-600 cursor-pointer text-sm'
            >
              {order.order_id}
            </p>
            <p className='text-lg'>
              {order.order_details
                .reduce((a, b) => a + b.item?.title + ', ', '')
                .replace(/(^[,\s]+)|([,\s]+$)/g, '')}
            </p>
            <div className='flex flex-wrap mt-3'>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Quantity</p>
                  <p className=''>
                    {order.order_details.reduce((a, b) => a + b.quantity, 0)}
                  </p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    CONTact buyer
                  </p>
                  <p className=''>
                    {customers[order.user_id]?.firstname}{' '}
                    {customers[order.user_id]?.lastname}
                    <br />
                    <a href={`tel:${customers[order.user_id]?.phone}}`}>
                      {customers[order.user_id]?.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>Price</p>
                  <p className=''>
                    {Number(order.total_amount).toLocaleString('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    })}
                  </p>
                </div>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>
                    payment type
                  </p>
                  <p className='capitalize'>{order.payment_method}</p>
                </div>
              </div>
              <div className=''>
                <div className='mr-4 my-3'>
                  <p className='text-xs uppercase text-gray-400'>SKU</p>
                  <p className=''>
                    {order.order_details
                      .reduce((a, b) => a + b.item?.seller_sku + ', ', '')
                      .replace(/(^[,\s]+)|([,\s]+$)/g, '')}
                  </p>
                </div>
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
            }).format(Date.parse(order.created_at))}
          </p>
        ),
        actions:
          order.status === 'processed' ? (
            <div onClick={() => handleShipping(order.order_id)}>
              <Button roundedFull secondary>
                Confirm Shipping
              </Button>
            </div>
          ) : order.status === 'shipped' ? (
            <div onClick={() => handleDelivery(order.order_id)}>
              <Button roundedFull secondary>
                Confirm Delivery
              </Button>
            </div>
          ) : order.status === 'delivered' ? (
            <div onClick={() => handleReturn(order.order_id)}>
              <span className='text-gray-400'>2 days left</span>
              <span className='inline-block p-1'></span>
              <Button roundedFull danger>
                Return
              </Button>
            </div>
          ) : order.status === 'returned' ? (
            <div>
              <p className='text-gray-400'>
                There was an issue with the order.
              </p>
            </div>
          ) : (
            <div>
              <p className='text-gray-400'>Your order has been completed.</p>
            </div>
          ),
      }));
  const data = React.useMemo(() => ordersData || [], [ordersData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Order Date', accessor: 'date' },
      { Header: 'Order Details', accessor: 'details' },
      { Header: 'Shipping', accessor: 'shipping_details' },
      { Header: 'Status', accessor: 'status' },
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
                      style={{ minWidth: '100px', maxWidth: '180px' }}
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
