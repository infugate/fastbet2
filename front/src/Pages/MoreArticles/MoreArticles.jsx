import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Navbar } from '../Homepage/Component/Navbar';
import { MainBannerContainer, DownloadButton } from './ReadMoreArticle';
const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  background: #003366;
`;

const Header = styled.div`
  width: 100vw;
  padding: 5rem 2rem;
  background: #003366;
  box-sizing:border-box;

`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 2.5rem;
  }
`;

const PostedOn = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 1.5rem;
  }
`;

const InnerContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content:space-between;
   @media (max-width: 768px) {
    flex-direction:column;
      width: 100%;
  }

`;

const ArticleContainer = styled.section`
  width: 60%;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-sizing:border-box;
  p {
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5rem;
    text-align: left;
  }
      @media (max-width: 768px) {
    width:95%;
      margin: auto;
  }
`;

const StyledButton = styled.button`
  background-color: rgb(7, 40, 84);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(5, 34, 71);
  }
`;

const BannerContainer = styled.div`
  width: 100%;
 
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: bold;
  width: 90%;
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
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 20px;
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
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: Georgia;
  // text-shadow: 2px 2px 4px rgba(237, 232, 232, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5);
text-decoration-color: #282c34;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 12px;
  }
`;

const BannerFooter = styled.h3`
  font-size: 25px;
  font-weight: normal;
  margin-top: 2rem;
  text-transform: uppercase;
  color: white;
  font-family: Poppins;
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 2px;
  }
`;

const ArticleHeading = styled.h5`
  font-size: 1.4rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 10px;
  text-align:left;
`;

const ArticleText = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  color: #333;
  text-align: justify;
`;

const MoreArticles = () => {
  return (
    <MainContainer>
      <Navbar />
      <Header>
        <Title>Articles</Title>
        <PostedOn>Get all knowledge of about matka and matka market
        </PostedOn>

      </Header>
      <InnerContainer>
        <ArticleContainer>
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <ArticleHeading>Why Shri Matka is the Best Online Khaiwal?</ArticleHeading>
              <ArticleText>
                An online Khaiwal is a mediator between players and Matka markets. It collects bets, ensures fair play, and distributes winnings. Shri Matka is a trusted Khaiwal with transparent dealings, full-rate payouts, and instant results.
              </ArticleText>
              <StyledButton>
                Read More <FaAngleDoubleRight />
              </StyledButton>
            </div>
          ))}
        </ArticleContainer>
        <MainBannerContainer>
                <BannerContainer>
                  <BannerContainer>
                    <DownloadButton>Download Play App</DownloadButton>
      
                    <ContentWrapper>
                      <Heading>आज ही डाउनलोड करें और खेलें, और जीतें लाखों के इनाम!</Heading>
                      <ButtonContainer>
                        <Button>Auto Deposite</Button>
                        <Button>Auto Withdrawal</Button>
                      </ButtonContainer>
                      <InfoText>Quick Start with Minimum 500 Deposit & Withdrawal</InfoText>
                      <BannerFooter>INDIA'S BEST ONLINE SATTA MATKA SITE</BannerFooter>
                    </ContentWrapper>
      
                    <DownloadButton>Download Play App</DownloadButton>
      
                  </BannerContainer>
      
                </BannerContainer>
              </MainBannerContainer>

      </InnerContainer>
    </MainContainer>
  );
};

export default MoreArticles;
