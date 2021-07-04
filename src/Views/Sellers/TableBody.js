import React from "react";
import { useTable } from "react-table";
import Button from "../../components/Button";

const TableBody = ({
  active,
  setActive,
  setSelectedProduct,
  setSelectedSeller,
}) => {
  const data = React.useMemo(
    () => [
      {
        status: "Active",
        email: "kareemchi@gmail.com",
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <div className="justify-around">
            <Button rounded secondary>
              Suspend
            </Button>
            <span className="inline-block p-2"></span>
            <Button rounded danger>
              Terminate
            </Button>
          </div>
        ),
      },
      {
        status: "Active",
        email: "kareemchi@gmail.com",
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Suspend
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Terminate
              </Button>
            </div>
          </div>
        ),
      },
      {
        status: "Active",
        email: "kareemchi@gmail.com",
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Suspend
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Terminate
              </Button>
            </div>
          </>
        ),
      },
      {
        status: "Active",
        email: "kareemchi@gmail.com",
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Suspend
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Terminate
              </Button>
            </div>
          </>
        ),
      },
      {
        status: "Active",
        email: "kareemchi@gmail.com",
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <>
            <div className="justify-around">
              <Button rounded secondary>
                Suspend
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded danger>
                Terminate
              </Button>
            </div>
          </>
        ),
      },
    ],
    [setSelectedSeller]
  );

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Name", accessor: "seller" },
      { Header: "Email", accessor: "email" },
      { Header: "Date Joined", accessor: "date" },
      { Header: "Actions", accessor: "actions" },
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
                      style={{ minWidth: "150px" }}
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
