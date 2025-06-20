import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../LanguageSelector";


const Footer = () => {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: e.target.from_name.value,
        from_email: e.target.from_email.value,
        message: e.target.message.value,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('✅ ' + t('footer.successMsg'));
      },
      (error) => {
        console.error('EmailJS error:', error);
        alert('❌ ' + t('footer.errorMsg'));
      }
    );

    e.target.reset();
  };

  const scrollUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>{t('footer.title')}</h1>
        </Slide>
        <div className="links">
          <Slide direction="left">
            <h1>{t('footer.directContact')}</h1>
          </Slide>
          <div>
            <span><FiPhoneCall /></span>
            <Slide direction="left">
              <a href="https://wa.me/4915252491730">+49 0152 5249 1730</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span><HiOutlineMailOpen /></span>
            </Slide>
            <Slide>
              <a href="mailto:franconicolasjones@gmail.com">franconicolasjones@gmail.com</a>
            </Slide>
          </div>
        </div>

        <div className="profiles">
          <Slide direction="left">
            <h1>{t('footer.checkProfiles')}</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/Zero9BSC" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/franco-jones/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </div>
        </div>

        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>

      <Form>
        <Slide direction="right">
          <form onSubmit={sendEmail}>
            <div className="name">
              <span><CgProfile /></span>
              <input type="text" name="from_name" placeholder={t('footer.namePlaceholder')} required />
            </div>
            <div className="email">
              <span><MdAlternateEmail /></span>
              <input type="email" name="from_email" placeholder={t('footer.emailPlaceholder')} required />
            </div>
            <div className="message">
              <span className="messageIcon"><FiMail /></span>
              <textarea name="message" cols="30" rows="10" placeholder={t('footer.messagePlaceholder')} required></textarea>
            </div>
            <button type="submit">{t('footer.submit')}</button>
          </form>
        </Slide>
        <LanguageWrapper>
          <LanguageSelector />
        </LanguageWrapper>
      </Form>
    </Container>
  );
};

export default Footer;

// --- Styled Components ---
const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Profile = styled.div`
  flex: 1;

  .links, .profiles {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: lightgray;
      }
    }
  }

  .profiles .icons {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    span {
      background-color: #000;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5rem;
      transition: background-color 0.3s ease;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        color: #fff;
        text-decoration: none;

        svg {
          font-size: 1.6rem;
          transition: transform 0.3s ease;
        }

        &:hover svg {
          transform: scale(1.2);
        }

        &:focus {
          outline: none;
        }
      }

      &:hover {
        background-color: #01be96;
      }
    }
  }

`;

const LanguageWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;


const ArrowUp = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 50%;
  box-shadow: 0 0 8px #01be9551;
  z-index: 999;

  :hover {
    box-shadow: 0 0 12px #01be9570;
  }

  @media (max-width: 650px) {
    bottom: 25px;
    right: 15px;
    left: auto;
    transform: none;
  }
`;

const Form = styled.div`
  flex: 1;
  padding-bottom: 4rem;

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;

    .name, .email, .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;

      input, textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }

      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      filter: drop-shadow(0px 4px 5px #01be9551);
      transition: transform 0.3s ease, filter 0.3s ease;

      &:hover {
        filter: drop-shadow(0px 6px 7px #01be95cc);
        transform: translateY(-3px);
      }
    }
  }
`;