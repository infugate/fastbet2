import React from "react";
import styled from "styled-components";
const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  };
  
// Sample data array
const gameRatesData = [
    { id: 1, rateText: "10 ka", amount: 95, label: "SINGLE DIGIT" },
    { id: 2, rateText: "10 ka", amount: 950, label: "JODI DIGIT" },
    { id: 3, rateText: "10 ka", amount: 1500, label: "SINGLE PANA" },
    { id: 4, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
    { id: 5, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
    { id: 6, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
    { id: 7, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
    { id: 8, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
    // { id: 9, rateText: "10 ka", amount: 3000, label: "DOUBLE PANA" },
];

const Container = styled.div`
  text-align: center;
  color: white;
  padding: 0px 20px;
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0px 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0px 5px;
  }
`;


const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: auto;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;


const Card = styled.div`
  background: #003366;
  padding: 20px;
  width: 46%;
  border-radius: 15px;
  text-align: center;
  color: white;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
     padding: 0px;
       border-radius: 5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
      border-radius: 5px;
  }
`;


const RateText = styled.p`
  font-size: 14px;
  color: #92ff92;
`;

const AmountLabelRow = styled.div`
  display: flex;
  padding: 0px 40px;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
     padding: 20px;
  }

`;

const Amount = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #92ff92;
  width: 20%;
  margin: 0;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 30%;
     font-size: 25px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40%;
     font-size: 25px;
  }
`;

const Label = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0 100px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 50px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 20px;
  }
`;


const GameRates = () => {
    return (
        <Container id="rate-chart">
            <RateText style={{ color: "yellow", fontSize: "16px" }}>Game Rates</RateText>
            <Title>Online Game Play Rates</Title>
            <Subtitle>Explore multiple options for maximum fun</Subtitle>

            <Grid>
                {gameRatesData.map((game) => (
                    <Card key={game.id}>

                        <AmountLabelRow>
                            <Amount> <RateText>{game.rateText}</RateText>{game.amount}</Amount>
                            <Label>

                                {game.label}</Label>

                        </AmountLabelRow>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
};

export default GameRates;
