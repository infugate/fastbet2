import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaMoneyBill, FaWhatsapp, FaPhone, FaWallet, FaArrowDown } from "react-icons/fa";
import DashboardNavbar from "./Components/Navbar";
import { useProfile } from '../../context/ProfileContext';
export const MainContainer = styled.div`
//   background: #002b4e;
  // padding: 20px 0;
  min-height: 100vh;
  box-sizing:border-box;
  @media (max-width: 768px) {
    width: 100%;
    // padding: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

 export const Wrapper = styled.div`
  background-color: white;
  width: 95%;
//   max-width: 1200px;
  padding: 20px;
  border-radius: 10px;
`;

export const BalanceCard = styled.div`
  background-color: #0b3c68;
  color: white;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const BalanceInfo = styled.div`
  display: flex;
//   align-items: center;
  gap: 15px;
`;

export const BalanceIcon = styled.div`
  background-color: #d4f4a6;
  padding: 13px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:60px;

  svg {
    font-size: 30px;
    color: #0b3c68;
  }
`;

export const BalanceText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items: start;

  span {
    font-size: 23px;
    font-weight: bold;
  }

  h2 {
    font-size: 40px;
    margin: 0;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
`;

export const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  width: 100px;

  svg {
    font-size: 90px;
    color: #0b3c68;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;

 const Divider = styled.div`
  background-color: #0b3c68;
  height: 5px;
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
`;

 const TransactionsContainer = styled.div`
  margin-top: 20px;
`;

const TransactionsTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: black;
  text-align:left;
`;

const TransactionCard = styled.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  gap: 15px;
  font-size: 18px;
  margin-top: 10px;
`;

const StatusIcon = styled.div`
  background-color:rgb(103, 156, 29);
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
    color:rgb(6, 27, 46);
  }
`;

const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content:start;
  align-items:start;

  span {
    font-weight: bold;
    color: green;
    font-size: 35px;
  }

  p {
    margin: 5px 0;
  }
`;

const Wallet = () => {
    const { profile } = useProfile();
  return (
    <MainContainer>
      <DashboardNavbar />
      <Container>
        <Wrapper>
          {/* Balance Section */}
          <BalanceCard>
            <BalanceInfo>
              <BalanceIcon>
                <FaWallet />
              </BalanceIcon>
              <BalanceText>
                <span>Balance</span>
                <h2> {profile.walletBalance}</h2>
              </BalanceText>
            </BalanceInfo>
          </BalanceCard>

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
              <FaPhone />
              <p>Call</p>
            </ActionCard>
          </ActionContainer>

          {/* Divider */}
          <Divider />

          {/* Transactions Section */}
          <TransactionsContainer>
            <TransactionsTitle>Transactions</TransactionsTitle>
            <TransactionCard>
              <StatusIcon>
                <FaArrowDown />
              </StatusIcon>
              <TransactionInfo>
                <span>success</span>
                <p>Points: {profile.walletBalance}</p>
                <p>07 February, 2025</p>
              </TransactionInfo>
            </TransactionCard>
          </TransactionsContainer>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default Wallet;
