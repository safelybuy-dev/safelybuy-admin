const Columns = [
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
];

export default Columns;
