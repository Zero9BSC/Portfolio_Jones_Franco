import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTerminal } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../LanguageSelector";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";


// --- Styled Components ---
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1f2533;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 10%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 1024px) {
    padding: 1.2rem 3%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  min-width: 140px;

  span {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #fff;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }

    &:hover:before {
      transform: scale(1);
      transform-origin: left;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 880px) {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #01be96;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
    max-height: ${({ $bar }) => ($bar ? "500px" : "0")};
    padding: ${({ $bar }) => ($bar ? "2rem 1rem" : "0")};
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.5rem;
    z-index: 999;
    display: ${({ $bar }) => ($bar ? "flex" : "none")};
  }
`;



const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 880px) {
    display: block;
  }
`;


const Header = () => {
  const [bar, setBar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  const handleLinkClick = () => setBar(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < 50 || currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <Container $isVisible={isVisible}>
      <Logo>
        <span className='green'><FaTerminal /></span>
        <h1>Franco Jones</h1>
      </Logo>

      <Nav $bar={bar}>
        <span><a href="#home" onClick={handleLinkClick}>{t('nav.home')}</a></span>
        <span><a href="#service" onClick={handleLinkClick}>{t('nav.services')}</a></span>
        <span><a href="#technologies" onClick={handleLinkClick}>{t('nav.technologies')}</a></span>
        <span><a href="#project" onClick={handleLinkClick}>{t('nav.projects')}</a></span>
        <span><a href="#footer" onClick={handleLinkClick}>{t('nav.contact')}</a></span>
        <span>
          <LanguageSelector menu />
        </span>
      </Nav>

      <MobileMenuIcon onClick={() => setBar(!bar)}>
        {bar ? <HiX /> : <HiOutlineMenuAlt3 />}
      </MobileMenuIcon>
    </Container>
  );
};

export default Header;
