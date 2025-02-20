import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import { Navbar } from '../Homepage/Component/Navbar';
import readMoreImg from '../../assets/read_more.png'
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

const SocialButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap:wrap;
  justify-content:start;
`;

const ButtonBase = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display:flex;
  gap:10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
    

`;

const FbButton = styled(ButtonBase)`
  background-color: #3b5998;
`;

const InstaButton = styled(ButtonBase)`
  background-color: #e4405f;
`;

const WhatsappButton = styled(ButtonBase)`
  background-color: #25d366;
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
  margin: 20px auto;
  gap: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(5, 34, 71);
  }
`;

const ArticleList = styled.div`
  margin-top: 20px;
  text-align: left;
  h5 {
    font-size: 1.5rem;
    text-align: left;
  }
  h5, h6 {
    margin: 0;
    padding: 5px 0;
  }
  h6 {
    font-size: 1rem;
    text-align: left;
  }
  ul {
    padding-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
`;

const ImageDiv = styled.div`
  background: grey;
  width: 100%;
  height: 400px;
`;



const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
//  padding-top:80px;
  justify-content: center;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
     width: 95%;
    
  }
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
    padding: 40px 10px;

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
    font-size: 18px;
  }
`;

const InfoText = styled.p`
  font-size: 20px;
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
const ButtonText = styled.span`
display:block;
@media (max-width: 768px) {
   display:none;
  }
`
export const DownloadButton = styled.button`
      border:2px solid green;
      color:white;
      width:100%;
      font-weight:bold;
      background:transparant;
      padding:10px 20px;
      border-radius:15px;
      font-size:1rem;
 background-color: #003366;
  @media (max-width: 768px) {
  }
`
export const MainBannerContainer = styled.div`
  width: 37%;
  padding:30px 0px;
   height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
    @media (max-width: 768px) {
     width: 100%;
     height:auto;
  }
  

`

const ReadMore = () => {
  return (
    <MainContainer>
      <Navbar />
      <Header>
        <Title>India's Best Online Khaiwal for Satta</Title>
        <PostedOn>Posted On: 05th, February 2025</PostedOn>
        <SocialButton >
          <FbButton>   <FaFacebook /> <ButtonText> Facebook </ButtonText> </FbButton>
          <InstaButton> <FaInstagram />  <ButtonText> Instagram </ButtonText> </InstaButton>
          <WhatsappButton> <FaWhatsapp /> <ButtonText> Whatsapp </ButtonText> </WhatsappButton>
        </SocialButton>
      </Header>
      <InnerContainer>
        <ArticleContainer>
          <p>
            An online Khaiwal is a mediator between players and Matka markets. It collects bets, ensures fair play, and distributes winnings. Shri Matka is a trusted Khaiwal with transparent dealings, full-rate payouts, and instant results.
          </p>
          <StyledButton>
            <FaAngleDoubleLeft /> Play Matka <FaAngleDoubleRight />
          </StyledButton>
          <ImageDiv style={{ backgroundImage: `url(${readMoreImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></ImageDiv>
          <ArticleList>
            <h5>Why Shri Matka is the Best Online Khaiwal?</h5>
            <h6>✅ Most Trusted Online Khaiwal</h6>
            <ul>
              <li>The name, Shri Matka, is synonymous with the most trustworthy online Khaiwal for Satta players.</li>
              <li>This platform offers fair gaming, attracting both beginners and advanced players.</li>
              <li>No hidden charges or fraudulent activities – 100% transparency guaranteed.</li>
            </ul>
            <h6>💰 Full-Rate Khaiwal for Maximum Profits</h6>
            <ul>
              <li>No commission charges – full-rate payouts for better returns.</li>
              <li>Winning amounts are given instantly without delay or deduction.</li>
            </ul>
            <h6>🎲 Wide Range of Satta Matka Games Available</h6>
            <ul>
              <li>Kalyan Matka, Sridevi Matka, Rudraksh Night Matka, Karnataka Night Matka</li>
              <li>Full Sangam & Half Sangam Games</li>
              <li>Jodi Digit, Single Panna, Double Panna, and Triple Panna</li>
            </ul>
            <h6>🚀 Safe, Secure, and Fast Transactions</h6>
            <ul>
              <li>Instant deposits and withdrawals.</li>
              <li>No intermediaries – direct business with Shri Matka.</li>
              <li>High-level encryption for secure transactions.</li>
            </ul>
            <h6>📊 Real-Time Satta Matka Results</h6>
            <ul>
              <li>Instant updates and results for quick information.</li>
              <li>Accurate predictions to maximize winning chances.</li>
            </ul>
            <h5>👉🤑 Gali Haruf Satta King Results 🤑👈</h5>
          </ArticleList>

          <StyledButton>
            <FaAngleDoubleLeft /> Play Matka <FaAngleDoubleRight />
          </StyledButton>
          <SocialButton style={{ width: "fit-content", margin: "auto" }}>
            <FbButton>   <FaFacebook /> <ButtonText> Facebook </ButtonText> </FbButton>
            <InstaButton> <FaInstagram />  <ButtonText> Instagram </ButtonText> </InstaButton>
            <WhatsappButton> <FaWhatsapp /> <ButtonText> Whatsapp </ButtonText> </WhatsappButton>
          </SocialButton>
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

export default ReadMore;
