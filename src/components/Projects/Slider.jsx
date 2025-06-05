import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SliderComp = () => {
  const { t } = useTranslation();
  const arrowRef = useRef(null);

  const data = [
    {
      img: "https://imgur.com/Ul6eOrI.png",
      disc: t("projects.slider.0.desc"),
      demo: "http://francoj.pythonanywhere.com/"
    },
    {
      img: "https://imgur.com/GsgHJsz.png",
      disc: t("projects.slider.1.desc"),
      demo: "https://estudiokaisen.netlify.app/"
    },
    {
      img: "https://imgur.com/ceiJGpn.png",
      disc: t("projects.slider.2.desc"),
      demo: "https://github.com/Zero9BSC/FirstPrintWizard.git"
    },
    {
      img: "https://imgur.com/ZL6QL3R.png",
      disc: t("projects.slider.3.desc"),
      demo: "https://dolcericco.netlify.app/"
    },
    {
      img: "https://imgur.com/hjPdVOC.png",
      disc: t("projects.slider.4.desc"),
      demo: "https://healthyhearts.netlify.app/"
    },
    {
      img: "https://imgur.com/sxvSvfR.png",
      disc: t("projects.slider.5.desc"),
      demo: "https://afipreportviewer.netlify.app/"
    },
    {
      img: "https://imgur.com/JgRX3xh.png",
      disc: t("projects.slider.6.desc")
    }
  ];

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {data.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className="back"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className="next"
        >
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
