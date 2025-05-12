import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_bca6l9l',
        'template_gmhrtx7',
        form.current,
        'MKVh3oI-oiLuqoO-J'
    )
    .then(
        (result) => {
            console.log('Email sent:', result.text);
            alert('✅ Message sent successfully!');
        },
        (error) => {
            console.error('EmailJS error:', error);
            alert('❌ An error occurred. Please try again.');
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
          <h1>Contact</h1>
        </Slide>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
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
            <h1>Check my profiles</h1>
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <span><CgProfile /></span>
              <input type="text" name="from_name" placeholder="Fullname..." required />
            </div>
            <div className="email">
              <span><MdAlternateEmail /></span>
              <input type="email" name="from_email" placeholder="Email..." required />
            </div>
            <div className="message">
              <span className="messageIcon"><FiMail /></span>
              <textarea name="message" cols="30" rows="10" placeholder="Message..." required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Slide>
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
        :hover { color: orange; }
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
      :hover { background-color: orange; }

      a { color: #fff; }
      svg { font-size: 2rem; }
    }
  }
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
`;

const Form = styled.div`
  flex: 1;

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
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover { filter: drop-shadow(0px 6px 9px #01be9551); }
    }
  }
`;
