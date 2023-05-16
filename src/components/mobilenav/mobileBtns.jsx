import React from "react";




const MobileBtns = () => {
  //const { pathname } = useLocation();

  return (
    <div className="min-[450px]:hidden fixed w-full border-t shadow-lg bg-white inset-x-0 flex gap-3 justify-between p-2 bottom-0">
         <button
        
        className="text-white bg-[#009999] flex rounded-2xl py-3 justify-center items-center w-[90%]">
          Order now
        </button>
        <button
     
        className="text-white py-3 bg-sky-900 rounded-2xl flex justify-center items-center w-[90%]">
          Buy now pay later
        </button>
    </div>
  );
};

export default MobileBtns;
