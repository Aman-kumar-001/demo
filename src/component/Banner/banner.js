import React, { useState } from 'react'
import "./banner.css";
import Mycard from "../Banner/image-item/mycard";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";



function banner() {
  
           
  const Carousel = ({ items, itemsPerSlide = 1 }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
  
    const nextbtn = () => {
      setCurrentItemIndex(
        (currentItemIndex + itemsPerSlide) % (items.length - itemsPerSlide + 1)
      );
    };
  
    const prebtn = () => {
      setCurrentItemIndex(
        currentItemIndex === 0
          ? items.length - itemsPerSlide
          : currentItemIndex - itemsPerSlide
      );
    };
  
    const visibleItems = items.slice(
      currentItemIndex,
      currentItemIndex + itemsPerSlide
    );
  }
    
      return (
    <div className='product-carousel'>
        <button className='pre-btn' ><p><AiOutlineArrowLeft /></p></button>
        <button className='next-btn' ><p><AiOutlineArrowRight/></p></button>

        <div className='product-container'>
            < Mycard cardno= '1'/>
            < Mycard cardno= '2'/>
            < Mycard cardno= '3'/>
            < Mycard cardno= '4'/>
            < Mycard cardno= '5'/>
            < Mycard cardno= '6'/>
            < Mycard cardno= '7'/>
            < Mycard cardno= '8'/>
            < Mycard cardno= '9'/>
            < Mycard cardno= '10'/>
        </div>

    </div>
  );
};

export default banner;
