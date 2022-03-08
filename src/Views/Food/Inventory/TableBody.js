import React from "react";
import { useTable } from "react-table";
import Button from "components/Button";
import moment from "moment";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const eventsData =
    events &&
    events
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .filter((item) => item.status === active || active === "all")
      .map((item) => ({
        id: item.id,
        status: <div className="min-w-max capitalize">{item.status}</div>,
        image: (
          <img
            src={item.display_image}
            className="h-20 w-20 object-cover rounded-sm"
            alt={item.name}
          />
        ),
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className="text-purple-600 cursor-pointer text-sm"
            >
              {item.name}
            </p>
            <div className="flex justify-between">
              <KeyValue title="Address" value={<p>{item.address}</p>} />
            </div>
          </div>
        ),
        delivery: <p>{item.time_to_deliver}</p>,
        opening: (
          <p>
            {moment(item.opening_time, "HH:mm a").format("LT")} -{" "}
            {moment(item.closing_time, "HH:mm a").format("LT")}
          </p>
        ),
        actions: (
          <div className="min-w-max flex justify-between">
            <Button
              text={"View Menus"}
              primary
              rounded
              onClick={() => history.push(`/food/restuarant/${item.id}`)}
            />
            <Button
              text={"View Orders"}
              secondary
              rounded
              onClick={() => history.push(`/food/orders/${item.id}`)}
            />
          </div>
        ),
      }));

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Display Image", accessor: "image" },
      { Header: "Restaurant Details", accessor: "desc" },
      {
        Header: "Opening Hours",
        accessor: "opening",
      },
      {
        Header: "Delivery Time",
        accessor: "delivery",
      },
      { Header: "Actions", accessor: "actions" },
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
