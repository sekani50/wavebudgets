import HidHeader from "components/Landing/minors/headers/hidHeader";
import GroupHeaders from "components/groupHeadings/groupHeaders";
import React, { useState } from "react";

import empty from "../../../assets/images/emptycarts.png";
import MobileCheckout from "components/mobilenav/mobileCheckout";

import CartCards from "./cartCard";

const UserCart = () => {
  const [isShow, setisShow] = useState(false);

  return (
    <div className="w-full h-full">
      <HidHeader isVisibles={!isShow} />
      <GroupHeaders headings={"Shopping Cart"} />

      <div className="mt-[48px] h-full relative min-[450px]:mt-[60px] sm:mt-[80px] mb-[1rem] w-full p-2 min-[450px]:p-3 gap-6 flex flex-col">
        <div className="hidden m-auto absolute w-[320px] inset-0  flex-col justify-center items-center space-y-[4%] h-fit">
          <div className="w-[128px] h-[128px]">
            <img className="w-full h-full" src={empty} alt="" />
          </div>
          <div>No item in the cart</div>
          <button className="text-white sm:w-[50%] bg-sky-900 border py-2 space-x-2   rounded-lg flex justify-center items-center w-[50%]">
            Start Shopping
          </button>
        </div>
        <div className="max-[650px]:hidden space-y-5 xl:right-[50px] right-[30px] top-[200px] fixed w-[250px] xl:w-[300px] h-fit rounded-md bg-white p-3 flex flex-col justify-center items-center">
        <div className="text-[16px] w-full font-semibold flex items-center justify-between">
        
                <span className="">Total:</span>
                <span>₦50,000</span>
            
        </div>
        
        <button
     
        className="text-white py-2 bg-[#009999] rounded-2xl flex justify-center items-center w-full">
          CheckOut
        </button>
        </div>
        <div className="mt-[40px] min-[450px]:mt-0 flex flex-col mx-auto min-[450px]:mx-0 w-[90%] min-[650px]:w-[60%] min-[930px]:w-[70%] space-y-[3%] justify-start items-center">
        <CartCards/>
        <CartCards/>
        <CartCards/>
        </div>
      </div>
      <MobileCheckout/>
    </div>
  );
};

export default UserCart;
