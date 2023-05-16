import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/waveb.png"
import { useLocation } from "react-router-dom";
const AuthCard = ({ isVisible}) => {
    const navigate = useNavigate()
    const{pathname } = useLocation()

    return (
        <>
 <div
        
         className={isVisible ? "h-[250px] z-40 absolute w-[300px] text-sm left-[-200px] bg-white bottom-[-250px] flex flex-col shadow-lg rounded-xl space-y-4 px-6 py-4 justify-center items-center": "hidden"}>
             <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
            <button
            onClick={() => {
                navigate("/signin")
            }}
            className="bg-[#009999] text-white p-2 rounded-2xl flex items-center w-full justify-center">Sign in</button>

            
         <button
            onClick={() => {
                navigate("/signup")
            }}
            className="text-[#009999] bg-white border p-2 border-[#009999] rounded-2xl flex items-center w-full justify-center">Register for free </button>
          
            </div>
            
            </>
           
    )
}

export default AuthCard