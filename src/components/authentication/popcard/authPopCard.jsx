import React, {useState} from 'react';

const AuthPopCard = ({setisShow}) => {
    const [isActive, setisActive] = useState(0)


    return (
        <div
        onClick={() => {
            setisShow(false)
        }}
        className="w-full h-full inset-0 bg-black bg-opacity-60 fixed z-40">

<div className='absolute m-auto inset-0 w-[80vw] h-fit min-[450px]:w-[60%] min-[450px]:h-[60%] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center bg-white p-4 space-y-3 rounded-xl shadow-lg'>
             
             <div className='flex space-x-3 items-center w-full justify-center'>
             <p className={isActive === 0 ? 'text-[#009999] border-b py-1  font-semibold':'text-zinc-800 font-semibold'}>Log In</p>
             <p className={isActive === 1 ? 'text-[#009999] border-b py-1  font-semibold' : 'text-zinc-800 font-semibold'}>Sign Up</p>
             </div>
             
              <div className="w-10 h-6">
                    <img className="w-full h-full" src={logo} alt="" />
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
              className="absolute right-3 max-[450px]:top-[0.5rem] top-3"
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
        >Log in</button>


                </div>


            </div>
    )
}


export default AuthPopCard