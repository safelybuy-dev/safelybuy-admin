import React, { useEffect, useState } from 'react';
import { getGiftCardHistory } from 'api/shopping';
// import TableHeader from "./TableHeader";
import TableBody from './TableBody';
import OrderDetails from './OrderDetails';

const OrdersTableView = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchData = () =>
    getGiftCardHistory(
      (res) => {
        setLoading(false);
        setHistory(res.data.history);
      },
      (err) => {
        setLoading(false);
        console.log(err.message);
      }
    );

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);


  return (
    <div className='w-full mt-8'>
      <div className='bg-white overflow-x relative rounded-2xl shadow-lg p-10 z-40 md:p-4 md:-mx-6'>
        {/* <TableHeader /> */}
        <TableBody
          loading={loading}
          fetchData={fetchData}
          setSelectedOrder={setSelectedOrder}
          history={history}
        />
      </div>
      <OrderDetails
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </div>
  );
};

export default OrdersTableView;
