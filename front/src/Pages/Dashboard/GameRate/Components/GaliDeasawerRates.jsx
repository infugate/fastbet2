import React from "react";
import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #0b3c68;
  
`;

const Wrapper = styled.div`
  width: 100%;
//   max-width: 1400px;
  background:white;
  padding:30px;
  border-radius:15px;
  text-align:left;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const RateCard = styled.div`
  background-color: #0b3c68;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CircleIcon = styled.div`
  background-color: #c8ff8a;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 0 auto 15px auto;
  }
`;

const RateDetails = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #c8ff8a;
  font-weight: normal;
  margin: 0;
`;

const RateText = styled.h2`
  font-size: 22px;
  margin: 5px 0;
`;

const GaliDeasawerRates = () => {
  const rates = [
    { id: 1, type: "Single Digit", rate: "10 KA 95" },
    { id: 2, type: "Jodi Digit", rate: "10 KA 950" },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Gali Deasawer Rates</Title>
        {rates.map((item) => (
          <RateCard key={item.id}>
            <CircleIcon>
              <FaDollarSign />
            </CircleIcon>
            <RateDetails>
              <Subtitle>{item.type}</Subtitle>
              <RateText>{item.rate}</RateText>
            </RateDetails>
          </RateCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default GaliDeasawerRates;
