import { handlePayment } from "paystack/paystackInterface";
import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const MobileCheckout = ({ email, total }) => {
  //const { pathname } = useLocation();
  const {currentUser} = useSelector((state) => state.user)

  return (
    <div className="min-[650px]:hidden fixed w-full border-t shadow-lg items-center bg-white inset-x-0 flex gap-3 justify-between p-4 rounded-t-xl bottom-0">
      <div className="text-[16px]">
        <b>
          <span className="mr-3 ">Total:</span>
          <span>{`₦${total}`}</span>
        </b>
      </div>
    
      <button
      onClick={()=> {
        if (!currentUser) {
          toast.error("You must be logged in to buy")
          return
        }
        handlePayment(email, parseFloat(total))
      }}
      className="text-white py-3 bg-[#009999] rounded-2xl flex justify-center items-center w-[100px] ">
        CheckOut
      </button>
    </div>
  );
};

export default MobileCheckout;
