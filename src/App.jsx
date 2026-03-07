import { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import Technologies from "./components/Technologies/Technologies";
import Services from "./components/Service/Services";
import ITSupport from "./components/Service/ITSupport";
import CtaStrip from "./components/CtaStrip/CtaStrip";


// --- Styled Components ---
const Container = styled.div``;

const Banner = styled.div`
  background: linear-gradient(159deg, #303C55 0%, #1F2533 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 1440px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 1920px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media (min-width: 2560px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, #303C55 0%, #1F2533 100%);
`;


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = (i18n.language || "en").split("-")[0].toLowerCase();
    const isRtl = lang === "ar";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <ITSupport />
      <Technologies />
      <LightColor>
        <ProjectsGrid />
      </LightColor>
      <CtaStrip />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;
