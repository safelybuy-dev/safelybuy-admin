import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TableBody from "./TableBody";
import ProductDetails from "./ProductDetails";
import SellerDetails from "./SellerDetails";
import { LoadingIcon } from "svg";

const InventoryTableView = ({
  loading,
  events,
  dispatch,
  deleteExtra,
  setEditId,
  setExtra,
}) => {
  const [active, setActive] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  return (
    <div className="">
      <TabHeader
        active={active}
        setActive={setActive}
        length={events?.length}
      />
      <div className="bg-white overflow-x relative rounded-b-2xl rounded-tr-2xl p-10 z-40 md:p-4 md:-mx-6">
        {loading ? (
          <div className="mt-20 mb-20 flex justify-center">
            <LoadingIcon />
            <span className="text-purple-500 animate-pulse">
              Loading orders...
            </span>
          </div>
        ) : (
          <TableBody
            setSelectedProduct={setSelectedProduct}
            setSelectedSeller={setSelectedSeller}
            active={active}
            events={events}
            dispatch={dispatch}
            deleteExtra={deleteExtra}
            setEditId={setEditId}
            setExtra={setExtra}
          />
        )}
      </div>
      {selectedProduct && (
        <ProductDetails
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      <SellerDetails
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
    </div>
  );
};

export default InventoryTableView;
