import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #0b3c68;
  color: white;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const MatchItem = styled.div`
  background: white;
  color: #0b3c68;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
`;


const LiveBadge = styled.span`
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  animation: colorBlink 3.5s infinite alternate;

  @keyframes colorBlink {
    from {
      background-color: green;
    }
    to {
      background-color: red;
    }
  }
`;


const CricketMarket = () => {
  // Dummy match data
  const matches = [
    { id: 1, name: "India vs Australia", live: true },
    { id: 2, name: "England vs Pakistan",  live: false },
    { id: 3, name: "South Africa vs New Zealand", live: true },
  ];

  return (
    <Container>
      <Heading>Live Cricket Market</Heading>
      <MatchList>
        {matches.map((match) => (
          <MatchItem key={match.id}>
            <span>{match.name}</span>
            {match.live && <LiveBadge>LIVE</LiveBadge>}
           
          </MatchItem>
        ))}
      </MatchList>
    </Container>
  );
};

export default CricketMarket;
