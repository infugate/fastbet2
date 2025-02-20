import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  background: #002b4e;
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 10px;
  color: white;
  width: 95%;
  margin: auto;
  border: 1px solid white;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: start;
  border-bottom: 1px solid white;
  width: 100%;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 45%;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: start;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgb(21, 140, 158);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #74c0fc;
    color: black;
  }
`;

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid rgb(21, 140, 158);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
`;

const ArticlesCards = () => {
  return (
    <MainContainer id="about">
      <Container>
        <Card>
          <Title>India's Best Online Khaiwal for Satta</Title>
          <Description>
            An online Khaiwal is a mediator between players and Matka markets. It
            collects bets, makes sure that play is fair and gives winning money.
            In today's times, most Satta Matka players are more interested in an
            online Khaiwal that allows for safe, fast, and reliable betting.
            Among such trusted Khaiwals is Shri Matka with honest dealings,
            full-rate payouts, and instant results.
          </Description>
          <Link to="/read-more">
          <Button>Read More &gt;</Button>
          </Link>
      
        </Card>

        <Card>
          <Title>Gali Haruf Satta King Results</Title>
          <Description>
            Gali Satta Matka is one of the most popular types of betting. By
            knowing the Haruf Andar Bahar Trick, it would be much easier to
            increase the chances of winning. The Haruf (Letter) Trick can assist
            players in predicting and analyzing results for better probability in
            Satta King.
          </Description>
          <Link to="/read-more">
          <Button>Read More &gt;</Button>
          </Link>
        </Card>
      </Container>
      <Link to="/more-articles" style={{ color: 'inherit', textDecoration: 'none' }}
      >
      <MoreButton>More Article</MoreButton>
      </Link>
    </MainContainer>
  );
};

export default ArticlesCards;
