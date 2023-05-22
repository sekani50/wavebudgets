import React from "react";
import ImageCarousel from "components/UI/imageCarousel";


const ProductSlide = ({ isSlider, setisSlider, images }) => {

    const img = [
        'https://imagetolink.com/ib/WGc83BnNpC.jpg',
        'https://imagetolink.com/ib/PbKNMGZB8I.jpg',
        'https://imagetolink.com/ib/mvtuctAD8S.png',
        
    ]
    return (
        <div  className={
            isSlider
              ? "w-full h-full inset-0 fixed z-50 bg-black bg-opacity-60"
              : "hidden"
          } >
            <div className="h-[400px] w-[400px]">

           
            <ImageCarousel>
            {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none"
                  >
                    <img
                      className="w-full h-full rounded-tl-lg sm:rounded-l-xl rounded-tr-lg sm:rounded-tr-none object-cover"
                      src={item.stringValue}
                      alt=""
                    />
                  </div>
                );
              })}
            </ImageCarousel>
            </div>

        </div>

    )
}


export default ProductSlide