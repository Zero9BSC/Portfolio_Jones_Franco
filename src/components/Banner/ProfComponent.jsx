import React, { useState } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';


// --- Styled Components ---
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 4rem;
  width: clamp(80%, 85vw, 1440px);
  margin: 0 auto;
  z-index: 1;
  flex-wrap: nowrap;

  @media (max-width: 840px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  @media (min-width: 1920px) {
    padding-top: 10rem; /* más aire para pantallas 2K/4K si lo ves necesario */
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

  @media (max-width: 840px) and (min-width: 641px) {
    font-size: 0.92rem;
    h1 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.88rem;
    }
  }

  @media (min-width: 1920px) {
    h1 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
    }
  }


`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 840px) and (min-width: 641px) {
    justify-content: center;

    button {
      flex: 1 1 120px;
      min-width: 120px;
      max-width: 100%;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
    }
  }
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
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    white-space: nowrap;

    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    flex-wrap: wrap;
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
  }

  @media (max-width: 840px) and (min-width: 641px) {
    justify-content: center;
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
