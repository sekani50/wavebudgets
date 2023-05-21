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
import auto from "../../../../assets/Svg/auto.svg";
import fashion from "../../../../assets/Svg/fashion.svg";

import appliances from "../../../../assets/Svg/appliances.svg";
import { useNavigate } from "react-router-dom";
const ItemCategories = () => {
  const navigate = useNavigate();

  function viewDetail(nav) {
    navigate("/detail", {
      state: {
        navtitle: nav,
      },
    });
  }

  return (
    <div className="max-[1000px]:hidden gap-6 grid grid-cols-6 bg-white rounded-md p-4">
      <div className="w-fit text-[14px] col-span-1 space-y-4 cursor-pointer">
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Health and Beauty",
              },
            });
          }}
          className="flex space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img className="w-full h-full" src={health} alt="" />
          </div>
          <span className="capitalize">Health and Beauty</span>
        </div>

        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Phones",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <BsPhone className="text-[20px]" />
          <span className="capitalize">Phones</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Laptops",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <BsLaptop className="text-[20px]" />
          <span className="capitalize">Laptops</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Real Estate",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <MdOutlineRealEstateAgent className="text-[20px]" />
          <span className="capitalize">Real Estate</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Pharmaceuticals",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <MdOutlineLocalPharmacy className="text-[20px]" />
          <span className="capitalize">Pharmaceuticals</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Drinks and Beverages",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <MdOutlineEmojiFoodBeverage className="text-[20px]" />
          <span className="capitalize">Drinks and Beverages</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Food Stuffs",
              },
            });
          }}
          className="flex   space-x-2 justify-start items-center"
        >
          <MdOutlineFoodBank className="text-[20px]" />
          <span className="capitalize">Food Stuffs</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Fashion",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img src={fashion} alt="" />
          </div>
          <span className="capitalize">Fashion</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Automobile",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img src={auto} alt="" />
          </div>
          <span className="capitalize">Automobile</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Appliances",
              },
            });
          }}
          className="flex   space-x-2 justify-start items-center"
        >
          <div className="w-[20px] h-[20px]">
            <img className="w-full h-full" src={appliances} alt="" />
          </div>
          <span className="capitalize">Appliances</span>
        </div>
        <div
          onClick={() => {
            navigate("/detail", {
              state: {
                navtitle: "Baby Products",
              },
            });
          }}
          className="flex  space-x-2 justify-start items-center"
        >
          <TbBabyCarriage className="text-[20px]" />
          <span className="capitalize">Baby Products</span>
        </div>
      </div>

      <div className="bg-orange-400 w-full h-full col-span-5 rounded-md"></div>
    </div>
  );
};

export default ItemCategories;
