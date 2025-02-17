import React from "react";
import { FaDollarSign, FaMoneyBill, FaPhone, FaUser, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";
import { ActionCard, ActionContainer } from "../../Wallet";
import { useProfile } from '../../../../context/ProfileContext';
const MainContainer = styled.div`
  background-color: white;
  width: 97%;
  padding: 20px;
  
  margin: 40px auto 5px auto;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px auto;
  }
`;

const UserContainer = styled.div`
  background-color: #0b3c68;
  color: white;
  padding: 40px 20px;
  box-sizing:border-box;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
//   max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const UserIcon = styled.div`
  background-color: #d4f4a6;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;

  svg {
    font-size: 35px;
    color: #0b3c68;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    padding: 10px;

    svg {
      font-size: 28px;
    }
  }
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;
    margin: 0;
  }

  @media (max-width: 768px) {
    span {
      font-size: 18px;
    }

    h2 {
      font-size: 28px;
    }
  }
`;



const UserDetails = () => {
  const { profile } = useProfile();
    return (
        <MainContainer>

            <UserContainer>
                <UserInfo>
                    <UserIcon>
                        <FaUser />
                    </UserIcon>
                    <UserText>
                        <h2>{profile.username}</h2>
                        <span>{profile.email}</span>

                    </UserText>
                </UserInfo>
            </UserContainer>
            {/* Action Icons */}
            <ActionContainer>
                <ActionCard>
                    <FaDollarSign />
                    <p>Add Point</p>
                </ActionCard>
                <ActionCard>
                    <FaMoneyBill />
                    <p>Redeem Point</p>
                </ActionCard>
                <ActionCard>
                    <FaWhatsapp style={{ border: "2px solid #0b3c68", borderRadius: "50%", padding: "10px" }} />
                    <p>WhatsApp</p>
                </ActionCard>
                <ActionCard>
                    <FaPhone/>
                    <p>Call</p>
                </ActionCard>
            </ActionContainer>
        </MainContainer>

    );
};

export default UserDetails;
