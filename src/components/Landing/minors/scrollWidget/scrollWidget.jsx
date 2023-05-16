import React from "react";
import pxl from "../../../../assets/images/pxl.jpg"
import "./scrollWidget.scss"

const ScrollWidget = () => {
    return (

        <div className="group pb-2 w-[140px] flex flex-col space-y-2 overflow-hidden sc_widget h-[220px]  bg-white rounded-md sm:rounded-lg">
            <div className="w-full h-full group-hover:shadow-xl cursor-pointer">
            <div className="w-full h-[140px] img_sz overflow-hidden">
                <img className="h-full w-full object-cover transform duration-200 group-hover:scale-105" src={pxl} alt="" /> 
            </div>
            <div className="px-2 min-[450px]:space-y-2 space-y-1 text-sm sm:text-[15px]">
            <p class="truncate  w-[100vw] text-zinc-700 sm:pr-[10%]">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">name</span>
            </p>
            <p class="truncate w-[98vw] text-zinc-700 font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span class="text-ellipsis whitespace-nowrap overflow-hidden w-[200px]">description</span> 
            </p>
            </div>
            <div className="mt-3 min-[450px]:mt-5 px-2 text-[15px] font-medium sm:font-semibold text-zinc-700"> ₦50,000</div>
            </div>
           
        </div>
    )
}


export default ScrollWidget