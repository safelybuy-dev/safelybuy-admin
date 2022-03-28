import React from "react";
import { useTable } from "react-table";
import moment from "moment";

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
      .filter((item) => item.meal_plan.status === active || active === "all")
      .map((item, index) => ({
        id: index,
        serial: <p>{index + 1}</p>,
        deliveryDate: (
          <div className="text-[#A7A7A7]">
            <p>{moment(item.delivery_date, "YYYY-MM-DD").format("LL")}</p>
          </div>
        ),
        meal: (
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-sm"
              src={item.meal_plan.main_image}
              alt={item.meal_plan?.name}
            />
            <div className="ml-3">
              <h4
                className="capitalize text-purple-600 cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                {item.meal_plan.name}
              </h4>
              <p className="text-[#A7A7A7]">
                {item.meal_plan.sku} - {item.created_at.split("T")[0]}
              </p>
            </div>
          </div>
        ),
        customer: (
          <div>
            <p>
              {item.buyer.firstname} {item.buyer.lastname}
            </p>
            <p>{item.delivery_address}</p>
            <p>{item.buyer.phone}</p>
          </div>
        ),
        price: <p>{item.meal_plan.cost}NGN</p>,
        time: <p>{item.delivery_time}</p>,
      }));

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: "S/NO", accessor: "serial" },
      { Header: "Delivery Date", accessor: "deliveryDate" },
      {
        Header: (
          <div>
            <p>Meal</p>
            <small className="text-[#A7A7A7]">Order No & Date</small>
          </div>
        ),
        accessor: "meal",
      },
      { Header: "Customer details ", accessor: "customer" },
      {
        Header: "Total Price ",
        accessor: "price",
      },
      {
        Header: "Delivery Time",
        accessor: "time",
      },
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
