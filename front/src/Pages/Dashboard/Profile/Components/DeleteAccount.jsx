import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: start;
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin: 20px auto;
  }
`;

const ProfileWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  text-align: start;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const ProfileContent = styled.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;

const ProfileField = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  background-color:rgb(94, 98, 102);
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #083255;
  }
`;

const DeleteAccount = () => {
    return (
        <ProfileContainer>
            <ProfileWrapper>
                <Title>Delete Account</Title>
                <ProfileContent>
                    <ProfileField>
                        <Button>Delete Account</Button>
                    </ProfileField>
                </ProfileContent>
            </ProfileWrapper>
        </ProfileContainer>
    );
};

export default DeleteAccount;
