import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineCloseCircle
} from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [ShowMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>


    {
      
      ShowMediaIcons &&  <div className="mobile-menu">
      <ul>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li>
          <a href="">category</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
      {/* <div className="right-upper">
       < AiOutlineCloseCircle />
      </div> */}
</div>

    }
    
   
    <nav className="main-container">
        

      <div className="logo">
        <h2>
          <span>A</span>man
          <span>S</span>harma
        </h2>
      </div>
      <div className="middle">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
          <li>
            <a href="">category</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <a href="#">
          <FaSignInAlt />
          Login
        </a>

        <div
          className="menu"
          onClick={() => setShowMediaIcons(!ShowMediaIcons)}
        >
          <GiHamburgerMenu />

         
        </div>
      </div>
    </nav>
    </>

  );
};

export default Navbar;
