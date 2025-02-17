import React from 'react'
import DashboardNavbar from '../Components/Navbar'
import ChoosePlayerCards from './Components/Cards'
// import { useNavigate } from 'react-router-dom'
// import { useProfile } from '../../../context/ProfileContext'
import Scorcard from './Scorcard';
const Cricket = () => {
  // const navigate = useNavigate();
  // const { profile } = useProfile();
  return (
      <div>
        <DashboardNavbar />
        <Scorcard/>
        <ChoosePlayerCards />
      </div>

  )
}

export default Cricket