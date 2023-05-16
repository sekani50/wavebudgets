import React, { useRef } from "react";
import "./imageSlider.scss";
import pxl from "../../../assets/images/pxl.jpg";
import {IoIosClose} from "react-icons/io"


const ImageSlider = ({isSlider, setisSlider, data}) => {
  const slide = useRef();

  function prev() {
    //console.log(this.idx)
    console.log("from slider", slide.current?.scrollWidth);
    console.log(slide.current?.offsetWidth);
    slide.current?.scrollBy({ left: -slide.current?.scrollWidth / 3, behavior: "smooth" });
  }
  function next() {
    slide.current?.scrollBy({ left: slide.current?.scrollWidth / 3, behavior: "smooth" });
    console.log(slide.current?.scrollWidth);
    console.log(slide.current?.offsetWidth);
  }

  

  return (
    <div
    onClick={(e) => {
        e.stopPropagation()
        setisSlider(false)
    }}
    className={isSlider ? "w-full h-full inset-0 fixed z-50 bg-black bg-opacity-60" : "hidden"}>
      <div className="w-[400px] max-[720px]:w-[280px] max-[565px]:w-[320px] h-[500px] sm:h-[80%] overflow-auto sm:overflow-hidden transform transition duration-300 ease-in-out absolute inset-0 m-auto grid grid-cols-1 bg-white rounded-lg sm:rounded-xl">
        <div
        onClick={(e) => {
            e.stopPropagation()
            setisSlider(false)
        }}
          className="absolute top-[-1px] right-0 rounded-full p-1 z-50 bg-gray-300">
          <IoIosClose className="text-black text-[18px]"/>
      </div>
        <div
        onClick={(e) => {
            e.stopPropagation()
        }}
        className=" relative h-full w-full overflow-hidden rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none">
          <a className="prev" onClick={prev} href="#">
            &#10094;
          </a>
          <a className="next" onClick={next} href="#">
            &#10095;
          </a>
          <div
            ref={slide}
            className="hide-scroll overflow-x-auto w-full h-full"
          >
            <div className="min-w-max flex h-full ">
              <div
                className="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none"
                v-for="(img, index) in image"
                key="index"
              >
                <img
                  className="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-fill"
                  src={pxl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
