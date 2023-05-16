import React, { useState } from "react";
import logo from "../../../../assets/images/waveb.png";
import "../../../../index.css";
import {MdNavigateBefore} from "react-icons/md"
import { FaShoppingCart, FaUser } from "react-icons/fa";
import AuthCard from "../authcard/authcard";
import CartCard from "../minicartcard/miniCard";
import {IoIosSearch} from "react-icons/io"

const HidHeader = ({isVisibles}) => {
  const [isVisible, setisVisisble] = useState(false);
  const [isCart, setisCart] = useState(false);
  const [searchText, setsearchText] = useState()

  return (
    <div className={isVisibles? "bg-white w-full z-50 fixed inset-x-0 top-0 p-3 min-[450px]:py-4 min-[450px]:px-6 shadow-lg flex justify-between items-center border-b": "hidden"}>
      <div className="flex space-x-2 items-center">
        <div className="w-10 h-6">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <p className="uppercase special font-semibold text-[#009999]">
          Wave Bugdet
        </p>
      </div>

      <div className="hidden min-[450px]:block relative w-[50%] h-6 min-[450px]:h-9 md:h-11 rounded-md">
        <input
        onChange={(e) => {
            setsearchText(e.target.value)
        }}
          type="text"
          name="text"
          placeholder="search"
          value={searchText}
          id="text"
          className="w-full h-full rounded-md border border-[#009999] px-8 outline-none"
        />
        <div className="absolute px-2 h-full flex top-0 rounded-r-md space-x-2 justify-center items-center right-0 bg-[#009999] text-white ">
            <IoIosSearch/>
            <span>Search</span>
        </div>
        </div>

      <div className="hide cursor-pointer sm:flex items-center sm:space-x-4 space-x-2">
        <div
          onMouseEnter={() => {
            setisVisisble(true);
          }}
          onMouseLeave={() => {
            setisVisisble(false);
          }}
          className="group relative hidden sm:block text-black"
        >
          <div className="flex group-hover:text-[#009999] text-[16px] items-center space-x-2">
            <span className="text-sm">Sign in</span>
            <FaUser className="hidden sm:block " />
          </div>

          <AuthCard isVisible={isVisible} />
        </div>
        <div
          onMouseEnter={() => {
            setisCart(true);
          }}
          onMouseLeave={() => {
            setisCart(false);
          }}
          className="relative"
        >
          <FaShoppingCart className="hidden sm:block hover:text-[#009999]" />

          <CartCard isCart={isCart} />
        </div>
      </div>
    </div>
  );
};

export default HidHeader;