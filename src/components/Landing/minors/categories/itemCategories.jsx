import React from "react";
import { BsPhone, BsLaptop } from "react-icons/bs";
import {
  MdOutlineRealEstateAgent,
  MdOutlineLocalPharmacy,
  MdOutlineFoodBank,
  MdOutlineEmojiFoodBeverage,
} from "react-icons/md";
import { TbBabyCarriage } from "react-icons/tb";
import health from "../../../../assets/Svg/health.svg";
import elect from "../../../../assets/Svg/elect.svg";
import fashion from "../../../../assets/Svg/fashion.svg";
import appliances from "../../../../assets/Svg/appliances.svg";

const ItemCategories = () => {
  return (
    <div className="max-[1000px]:hidden gap-6 grid grid-cols-6 bg-white rounded-md p-4">

        <div className="w-fit col-span-1 space-y-3 cursor-pointer">
        <div className="flex space-x-2 justify-start items-center">
        <div className="w-[20px] h-[20px]">
          <img className="w-full h-full" src={health} alt="" />
        </div>
        <span className="capitalize">Health and Beauty</span>
      </div>


      <div className='flex  space-x-2 justify-start items-center'>
           <BsPhone className="text-[20px]" />
                <span className='capitalize'>Phones</span>

            </div>
            <div className='flex  space-x-2 justify-start items-center'>
           <BsLaptop className="text-[20px]" />
                <span className='capitalize'>Laptops</span>

            </div>
      <div className="flex  space-x-2 justify-start items-center">
        <MdOutlineRealEstateAgent className="text-[20px]" />
        <span className="capitalize">Real Estate</span>
      </div>
      <div className="flex  space-x-2 justify-start items-center">
        <MdOutlineLocalPharmacy className="text-[20px]" />
        <span className="capitalize">Pharmaceuticals</span>
      </div>
      <div className="flex  space-x-2 justify-start items-center">
        <MdOutlineEmojiFoodBeverage className="text-[20px]" />
        <span className="capitalize">Drinks and Beverages</span>
      </div>
      <div className="flex   space-x-2 justify-start items-center">
        <MdOutlineFoodBank className="text-[20px]" />
        <span className="capitalize">Food Stuffs</span>
      </div>
      <div className='flex  space-x-2 justify-start items-center'>
            <div className='w-[20px] h-[20px]'>
                <img src={fashion} alt="" />
                </div>
                <span className='capitalize'>Fashion</span>

            </div>
            <div className='flex   space-x-2 justify-start items-center'>
            <div className='w-[20px] h-[20px]'>
                <img className="w-full h-full" src={appliances} alt="" />
                </div>
                <span className='capitalize'>Appliances</span>

            </div>
            <div className='flex  space-x-2 justify-start items-center'>
           <TbBabyCarriage className="text-[20px]" />
                <span className='capitalize'>Baby Products</span>

            </div>
        </div>

        <div className="bg-orange-400 w-full h-full col-span-5 rounded-md">

        </div>
     
    </div>
  );
};

export default ItemCategories;
