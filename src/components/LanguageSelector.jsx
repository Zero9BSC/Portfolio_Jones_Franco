import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { HiChevronDown } from 'react-icons/hi';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'ar', label: 'العربية' },
];

// --- Styled Components ---
const Wrapper = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.8rem;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #01be96;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(1, 190, 150, 0.1);
    box-shadow: 0 0 6px #01be96;
  }

  svg {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  ${({ $open }) => $open && `svg { transform: rotate(180deg); }`}

  ${({ $menu }) =>
    $menu &&
    `
    @media (max-width: 640px) {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  `}
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 100%;
  background-color: #1F2533;
  border: 1px solid #01be96;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 100;
  overflow: hidden;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(1, 190, 150, 0.15);
  }

  ${({ $active }) => $active && `background-color: rgba(1, 190, 150, 0.2); color: #01be96;`}
`;

const LanguageSelector = ({ menu }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const currentCode = (i18n.language || 'en').split('-')[0].toLowerCase();
  const current = LANGUAGES.find((l) => l.code === currentCode) || LANGUAGES[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        type="button"
        $menu={menu}
        $open={open}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span>{current.code.toUpperCase()}</span>
        <HiChevronDown />
      </Trigger>
      {open && (
        <Dropdown role="listbox">
          {LANGUAGES.map((lang) => (
            <Option
              key={lang.code}
              type="button"
              role="option"
              aria-selected={currentCode === lang.code}
              $active={currentCode === lang.code}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default LanguageSelector;
