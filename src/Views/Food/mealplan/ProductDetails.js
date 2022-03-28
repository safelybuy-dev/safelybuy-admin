import React from "react";
import { CloseIcon } from "svg";

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
          <h3 className="text-2xl">Meal Plan Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex mr-4 md:mr-0 md:flex-col flex-row">
          <div className="flex flex-col md:w-6/12 w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="w-64 md:w-24 rounded-xl h-32 md:h-24 bg-gray-200 overflow-hidden">
                <img
                  src={selectedProduct.main_image}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-6/12 ml-4 w-full">
            <div className="flex flex-col  pb-4 w-full md:mt-4 mt-0">
              <div className="flex  flex-col">
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">
                    Title and Specifications
                  </h4>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Food Title" value={selectedProduct.name} />
                    <KeyValue title="Food SKU" value={selectedProduct.sku} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Food Price"
                      value={(+selectedProduct.cost).toLocaleString() + "NGN"}
                    />
                    <KeyValue
                      title="Food Availability"
                      value={
                        <span className="capitalize">
                          {selectedProduct.available_days
                            .map((day) => day.substring(0, 3))
                            .join(", ")}
                        </span>
                      }
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="State"
                      value={selectedProduct.state.name}
                    />
                    <KeyValue title="City" value={selectedProduct.city} />
                  </div>
                </div>
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">
                    Inventory and Sales
                  </h4>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Seller SKU" value="SB-#2123434343" />
                    <KeyValue
                      title="Your Price"
                      value={(+selectedProduct.cost).toLocaleString() + "NGN"}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-purple-500">Meal Location</h4>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="State"
                      value={selectedProduct?.state?.name}
                    />
                    <KeyValue
                      title="City / Town"
                      value={selectedProduct.city}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
