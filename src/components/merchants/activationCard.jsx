import React from "react";
import logo from "../../assets/images/logow.png";
import { useNavigate } from "react-router-dom";

const ActivationCard = () => {
  const navigate = useNavigate();
  return (
    <div className=" fixed inset-0 bg-white w-full h-full">
      <div className="lets swipeDown absolute m-auto inset-0 w-[90%] min-[450px]:w-[350px] h-fit flex flex-col justify-center items-center space-y-[10%] min-[450px]:rounded-2xl shadow-xl rounded-xl p-3 min-[450px]:p-5 bg-[#009999]">
        <div className="w-10 h-6">
          <img className="  w-full h-full" src={logo} alt="" />
        </div>

        <div className="text-white min-[450px]:leading-8 leading-7 text-center">
          Do you want to <b className="uppercase ">sell</b> at{" "}
          <b className="uppercase ">wave budget</b>?. Click
          "activate" to get started"
        </div>
        <button
          onClick={() => {
            navigate("/mydashboard");
          }}
          className="bg-white text-[#009999] p-2 rounded-2xl flex items-center px-10 justify-center"
        >
          Activate
        </button>
      </div>
    </div>
  );
};

export default ActivationCard;
