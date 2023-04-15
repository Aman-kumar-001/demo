import React from 'react'
import "./banner.css";
import Mycard from "../Banner/image-item/mycard";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";



function banner() {
    let box = document.querySelector('.product-container'); 
    const prebtn = () => {
      let width= box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    } 
    const nextbtn = () => {
        let width= box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    } 
      return (
    <div className='product-carousel'>
        <button className='pre-btn' onClick={prebtn}><p><AiOutlineArrowLeft /></p></button>
        <button className='next-btn' onClick={nextbtn}><p><AiOutlineArrowRight/></p></button>

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
