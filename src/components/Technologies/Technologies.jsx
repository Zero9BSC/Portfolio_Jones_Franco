import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal';
import { DiReact, DiJavascript1, DiPython, DiHtml5, DiCss3, DiNodejsSmall, DiSqllite, DiMysql } from "react-icons/di";
import { SiDjango, SiCplusplus, SiFlask, SiMongodb, SiArduino, SiGit, SiGithub, SiBootstrap } from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi"
import { FaDocker } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';


const Technologies = () => {
    const { t } = useTranslation();

    return (
    <Container id='technologies'>
        <Slide direction="left">
            <h2>{t("technologies.title")}</h2>
        </Slide>
        
        <IconGrid>
          {/* Se agregan los iconos correspondientes para cada tecnología */}

          <IconItem>
            <DiPython />
            <span>Python</span>
          </IconItem>
          <IconItem>
            <DiJavascript1 />
            <span>JavaScript</span>
          </IconItem>
          <IconItem>
            <SiCplusplus />
            <span>C++</span>
          </IconItem>
          <IconItem>
            <DiReact />
            <span>React</span>
          </IconItem>
          <IconItem>
            <SiDjango />
            <span>Django</span>
          </IconItem>
          <IconItem>
            <SiFlask />
            <span>Flask</span>
          </IconItem>
          <IconItem>
            <BiLogoVuejs />
            <span>Vue</span>
          </IconItem>
          <IconItem>
            <DiNodejsSmall />
            <span>Nodejs</span>
          </IconItem>
          <IconItem>
            <DiHtml5 />
            <span>HTML5</span>
          </IconItem>
          <IconItem>
            <DiCss3 />
            <span>CSS3</span>
          </IconItem>
          <IconItem>
            <SiBootstrap />
            <span>Bootstrap</span>
          </IconItem>
          <IconItem>
            <DiSqllite />
            <span>SQLite</span>
          </IconItem>
          <IconItem>
            <DiMysql />
            <span>MySQL</span>
          </IconItem>
          <IconItem>
            <SiMongodb />
            <span>MongoDB</span>
          </IconItem>
          <IconItem>
            <SiArduino />
            <span>Arduino</span>
          </IconItem>
          <IconItem>
            <SiGit />
            <span>Git</span>
          </IconItem>
          <IconItem>
            <SiGithub />
            <span>Github</span>
          </IconItem>
          <IconItem>
            <FaDocker />
            <span>Docker</span>
          </IconItem>
        </IconGrid>
      </Container>
    );
  };
  
export default Technologies;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin-bottom: 3rem;
    margin: 0px auto;

    @media(max-width:840px){
        width: 90%;
    }

    h2{
        padding-top: 1rem;
        text-transform: capitalize;
    }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Ajusta el número de columnas */
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  color: #E6E6E6;

  svg {
    width: 3rem;
    height: 3rem;
    filter: drop-shadow(0px 0px 8px #01be96); /* Agrega un filtro de sombra */
  }

  span {
    font-size: 0.9rem;
  }
`;
