import React, { useState } from "react";
import { ArrowDown } from "

export default function ItemsPerPage({ selectRef, isVisible, setIsVisible }) {
  const options = [
    "Last 5 days",
    "Last 30 days",
    "In the past Year",
    "All Orders",
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="mx-2 w-48 relative md:w-1/2 md:mx-0">
      <button
        onClick={(e) => {
          if (isVisible) setIsVisible(false);
          else setIsVisible(true);
          e.stopPropagation();
        }}
        className="relative w-full pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:pr-3"
      >
        <span className="flex items-center">
          <span className="ml-3 block text-purple-500 truncate md:ml-0">
            {selected}
          </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
          {/* <!-- Heroicon name: selector --> */}
          <ArrowDown scale={2} />
        </span>
      </button>
      <div
        ref={selectRef}
        className={`transition ease-in duration-100 ${
          isVisible ? "block" : "hidden"
        } absolute mt-1 w-full rounded-md bg-white shadow-lg`}
      >
        <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {options.map((option) => (
            <li
              key={Math.random()}
              onClick={() => {
                setSelected(option);
                setIsVisible(false);
              }}
              className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-purple-600"
            >
              <span
                className={`${
                  selected === option ? "font-semibold" : "font-normal"
                } ml-3 block font-normal truncate`}
              >
                {option}
              </span>
              {selected === option && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  {/* <!-- Heroicon name: check --> */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
