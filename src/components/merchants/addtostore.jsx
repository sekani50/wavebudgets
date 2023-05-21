import React from "react";
import DesktopDashNav from "./dashboard/desktopNav/desktopdashnav";
import AddProduct from "./addproduct/addProduct";
import MobileDashboard from "./dashboard/mobiledashnav";
import TopNavBar from "./topnavbar";


const AddToStore = () => {

    return (
        <div className="w-full h-full  bg-gray-50 inset-0 sm:pb-56 fixed overflow-y-auto overflow-x-hidden">
            <TopNavBar/>
            <DesktopDashNav/>
            <AddProduct/>
            <MobileDashboard/>
        </div>
    )
}

export default AddToStore