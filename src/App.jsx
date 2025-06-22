import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
// import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Services from "./components/Service/Services";
import ITSupport from "./components/Service/ITSupport";


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
        <Projects />
      </LightColor>
      {/* <Clients /> */}
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;
