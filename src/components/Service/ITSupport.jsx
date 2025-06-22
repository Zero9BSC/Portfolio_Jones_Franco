import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { BsCpu, BsTools, BsWifi } from "react-icons/bs";
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


const ITSupport = () => {
  const { t } = useTranslation();

  return (
    <Container id="it-support">
      <Slide direction="down">
        <h4>
          {t("itsupport.header")} <span className="green">{t("itsupport.highlight")}</span>
        </h4>
        <h1>{t("itsupport.subheader")}</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsCpu}
            title={t("itsupport.cards.0.title")}
            disc={t("itsupport.cards.0.desc")}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={BsTools}
            title={t("itsupport.cards.1.title")}
            disc={t("itsupport.cards.1.desc")}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsWifi}
            title={t("itsupport.cards.2.title")}
            disc={t("itsupport.cards.2.desc")}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default ITSupport;
