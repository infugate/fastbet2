import React from 'react'
import BalanceDashboard from './Components/BalanceDashboard'
import DashboardNavbar from '../Components/Navbar'
import BidsDashboard from './Components/BidsDashboard'
import { Footer, TermsAndPolicy } from '../ReedeemPoints/ReedeemPoints'


const BidHistory = () => {
    
    return (
            <div>
                <DashboardNavbar />
                <BalanceDashboard />
                <BidsDashboard />
                <Footer>
                    Copyright © 2024 - 2025 Shri Matka | All rights reserved.
                    <TermsAndPolicy>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </TermsAndPolicy>
                </Footer>
            </div>

    )
}

export default BidHistory