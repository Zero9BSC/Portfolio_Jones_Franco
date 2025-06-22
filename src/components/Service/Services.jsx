import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import { BsLayoutTextWindow, BsStack, BsLaptop } from "react-icons/bs";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";


// --- Styled Components ---
const Container = styled.div`
  width: clamp(80%, 85vw, 1440px);
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 1920px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 2560px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;


const Services = () => {
  const { t } = useTranslation();

  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          {t("services.header")} <span className="green">{t("services.highlight")}</span>
        </h4>
        <h1>{t("services.subheader")}</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsStack}
            title={t("services.cards.0.title")}
            disc={t("services.cards.0.desc")}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={t("services.cards.1.title")}
            disc={t("services.cards.1.desc")}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsLayoutTextWindow}
            title={t("services.cards.2.title")}
            disc={t("services.cards.2.desc")}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsLaptop}
            title={t("services.cards.3.title")}
            disc={t("services.cards.3.desc")}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;
