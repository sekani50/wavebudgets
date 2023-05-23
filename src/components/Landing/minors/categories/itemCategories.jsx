import React from "react";
import { BsPhone, BsLaptop } from "react-icons/bs";
import {
  MdOutlineRealEstateAgent,
  MdOutlineLocalPharmacy,
  MdOutlineFoodBank,
  MdOutlineEmojiFoodBeverage,
} from "react-icons/md";
import { TbBabyCarriage } from "react-icons/tb";
import healths from "../../../../assets/Svg/health.svg";
import elect from "../../../../assets/Svg/elect.svg";
import autos from "../../../../assets/Svg/auto.svg";
import fashions from "../../../../assets/Svg/fashion.svg";
import { useSelector } from "react-redux";
import appliances from "../../../../assets/Svg/appliances.svg";
import { useNavigate } from "react-router-dom";
const ItemCategories = () => {
  const navigate = useNavigate();
  const {category} = useSelector((state) => state.items)




  return (
    <div className="max-[1000px]:hidden gap-6 grid grid-cols-6 bg-white rounded-md p-4">
      <div className="w-fit text-[14px] col-span-1 space-y-4 cursor-pointer">
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Health and Beauty",
                data:category?.health
                
              },
            });
          }}
          className="flex group space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img className="w-full h-full" src={healths} alt="" />
          </div>
          <span className=" group-hover:text-[#009999] capitalize">Health and Beauty</span>
        </div>

        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Phones",
                data:category?.phone
              },
            });
          }}
          className="flex group space-x-2 justify-start items-center"
        >
          <BsPhone className="text-[20px] group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Phones</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Laptops",
                data:category?.laptop
              },
            });
          }}
          className="flex  space-x-2 group justify-start items-center"
        >
          <BsLaptop className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Laptops</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Real Estate",
                data:category?.estate
              },
            });
          }}
          className="flex group space-x-2 justify-start items-center"
        >
          <MdOutlineRealEstateAgent className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Real Estate</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Pharmaceuticals",
                data:category?.pharmacy
              },
            });
          }}
          className="flex  space-x-2 group justify-start items-center"
        >
          <MdOutlineLocalPharmacy className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Pharmaceuticals</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Drinks and Beverages",
                data:category?.drink
              },
            });
          }}
          className="flex  space-x-2 group justify-start items-center"
        >
          <MdOutlineEmojiFoodBeverage className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Drinks and Beverages</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Food Stuffs",
                data:category?.foodstuff
              },
            });
          }}
          className="flex group  space-x-2 justify-start items-center"
        >
          <MdOutlineFoodBank className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Food Stuffs</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Fashion",
                data:category?.fashion
              },
            });
          }}
          className="flex group space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img src={fashions} alt="" />
          </div>
          <span className="capitalize  group-hover:text-[#009999]">Fashion</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Automobile",
                data:category?.automobile
              },
            });
          }}
          className="flex group space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img src={autos} alt="" />
          </div>
          <span className=" group-hover:text-[#009999] capitalize">Automobile</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Appliances",
                data:category?.appliance
              },
            });
          }}
          className="flex group  space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img className="w-full h-full" src={appliances} alt="" />
          </div>
          <span className="capitalize  group-hover:text-[#009999]">Appliances</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Baby Products",
                data:category?.baby
              },
            });
          }}
          className="flex group  space-x-2 justify-start items-center"
        >
          <TbBabyCarriage className="text-[20px]  group-hover:text-[#009999]" />
          <span className="capitalize  group-hover:text-[#009999]">Baby Products</span>
        </div>
      </div>

      <div className="bg-orange-400 w-full h-full col-span-5 rounded-md"></div>
    </div>
  );
};

export default ItemCategories;
