import React from "react";
import { useTable } from "react-table";

const RecentSales = () => {
  const data = React.useMemo(
    () => [
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        status: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-gray-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-black h-2 inline-block"></div>
            </div>
            Processing
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">12239-0229-384</p>
            <p className="text-sm mt-2">iPhone Xmax</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                contact buyer
                <span className="text-purple-500 capitalize">
                  Elvis Presely
                </span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                contact seller
                <span className="text-purple-500 capitalize">
                  Kareem Chibuzor
                </span>
              </div>
            </div>
          </div>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(120000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        status: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-yellow-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-yellow-400 h-2 inline-block"></div>
            </div>
            Shipped
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">12239-0229-384</p>
            <p className="text-sm mt-2">iPhone Xmax</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                contact buyer
                <span className="text-purple-500 capitalize">
                  Elvis Presely
                </span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                contact seller
                <span className="text-purple-500 capitalize">
                  Kareem Chibuzor
                </span>
              </div>
            </div>
          </div>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(4450).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        status: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-purple-400 h-2 inline-block"></div>
            </div>
            Delivered
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">12239-0229-384</p>
            <p className="text-sm mt-2">iPhone Xmax</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                contact buyer
                <span className="text-purple-500 capitalize">
                  Elvis Presely
                </span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                contact seller
                <span className="text-purple-500 capitalize">
                  Kareem Chibuzor
                </span>
              </div>
            </div>
          </div>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(12000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        status: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-green-400 h-2 inline-block"></div>
            </div>
            Completed
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">12239-0229-384</p>
            <p className="text-sm mt-2">iPhone Xmax</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                contact buyer
                <span className="text-purple-500 capitalize">
                  Elvis Presely
                </span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                contact seller
                <span className="text-purple-500 capitalize">
                  Kareem Chibuzor
                </span>
              </div>
            </div>
          </div>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(46000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        status: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-gray-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-black h-2 inline-block"></div>
            </div>
            Processing
          </>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">12239-0229-384</p>
            <p className="text-sm mt-2">iPhone Xmax</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                contact buyer
                <span className="text-purple-500 capitalize">
                  Elvis Presely
                </span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                contact seller
                <span className="text-purple-500 capitalize">
                  Kareem Chibuzor
                </span>
              </div>
            </div>
          </div>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(520090).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "createdAt" },
      { Header: "Order Information", accessor: "desc" },
      { Header: "Status", accessor: "status" },
      { Header: "Amount", accessor: "amount" },
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
    <div className="overflow-x-scroll">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="pb-4 font-normal last:text-right"
                  {...column.getHeaderProps()}
                >
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
                      className="border-b-2 pr-4 min-w-max last:pr-0 border-gray-100 py-4"
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

export default RecentSales;
