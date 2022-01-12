import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function OwlCarousal() {
    const mystyle={
        // height:'170px',
        // width:'170px',
        paddingTop:'20px',
    }
    return (
        <OwlCarousel className="owl-theme" loop margin={10} nav autoPlay>
        <div className="item">
          <img src="https://source.unsplash.com/random" alt="----" style={mystyle}/>
        </div>
        <div className="item">
        <img src="https://source.unsplash.com/random" alt="----" style={mystyle}/>
        </div>
        <div className="item">
        <img src="https://source.unsplash.com/random" alt="----" style={mystyle}/>
        </div>
        <div className="item">
        <img src="https://source.unsplash.com/random" alt="----" style={mystyle}/>
        </div>
      </OwlCarousel>
    )
}
