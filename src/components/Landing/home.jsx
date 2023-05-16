import React from "react";

import Header from "./minors/header";
import Search from "./minors/search";
import GroupWidget from "./minors/groupWidget/groupsWidget";
import MobileCards from "./minors/mobilecards";
import ProductWidget from "./minors/productWidget";
import WaveFooter from "./minors/footer/footer";

const HomePage = () => {

    return (
        <div className="w-full h-full">
            <Header/>
            <MobileCards/>
           <Search/>
          
          <div className="mx-auto mb-[1rem] sm:p-0 p-3 w-full min-[450px]:w-[88vw]">
          <GroupWidget
           heading={"Best Selling"}
           />
           <GroupWidget
           heading={"New Arrivals"}
           />
           <ProductWidget/>

          </div>
          <WaveFooter/>
          
         

            
            
        </div>
    )
}

export default HomePage