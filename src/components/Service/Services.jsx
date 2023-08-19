import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import { BsLayoutTextWindow, BsStack } from "react-icons/bs"
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={ BsStack }
            title={"Full Stack Developer"}
            disc={`Experienced Full Stack Developer skilled in Python, JavaScript, and frameworks like Django, Flask, and React. 
            I create complete web applications, from backend to frontend, ensuring efficient and scalable solutions.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Software Developer"}
            disc={`I create innovative and functional solutions,
            delivering high-quality software that enhances the user experience.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsLayoutTextWindow}
            title={"Web Designer"}
            disc={`Specialized in custom applications, I use Python, JavaScript, and C++ 
                to develop efficient and scalable solutions, always focused on meeting the client's needs.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
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
