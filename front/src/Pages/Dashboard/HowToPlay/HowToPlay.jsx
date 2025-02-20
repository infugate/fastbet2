import React from 'react';
import styled from 'styled-components';
import DashboardNavbar from '../Components/Navbar';
import downloadApp from '../../../assets/howToPlay/downloadApp.png';
import signup from '../../../assets/howToPlay/signup.png';
import login from '../../../assets/howToPlay/login.png';
import addpoints from '../../../assets/howToPlay/addpoints.png';
import addpoints2 from '../../../assets/howToPlay/addPoint2.png';
import startplaying from '../../../assets/howToPlay/startPlaying.png';
import selectbid from '../../../assets/howToPlay/selectbid.png';
import lastSelect from '../../../assets/howToPlay/lastSelectbid.png';
import { MainContainer } from '../Wallet';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../../../context/ProfileContext';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
  // background-color:red;
`;

const Image = styled.img`
  width: 100%;
  margin: 10px auto;
`;

export const HowToPlay = () => {
  // const navigate = useNavigate();
  // const { profile } = useProfile();
  return (
      <MainContainer>
        <DashboardNavbar />
        <Container>
          <Image src={downloadApp} alt="Download App" />
          <Image src={signup} alt="Sign Up" />
          <Image src={login} alt="Login" />
          <Image src={addpoints} alt="Add Points" />
          <Image src={addpoints2} alt="Add Points Step 2" />
          <Image src={startplaying} alt="Start Playing" />
          <Image src={selectbid} alt="Select Bid" />
          <Image src={lastSelect} alt="Last Select Bid" />
        </Container>
      </MainContainer>

  );
};

export default HowToPlay;
