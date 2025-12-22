import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaTerminal } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../LanguageSelector";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

/* ================= STYLES ================= */

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
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
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
  }

  @media (max-width: 880px) {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #01be96;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.5rem;
    padding: ${({ $bar }) => ($bar ? "2rem 1rem" : "0")};
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

/* ================= COMPONENT ================= */

const Header = () => {
  const [bar, setBar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  const navRef = useRef(null);       // NEW
  const buttonRef = useRef(null);    // NEW

  const handleLinkClick = () => setBar(false);

  /* === Hide / Show navbar on scroll === */
  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < 50 || currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  /* === CLOSE MENU ON CLICK OUTSIDE === */
  useEffect(() => {
    if (!bar) return;

    const handleOutsideClick = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setBar(false);
      }
    };

    const handleScroll = () => setBar(false);

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bar]);

  return (
    <Container $isVisible={isVisible}>
      <Logo>
        <span className='green'><FaTerminal /></span>
        <h1>Franco Jones</h1>
      </Logo>

      <Nav ref={navRef} $bar={bar}>
        <span><a href="#home" onClick={handleLinkClick}>{t('nav.home')}</a></span>
        <span><a href="#service" onClick={handleLinkClick}>{t('nav.services')}</a></span>
        <span><a href="#technologies" onClick={handleLinkClick}>{t('nav.technologies')}</a></span>
        <span><a href="#project" onClick={handleLinkClick}>{t('nav.projects')}</a></span>
        <span><a href="#footer" onClick={handleLinkClick}>{t('nav.contact')}</a></span>
        <span><LanguageSelector menu /></span>
      </Nav>

      <MobileMenuIcon ref={buttonRef} onClick={() => setBar(!bar)}>
        {bar ? <HiX /> : <HiOutlineMenuAlt3 />}
      </MobileMenuIcon>
    </Container>
  );
};

export default Header;
