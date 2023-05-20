import LandingWidget from "components/Landing/minors/landingWidget/landingWidget";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MoreWidget = () => {
    const {items} = useSelector((state) => state.items)
    const [data, setdata]  = useState(items)
    const navigate = useNavigate()
    return (

        <div className="mt-[1rem] min-[450px]:mt-[2rem] px-[2%] md:px-[1%] lg:px-[2%] space-y-[1rem]">

            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
            {data?.map (({name, descriptions, price, available}, idx) => {
                return (
                    <div
                    onClick={() => {
                        navigate("/product", {
                            state: {
                                name, 
                                descriptions,
                                price,
                                available
                            }
                        })
                    }}
                    >
                     <LandingWidget
                    name={name}
                    descriptions={descriptions}
                    price={price}
                    />
                    </div>
                
                )
            })}
        
           
           
            </div>
            
        </div>
    )
}

export default MoreWidget