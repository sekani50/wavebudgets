import React from 'react';

const CartCard = ({isCart}) => {
    return (

        <div className={isCart ? "h-fit z-40 absolute text-sm w-[300px] left-[-263px] bg-white bottom-[-50px] flex flex-col shadow-lg rounded-xl space-y-4 px-6 py-4 justify-center items-center": "hidden"}>
            <div className=" text-black">
                You are not yet a registered user
            </div>

        </div>
    )
}

export default CartCard