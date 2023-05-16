import React,{useState, } from "react";

import Header from "./minors/headers/header";
import Search from "./minors/search";
import GroupWidget from "./minors/groupWidget/groupsWidget";
import MobileCards from "./minors/mobilecards";
import ProductWidget from "./minors/productWidget";
import WaveFooter from "./minors/footer/footer";
import MobileNav from "components/mobilenav/mobileNav";
import HidHeader from "./minors/headers/hidHeader";
const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false)



  return (
    <div className="w-full h-full pb-[40px] min-[450px]:pb-0 overflow-y-auto">
      <Header />
      <HidHeader isVisibles={isVisible}/>
      <MobileCards />
      <Search 
      isVisibles={isVisible} 
      setIsVisible={setIsVisible}
      />

      <div className="mx-auto mb-[1rem] sm:p-0 p-3 w-full min-[450px]:w-[97vw] lg:w-[88vw]">
        <GroupWidget heading={"Best Selling"} />
        <GroupWidget heading={"New Arrivals"} />
        <ProductWidget />
      </div>

      <WaveFooter />

      <MobileNav />
    </div>
  );
};

export default HomePage;
