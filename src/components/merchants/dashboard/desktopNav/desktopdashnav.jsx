import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./desktopdashnav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateSingleItem } from "Redux/Actions/ActionCreators";
const DesktopDashNav = ({ key }) => {
  const { category } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const data = [
    { cats: "Health & Beauty",  data:category?.health, id:"health"},
    { cats: "Phones",  data:category?.phone , id:"phone"},
    { cats: "Laptops",  data:category?.laptop, id:"laptop" },
    { cats: "Real Estate",  data:category?.estate, id:"estate" },
    { cats: "Pharmaceutical",  data:category?.pharmacy, id:"pharmacy"},
    { cats: "Drinks & Beverages",  data:category?.drink, id:"drink" },
    { cats: "FoodStuffs",  data:category?.foodstuff, id:"foodstuff" },
    { cats: "Fashion",  data:category?.fashion, id:"fashion" },
    { cats: "Automobile",  data:category?.automobile, id:"automobile" },
    { cats: "Appliances",  data:category?.appliance, id:"appliance" },
    { cats: "Baby Products",  data:category?.baby, id:"baby" },
  ];

  const setOpen = (e) => {
    e.stopPropagation();
    setisOpen(!isOpen);
  };
  const checkcat = () => {};
  console.log(key);
  return (
    <div
      onClick={(e) => {
        setOpen(e);
      }}
      className={
        isOpen
          ? "wrapper let swipeInLeft fixed z-20 cursor-pointer hs h-full"
          : "fixed cursor-pointer hs h-full z-20 nowrapper  let swipeInLeft"
      }
    >
      <div
        className={
          isOpen
            ? "menuhide let swipeInLeft p-1 sm:p-2"
            : "p-1 sm:p-2 menu let swipeInLeft"
        }
      >
        <div
          onClick={(e) => {
            setOpen(e);
          }}
        >
          <AiOutlineMenu className="text-[25px] text-white" />
        </div>
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          isOpen
            ? "dashhideshow let swipeInLeft px-4 space-y-3 sm:space-y-4 sm:px-12 h-full"
            : "dashshow let swipeInLeft px-4 space-y-3 sm:space-y-4 sm:px-12 h-full"
        }
      >
        <div className="uppercase font-bold text-white">Dashboard</div>
        <div className="bg-none h-2 w-2"></div>
        <Link
          to={`/store/COeALmKoRQcLvtk4XHIu`}
          className={`hover:text-white hover:font-normal ${
            pathname === `/store/COeALmKoRQcLvtk4XHIu`
              ? "font-medium text-gray-200"
              : "font-light text-gray-200"}
          `}
        >
          Add product
        </Link>
        <div
          onClick={checkcat}
          className={`${pathname === "/edit-item" ? 'font-normal' : 'font-light'} text-gray-200 hover:text-white hover:font-normal flex items-center`}
        >
          <span>Edit Categories </span>
        </div>
        <div className="space-y-3 pl-3 $text-gray-200 text-sm">
          {data.map(({ cats, data, id }, idx) => {
            return <div
            key={idx}
            onClick={() => {
              navigate("/edit-item", {
                state: {
                
                  cats,
                
                }
              })
              dispatch(updateSingleItem(data))
            }}
            >
              <span className={`${pathname === "/edit-item" ? 'font-normal' : 'font-light'} hover:text-white hover:font-normal text-gray-200`}>{cats}</span>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopDashNav;
