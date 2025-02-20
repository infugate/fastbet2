import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  border-radius: 10px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  color: black;
  margin-top: 10px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeleteButton = styled.button`
  background-color: #0b3c68;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #084080;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

const DeleteAccount = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Delete Account Shri Matka</Title>
        <SubText>Are you sure you want to delete your account?</SubText>
        <InfoText>
          The account will be disabled for 14 days, after 14 days all the data
          related to this account will be deleted.
        </InfoText>
        <DeleteButton>Delete Account</DeleteButton>
      </Wrapper>
    </Container>
  );
};

export default DeleteAccount;
