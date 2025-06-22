import React from 'react';
import styled from 'styled-components';


// --- Styled Components ---
const Container = styled.div`
  aspect-ratio: 16 / 9;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  transform: ${({ $isActive }) => ($isActive ? 'scale(1.08)' : 'scale(1)')};
  box-shadow: ${({ $isActive }) =>
    $isActive ? '0 0 15px rgba(1, 190, 150, 0.7)' : 'none'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  :hover > img {
    transform: scale(1.3);
  }

  @media (max-width: 1024px) {
    transform: ${({ $isActive }) => ($isActive ? 'scale(1.05)' : 'scale(0.98)')};
  }

  @media (max-width: 480px) {
    transform: ${({ $isActive }) => ($isActive ? 'scale(1.05)' : 'scale(0.98)')};
  }
`;


const Project = ({ item, isActive }) => {
  return (
    <Container className="project" $isActive={isActive}>
      <img src={item.img} alt="project" />
    </Container>
  );
};

export default Project;
