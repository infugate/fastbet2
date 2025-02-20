import React from 'react'
import DashboardNavbar from '../Components/Navbar'
import GaliDeasawerRates from './Components/GaliDeasawerRates'
import MainGameRates from './Components/MainGameRate'

const GameRate = () => {
  return (
    <div>
        <DashboardNavbar/>
        <MainGameRates/>
        <GaliDeasawerRates/>
        
    </div>
  )
}

export default GameRate