import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { HiExternalLink, HiX } from "react-icons/hi";

import coderhouseImg from "../../assets/certificates/Coderhouse_Python.jpg";
import freeCodeCampImg from "../../assets/certificates/FreeCodeCamp_JavaScript.png";
import codoACodoImg from "../../assets/certificates/Jones_Franco_FullStack.jpg";
import ccnaImg from "../../assets/certificates/ccna.png";

const GREEN = "#01be96";
const CARDS = [
  { key: "0", img: coderhouseImg, verifyUrl: "" },
  {
    key: "1",
    img: freeCodeCampImg,
    verifyUrl: "https://www.freecodecamp.org/espanol/certification/Franco_Nicolas_Jones/javascript-algorithms-and-data-structures",
  },
  { key: "2", img: codoACodoImg, verifyUrl: "" },
  { key: "3", img: ccnaImg, verifyUrl: "" },
];

const Section = styled.section`
  width: 100%;
  padding: 3rem clamp(1rem, 5vw, 4rem);
  background: linear-gradient(159deg, #252536 0%, #1a1a28 100%);
`;

const Container = styled.div`
  width: clamp(80%, 85vw, 1200px);
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2.5rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    .green { color: ${GREEN}; }
  }
  p {
    color: #b8b8c4;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    h2 { font-size: 1.5rem; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.article`
  background: #191923;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: ${GREEN};
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #0b0b0b;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
  ${Card}:hover img {
    transform: scale(1.03);
  }
`;

/* Light background for logos with transparent PNG (e.g. CCNA) so dark/light-gray text is visible */
const ImageWrapLight = styled(ImageWrap)`
  background: #f0f0f0;
`;

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: ${GREEN};
  color: #0b0b0b;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Content = styled.div`
  padding: 1.25rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
    line-height: 1.3;
  }
  .issuer {
    font-size: 0.9rem;
    color: ${GREEN};
    margin-bottom: 0.25rem;
  }
  .meta {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.75rem;
  }
`;

const VerifyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${GREEN};
  text-decoration: none;
  margin-top: 0.5rem;
  transition: gap 0.2s ease;
  &:hover {
    gap: 0.6rem;
    text-decoration: underline;
  }
`;

/* --- Modal --- */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
  overflow: auto;
  animation: fadeIn 0.2s ease;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalBox = styled.div`
  position: relative;
  background: #191923;
  border-radius: 12px;
  border: 1px solid rgba(1, 190, 150, 0.3);
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: scaleIn 0.25s ease;
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  @media (max-width: 640px) {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 8px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s ease;
  &:hover {
    background: ${GREEN};
    color: #0b0b0b;
  }
  svg { font-size: 1.4rem; }
`;

const ModalImageWrap = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 1.5rem;
  background: ${(p) => (p.$light ? "#f0f0f0" : "transparent")};
  @media (max-width: 640px) {
    padding: 2.5rem 0.75rem 1rem;
  }
  img {
    max-width: 100%;
    max-height: 75vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
    @media (max-width: 640px) {
      max-height: 65vh;
    }
  }
`;

const ModalFooter = styled.div`
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; }
  .issuer { font-size: 0.9rem; color: ${GREEN}; margin-bottom: 0.15rem; }
  .meta { font-size: 0.8rem; color: #888; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${GREEN};
    text-decoration: none;
  }
  a:hover { text-decoration: underline; }
  @media (max-width: 640px) {
    padding: 0.75rem 1rem 1rem;
    h3 { font-size: 0.95rem; }
  }
`;

const Certifications = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState(null);

  const openCard = CARDS.find((c) => c.key === openKey);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    if (openKey) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [openKey]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setOpenKey(null);
  };

  return (
    <Section id="certifications" aria-labelledby="certifications-heading">
      <Container>
        <Header>
          <Slide direction="down" triggerOnce>
            <h2 id="certifications-heading">{t("certifications.title")}</h2>
            <p>{t("certifications.subtitle")}</p>
          </Slide>
        </Header>
        <Grid>
          {CARDS.map((card, index) => {
            const badgeText = t(`certifications.cards.${card.key}.badge`);
            return (
              <Slide key={card.key} direction="up" triggerOnce delay={index * 80}>
                <Card
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenKey(card.key)}
                  onKeyDown={(e) => e.key === "Enter" && setOpenKey(card.key)}
                  aria-label={t(`certifications.cards.${card.key}.name`)}
                >
                  {card.key === "3" ? (
                    <ImageWrapLight>
                      <img
                        src={card.img}
                        alt={`${t(`certifications.cards.${card.key}.name`)} — ${t(`certifications.cards.${card.key}.issuer`)}`}
                        loading="lazy"
                      />
                      {badgeText && <Badge>{badgeText}</Badge>}
                    </ImageWrapLight>
                  ) : (
                    <ImageWrap>
                      <img
                        src={card.img}
                        alt={`${t(`certifications.cards.${card.key}.name`)} — ${t(`certifications.cards.${card.key}.issuer`)}`}
                        loading="lazy"
                      />
                      {badgeText && <Badge>{badgeText}</Badge>}
                    </ImageWrap>
                  )}
                  <Content onClick={(e) => e.stopPropagation()}>
                    <h3>{t(`certifications.cards.${card.key}.name`)}</h3>
                    <p className="issuer">{t(`certifications.cards.${card.key}.issuer`)}</p>
                    <p className="meta">
                      {t(`certifications.cards.${card.key}.date`)}
                      {t(`certifications.cards.${card.key}.hours`) && ` · ${t(`certifications.cards.${card.key}.hours`)}`}
                    </p>
                    {card.verifyUrl && (
                      <VerifyLink href={card.verifyUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        {t("certifications.verify")}
                        <HiExternalLink />
                      </VerifyLink>
                    )}
                  </Content>
                </Card>
              </Slide>
            );
          })}
        </Grid>
      </Container>

      {openCard && (
        <Overlay onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label={t("certifications.title")}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseBtn type="button" onClick={() => setOpenKey(null)} aria-label="Close">
              <HiX />
            </CloseBtn>
            <ModalImageWrap $light={openCard.key === "3"}>
              <img
                src={openCard.img}
                alt={`${t(`certifications.cards.${openCard.key}.name`)} — ${t(`certifications.cards.${openCard.key}.issuer`)}`}
              />
            </ModalImageWrap>
            <ModalFooter>
              <h3>{t(`certifications.cards.${openCard.key}.name`)}</h3>
              <p className="issuer">{t(`certifications.cards.${openCard.key}.issuer`)}</p>
              <p className="meta">
                {t(`certifications.cards.${openCard.key}.date`)}
                {t(`certifications.cards.${openCard.key}.hours`) && ` · ${t(`certifications.cards.${openCard.key}.hours`)}`}
              </p>
              {openCard.verifyUrl && (
                <a href={openCard.verifyUrl} target="_blank" rel="noopener noreferrer">
                  {t("certifications.verify")}
                  <HiExternalLink />
                </a>
              )}
            </ModalFooter>
          </ModalBox>
        </Overlay>
      )}
    </Section>
  );
};

export default Certifications;
