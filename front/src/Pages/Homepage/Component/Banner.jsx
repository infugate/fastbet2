import React from "react";
import styled from "styled-components";
import bannerSlide from "../../../assets/slide.jpg";

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative; /* Ensures background covers entire container */
  overflow: hidden;
`;

/* ✅ Background Image Layer */
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bannerSlide}) no-repeat center center/cover;
  z-index: -1; /* Ensures content is above the background */
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  z-index: 1; /* Keeps content above the background */
`;

const Heading = styled.h2`
  font-size: 60px;
  font-weight: bold;
  width: 80%;
  margin: auto;
  color: #ffcc00;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
  padding: 15px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  background: yellow;
  color: black;
  width: 450px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 30px;
  border: 3px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    font-size: 28px;
  }
`;

const InfoText = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: Georgia;
  text-decoration-color: #282c34;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 12px;
  }
`;

const BannerFooter = styled.h3`
  font-size: 55px;
  font-weight: normal;
  margin-top: 0px;
  text-transform: uppercase;
  color: white;
  font-family: Poppins;
  letter-spacing: 3px;
  display: inline-block;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 2px;
  }
`;

const Banner = () => {
  return (
    <BannerContainer id="home">
      <BackgroundImage />
      <ContentWrapper>
        <Heading>आज ही डाउनलोड करें और खेलें, और जीतें लाखों के इनाम!</Heading>
        <ButtonContainer>
          <Button>Auto Deposite</Button>
          <Button>Auto Withdrawal</Button>
        </ButtonContainer>
        <InfoText>Quick Start with Minimum 500 Deposit & Withdrawal</InfoText>
        <BannerFooter>INDIA'S BEST ONLINE SATTA MATKA SITE</BannerFooter>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default Banner;
