import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const GREEN = "#01be96";

const Wrapper = styled.section`
  width: 100%;
  padding: 3rem clamp(1rem, 5vw, 4rem);
  background: linear-gradient(159deg, #252536 0%, #1a1a28 100%);
  text-align: center;
`;

const Inner = styled.div`
  width: clamp(80%, 85vw, 800px);
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 640px) {
    font-size: 1.35rem;
  }
`;

const Subtitle = styled.p`
  color: #b8b8c4;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.85rem 2rem;
  background-color: ${GREEN};
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  transition: filter 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 14px rgba(1, 190, 150, 0.35);
  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
  }
`;

const CtaStrip = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Fade triggerOnce>
        <Inner>
          <Title>{t("ctaStrip.title")}</Title>
          <Subtitle>{t("ctaStrip.subtitle")}</Subtitle>
          <Button href="#footer">{t("ctaStrip.button")}</Button>
        </Inner>
      </Fade>
    </Wrapper>
  );
};

export default CtaStrip;
