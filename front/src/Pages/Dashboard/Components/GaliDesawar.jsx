import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChartBar, FaPlay } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #0b3c68;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
  text-align: left;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 15px;
`;

const GameCard = styled.div`
  background-color: #0b3c68;
  color: white;
  padding: 20px;  /* Reduced padding */
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChartSection = styled.div`
  display: flex;
 align-items: center;
  justify-content:start;
  flex-direction: column;
  width: 70px;
  text-align: center;

  svg {
    font-size: 30px; /* Reduced icon size */
    background-color: #d4f4a6;
    padding: 10px;
    border-radius: 50%;
    color: #0b3c68;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px; /* Reduced font size */
    font-weight: bold;
     margin-top:3px;
  }
`;

const GameDetails = styled.div`
  flex: 1;
  text-align: center;
  padding: 0;
  height: fit-content;
  h4 {
    color: red;
    font-size: 14px; /* Reduced font size */
    font-weight: bold;
  }
  h3 {
    font-size: 14px; /* Reduced font size */
    font-weight: bold;
    margin: 2px 0;
  }
  p {
    font-size: 12px; /* Reduced font size */
  }
`;

const PlayButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  width: 70px;
  text-align: center;
  svg {
    font-size: 20px; /* Reduced icon size */
    background-color: #d4f4a6;
    padding: 15px;
    border-radius: 50%;
    color: red;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px; /* Reduced font size */
    font-weight: bold;
  margin-top:3px;
  }
`;


const GaliDesawar = () => {
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subscription-state`,
        );
        const data = await response.data;
        setGamesData(data.scrapedData.markets);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Gali Desawar Games</Title>
        <GridContainer>
          {loading ? (
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Loading...</p>
          ) : error ? (
            <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>{error}</p>
          ) : (
            <GridContainer>
              {gamesData.map((game, index) => (
                <GameCard key={index}>
                  <ChartSection>
                    <FaChartBar />
                    <p>Chart</p>
                    <p>Open: {game.openTime}</p>
                  </ChartSection>
                  <GameDetails>
                    <h4>{game.jodiDigit}</h4>
                    <h3>{game.marketName}</h3>
                    <p style={{ color: game.closeStatus === "close" ? "red" : "green", fontWeight: "bold" }}>Bid is {game.closeStatus}</p>
                  </GameDetails>
                  <Link to={game.closeStatus === "close" ? "#" : `/dashboard/play/${game.marketName}`} style={{ textDecoration: "none", color: "white" }} onClick={game.closeStatus === "close" ? (e) => e.preventDefault() : undefined}>
                    <PlayButton
                      style={{ cursor: game.closeStatus === "close" ? "not-allowed" : "pointer" }}
                      disabled={game.closeStatus === "close"}
                    >
                      <FaPlay style={{ color: game.closeStatus === "close" ? "gray" : "red" }} />
                      <p style={{ color: game.closeStatus === "close" ? "gray" : "white" }}>Play</p>
                      <p>Close: {game.closeTime}</p>
                    </PlayButton>
                  </Link>
                </GameCard>
              ))}
            </GridContainer>
          )}
        </GridContainer>
      </Wrapper>
    </Container>
  );
};

export default GaliDesawar;
