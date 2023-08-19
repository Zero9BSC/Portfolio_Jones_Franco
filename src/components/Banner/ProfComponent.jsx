// import React from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const [showResume, setShowResume] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  const textLoad = () => {
    const phrases = ["Full Stack Developer", "Software Developer", "Web Designer"];
    let currentPhraseIndex = 0;
  
    const updateText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      let currentCharacterIndex = 0;
      let currentText = "";
  
      const typeText = () => {
        currentText = currentPhrase.slice(0, currentCharacterIndex);
        setCurrentText(currentText);
  
        if (currentCharacterIndex < currentPhrase.length) {
          currentCharacterIndex++;
          setTimeout(typeText, 200); // Velocidad de escritura (ajusta según tu preferencia)
        } else {
          setTimeout(eraseText, 2000); // Espera antes de borrar el texto
        }
      };
  
      const eraseText = () => {
        currentText = currentPhrase.slice(0, currentCharacterIndex);
        setCurrentText(currentText);
  
        if (currentCharacterIndex > 0) {
          currentCharacterIndex--;
          setTimeout(eraseText, 70); // Velocidad de borrado (ajusta según tu preferencia)
        } else {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(updateText, 1000); // Espera antes de comenzar a escribir la siguiente frase
        }
      };
  
      typeText();
    };
  
    updateText();
  };
  
  useEffect(() => {
    textLoad();
  }, []);

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Franco Nicolas Jones</h1>
          <h3>
            {currentText}
            <span className="cursor-blink"></span>
          </h3>
          {/* <p>
          Hello! I'm Jones Franco Nicolas, a passionate software developer with experience in Python, JavaScript, and C++. I excel in adapting to new challenges and solving problems, which enables me to thrive in dynamic environments. I am actively seeking opportunities in Europe to fulfill my dream of working and living in this beautiful continent.
          I am available for immediate travel and open to exploring opportunities in different European countries. I am excited about the opportunity to be part of a creative team and contribute to the success of your company. Thank you for visiting my portfolio website!
          </p> */}
          <p>
          Hello! I'm Jones Franco Nicolas, a software developer experienced in Python, JavaScript, and C++. Seeking opportunities in Europe to fulfill my dream. Available for immediate travel. Let's connect and create something amazing! Thank you for visiting my portfolio website!
          </p>
          <ButtonContainer>
            <button>
              <DownloadButton href="https://drive.google.com/file/d/1CDcqIlfbSJ9qRBSw4nQb38DzFxHqXQQn/view?usp=sharing" target="_blank" rel="noopener noreferrer" download onClick={toggleResume}>
                Download Resume
              </DownloadButton>
            </button>
            <button>
              <LinkButton href="#footer">
                Let's talk
              </LinkButton>
            </button>
          </ButtonContainer>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              {/* <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span> */}
              <span>
                <a href="https://github.com/Zero9BSC" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/franco-jones/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dibxkwi9p/image/upload/v1687909037/profile-pic_12_ey4aij.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  .cursor-blink {
    display: inline-block;
    width: 2px; /* Ancho del cursor */
    height: 1em; /* Altura del cursor */
    background-color: white; /* Color del cursor */
    animation: blink 0.7s infinite; /* Animación de parpadeo */
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const DownloadButton = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const LinkButton = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
