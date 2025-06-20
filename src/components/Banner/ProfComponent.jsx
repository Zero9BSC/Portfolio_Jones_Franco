import React, { useState } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';


const ProfComponent = () => {
  const [showResume, setShowResume] = useState(false);
  
  const { t } = useTranslation();

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            {t("intro.greeting")} <span className="green">{t("intro.im")}</span>
          </h4>
          <h1 className="green">Franco Nicolas Jones</h1>
          <h3>{t("intro.roles")}</h3>
          {t("intro.description").split('\n\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
                {paragraph}
              </p>
            ))}
          <ButtonContainer>
            <button>
              <DownloadButton href="https://drive.google.com/file/d/1CDcqIlfbSJ9qRBSw4nQb38DzFxHqXQQn/view?usp=sharing" target="_blank" rel="noopener noreferrer" download onClick={toggleResume}>
                {t("intro.resumeBtn")}
              </DownloadButton>
            </button>
            <button>
              <LinkButton href="#footer">
                {t("intro.contactBtn")}
              </LinkButton>
            </button>
          </ButtonContainer>
          <Social>
            <p>{t("intro.checkOut")}</p>
            <div className="social-icons">
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
            className="person"
            src="https://res.cloudinary.com/dtyz1nutj/image/upload/profile-pic_4_dhwbg7.png" 
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
  padding-top: 120px;
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

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      filter: drop-shadow(0px 10px 12px #01be95cc);
      transform: translateY(-6px);
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
    height: 1.9rem;

    background-color: #01be96;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }

    a {
      position: relative;
      color: white;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  


  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    border-radius: 50%;
    box-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88;
    animation: pulse 2.5s infinite;
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

  @keyframes pulse {
    0% { box-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88; }
    50% { box-shadow: 0 0 15px #00ff88, 0 0 30px #00ff88; }
    100% { box-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88; }
  }
`;
