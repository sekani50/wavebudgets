import React,{useState} from "react";
import LandingWidget from "./landingWidget/landingWidget";


const ProductWidget = ({data}) => {
    
    return (

        <div className="mt-[1rem] px-[2%] md:px-[1%] lg:px-[2%] space-y-[1rem]">
            <p className=" top_heading">Just for You</p>

            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">

            <LandingWidget/>
            <LandingWidget/>
            <LandingWidget/>
            <LandingWidget/>
            <LandingWidget/>
            <LandingWidget/>
            <LandingWidget/>
            </div>
            
        </div>
    )
}

export default ProductWidget