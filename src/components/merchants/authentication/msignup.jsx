import React, {useState} from 'react';
import buy from "../../../assets/images/buy.jpg";
import viewpassword from "../../../assets/Svg/viewpassword.svg";
import logo from "../../../assets/images/waveb.png"

const MerchantSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storeName, setStorename] = useState("")
    const [address, setAddress] = useState("")

    
  const handleSubmit = () => {
    let form = {
      email: email,
      password: password,
      store:storeName,
      address,
      type: "Merchant",
    };
}

    return (

        <div className='w-full h-full fixed inset-0 '>
            <div className='w-full h-full'>
            <div className='bg-white py-3 px-6 min-[450px]:py-4 min-[450px]:px-4'>
            <div className="flex space-x-2 items-center" >
                <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <div className="flex flex-col justify-start">
                <div className="uppercase font-semibold text-[#009999]">Wave</div>
                <div className="uppercase font-semibold text-[#009999]">Budget</div>
                </div>
            </div>
            </div>
            <div className='bg-teal-100 flex justify-around  w-full h-full items-center'>

                <div className='hidden md:block md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]'>
                    <img className='w-full h-full mix-blend-multiply' src={buy} alt="buy" />
 
                </div>

                <div className='w-[80vw] h-fit min-[450px]:w-[60%] min-[450px]:h-[60%] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center bg-white p-4 space-y-3 rounded-xl shadow-lg'>
              <p className='text-zinc-800 font-semibold'>Sign Up</p>
              <div className="form-group space-y-3 w-full">
          <label className="block font-semibold text-zinc-800" htmlFor="name">
            Store Name
          </label>
          <input
            className="block form__input input-field border border-black  rounded-md focus:outline-none w-full h-10 sm:h-11 px-4"
            type="text"
            placeholder=""
            name="name"
            onChange={(e) => setStorename(e.target.value)}
          />
        </div>
        <div className="form-group space-y-3 w-full">
          <label className="block font-semibold text-zinc-800" htmlFor="address">
            Location Address
          </label>
          <input
            className="block form__input input-field border border-black  rounded-md focus:outline-none w-full h-10 sm:h-11 px-4"
            type="text"
            placeholder=""
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
                <div className="form-group space-y-3 w-full">
          <label className="block font-semibold text-zinc-800" htmlFor="email">
            Email Address
          </label>
          <input
            className="block form__input input-field border border-black  rounded-md focus:outline-none w-full h-10 sm:h-11 px-4"
            type="email"
            placeholder=""
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group space-y-3 w-full">
          <label
            className="block font-semibold text-zinc-800"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="block form__input input-field border pr-6 border-black rounded-md focus:outline-none w-full  h-10 sm:h-11 px-4"
              type={showPassword ? "text" : "password"}
              placeholder=""
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-3 top-3"
            >
              <img
                src={viewpassword}
                alt="viewpassword"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button
        className="bg-[#009999] text-white sm:py-3 py-2 rounded-md flex items-center w-full justify-center"
        >Sign Up</button>


                </div>
            </div>

            
            </div>
          
        
        </div>
    )
}

export default MerchantSignUp 