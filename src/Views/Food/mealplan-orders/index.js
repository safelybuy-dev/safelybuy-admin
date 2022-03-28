import React, { useReducer, useEffect, useState } from "react";
import Breadcrumb from "components/Breadcrumb";
// import Button from 'components/Button';
import InventoryTableView from "./InventoryTableView";
import { shopping } from "reducers/initialState";
import shoppingReducer from "reducers/shopping";
import { fetchMealPlanOrders } from "actions/shopping";

const Inventory = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchMealPlanOrders(dispatch, pageNumber);
  }, [dispatch, pageNumber]);
  const { mealPlanOrders, loadingMealPlanOrders } = state;

  console.log(mealPlanOrders, loadingMealPlanOrders);
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb
        parentText="Food"
        parentLink="/food"
        childText="Manage Meal Plan"
        childLink="/food/meal-plan/orders"
      />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage Meal Plan Orders</h2>
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
        loading={loadingMealPlanOrders}
        events={mealPlanOrders}
        dispatch={dispatch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default Inventory;
