import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
// import TableHeader from './TableHeader';
import {
  postApproveEvent,
  postDenyEvent,
  postDeleteEvent,
  // postSelloutItem,
} from 'actions/shopping';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 uppercase text-xs'>{title}</small>
    <h5 className='text-sm w-28'>{value}</h5>
  </div>
);

const TableBody = ({
  active,
  setActive,
  events,
  dispatch,
  setSelectedProduct,
  setSelectedSeller,
}) => {
  const handleDelete = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Delete Event',
        message: 'Are you sure you want to delete this event?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postDeleteEvent(dispatch, id),
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
        title: 'Approve Event',
        message: 'Are you sure you want to approve this event?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postApproveEvent(dispatch, id),
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
        title: 'Reject Event',
        message: 'Are you sure you want to reject this event??',
        buttons: [
          {
            label: 'Yes',
            onClick: () => postDenyEvent(dispatch, id),
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

  const eventsData =
    events &&
    events
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .filter((item) => item.status === active || active === 'all')
      .map((item) => ({
        id: item.id,
        status: (
          <div className='min-w-max capitalize'>{item.approval_status}</div>
        ),
        sku: item.listing_number,
        tickets_available: Number(item.total_tickets).toLocaleString(),
        date: new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        }).format(Date.parse(item.event_date)),
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className='text-purple-600 cursor-pointer text-sm'
            >
              {item.title}
            </p>
            <div className='flex justify-between'>
              <KeyValue title='Location' value={<p>{item.location}</p>} />
              {/* TO DO */}
              <KeyValue
                title='Seat Categories'
                value={item.seats
                  .reduce((acc, curr) => acc + curr.type + ', ', '')
                  ?.replace(/,\s*$/, '')}
              />
            </div>
          </div>
        ),
        category: item.category,
        seller: (
          <p
            onClick={() => setSelectedSeller(null)}
            className='text-purple-500 cursor-pointer'
          >
            {item.seller_id}
          </p>
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

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      {
        Header: 'Listing Number',
        accessor: 'sku',
      },
      { Header: 'Seller', accessor: 'seller' },
      {
        Header: 'Event Date',
        accessor: 'date',
      },
      { Header: 'Event Category', accessor: 'category' },
      {
        Header: 'Event Details',
        accessor: 'desc',
      },
      { Header: 'Available Tickets', accessor: 'tickets_available' },
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
