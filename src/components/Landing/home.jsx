import React,{useState, useEffect} from "react";

import Header from "./minors/headers/header";
import Search from "./minors/search";
import GroupWidget from "./minors/groupWidget/groupsWidget";
import MobileCards from "./minors/mobilecards";
import ProductWidget from "./minors/productWidget";
import WaveFooter from "./minors/footer/footer";
import MobileNav from "components/mobilenav/mobileNav";
import HidHeader from "./minors/headers/hidHeader";
import ItemCategories from "./minors/categories/itemCategories";
import MobileCategories from "./minors/categories/mobileCategories";
import { useDispatch, useSelector } from "react-redux";
import { getItem , updateCategory} from "Redux/Actions/ActionCreators";
import { getCategory, getAll } from "firebasedatas/getProducts";
const HomePage = () => {
  //const { items } = useSelector((state) => state.items);
 
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()

  useEffect (() => {
    const health = []
    const  phone = []
    const laptop = []
    const estate = []
    const pharmacy = []
    const drink = []
    const foodstuff = []
    const fashion = []
    const automobile = []
    const appliance = []
    const baby = []
    const data = []
    async function getData () {

      await getAll(data)
      .then((res) => {
        console.log(res)
        dispatch(getItem(res))
       
      })
      .catch((err) => {
        console.log(err)
       
      })

      await getCategory( health,
        phone,
        laptop,
        estate,
        pharmacy,
        drink,
        foodstuff,
        fashion,
        automobile,
        appliance,
        baby)
        .then((res) => {
          console.log(res)
          dispatch(updateCategory(res))
          
        })
        .catch((err) => {
          console.log(err)
        })

    }
    getData()
  },[])

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
        <ItemCategories/>
        <MobileCategories/>
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
