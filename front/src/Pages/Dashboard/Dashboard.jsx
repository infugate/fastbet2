
import React ,{useState} from "react";
import DashboardNavbar from "./Components/Navbar";
import DashboardCards from "./Components/DashboardCards";
import styled from "styled-components";
import ChooseGame from "./Components/ChooseGame";
import VirtualAccountDetails from "./AddPointForm/AddPointForm";
const Dashboard = () => {
  const [addPointPopUp, setAddPointPopUp] = useState(false);
  return (
    <div>
      <DashboardNavbar />
      <ChooseGame />
      <DashboardCards setAddPointPopUp={setAddPointPopUp} />
      <FooterText>
        Copyright ©  {new Date().getFullYear()} 98Fastbet | All rights reserved.
      </FooterText>
      <TermsAndPolicy>
        <p>Terms</p>
        <p>and</p>
        <p>Policy</p>
      </TermsAndPolicy>
      {addPointPopUp && (
        <ModalOverlay onClick={() => setAddPointPopUp(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setAddPointPopUp(false)}>✖</CloseButton>
            <VirtualAccountDetails />
          </ModalContent>
        </ModalOverlay>
      )}
      {addPointPopUp && (
        setTimeout(() => setAddPointPopUp(false), 30000)
      )}

    </div>
  );

};
export const FooterText = styled.div`
  font-size: 0.9rem;
  padding: 10px 0;
  color: #ddd;
  text-align: center;
`;

const TermsAndPolicy = styled.div`
  font-size: 0.9rem;
  padding: 20px 0;
  background: rgb(140, 131, 131);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    margin: 0;
    cursor: pointer;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent dark overlay */
  backdrop-filter: blur(10px); /* Blur effect */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-sizing:border-box;
`;


const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  opacity: 1;
  position: relative;
  z-index: 2000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export default Dashboard;