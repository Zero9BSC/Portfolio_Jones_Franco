import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
// import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Services from "./components/Service/Services";
import ITSupport from "./components/Service/ITSupport";


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

const Container = styled.div``;

  const Banner = styled.div`
    background: linear-gradient(159deg, #303C55 0%, #1F2533 100%); /* Colores azules oscuros */
    height: 100vh;
    @media (max-width: 640px) {
      height: 100%;
      padding-bottom: 2rem;
    }
  `;

  const LightColor = styled.div`
    background: linear-gradient(159deg, #303C55 0%, #1F2533 100%); /* Colores azules oscuros */
  `;
