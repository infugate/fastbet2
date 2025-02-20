import React from "react";
import styled from "styled-components";
import { useProfile } from "../../../context/ProfileContext";

const Container = styled.div`
//   background-color: #0b3c68;
//   min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;


  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
//   max-width: 1400px;
  padding: 30px;
  border-radius: 10px;
text-align:left;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const MessageBox = styled.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Divider = styled.div`
  background-color: #0b3c68;
  height: 5px;
  width: 100%;
  border-radius: 5px;
//   margin: 20px 0;
`;

// const Footer = styled.div`
//   text-align: center;
//   padding: 15px;
//   background-color: #0b3c68;
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
// `;

// const TermsAndPolicy = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   font-size: 14px;
//   font-weight: bold;
//   margin-top: 10px;

//   p {
//     cursor: pointer;
//     color: black;
//   }
// `;

const MiddlePointData = () => {
  const { profile } = useProfile();
  return (
    <Container>
      <Wrapper>
        <Title>Redeem Points</Title>
        <SubText>Available Point to Redeem : {profile.walletBalance}</SubText>
        <MessageBox>
          You do not have enough points to redeem. <br />
          Min Required Points are 1000.
        </MessageBox>

        <Divider />

        <Title>Submitted Redeems</Title>

   
      </Wrapper>
    </Container>
  );
};

export default MiddlePointData;
