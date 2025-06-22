import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';


// --- Styled Components ---
const Container = styled.div`
  width: clamp(80%, 85vw, 1440px);
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;
  position: relative;

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
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``


const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container id='project'>
      <Zoom>
        <h1>{t('projects.title')} <span className="green">{t('projects.highlight')}</span></h1>
        <p>{t('projects.subtitle')}</p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;
