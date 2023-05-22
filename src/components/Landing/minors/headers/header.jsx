import React, {useState, useEffect} from "react";
import logo from "../../../../assets/images/waveb.png"
import "../../../../index.css";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import AuthCard from "../authcard/authcard";
import CartCard from "../minicartcard/miniCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getExistingDoc } from "firebasedatas/firebaseAuth";
const Header = () => {
    const { numOfCartItems}  = useSelector((state) => state.cart)
    const [isVisible, setisVisisble] = useState(false)
    const [isCart, setisCart] = useState(false)
    const [name, setname] = useState()
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.user)

    useEffect(() => {
        if(!currentUser) return
       async function getUser () {
       await getExistingDoc(currentUser)
       .then((res) => {
        console.log(res)
        setname(res.name)
       })
       .catch((err) => {
        console.log(err)
       })
        }
       
        getUser()
    },[])
    return (

        <div className="bg-white w-full p-2 min-[450px]:py-3 min-[450px]:px-5 shadow-lg flex justify-between items-center border-b">
            <div className="flex space-x-2 items-center" >
                <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <div className="flex flex-col justify-start">
                <div className="uppercase font-semibold text-[#009999]">Wave</div>
                <div className="uppercase font-semibold text-[#009999]">Budget</div>
                </div>
              
            </div>

            <div className="hide cursor-pointer sm:flex items-center sm:space-x-4 space-x-2">
                <div
                onMouseEnter={() => {
                    if(name) {
                        setisVisisble(false)
                    }
                    else {
                        setisVisisble(true)
                    }
                  
                }}
                onMouseLeave={() => {
                    setisVisisble(false)
                }}
                className="group relative text-black">
                    <div className="flex group-hover:text-[#009999] text-[16px] items-center space-x-2">
                    {name ? <span className="capitalize hidden sm:block text-sm">{name.split(" ")[0] || name}</span>:<span className="hidden sm:block text-sm">Sign in</span>}
                <FaUser className="hidden sm:block " />
                    </div>
                 

                <AuthCard isVisible={isVisible}/>
                </div>
               <div
               onClick={() => {
               navigate("/cart")
               }}
                onMouseEnter={() => {
                    setisCart(true)
                }}
                onMouseLeave={() => {
                    setisCart(false)
                }}
               className="relative">
                {numOfCartItems > 0 && <div className="hidden sm:flex absolute top-[-10px] right-[-10px] bg-[#009999] rounded-full px-2  text-[10px] text-white  items-center justify-center ">
                    <span>{numOfCartItems}</span>

                </div>}
               <FaShoppingCart className="hidden sm:block hover:text-[#009999]"/>
                <CartCard isCart={isCart}  name={name}  items={numOfCartItems}/>
               </div>
             
            </div>

        </div>
    )
}

export default Header