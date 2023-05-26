import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import CategoryNav from "../merchantCategory/categoryNav";
import { getExistingDoc } from "firebasedatas/firebaseAuth";
import { useSelector } from "react-redux";
const MobileDashboard = () => {
  const {currentUser}  = useSelector((state) => state.user)
  const [isCat, setisCat] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [ismobile, setismobile] = useState(false);
  const {pathname} = useLocation()
  const [key, setKey] = useState()
  const showCats = () => {
    setismobile(!ismobile)
  };

  const checkCats = () => {
    setisOpen(false);
  };

  useEffect(() => {
    async function getUser () {
    await getExistingDoc(currentUser)
    .then((res) => {
     console.log(res)
  
        setKey(res.key)
    
    })
    .catch((err) => {
     console.log(err)
    })
     }
    
     getUser()
 },[]) 

  console.log('from mobile dashboard',key);
  return (
    <>
    <div className="w-full sm:hidden h-fit text-sm fixed bottom-0 inset-x-0 shadow-lg border-t text-zinc-800 bg-white z-50">
      <div className="w-full flex justify-between items-center py-2 px-6">
        <div
        onClick={() => {
          setismobile(!ismobile)
        }} className="relative flex flex-col space-y-1 items-center justify-center">
          <span >
            <MdOutlineEditNote  className="text-[22px]" />
          </span>
          <span> Edit </span>

         
        </div>

        <Link
          to={`/seller/store/${key}`}
          className={`flex flex-col space-y-1 items-center justify-center ${pathname === `/seller/store/${key}` ? 'text-[#009999]':'text-zinc-700'}`}
        >
          <span>
            <IoMdAddCircle className="text-[22px]"/>
          </span>
          <span> Add products </span>
        </Link>

        <Link
          to="/"
          className="flex flex-col space-y-1 items-center justify-center"
        >
          <span>
            <AiOutlineHome  className="text-[22px]" />
          </span>
          <span> Home </span>
        </Link>
      </div>
    </div>
    <CategoryNav
    ismobile={ismobile}
    setismobile={setismobile}
    />
    </>
  );
};

export default MobileDashboard;
