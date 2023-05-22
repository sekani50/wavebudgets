import React, { useState } from "react";
import LandingWidget from "./landingWidget/landingWidget";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProductWidget = () => {
  const { items } = useSelector((state) => state.items);
  const [data, setdata] = useState(items);
  const navigate = useNavigate();

  console.log(items);
  return (
    <div className="mt-[1rem] px-[2%] md:px-[1%] lg:px-[2%] space-y-[1rem]">
      <p className=" top_heading">Just for You</p>

      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {data?.map(
          ({ name, available, description, storeName, images, price }, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  navigate("/product", {
                    state: {
                      name,
                      description,
                      price,
                      available: available || 0,
                      images,
                      storeName,
                    },
                  });
                }}
              >
                <LandingWidget
                  name={name.stringValue}
                  image={images[0]?.stringValue}
                  descriptions={description.stringValue}
                  price={price.stringValue}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductWidget;
