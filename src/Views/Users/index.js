import React, { useState, useReducer } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import { ContextShopping } from '../../context';
import { shopping } from '../../reducers/initialState';
import shoppingReducer from '../../reducers/shopping';
import { PlusIcon } from '../../svg';
import AddUser from './AddUser';

import InventoryTableView from './InventoryTableView';

const Inventory = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className='flex flex-col w-full items-start'>
        <Breadcrumb parentText='User Management' parentLink='/customers' />
        <AddUser
          selectedSeller={selectedSeller}
          setSelectedSeller={setSelectedSeller}
        />
        <div className='flex justify-between w-full'>
          <h2 className='text-xl'>Manage Users</h2>
          <span onClick={() => setSelectedSeller({ name: 'New Meaning' })}>
            <Button primary text='Add new user' roundedLg icon={<PlusIcon />} />
          </span>
        </div>
        <InventoryTableView />
      </div>
    </ContextShopping.Provider>
  );
};

export default Inventory;
