import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./mobileCategories.scss";
import appliances from "../../../../assets/images/app.jpg";
import food from "../../../../assets/images/foodstuffs.jpg";
import health from "../../../../assets/images/health.jpg";
import laptop from "../../../../assets/images/lap.jpg";
import back from "../../../../assets/Svg/back.svg"
import foward from "../../../../assets/Svg/foward.svg"
import fashion from "../../../../assets/images/fashion.jpg";
import phones from "../../../../assets/images/phones.png";
import estate from "../../../../assets/images/estate.jpg";
import drink from "../../../../assets/images/drink.png";
import baby from "../../../../assets/images/baby.jpg";
import pharm from "../../../../assets/images/pharm.jpg";

const MobileCategories = () => {
  const navigate = useNavigate();
  const slide = useRef();
  const [isnext, setisnext] = useState(true);
  const [isprev, setisprev] = useState(false);

  const data = [
    { cats: "Health & Beauty", img: health },
    { cats: "Phones", img: phones },
    { cats: "Laptops", img: laptop },
    { cats: "Real Estate", img: estate },
    { cats: "Pharmaceutical", img: pharm },
    { cats: "Drinks & Beverages", img: drink },
    { cats: "FoodStuffs", img: food },
    { cats: "Fashion", img: fashion },
    { cats: "Appliances", img: appliances },
    { cats: "Baby Products", img: baby },
  ];

  function prev() {
    console.log(slide.current.scrollLeft);
    console.log(slide.current.scrollWidth);
    console.log(slide.current.offsetWidth);
    slide.current.scrollBy({
      left: -slide.current.scrollWidth / 10,
      behavior: "smooth",
    });
  }

  function next() {
    console.log(slide.current.scrollWidth);
    console.log(slide.current.offsetWidth);
    slide.current.scrollBy({
      left: slide.current.scrollWidth / 10,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function scrollEl() {
      //console.log("Slide")
      if (slide.current?.scrollLeft === 0) {
        setisprev(false);
      } else {
        setisprev(true);
      }

      if (
        slide.current?.scrollLeft + slide.current?.offsetWidth >=
        slide.current?.scrollWidth
      ) {
        setisnext(false);
      } else {
        setisnext(true);
      }
    }

    slide.current?.addEventListener("scroll", scrollEl);

    return () => slide.current?.removeEventListener("scroll", scrollEl);
  }, [slide.current?.scrollLeft]);

  return (
    <div className="min-[1000px]:hidden mx-auto w-[96%]">
      <div className="overflow_hidden_wrapper">
        <div className={isprev ? "prevs" : "prev_none"} onClick={prev}>
          <img src={back} alt="back" />
        </div>
        <div className={isnext ? "nexts" : "next_none"} onClick={next}>
          <img src={foward} alt="foward" />
        </div>
        <div ref={slide} className="overflow_auto_wrapper">
          {data?.map(({ cats, img }, idx) => {
            return (
              <div
                className="groupWidget_album_item"
                onClick={() => {
                  navigate(`/detail`, {
                    state: {
                      navtitle:cats,
                    },
                  });
                }}
                key={idx + 1}
              >
                <div className="flex items-center justify-center flex-col space-y-[2%] ">
                  <div className="bg-[#009999] bg-opacity-30 min-[450px]:rounded-lg flex justify-center items-center rounded-md w-[90px] h-[90px] min-[450px]:w-[150px] min-[450px]:h-[150px]">
                   <div className="min-[450px]:w-[150px] min-[450px]:h-[100px]  w-[90px] h-[70px]">
                   <img className="w-full h-full object-cover" src={img} alt="" />
                   </div>
                   
                  </div>
                  <span className="text-center">{cats}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileCategories;
