import Button from "components/Button";
import React from "react";
import { useTable } from "react-table";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const TableBody = ({
  events,
  setSelectedProduct,
  setSelectedSeller,
  deleteExtra,
  setEditId,
  setExtra,
}) => {
  const eventsData =
    events &&
    events.map((item, index) => ({
      sn: <span>{index + 1}</span>,
      title: <p className="uppercase">{item.name}</p>,
      actions: (
        <div className="flex justify-between">
          <Button
            danger
            roundedFull
            onClick={() => {
              confirmAlert({
                title: `Confirm to delete ${item.name}`,
                message: "Are you sure you want to do this ?",
                buttons: [
                  {
                    label: "Yes",
                    onClick: () => deleteExtra(item.id),
                  },
                  {
                    label: "No",
                    onClick: () => {},
                  },
                ],
              });
            }}
          >
            DELETE
          </Button>
          <div className="mx-2"></div>
          <Button
            primary
            roundedFull
            onClick={() => {
              setExtra(item.name);
              setEditId(item.id);
            }}
          >
            EDIT
          </Button>
        </div>
      ),
    }));

  const data = React.useMemo(() => eventsData || [], [eventsData]);

  const columns = React.useMemo(
    () => [
      { Header: "SN", accessor: "sn" },
      { Header: "Title", accessor: "title" },
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
