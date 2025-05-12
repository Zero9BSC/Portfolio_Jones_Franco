import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { BsCpu, BsTools, BsWifi } from "react-icons/bs";

const ITSupport = () => {
  return (
    <Container id="it-support">
      <Slide direction="down">
        <h4>
          My <span className="green">IT Support</span> Experience
        </h4>
        <h1>What I Can Do For You</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsCpu}
            title={"Hardware Support"}
            disc={`Diagnosis, repair, and upgrade of desktops, laptops, and servers. I ensure your equipment is running at peak performance.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={BsTools}
            title={"Software Troubleshooting"}
            disc={`From operating system issues to application bugs, I provide solutions to ensure your software runs smoothly and securely.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsWifi}
            title={"Network Management"}
            disc={`Support for setting up and maintaining networks, including routers, firewalls, and VPNs, ensuring a secure and stable connection.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default ITSupport;

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
