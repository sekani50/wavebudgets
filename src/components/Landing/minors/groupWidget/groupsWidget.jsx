import React, {useRef, useState, useEffect} from 'react';
import  "./groupWidget.scss"
import { useNavigate } from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'
import back from "../../../../assets/Svg/back.svg"
import foward from "../../../../assets/Svg/foward.svg"
//import LandingWidget from '../scrollWidget/scrollWidget';
import { useSelector } from 'react-redux';
import ScrollWidget from '../scrollWidget/scrollWidget';

const GroupWidget = ({heading, response}) => {
  const {items} = useSelector((state) => state.items)
    const navigate = useNavigate()
    const slide = useRef()
    
    const [isnext, setisnext] = useState(true)
  const [isprev, setisprev] = useState(false)
  const [data, setData] = useState([])

  console.log(items)
    
  function prev() {
   

    console.log(slide.current.scrollLeft);
    console.log(slide.current.scrollWidth);
    console.log(slide.current.offsetWidth);
    slide.current.scrollBy({
      left: -slide.current.scrollWidth / 10,
      behavior: "smooth",
    });
  }

  function next() {
    

    console.log(slide.current.scrollWidth);
    console.log(slide.current.offsetWidth);
    slide.current.scrollBy({
      left: slide.current.scrollWidth / 10,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function scrollEl() {
      //console.log("Slide")
      if (slide.current?.scrollLeft === 0) {
        setisprev(false);
      } else {
        setisprev(true);
      }

      if (
        slide.current?.scrollLeft + slide.current?.offsetWidth >=
        slide.current?.scrollWidth
      ) {
        setisnext(false);
      } else {
        setisnext(true);
      }
    }

    slide.current?.addEventListener("scroll", scrollEl);

    return () => slide.current?.removeEventListener("scroll", scrollEl);
  }, [slide.current?.scrollLeft]);
    
    return (
        <div className="groupWidget_wrapper">
        <div className="groupWidget_top">
          <p className="groupWidget_top_heading">
            {heading}
          </p>
          <div
            onClick={() => {
              navigate("/detail", {
                state: {
                  name: "",
                  typeOf: "",
                  id: "",
                  img: "",
                  navtitle: heading,
                },
              });
            }}
            className="groupWidget_more"
          >
            
            <HiArrowNarrowRight className="groupWidget_more_icon" />
          </div>
        </div>
        <div className="overflow_hidden_wrapper">
          <div className={isprev ? "prevs" : "prev_none"} onClick={prev}>
            <img src={back} alt="back" />
          </div>
          <div className={isnext ? "nexts" : "next_none"} onClick={next}>
            <img src={foward} alt="foward" />
          </div>
          <div ref={slide} className="overflow_auto_wrapper">
            {data?.map(
              (
                {
                  name,
                  price,
                  descriptions,
                  available
             
                },
                idx
              ) => {
                console.log(name)
                return (
                  <div
                    className="groupWidget_album_item"
                    onClick={() => {
                      navigate(`/product`, {
                        state: {
                          name,
                          descriptions,
                          price,
                          available
                        }
                      });
                     
                    }}
                    key={idx + 1}
                  >
                    <ScrollWidget
                    name={name}
                    price={price}
                    descriptions={descriptions}
  
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

    )
}


export default GroupWidget