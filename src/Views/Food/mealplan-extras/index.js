import React, { useReducer, useEffect, useState, useCallback } from "react";
import Breadcrumb from "components/Breadcrumb";
// import Button from 'components/Button';
import InventoryTableView from "./InventoryTableView";
import { shopping } from "reducers/initialState";
import shoppingReducer from "reducers/shopping";
import { fetchMealPlanExtras } from "actions/shopping";
import { axiosWithAuth } from "auth";
import { useToasts } from "react-toast-notifications";
import { CloseIcon } from "svg";

const Inventory = () => {
  const { addToast } = useToasts();
  const [state, dispatch] = useReducer(shoppingReducer, shopping);
  const [extras, setExtras] = useState([]);
  const [extra, setExtra] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMealPlanExtras(dispatch);
  }, [dispatch]);

  const { mealPlanExtras, loadingMealPlanExtras } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isInArray = extras.find((ex) => ex.name === extra);
    if (!isInArray && extra) {
      setExtras((prevExtras) => [...prevExtras, { name: extra }]);
    }
  };

  const addExtra = async () => {
    try {
      setLoading(true);
      const response = await axiosWithAuth().post(
        "https://api.safelybuy.com/api/v1/drinks-and-xtras/create",
        { xtraBucket: extras }
      );
      setLoading(false);
      addToast(response.data.message, {
        appearance: "success",
        autoDismiss: true,
      });
      setExtras([]);
    } catch (error) {
      setLoading(false);
      addToast(error.response.data.message || error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const removeExtra = (name) => {
    const newExtra = extras.filter((extra) => extra.name !== name);
    setExtras(newExtra);
  };

  const deleteExtra = useCallback(
    async (id) => {
      try {
        await axiosWithAuth().delete(
          `https://api.safelybuy.com/api/v1/drinks-and-xtras/delete/${id}`
        );
        addToast("DELETE SUCCESS", {
          appearance: "success",
          autoDismiss: true,
        });
        fetchMealPlanExtras(dispatch);
      } catch (error) {
        addToast(error.response.data.message || error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    },
    [addToast]
  );

  const editExtra = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axiosWithAuth().post(
          "https://api.safelybuy.com/api/v1/drinks-and-xtras/edit",
          {
            xtraId: editId,
            name: extra,
          }
        );
        addToast("UPDATE SUCCESS", {
          appearance: "success",
          autoDismiss: true,
        });
        setEditId(null);
        setExtra("");
        fetchMealPlanExtras(dispatch);
      } catch (error) {
        addToast(error.response || error.message, {
          appearance: "success",
          autoDismiss: true,
        });
      }
    },
    [editId, extra, addToast]
  );

  return (
    <div className="flex flex-col w-3/4 mx-auto items-start">
      <Breadcrumb
        parentText="Food"
        parentLink="/food"
        childText="Meal plan"
        childLink="/food/meal-plan"
      />
      <div className="flex justify-between w-full">
        <h2 className="text-xl text-gray-800 mb-4">Meal Plans Extras</h2>
      </div>
      <div className="flex w-full  justify-between">
        <div className="flex flex-col">
          <form className="mb-4" onSubmit={editId ? editExtra : handleSubmit}>
            <div>
              <label htmlFor="extra" className="block mb-1 pl-2">
                {editId ? "Edit Extra*" : "Enter Extra*"}
              </label>
              <input
                type="text"
                id="extra"
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                className="border-2 border-purple-100 md:w-full focus:outline-none mb-4 px-4 py-2 rounded-full w-60"
                placeholder="Enter extra"
              />
            </div>
            <div className="my-6">
              {!editId && (
                <button
                  onClick={handleSubmit}
                  className="mr-4 bg-green-500 text-sm rounded-md text-gray-50 py-2 px-4"
                >
                  Add Extra
                </button>
              )}
              {editId && (
                <button
                  onClick={editExtra}
                  disabled={!extra}
                  className={`mr-4 bg-green-500 text-sm rounded-md text-gray-50 py-2 px-4 ${
                    !extra && "cursor-not-allowed bg-opacity-40"
                  }`}
                >
                  Edit Extra
                </button>
              )}
              {!editId && (
                <button
                  type="button"
                  className={`mr-4 text-sm bg-purple-500 rounded-md text-gray-50 py-2 px-4 ${
                    extras.length === 0 && "cursor-not-allowed bg-opacity-40"
                  } `}
                  onClick={addExtra}
                  disabled={extras.length === 0 ? true : false}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              )}
            </div>
          </form>
          {!editId && (
            <div className="flex flex-wrap">
              {extras.length === 0 ? (
                <p>No Extras Added Yet.</p>
              ) : (
                extras.map((extra, index) => (
                  <div className="mr-3 mb-3 ">
                    <button
                      key={index}
                      className="rounded-full mr-1 py-2 px-3 bg-gray-200 text-sm text-gray-800"
                    >
                      {extra.name}
                    </button>
                    <button onClick={() => removeExtra(extra.name)}>
                      <CloseIcon scale={0.6} />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <InventoryTableView
          loading={loadingMealPlanExtras}
          events={mealPlanExtras}
          dispatch={dispatch}
          deleteExtra={deleteExtra}
          setEditId={setEditId}
          setExtra={setExtra}
        />
      </div>
    </div>
  );
};

export default Inventory;
