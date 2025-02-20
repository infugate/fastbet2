import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../breakpoint"; // Import breakpoints
import coinImg from "../../../assets/coins.png";
const MainContainer = styled.div`
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 10px;
  color: white;
  width: 95%;
  margin: auto;
  padding: 100px 30px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 50px 0px;

  }
`;

const Container = styled.div`
  background: #003366;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-evenly;
  align-items: flex-start;
  border-bottom: 1px solid white;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
      padding: 0px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  flex: 2;
  text-align: start;
  padding: 20px 2px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const AboutMatkaApp = () => {
  return (
    <MainContainer id="how-to-play">
      <Title>Best Matka App</Title>
      <Container>
        <ImageWrapper>
          <StyledImage src={coinImg} alt="Matka" />
        </ImageWrapper>
        <TextWrapper>
          <Description>
            <p>
              Explore a diverse range of markets on Shri Matka Matka,
              including Madhur Morning, Kalyan Morning, Kalyan Day, Madhur
              Night, Kalyan Night, Sridevi, Time Bazar, Main Bazar, Rajdhani
              Night, Milan Morning, Milan Night, Ratan Day, Tara Matka, Mumbai
              Satta Bazar, Golden, Goa Day, Kolkata Fatafat, Joker, Starline,
              and many more. We welcome user suggestions and are open to adding
              new markets upon request.
            </p>
            <p>
              Our USP includes full game rate matka, 100% trusted matka, fast
              admin response, live results, online satta, satta matka 143, best
              satta app, final ank, top-best matka, open to close, kalyan open,
              main bazar, time bazar, sridevi satta, rajdhani, fast results, jodi
              chart, kalyan panel, fast withdrawal, automatic deposit, kuber matka
              result, minimum deposit, 100 deposit matka, best design, extra
              deposit bonus, kalyan market, main Mumbai, dpboss, fix ank today
              kalyan, online matka app, Laxmi matka, matka 420, deep matka, fastest
              matka result, Gali desawar faridabad gaziabad, Ke keywords or add
              krlo, Gali satta result, Desawar jodi chart, Faridabad jodi panel,
              Gaziabad fast result, Gali desawar satta chart, Delhi bazar Shri
              Ganesh daily satta result, live result Kalyan, kalyan online matka
              play app, online matka play app, matka play app, old matka chart,
              daily fast matka result app, VIP guessing, kalyan official matka app,
              and more.
            </p>
          </Description>
        </TextWrapper>
      </Container>
    </MainContainer>
  );
};

export default AboutMatkaApp;
