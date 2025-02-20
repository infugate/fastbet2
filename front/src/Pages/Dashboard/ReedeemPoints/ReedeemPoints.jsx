import React from 'react'
import DashboardNavbar from '../Components/Navbar'
import { BalanceCard, BalanceIcon, BalanceInfo, BalanceText, Container, MainContainer, Wrapper } from '../Wallet'
import { FaWallet } from 'react-icons/fa'
import styled from 'styled-components'
import MiddlePointData from './MiddlePointData'
import { useProfile } from '../../../context/ProfileContext'
// import { useNavigate } from 'react-router-dom'
export const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  color: white;
  font-size: 14px;
`;

export const TermsAndPolicy = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Reedeempoints = () => {
    const { profile } = useProfile();
    // const navigate = useNavigate()
    return (
            <MainContainer>
                <DashboardNavbar />
                <Container>
                    <Wrapper>
                        <BalanceCard>
                            <BalanceInfo>
                                <BalanceIcon>
                                    <FaWallet />
                                </BalanceIcon>
                                <BalanceText>
                                    <span>Balance</span>
                                    <h2>{profile.walletBalance}</h2>
                                </BalanceText>
                            </BalanceInfo>
                        </BalanceCard>
                    </Wrapper>
                </Container>
                <MiddlePointData />
                <Footer>
                    Copyright © 2024 - 2025 98Fastbet | All rights reserved.
                    <TermsAndPolicy>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </TermsAndPolicy>
                </Footer>
            </MainContainer>

    )
}

export default Reedeempoints