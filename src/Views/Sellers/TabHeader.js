import React from "react";
import { Active, Inactive, List } from "../../svg";

const TabbedButton = ({ text, position = 1, active, svg, tag }) => {
  return (
    <div
      className={`${
        position < 3 && "-ml-4"
      } relative rounded-tl-3xl rounded-tr-lg z-${position * 10}${
        active ? " z-40" : ""
      }`}
      style={{ filter: "drop-shadow(0 0 10px rgba(50, 50, 50, 0.15))" }}
    >
      <div
        className={`${
          !active
            ? "bg-gradient-to-b text-purple-300 from-white to-gray-100"
            : "bg-white text-purple-500"
        } cursor-pointer px-8 pr-20 flex items-center rounded-tl-3xl rounded-tr-lg py-3 md:px-3 md:pr-6`}
        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)" }}
      >
        <span className="inline-block mr-4 md:mr-2">{svg}</span>
        {text}
        <span
          className={`inline-block ml-3 px-2 py-1 text-xs ${
            !active ? "bg-purple-100" : "bg-purple-500 text-white"
          } rounded-full md:hidden`}
        >
          {tag}
        </span>
      </div>
    </div>
  );
};

export default function TabHeader({ active, setActive }) {
  return (
    <div className="flex overflow-x md:-mx-6">
      <div
        className="wrapper"
        onClick={() => {
          setActive("all");
        }}
      >
        <TabbedButton
          svg={
            <List
              color={`${
                active === "all"
                  ? "#8661FF"
                  : "rgba(196, 181, 253, var(--tw-text-opacity))"
              }`}
            />
          }
          text="All"
          position={3}
          active={active === "all"}
          tag={40}
        />
      </div>
      <div
        className="wrapper"
        onClick={() => {
          setActive("active");
        }}
      >
        <TabbedButton
          text="Active"
          position={2}
          active={active === "active"}
          svg={
            <Active
              color={`${
                active === "active"
                  ? "#8661FF"
                  : "rgba(196, 181, 253, var(--tw-text-opacity))"
              }`}
            />
          }
          tag="23"
        />
      </div>
      <div
        className="wrapper"
        onClick={() => {
          setActive("inactive");
        }}
      >
        <TabbedButton
          text="Inactive"
          position={1}
          active={active === "inactive"}
          svg={
            <Inactive
              color={`${
                active === "inactive"
                  ? "#8661FF"
                  : "rgba(196, 181, 253, var(--tw-text-opacity))"
              }`}
            />
          }
          tag="11"
        />
      </div>
    </div>
  );
}
