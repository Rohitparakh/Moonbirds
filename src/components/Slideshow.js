import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Slideshow = () => {
    var settings = {
        dots: true,
        arrow: false,
        infinite: true,
        vertical: true,
        autoplay:true,
        autoplaySpeed:1500,
        speed:500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        easing: true
      };
  return (
    <>
        <div className='inner'>
            <Slider {...settings}>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>1</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>2</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>3</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>4</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>5</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>6</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>7</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>8</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>9</h3></div>
                <div><h3 style={{height:'200px', textAlign: 'center', color: '#fff', fontSize: '30px'}}>10</h3></div>
            </Slider>
        </div>
    </>
  )
}

export default Slideshow