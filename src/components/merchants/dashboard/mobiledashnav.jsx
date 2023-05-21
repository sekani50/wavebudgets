import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const MobileDashboard = () => {
  const [isCat, setisCat] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const showCats = () => {
    setisCat(!isCat);
    setisOpen(true);
  };

  const checkCats = () => {
    setisOpen(false);
  };

  return (
    <div className="w-full sm:hidden h-fit text-sm fixed bottom-0 inset-x-0 shadow-lg border-t text-zinc-800 bg-white z-50">
      <div className="w-full flex justify-between items-center py-2 px-6">
        <div className="relative flex flex-col space-y-1 items-center justify-center">
          <span onClick={showCats}>
            <MdOutlineEditNote  className="text-[22px]" />
          </span>
          <span> Edit </span>

          <div
            onClick={showCats}
            className={isCat ? "fixed inset-0 bg-none w-full h-full" : "hidden"}
          >
            <div
              className={
                isOpen
                  ? "bg-white p-4 ml-4 shadow-xl space-y-4 bottom-[65px] rounded-md min-h-max min-w-max absolute"
                  : "hidden"
              }
            >
              <div></div>
            </div>
          </div>
        </div>

        <Link
          to="/admindashboard/0"
          className="flex flex-col space-y-1 items-center justify-center"
        >
          <span>
            <IoMdAddCircle className="text-[22px]" />
          </span>
          <span> Add products </span>
        </Link>

        <Link
          to="/"
          className="flex flex-col space-y-1 items-center justify-center"
        >
          <span>
            <AiOutlineHome  className="text-[22px]" />
          </span>
          <span> Home </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileDashboard;
