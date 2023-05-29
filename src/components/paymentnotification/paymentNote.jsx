import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import timeFormat from "Utils/timeFormat";

const PaymentNotification = ({ isNote, setisNote, transHistory }) => {
  const dt = new Date();
  const month = dt.toLocaleString("default", { month: "long" });
  const day = dt.getDate();
  const year = dt.getFullYear();
  let hours, minutes, seconds, amPm;
  const {name, price, status, storeName, curPrice, count} = transHistory

  return (
    <div
      onClick={() => {
        setisNote(!isNote);
      }}
      className={
        isNote
          ? " fixed text-zinc-700 z-[99] inset-0 h-full w-full bg-black bg-opacity-[0.5] flex items-center justify-center"
          : "hidden"
      }
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="lets swipeDown space-y-3 min-[450px]:space-y-4 max-[450px]:w-[90%] bg-white rounded-xl max-[450px]:rounded-lg p-4 w-[450px] m-auto absolute inset-x-0 h-fit flex flex-col justify-center items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setisNote(!isNote);
          }}
          className="absolute text-zinc-700 top-2 right-2"
        >
          <IoIosClose className="text-[20px]" />
        </div>

        <div className="flex flex-col space-y-2 justify-start items-center">
          <div className="font-medium ">Payment Information</div>
          <div className="grid grid-cols-2 gap-2">
            <span>Item purchased:</span>
            <span>{name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span>Qty purchased:</span>
            <span>{count}</span>
          </div>
        
          <div className="grid grid-cols-2 gap-2">
            <span>Amount:</span>
            <span>{price}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span>Payment Status:</span>
            <span>{status}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span>Store name:</span>
            <span>{storeName}</span>
          </div>
          <div className="grid grid-cols-2">
            <span>Date:</span>
            <span>{`  ${day} ${month} ${year}`}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span>Time: </span>
            <span>{`${timeFormat(hours, minutes, seconds, amPm)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotification;
