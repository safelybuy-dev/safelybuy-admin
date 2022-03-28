import React from "react";
import { useTable } from "react-table";
import moment from "moment";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-400 uppercase text-xs">{title}</small>
    <h5 className="text-sm w-28">{value}</h5>
  </div>
);

const TableBody = ({
  active,
  setActive,
  events,
  setSelectedProduct,
  setSelectedSeller,
}) => {
  const eventsData =
    events &&
    events
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .filter(
        (item) => item.food_order.order_status === active || active === "all"
      )
      .map((item) => ({
        id: item.id,
        status: (
          <div className="min-w-max capitalize">
            {item.food_order.order_status}
          </div>
        ),
        image: (
          <img
            src={item.menu.display_image}
            className="h-20 w-20 object-cover rounded-md"
            alt={item.name}
          />
        ),
        order: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className="text-purple-600 cursor-pointer text-sm"
            >
              {item.name}
            </p>
            <div className="flex flex-col">
              <KeyValue
                title="Delivery Address"
                value={<p>{item.delivery_address}</p>}
              />
              <KeyValue
                title="Delivery Date"
                value={
                  <p>{moment(item.delivery_date, "YYYY-MM-DD").format("LL")}</p>
                }
              />
              <KeyValue
                title="Delivery Time"
                value={
                  <p>{moment(item.delivery_time, "HH:mm a").format("LT")}</p>
                }
              />
            </div>
          </div>
        ),
        menu: (
          <div>
            <p
              onClick={() => setSelectedSeller(item.menu)}
              className="text-purple-600 cursor-pointer text-sm"
            >
              {item.menu.name}
            </p>
            <div className="flex justify-between">
              <KeyValue
                title="Description"
                value={<p>{item.menu.description}</p>}
              />
            </div>
          </div>
        ),
        restaurant: (
          <div>
            <p
              onClick={() => setSelectedProduct(item.menu.restuarant)}
              className="text-purple-600 cursor-pointer text-sm"
            >
              {item.menu.restuarant.name}
            </p>
            <div className="flex flex-col">
              <KeyValue
                title="Description"
                value={<p>{item.menu.description}</p>}
              />
            </div>
          </div>
        ),
        quantity: (
          <p className="">
            {item.quantity} {item.quantity > 1 ? "Orders" : "Order"}{" "}
          </p>
        ),
      }));

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Display Image", accessor: "image" },
      { Header: "Order Details", accessor: "order" },
      {
        Header: "Menu Details",
        accessor: "menu",
      },
      { Header: "Restaurant Details", accessor: "restaurant" },
      { Header: "Quantity Ordered", accessor: "quantity" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-scroll mt-8">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="pb-4 font-normal" {...column.getHeaderProps()}>
                  {column.render("Header")}
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
                      style={{ minWidth: "120px" }}
                      className="border-b-2 pr-4 min-w-max border-gray-100 py-4"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
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
