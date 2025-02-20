import React from 'react'
import DashboardNavbar from '../Components/Navbar'
import PlayGames from '../Components/PlayGames'
import styled from "styled-components";
import { TermsAndPolicy } from '../ReedeemPoints/ReedeemPoints'
// import { FooterText } from '../Dashboard'


const Matka = () => {
    
    return (
        <FooterText>
            {/* <div> */}
                <DashboardNavbar />
                <PlayGames />
                <FooterText>
                    Copyright © 2025 - {new Date().getFullYear()} 98Fastbet | All rights reserved.
                </FooterText>
                <TermsAndPolicy>
                    <p>Terms</p>
                    <p>Policy</p>
                </TermsAndPolicy>
            </FooterText>
        // </div >
    )
}

const FooterText = styled.div`
  font-size: 0.9rem;
  padding: 10px 0;
  color: #ddd;
  text-align: center;
`;

export default Matka