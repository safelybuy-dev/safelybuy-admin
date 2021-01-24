import React from "react";
import { useTable } from "react-table";
import Button from "../../../components/Button";
import { capitalizeFirstLetter } from "../../../helpers";

const TableBody = ({
  active,
  setActive,
  setSelectedProduct,
  setSelectedSeller,
  items,
}) => {
  const itemsData =
    items &&
    items
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map((item) => ({
        id: item.id,
        status: (
          <div className="min-w-max">{capitalizeFirstLetter(item.status)}</div>
        ),
        image: (
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={item.main_image}
            alt="..."
          />
        ),
        sku: (
          <div className="min-w-max">
            <div>{item.seller_sku}</div>
            <div className="text-sm text-gray-400">
              {capitalizeFirstLetter(item.condition)}
            </div>
          </div>
        ),
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className="text-purple-600 cursor-pointer text-sm"
            >
              {item.title}
            </p>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ),
        location: (
          <div className="min-w-max">{`${capitalizeFirstLetter(
            item.shipping_city
          )}, ${capitalizeFirstLetter(item.shipping_state)}`}</div>
        ),
        seller: (
          <p
            onClick={() => setSelectedSeller(item.user_id)}
            className="text-purple-500 cursor-pointer min-w-max"
          >
            {/* sellers.user_id */}
            {item.user_id}
          </p>
        ),
        date: (
          <div className="min-w-max">
            <p className="">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.parse(item.created_at))}
            </p>
            <p className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              }).format(Date.parse(item.updated_at))}
            </p>
          </div>
        ),
        actions: (
          <div className="min-w-max">
            {item.approval_status === "pending" ? (
              <>
                {" "}
                <Button roundedFull primary>
                  Approve
                </Button>
                <span className="inline-block p-1"></span>
                <Button roundedFull danger>
                  Deny
                </Button>
              </>
            ) : item.approval_status === "approved" ? (
              <>
                <div className="justify-around">
                  <Button rounded secondary>
                    Edit
                  </Button>
                  <span className="inline-block p-2"></span>
                  <Button rounded primary>
                    Print Details
                  </Button>
                </div>
                <span className="inline-block p-px"></span>
                <div className="justify-around">
                  <Button rounded alternate>
                    Sold Out
                  </Button>
                  <span className="inline-block p-2"></span>
                  <Button rounded danger>
                    Delete
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-gray-300">Item denied</p>
            )}
          </div>
        ),
      }));

  const data = React.useMemo(() => itemsData || [], [itemsData]);

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Image", accessor: "image" },
      {
        Header: (
          <div className="flex flex-col">
            <div>SKU</div>
            <div className="text-sm text-gray-400">Condition</div>
          </div>
        ),
        accessor: "sku",
      },
      {
        Header: (
          <div className="flex flex-col">
            <div>Product Name</div>
            <div className="text-sm text-gray-400">Description</div>
          </div>
        ),
        accessor: "desc",
      },
      { Header: "Product Location", accessor: "location" },
      { Header: "Seller", accessor: "seller" },
      {
        Header: (
          <div className="flex flex-col">
            <div>Date created</div>
            <div className="text-sm text-gray-400">Last updated</div>
          </div>
        ),
        accessor: "date",
      },
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
