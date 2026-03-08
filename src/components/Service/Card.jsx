import React from 'react'
import styled from 'styled-components';


// --- Styled Components ---
const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

p{
    font-size: 0.8rem;
  }
  p.benefit {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: #01be96;
    font-weight: 500;
  }
`;


const Card = (props) => {
    const { Icon, disc, title, benefit } = props;
  return (
    <Container>
        <span className='green'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p>
        {benefit && <p className="benefit">{benefit}</p>}
    </Container>
  )
}

export default Card;
