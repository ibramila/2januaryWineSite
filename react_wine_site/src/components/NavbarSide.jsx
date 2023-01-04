import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
// import { Container } from '../assets/NavbarStyled';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import "./../assets/navbarCss.css";
import { Link } from 'react-router-dom';
function NavbarSide() {
  // const 
  return (
    <>
      <nav>
        {/* <Container> */}
        {/* //! TOP NAVBAR  */}
        <div className='topNav'>
          <ul className='numMail'>
            <li style={{ borderRight: "1px solid #e6e6e6", padding: "0 15px 0 0 " }}> <BsFillTelephoneFill className='icon' /><Link to="/"> 1300250296</Link> </li>
            <li><BsEnvelopeFill className='icon' /> <Link to="/">sayhello@kowine.com</Link>  </li>
          </ul>
          <ul className='social_medias'>
            <li><Link to="/"><FaTwitter className='icon' /></Link></li>
            <li><Link to="/"><FaInstagram className='icon' /></Link> </li>
            <li><Link to="/"> <FaWhatsapp className='icon' /></Link></li>
            <li><Link to="/"> <FaVk className='icon' /></Link></li>
          </ul>
        </div>

        {/* //! BOTTOM NAVBAR */}

        <div className='bottomNav'>

          <div className='left_side'>
            <img style={{ width: "110px" }} src="https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/06/logo.png.webp" alt="Logo" />
            <ul className='nav'>
              <li id='home' style={{ fontWeight: 400, fontSize: "16px" }}><Link to="/">HOME</Link>
                <ul>
                  <li><Link to="/">Home Categories</Link></li>
                  <li><Link to="/">Home Classic</Link></li>
                  <li><Link to="/">Home Clean</Link></li>
                  <li><Link to="/">Home Elegant</Link></li>
                  <li><Link to="/">Home Modern</Link></li>
                  <li><Link to="/">Home Stronger</Link></li>
                  <li><Link to="/">Home Stylish</Link></li>
                  <li><Link to="/">Home Unique</Link></li>
                </ul>
              </li>

              <li id='shop' style={{ fontWeight: 400, fontSize: "16px" }}><Link to="/">SHOP</Link>
                {/* <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div> */}
              </li>
              <li id='product' style={{ fontWeight: 400, fontSize: "16px" }}><Link to="/">PRODUCT</Link></li>
              <li id='blog' style={{ fontWeight: 400, fontSize: "16px" }}><Link to="/">BLOG</Link></li>
              <li id='page' style={{ fontWeight: 400, fontSize: "16px" }}><Link to="/">PAGE</Link>
                <ul class="sub-menu">
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Contact</Link></li>
                  <li><Link to="/">Faq</Link></li>
                  <li><Link to="/">Page 404</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='right_side'>
            <span><Link to="/login">LOGIN / REGISTER</Link> </span>
            <ul className='right_icons'>
              <li><AiOutlineSearch className='iconR' /></li>
              <li><AiOutlineHeart className='iconR' /></li>
              <li><BsFillBasketFill className='iconR' /></li>
            </ul>
          </div>
        </div>
        {/* </Container> */}

      </nav>

    </>
  )
}

export default NavbarSide