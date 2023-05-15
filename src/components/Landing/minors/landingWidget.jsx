import React from "react";
import pxl from "../../../assets/images/pxl.jpg"


const LandingWidget = () => {
    return (

        <div className="group w-[140px] flex flex-col space-y-2 overflow-hidden h-[220px] sm:w-[190px] sm:h-[280px] bg-white rounded-md sm:rounded-lg">
            <div className="w-full h-full group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2">
            <div className="w-full h-[140px] sm:h-[190px]">
                <img className="h-full w-full object-cover" src={pxl} alt="" /> 
            </div>
            <div className="px-2 space-y-1 text-sm sm:text-[15px]">
            <p class="truncate  w-[100vw] text-zinc-700 sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">name</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">description</span> 
            </p>
            </div>
            <div className="mt-3 px-2 text-[15px] font-medium sm:font-semibold text-zinc-700"> ₦50,000</div>
            </div>
           
        </div>
    )
}


export default LandingWidget