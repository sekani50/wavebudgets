import React, {useState} from "react";
import pxl from "../../assets/images/pxl.jpg";
import HidHeader from "components/Landing/minors/headers/hidHeader";
import { BsCartPlus } from "react-icons/bs";
import {MdPreview} from "react-icons/md"
import WaveFooter from "components/Landing/minors/footer/footer";
import MobileNav from "components/mobilenav/mobileNav";
import ImageSlider from "./imageslider/imageSlider";
import AuthCard from "components/Landing/minors/authcard/authcard";
import MobileBtns from "components/mobilenav/mobileBtns";

const ProductDetail = () => {
  const [isShow, setisShow] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isSlider, setisSlider] = useState(false)
    const [curPrice, setcurPrice] = useState()
    const [curBNPL, setcurBNPL] = useState()

  return (
    <div className="w-full h-full">
      <HidHeader 
      isVisibles={isVisible}
      />

      <div className="mt-[48px] min-[450px]:mt-[60px] sm:mt-[80px] mb-[1rem] w-full bg-white p-2 min-[450px]:p-3 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full flex flex-col cursor-pointer sm:row-span-2">
          <div className="w-full h-[450px] rounded-sm">
            <img className="w-full h-full rounded-sm" src={pxl} alt="pxl" />
          </div>
          <button
          onClick={() => {
            setisSlider(!isSlider)
          }}
          className="flex justify-center space-x-2 items-center border rounded-sm min-[450px]:py-4 text-zinc-800 bg-white py-2">
           <MdPreview className="text-[16px]"/> <span className="">View image detail</span>
          </button>
        </div>

        <div className="flex flex-col justify-start space-y-[5%] text-zinc-800">
          <div className="border-b p-2">
            Name of the product i am purchasing
          </div>
          <p className="border-b p-2">
            Unit price: <b>₦50,000</b>
          </p>
          <p className="border-b p-2">
            BNPL price: <b>₦50,000</b>
          </p>

          <div class="w-[50%] my-2 flex border text-zinc-800 font-semibold bg-white h-10 sm:h-14 items-center rounded-sm sm:rounded-md">
            <button class="p-2 flex justify-center items-center hover:text-white rounded-l-md hover:bg-zinc-800 h-full w-4/12">
              <div>+</div>
            </button>
            <button class="p-2 border-l border-r h-full w-5/12">2</button>
            <button class="p-2 flex justify-center items-center rounded-r-md hover:text-white hover:hover:bg-zinc-800 h-full w-4/12">
              <div>-</div>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-[3%] p-2 min-[450px]:p-4">
          <div className=" flex w-[90%] sm:w-full lg:w-[90%] justify-between items-center p-2">
            <span>Unit price:</span> <span><b>₦50,000</b></span>
          </div>
          <div className=" flex w-[90%] sm:w-full lg:w-[90%] justify-between items-center p-2">
            <span>BNPL price:</span> <span><b>₦50,000</b></span>
          </div>
          <button
        
          className="text-white sm:w-full lg:w-[90%] bg-[#009999] flex rounded-lg py-3 justify-center items-center w-[90%]">
            Order now
          </button>
          <button
       
          className="bg-white sm:w-full lg:w-[90%] border-[#009999] py-3  rounded-lg border flex justify-center items-center w-[90%]">
            Buy now pay later
          </button>
          <button 
          
          className="text-white sm:w-full lg:w-[90%] bg-sky-900 border py-3 space-x-2   rounded-lg flex justify-center items-center w-[90%]">
            <span>
              <BsCartPlus />
            </span>
            <span className="mr-2">Add to cart</span>
          </button>
        </div>
      </div>

      <div className="mb-[1rem] bg-white w-full overflow-hidden flex flex-col justify-start p-2 min-[450px]:p-4 space-y-[2%]">
        <p className="text-[#009999] font-semibold">Product Details</p>
        <p className=" font-semibold">Overview</p>
        <div className="leading-7 min-[450px]:leading-8">
          The unique and potentially useful properties of nanomaterials include
          dramatically increased surface areas and reactivities, improved
          strength-weight ratios, increased electrical conductivity, and changes
          in color and opacity. Materials designed to take advantage of these
          properties are finding application in a variety of areas, such as
          electronics, medicine, and environmental protection. Nanomaterials and
          nanotechnology provide a powerful method of detection and treatment of
          trace pollutants in the environment
        </div>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2">
        <div className="w-full h-[400px] rounded-sm">
            <img className="w-full h-full rounded-sm" src={pxl} alt="pxl" />
          </div>

          <div className="w-full h-[400px] rounded-sm">
            <img className="w-full h-full rounded-sm" src={pxl} alt="pxl" />
          </div>

          <div className="w-full h-[400px] rounded-sm">
            <img className="w-full h-full rounded-sm" src={pxl} alt="pxl" />
          </div>
        </div>
      </div>
    
      <ImageSlider
      isSlider={isSlider}
      setisSlider={ setisSlider}
      />
      <WaveFooter/>
      <MobileBtns/>
    </div>
  );
};

export default ProductDetail;
