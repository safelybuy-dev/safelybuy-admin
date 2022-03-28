import React, { useReducer, useEffect, useState } from "react";
import Breadcrumb from "components/Breadcrumb";
// import Button from 'components/Button';
import InventoryTableView from "./InventoryTableView";
import { shopping } from "reducers/initialState";
import shoppingReducer from "reducers/shopping";
import { fetchFoodOrders } from "actions/shopping";

const Inventory = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchFoodOrders(dispatch, pageNumber);
  }, [dispatch, pageNumber]);
  const { foodOrders, loadingFoodOrders } = state;

  console.log(foodOrders, loadingFoodOrders);
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb
        parentText="Food"
        parentLink="/food"
        childText="Manage Restuarants"
        childLink="/food/restuarants"
      />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage Restuarant Orders</h2>
        {/* <span className="inline-block md:hidden">
          <Button
            text="View recently added"
            secondary
            roundedFull
            preTagText="50"
          />
        </span>
        <span className="hidden md:inline-block">
          <Button
            text="Recent"
            secondary
            roundedFull
            preTagText="50"
          />
        </span> */}
      </div>
      <InventoryTableView
        loading={loadingFoodOrders}
        events={foodOrders}
        dispatch={dispatch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Inventory;
