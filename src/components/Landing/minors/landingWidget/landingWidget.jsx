import React from "react";
import "./landingWidget.scss"
import pxl from "../../../../assets/images/pxl.jpg"

const LandingWidget = ({name, descriptions,image, price}) => {

  console.log(name, descriptions, price)
    return (

        <div className="pb-2 group w-[160px] flex flex-col space-y-2 overflow-hidden h-fit ld_widget bg-white rounded-md sm:rounded-lg">
            <div className="w-full h-full cursor-pointer duration-300">
            <div className="w-full h-[140px] img_sz overflow-hidden">
                <img className="h-full w-full object-cover min-[450px]:object-fill transform duration-200 group-hover:scale-105" src={image} alt="" /> 
            </div>
            <div className="mt-2 px-2 min-[450px]:space-y-2 space-y-1 text-sm sm:text-[15px]">
            <p className="truncate  w-[100vw] text-zinc-700 sm:pr-[10%]">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden w-[150px] min-[450px]:w-[200px]">{name}</span>
            </p>
            <p className="truncate w-[98vw] text-zinc-700 font-thin sm:pr-[10%] flex flex-wrap overflow-hidden">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden w-[150px] min-[450px]:w-[200px]">{descriptions}</span> 
            </p>
            </div>
            <div className="mt-2 min-[450px]:mt-5 px-2 text-[15px] font-medium sm:font-semibold text-zinc-700"> {`₦${price}`}</div>
            </div>
           
        </div>
    )
}


export default LandingWidget