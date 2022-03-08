import React from "react";
import { CloseIcon } from "svg";
import moment from "moment";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const ProductDetails = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen py-40 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Restuarant Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex mr-4 md:mr-0 md:flex-col">
          <div className="flex flex-col w-6/12 md:w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <img
                className="w-28 md:w-24 rounded-xl object-cover h-28 md:h-24"
                alt={selectedProduct.name}
                src={selectedProduct.display_image}
              />
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-4 md:w-full">
            <div className="flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Display Information</h4>
              <div className="flex mt-6 flex-col">
                <div className="flex justify-between w-full">
                  <KeyValue title="Name" value={selectedProduct.name} />
                </div>
                {selectedProduct.description && (
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Restuarant Description"
                      value={selectedProduct.description}
                    />
                  </div>
                )}
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Price Per Portion"
                    value={selectedProduct.min_order_price}
                  />
                  <KeyValue
                    title="Delivery Time"
                    value={selectedProduct.time_to_deliver}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Opening Time"
                    value={moment(
                      selectedProduct.opening_time,
                      "HH:mm a"
                    ).format("LT")}
                  />
                  <KeyValue
                    title="Closing Time"
                    value={moment(
                      selectedProduct.closing_time,
                      "HH:mm a"
                    ).format("LT")}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-4 md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Contact</h4>
              <div className="flex mt-4 justify-between">
                <KeyValue
                  title="Contact Email"
                  value={selectedProduct.contact_email}
                />
                <KeyValue
                  title="Contact Phone"
                  value={selectedProduct.contact_phone}
                />
              </div>
              <KeyValue title="Address" value={selectedProduct.address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
