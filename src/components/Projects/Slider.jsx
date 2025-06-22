import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';


// --- Styled Components ---
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;

  .slick-slide {
    overflow: visible;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Buttons = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: #01be96;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    box-shadow: 0 0 10px rgba(1, 190, 150, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }

  .back {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }

  @media (max-width: 768px) {
    button {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const Info = styled.div`
  max-width: 900px;
  width: 90%;
  margin-top: -0.5rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-in-out;

  h2 {
    color: #01be96;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  a {
    position: relative;
    color: #01be96;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #01be96;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  a:hover::after {
    transform: scaleX(1);
  }
`;


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

  const [selectedIndex, setSelectedIndex] = useState(0);

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
    beforeChange: (_, next) => setSelectedIndex(next),
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider ref={arrowRef} {...settings}>
          {data.map((item, i) => (
            <div key={i} onClick={() => arrowRef.current.slickGoTo(i)}>
              <Project item={item} isActive={i === selectedIndex} />
            </div>
          ))}
        </Slider>

        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()} className="back" aria-label="Slide anterior">
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()} className="next" aria-label="Slide siguiente">
            <IoIosArrowForward />
          </button>
        </Buttons>
      </SliderWrapper>

      <Info>
        <h2>{t("project.description")}</h2>
        <p>{data[selectedIndex].disc}</p>
        {data[selectedIndex].demo && (
          <a href={data[selectedIndex].demo} target="_blank" rel="noopener noreferrer">
            {data[selectedIndex].demo.includes("github.com") ? t("project.link.github") : t("project.link.view")}
          </a>
        )}
      </Info>
    </Container>
  );
};

export default SliderComp;
