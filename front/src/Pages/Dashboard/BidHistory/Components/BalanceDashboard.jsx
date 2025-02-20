import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaWallet, FaTrophy, FaHome } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { useProfile } from "../../../../context/ProfileContext";

const Container = styled.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing:border-box;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  // max-width: 1400px;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const BalanceCard = styled.div`
  background-color: #003c7b;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
`;

const BalanceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const BalanceIcon = styled.div`
  background-color: #d4f4a6;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }
`;

const BalanceText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  h2 {
    font-size: 30px;
    margin: 0;
  }
`;

const IconGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: black;

  svg {
    font-size: 90px;
    color: #0b3c68;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;

    svg {
      font-size: 40px;
    }
  }
`;

const BalanceDashboard = () => {
  const { profile } = useProfile();
  return (
    <Container>
      <Wrapper>
        {/* Balance Section */}
        <BalanceCard>
          <BalanceInfo>
            <BalanceIcon>
              <IoWalletOutline />
            </BalanceIcon>
            <BalanceText>
              <span>Balance</span>
              <h2>{profile.walletBalance}</h2>
            </BalanceText>
          </BalanceInfo>
        </BalanceCard>

        {/* Icons Section */}
        <IconGrid>
          <IconCard>
            <FaHome />
            <p>Home</p>
          </IconCard>
          <IconCard>
            <FaDollarSign />
            <p>Add</p>
          </IconCard>
          <IconCard>
            <FaWallet />
            <p>Wallet</p>
          </IconCard>
          <IconCard>
            <FaTrophy />
            <p>Wins</p>
          </IconCard>
        </IconGrid>
      </Wrapper>
    </Container>
  );
};

export default BalanceDashboard;
