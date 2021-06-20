import React, { useReducer, useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
// import Button from "../../../components/Button";
import InventoryTableView from './InventoryTableView';
import { shopping } from '../../../reducers/initialState';
import shoppingReducer from '../../../reducers/shopping';
import { fetchShoppingItems } from '../../../actions/shopping';

const Inventory = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  const { items, isLoadingItems } = state;

  useEffect(() => {
    fetchShoppingItems(dispatch);
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Shopping'
        parentLink='/shopping'
        childText='Manage Inventory'
        childLink='/shopping/inventory'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Inventory</h2>
        {/* <span className="inline-block md:hidden">
          <Button
            text="View recently added"
            secondary
            roundedFull
            preTagText="50"
          />
        </span> */}
        {/* <span className="hidden md:inline-block">
          <Button text="Recent" secondary roundedFull preTagText="50" />
        </span> */}
      </div>
      <InventoryTableView
        loading={isLoadingItems}
        items={items}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Inventory;
