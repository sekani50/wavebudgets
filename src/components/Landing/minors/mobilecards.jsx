import React from "react";
import {IoIosCash} from "react-icons/io"
import  {TbTruckDelivery} from "react-icons/tb"
import {AiOutlineDeliveredProcedure} from "react-icons/ai"



const MobileCards = () => {

    
    function Bseller () {
        const url =
        "https://wa.me/2348118617926?text=" + "   I want to become a seller "

      window.open(url, "blank").focus();
    }

    function Lservices () {
        const url =
        "https://wa.me/2348118617926?text=" + "  I want to know more about the logistics service "

      window.open(url, "blank").focus();
    }

    
    function Rdelivery () {
        const url =
        "https://wa.me/2348118617926?text=" + "   I want to know more about the delivery service and process "

      window.open(url, "blank").focus();
    }

    return (
        <div className="w-full mob-none h-fit overflow-hidden">
               <div className="mt-[1rem] hidescroll overflow-x-auto pl-2 pr-4  grid text-white grid-cols-3 gap-[10.5rem] w-full h-12">
             <div
            onClick={Lservices}
            className="flex items-center justify-center space-x-2 h-full rounded-lg bg-[#009999] min-w-max px-2">
                <TbTruckDelivery className="text-white text-[20px]"/>
                <p className=" text-sm">Logistics Services</p>
            </div>
            <div
            onClick={Bseller}
            className="flex items-center justify-center space-x-2 h-full rounded-lg bg-orange-500 min-w-max px-2">
                <IoIosCash  className="text-white text-[20px]"/>
                <p  className=" text-sm" >Becoming a Seller</p>
            </div>
            <div
            onClick={Rdelivery}
            className="flex items-center justify-center space-x-2 h-full rounded-lg bg-cyan-600 min-w-max px-2">
                <AiOutlineDeliveredProcedure  className="text-white text-[20px]"/>
                <p  className=" text-sm" >Ready for Delivery</p>
            </div>

        </div>

        </div>
     
    )
}

export default  MobileCards