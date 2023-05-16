import React, {useState} from "react";
import logo from "../../../assets/images/waveb.png"
import "../../../index.css";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import AuthCard from "./authcard/authcard";
import CartCard from "./minicartcard/miniCard";


const Header = () => {
    const [isVisible, setisVisisble] = useState(false)
    const [isCart, setisCart] = useState(false)


    return (

        <div className="bg-white w-full py-4 px-6 shadow-lg flex justify-between items-center border-b">
            <div className="flex space-x-2 items-center" >
                <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <p className="uppercase text-[#009999]">Wave Bugdet</p>
            </div>

            <div className="hide cursor-pointer sm:flex items-center sm:space-x-4 space-x-2">
                <div
                onMouseEnter={() => {
                    setisVisisble(true)
                }}
                onMouseLeave={() => {
                    setisVisisble(false)
                }}
                className="group relative text-black">
                    <div className="flex group-hover:text-[#009999] text-[16px] items-center space-x-2">
                    <span className="">Sign in</span>
                <FaUser className="hidden sm:block " />
                    </div>
                 

                <AuthCard isVisible={isVisible}/>
                </div>
               <div
                onMouseEnter={() => {
                    setisCart(true)
                }}
                onMouseLeave={() => {
                    setisCart(false)
                }}
               className="relative">
               <FaShoppingCart className="hidden sm:block hover:text-[#009999]"/>
              
              <CartCard isCart={isCart}/>
               </div>
             
            </div>

        </div>
    )
}

export default Header