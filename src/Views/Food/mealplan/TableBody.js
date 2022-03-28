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
      .filter((item) => item.status === active || active === "all")
      .map((item, index) => ({
        sn: <span>{index + 1}</span>,
        status: <span className="capitalize">{item.status}</span>,
        image: (
          <img
            src={item.main_image}
            alt={item.name}
            className="h-10 w-10 rounded object-cover cursor-pointer"
          />
        ),
        sku: item.sku,
        title: (
          <div>
            <p
              className="text-purple-600 cursor-pointer text-sm"
              onClick={() => setSelectedProduct(item)}
            >
              {item.name}
            </p>
            <p className="text-gray-400 capitalize w-36 truncate">
              {item.description}
            </p>
          </div>
        ),
        location: (
          <p>
            {item.city}, {item.state.name}
          </p>
        ),
        date: (
          <div>
            <p className="flex justify-between items-center">
              <span>{item.created_at.split("T")[0]}</span>
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <span>
                {moment(item.created_at.split("T")[1], "LT").format("HH:mma")}
              </span>
            </p>
            <p className="flex justify-between items-center text-gray-400 mt-1 text-sm">
              <span>{item.updated_at.split("T")[0]}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span>
                {moment(item.updated_at.split("T")[1], "LT").format("HH:mma")}
              </span>
            </p>
          </div>
        ),
      }));

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: "SN", accessor: "sn" },
      { Header: "Status", accessor: "status" },
      { Header: "Image", accessor: "image" },
      { Header: "SKU", accessor: "sku" },
      {
        Header: (
          <div>
            <h4>Food Title</h4>
            <p className="text-gray-400 text-sm">Description</p>
          </div>
        ),
        accessor: "title",
      },
      {
        Header: "Food Location",
        accessor: "location",
      },
      {
        Header: (
          <div>
            <h4>Date Created</h4>
            <p className="text-gray-400 text-sm">Status Changed Date</p>
          </div>
        ),
        accessor: "date",
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
