import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  color: #fff;
  text-align: center;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Ensure the line is positioned relative to this container */
`;

// Title for the section
const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

// Container for the four step items
const StepsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

// Individual step box
const StepItem = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  position: relative;
  flex: 1;
  margin-left: 4rem;
  z-index: 1;

  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

// The numbered square
const StepNumber = styled.div`
  background-color: #c4c4c4; /* Gray box background */
  width: 230px;
  height: 230px;
  border-radius: 10px; /* Rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #000; /* Black text for the number */
  margin-bottom: 0.5rem;
  z-index: 0;

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin: auto;
    margin-bottom: 2rem;
    width: 80%;
  }

`;

// Label text under each number
const StepLabel = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
`;

// Horizontal line connecting the steps
const HorizontalLine = styled.div`
  position: absolute;
  top: 55%;
  left: 10%;
  width: 70%;
  margin: auto;
  height: 8px;
  background: #b2f7a5;
  z-index: 0;

  @media (max-width: 768px) {
    display: none; /* Hide on small screens */
  }
`;

// Footer text at the bottom
const FooterText = styled.div`
  font-size: 0.9rem;
  color: #ddd; /* Slightly lighter than pure white */
`;

const HowToUseSection = () => {
  return (
    <SectionWrapper id="how-to-play">
      <Title>How To Use</Title>
      <HorizontalLine />
      <StepsWrapper>
        <StepItem>
          <StepNumber>1</StepNumber>
          <StepLabel>Download App</StepLabel>
        </StepItem>
        <StepItem>
          <StepNumber>2</StepNumber>
          <StepLabel>Click On Sign In</StepLabel>
        </StepItem>
        <StepItem>
          <StepNumber>3</StepNumber>
          <StepLabel>Enter Id-Password</StepLabel>
        </StepItem>
        <StepItem>
          <StepNumber>4</StepNumber>
          <StepLabel>Check Latest Results</StepLabel>
        </StepItem>
      </StepsWrapper>
      <FooterText>
        Copyright © 2004 - {new Date().getFullYear()} Sriti Matka | All rights reserved.
      </FooterText>
    </SectionWrapper>
  );
};

export default HowToUseSection;
