import React, {useState,useEffect,useRef, useCallback} from "react";
import pix from  "../../../assets/images/pxl2.jpg";
import {IoIosSearch,IoIosCash} from "react-icons/io"
import  {TbTruckDelivery} from "react-icons/tb"
import {AiOutlineDeliveredProcedure} from "react-icons/ai"



const Search = ({setIsVisible}) => {
    const [searchText, setsearchText] = useState()
    const observeEl = useRef()


         /// Get the exiting element
  const firstElement = useCallback((node) => {
    observeEl.current = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        console.log("not visible");
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (node) observeEl.current.observe(node);
  }, []);



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
        <div
        ref={firstElement}
        className="w-full relative h-[200px] hidden min-[450px]:block mb-[4rem]">
              <img className="w-full h-full object-cover" src={pix} alt="pxl" />
        <div className="w-full h-full flex justify-center mx-auto items-center absolute inset-0 bg-[#009999] bg-opacity-30">

        <div className="relative w-[60%] min-[450px]:h-9 md:h-11 rounded-3xl">
        <input
        onChange={(e) => {
            setsearchText(e.target.value)
        }}
          type="text"
          name="text"
          placeholder="search"
          value={searchText}
          id="text"
          className="w-full h-full rounded-3xl px-8 outline-none"
        />
        <div className="absolute px-2 h-full flex top-0 rounded-3xl space-x-2 justify-center items-center right-0 bg-[#009999] text-white ">
            <IoIosSearch/>
            <span>Search</span>
        </div>
        </div>
        <div className="cursor-pointer absolute min-[450px]:w-[97vw] lg:w-[88vw] h-20 shadow-lg bottom-[-48px] rounded-xl bg-white grid grid-cols-3 px-2">
            <div
            onClick={Lservices}
            className="flex items-center justify-center min-[450px]:space-x-2 md:space-x-3 text-sm md:text-[15px] h-full">
                <TbTruckDelivery className="text-[#009999] min-[450px]:text-[30px] md:text-[40px]"/>
                <p className="font-semibold">Logistics Services</p>
            </div>
            <div
            onClick={Bseller}
            className="flex items-center justify-center min-[450px]:space-x-2 md:space-x-3 text-sm md:text-[15px] px-2 border-l border-r h-full">
                <IoIosCash  className="text-[#009999] min-[450px]:text-[30px] md:text-[40px]"/>
                <p  className="font-semibold" >Becoming a Seller</p>
            </div>
            <div
            onClick={Rdelivery}
            className="flex items-center justify-center min-[450px]:space-x-2 md:space-x-3 text-sm md:text-[15px]  h-full">
                <AiOutlineDeliveredProcedure  className="text-[#009999] min-[450px]:text-[30px] md:text-[40px]"/>
                <p  className="font-semibold" >Ready for Delivery</p>
            </div>
        </div>
       
        </div>
       
        
      </div>
    )
}

export default Search