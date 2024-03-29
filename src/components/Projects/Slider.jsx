import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://imgur.com/ZL6QL3R.png",
        disc : "Dolce&Ricco is a website of a local bakery that offers delicious homemade recipes. It provides a wide variety of options to purchase bakery products.",
        demo : "https://dolcericco.netlify.app/"
    },
    {
        img : "https://imgur.com/hjPdVOC.png",
        disc : "HealthyHearts is a website created with Flask.",
        demo : "https://healthyhearts.netlify.app/"
    },
    {
        img : "https://imgur.com/sxvSvfR.png",
        disc : "A simple viewer for AFIP (Federal Administration of Public Revenue) reports in Argentina.",
        demo : "https://afipreportviewer.netlify.app/"
    },
    {
        img : "https://imgur.com/grFNZcv.png",
        disc : "New project coming soon!",
        demo : "https://drive.google.com/file/d/1UQogxk6BA6FiGMrn9pE7OHwpk2uwgWmD/view"
    },
    {
        img : "https://imgur.com/JgRX3xh.png",
        disc : "New project coming soon!"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`