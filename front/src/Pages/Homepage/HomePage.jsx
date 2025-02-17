import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArticlesCards from './Component/Articles'
// import SattaResults from './Component/Result'
// import GameRates from './Component/GameRates'
// import AboutMatkaApp from './Component/AboutMatkaApp'
// import HowToUseSection from './Component/HowToUse'
import Banner from './Component/Banner'
// import TimeTable from './Component/TimeTable'
import {Navbar} from './Component/Navbar'
const DownloadButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: ${(props) => (props.visible ? '50px' : '-900px')}; 
  background: #b2f7a5;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 4rem;
  border-radius: 20px;
  border: none;
  z-index: 100;
  transition: all 0.5s ease; /* Smooth transition for button's movement */

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
    width: 90%;
    margin:auto;
    bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 1rem 1.5rem;
    width: 95%;
    bottom: 10px;
  }
`;

const HomePage = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            setVisible(true); // Show button after scrolling 200px
        } else {
            setVisible(false); // Hide button when scrolled back to top
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Banner />
            <ArticlesCards />
            {/* <SattaResults />
            <TimeTable /> */}
            {/* <GameRates />
            <AboutMatkaApp />
            <HowToUseSection/> */}
            <DownloadButton visible={visible}>
                Download App
            </DownloadButton>
        </div>
    );
};

export default HomePage;
