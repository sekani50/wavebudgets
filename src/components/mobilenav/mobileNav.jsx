import React from "react";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineUserCircle,
  HiUserCircle,
} from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-[450px]:hidden border-t shadow-lg fixed w-full bg-white inset-x-0 flex justify-between p-2 bottom-0">
      {pathname === "/" ? (
        <div className="text-[#009999] flex flex-col space-y-1 items-center justify-center">
          <HiHome className="text-[20px]" />
          <span className="font-medium"> Home</span>
        </div>
      ) : (
        <div className="text-black flex flex-col space-y-1 items-center justify-center">
          <HiOutlineHome className="text-[20px]" />
          <span className="font-medium">Home</span>
        </div>
      )}
      {pathname === "/cart" ? (
         <div className="text-[#009999] flex flex-col  shadow-lg border-t space-y-1 items-center justify-center">
         <FaShoppingCart className="text-[20px]"/>
         <span className="font-medium">Cart</span>
       </div>
        
      ) : (
        <div className="text-black flex flex-col space-y-1 items-center justify-center">
         <AiOutlineShoppingCart className="text-[20px]" />
          <span className="font-medium">Cart</span>
        </div>
       
      )}
      {pathname === "/userinfo" ? (
          <div className="text-[#009999] flex flex-col space-y-1 items-center justify-center">
      
      <HiUserCircle className="text-[20px]" />
          <span className="font-medium">My wave</span>
          </div>
      ) : (
        <div className="text-black flex flex-col space-y-1 items-center justify-center">
         <HiOutlineUserCircle className="text-[20px]"/>
         <span className="font-medium">My wave</span>
       </div>
       
      )}
    </div>
  );
};

export default MobileNav;
