import React from "react";
import logo from "../../../assets/images/waveb.png"
import "../../../index.css"

import {FaShoppingCart, FaUser} from "react-icons/fa"


const Header = () => {
    return (

        <div className="bg-white w-full py-4 px-6 shadow-lg flex justify-between items-center border-b">
            <div className="flex space-x-2 items-center" >
                <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <p className="uppercase text-[#009999]">Wave Bugdet</p>
            </div>

            <div className="hide sm:flex sm:space-x-4 space-x-2">
                <FaUser className="hidden sm:block hover:text-[#009999]" />
                <FaShoppingCart className="hidden sm:block hover:text-[#009999]"/>
            </div>

        </div>
    )
}

export default Header