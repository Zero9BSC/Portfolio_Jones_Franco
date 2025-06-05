import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSelector = ({ menu }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select menu={menu} onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">🇺🇸 EN</option>
      <option value="es">🇪🇸 ES</option>
      <option value="de">🇩🇪 DE</option>
    </Select>
  );
};


export default LanguageSelector;

const Select = styled.select`
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

  option {
    background-color: #1F2533;
    color: #fff;
  }

  /* Solo si está dentro del menú */
  ${({ menu }) =>
    menu &&
    `
    @media (max-width: 640px) {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  `}
`;
