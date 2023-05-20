import React, {useState} from "react";
import pxl from "../../assets/images/pxl.jpg";
import HidHeader from "components/Landing/minors/headers/hidHeader";
import { BsCartPlus } from "react-icons/bs";
import {MdPreview} from "react-icons/md"
import WaveFooter from "components/Landing/minors/footer/footer";
//import MobileNav from "components/mobilenav/mobileNav";
import ImageSlider from "./imageslider/imageSlider";
//import AuthCard from "components/Landing/minors/authcard/authcard";
import MobileBtns from "components/mobilenav/mobileBtns";
import GroupHeaders from "components/groupHeadings/groupHeaders";
import { useNavigate, useLocation } from "react-router-dom";
import { itemsToCart ,calculateTotal} from "Redux/Actions/ActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
const ProductDetail = () => {
  const {state} = useLocation()
  const {name, descriptions, price} = state
  const {cartItems} = useSelector((state) => state.cart)
  const [isShow, setisShow] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isSlider, setisSlider] = useState(false)
    const [curPrice, setcurPrice] = useState(price)
    const [curBNPL, setcurBNPL] = useState((price + (price * 0.1)))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const bnpl= price + (price * 0.1)


    console.log(name, descriptions, price)

    const incItem = () => {
      setCount(count + 1)
      setcurPrice(curPrice + price)
      setcurBNPL(curBNPL + bnpl)

    }
    const decItem = () => {
      if (count > 1) {
        setCount(count - 1)
      }else  {
        setCount(1)
      }
      if (curPrice === price) {
        setcurPrice( price)
        setcurBNPL(price + (price * 0.1))
      }
      else {
        setcurPrice(curPrice - price)
        setcurBNPL(curBNPL - bnpl)
  
      }
      
    }
   const addToCart = () => {
      const payload = {
        name,
        price,
        curPrice,
        count
      }
      dispatch(itemsToCart(payload, cartItems))

      navigate("/cart")
      dispatch(calculateTotal(cartItems))
      toast.success("Item added to cart successfully")
    }

  return (
    <div className="w-full h-full">
      <HidHeader 
      isVisibles={isVisible}
      />
      <GroupHeaders
                headings={"Product Descriptions"}
                />

      <div className="mt-[48px] min-[450px]:mt-[60px] sm:mt-[80px] mb-[1rem] w-full bg-white p-2 min-[450px]:p-3 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
       <div className="w-full mx-auto">
       <div className="w-[93%] mx-auto flex flex-col cursor-pointer sm:row-span-2">
          <div className="w-full h-[300px] min-[450px]:h-[400px]  rounded-sm">
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

       </div>
       
        <div className="flex flex-col justify-start space-y-[5%] text-zinc-800">
          <div className="border-b p-2">
            {name}
          </div>
          <p className="border-b p-2">
            Outright price: <b>{`₦${price}`}</b>
          </p>
          <p className="border-b p-2">
            BNPL price: <b>{`₦${price + (price * 0.1)}`}</b>
          </p>

          <div class="w-[50%] my-2 flex border text-zinc-800 font-semibold bg-white h-10 sm:h-14 items-center rounded-sm sm:rounded-md">
            <button
            onClick={incItem}
            class="p-2 flex justify-center items-center hover:text-white rounded-l-md hover:bg-zinc-800 h-full w-4/12">
              <div>+</div>
            </button>
            <button class="p-2 border-l border-r h-full w-5/12">{count}</button>
            <button
            onClick={decItem}
            class="p-2 flex justify-center items-center rounded-r-md hover:text-white hover:hover:bg-zinc-800 h-full w-4/12">
              <div>-</div>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-[3%] p-2 min-[450px]:p-4">
          <div className=" flex w-[90%] sm:w-full lg:w-[90%] justify-between items-center p-2">
            <span>Outright price:</span> <span><b>{`₦${curPrice}`}</b></span>
          </div>
          <div className=" flex w-[90%] sm:w-full lg:w-[90%] justify-between items-center p-2">
            <span>Installment price:</span> <span><b>{`₦${curBNPL}`}</b></span>
          </div>
          <button
        
          className="text-white sm:w-full lg:w-[90%] bg-[#009999] flex rounded-lg py-3 justify-center items-center w-[90%]">
            Buy now
          </button>
          <button
       
          className="bg-white sm:w-full lg:w-[90%] border-[#009999] py-3  rounded-lg border flex justify-center items-center w-[90%]">
            Buy on installment
          </button>
          <button 
          onClick={addToCart}
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
         {descriptions}
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
