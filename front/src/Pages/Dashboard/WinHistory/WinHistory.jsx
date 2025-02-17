import React from 'react'
import BalanceDashboard from './Components/BalanceDashboard'
import WinDashboard from './Components/WinDashboard'
import { Footer, TermsAndPolicy } from '../ReedeemPoints/ReedeemPoints'
import DashboardNavbar from '../Components/Navbar'
// import { useNavigate } from 'react-router-dom'
// import { useProfile } from '../../../context/ProfileContext'

const WinHistory = () => {
    // const { profile } = useProfile();
    // const navigate = useNavigate()
    return (
            <div>
                <DashboardNavbar />
                <BalanceDashboard />
                <WinDashboard />
                <Footer>
                    Copyright © 2024 - 2025 98Fastbet| All rights reserved.
                    <TermsAndPolicy>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </TermsAndPolicy>
                </Footer>
            </div>
    )
}

export default WinHistory