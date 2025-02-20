import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {  FaDice, FaPlane,  } from "react-icons/fa";
import { GiCardAceHearts } from "react-icons/gi";
import { GiCricketBat } from "react-icons/gi"; 
import { GiButterfly } from "react-icons/gi"
const Container = styled.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const CardContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 40px 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
  gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row in mobile */
    gap: 15px;
  }
`;



const GameCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 150px;
  text-decoration: none;
  color: inherit;

  svg {
    font-size: 80px;
    color: #0b3c68;
    transition: 0.3s;

    @media (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  &:hover svg {
    color: #ffcc00;
  }
`;

// Define game options dynamically with appropriate icons & links
const gameOptions = [
  { id: 1, name: "Aar Par Parchi", icon: <GiCricketBat />, link: "/dashboard/cricket" },
  { id: 2, name: "Cricket Market", icon: <GiCricketBat />, link: "/dashboard/cricketMarket" },
  { id: 3, name: "Matka", icon: <GiCardAceHearts />, link: "/dashboard/matka" },
  { id: 4, name: "Avaitor", icon:<FaPlane />, link: "/dashboard/avaitor" },
  { id: 5, name: "Titli", icon: <GiButterfly />, link: "/dashboard/titli" },
  { id: 6, name: "Andhar Bhar", icon: <FaDice />, link: "/dashboard/andrbhr" },
];

const ChooseGame = () => {
  return (
    <Container>
      <CardContainer>
        {gameOptions.map((game) => (
          <GameCard key={game.id} to={game.link}>
            {game.icon}
            <p>{game.name}</p>
          </GameCard>
        ))}
      </CardContainer>
    </Container>
  );
};

export default ChooseGame;
