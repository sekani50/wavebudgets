import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./desktopdashnav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const DesktopDashNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const {pathname} = useLocation()

  const setOpen = (e) => {
    e.stopPropagation()
    setisOpen(!isOpen)
  };
  const checkcat = () => {};
  return (
    <div
      onClick={(e) => {
        setOpen(e);
      }}
      className={
        isOpen
          ? "wrapper let swipeInLeft fixed z-20 cursor-pointer hs h-full"
          : "fixed cursor-pointer hs h-full z-20 nowrapper  let swipeInLeft"
      }
    >
      <div
        className={
          isOpen
            ? "menuhide let swipeInLeft p-1 sm:p-2"
            : "p-1 sm:p-2 menu let swipeInLeft"
        }
      >
        <div onClick={(e) => {setOpen(e)}}>
          <AiOutlineMenu className="text-[25px] text-white" />
        </div>
      </div>

      <div
      onClick={(e) => {e.stopPropagation()}}
        className={
          isOpen
            ? "dashhideshow let swipeInLeft px-4 space-y-3 sm:space-y-4 sm:px-12 h-full"
            : "dashshow let swipeInLeft px-4 space-y-3 sm:space-y-4 sm:px-12 h-full"
        }
      >
        <div className="uppercase font-bold text-white">Dashboard</div>
        <div className="bg-none h-2 w-2"></div>
        <Link to="/store" className={pathname === "/store"? 'font-medium text-gray-200':"font-light text-gray-200"}>
          Add product
        </Link>
        <div
          onClick={checkcat}
          className="font-light text-gray-200 flex items-center"
        >
          <span>Edit Categories </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopDashNav;
