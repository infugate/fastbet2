// import React, { useState } from "react";
// import DashboardNavbar from "./Components/Navbar";
// import DashboardCards from "./Components/DashboardCards";
// import PlayGames from "./Components/PlayGames";
// import styled from "styled-components";
// import GaliDesawar from "./Components/GaliDesawar";
// import ChooseGame from "./Components/ChooseGame";
// const Dashboard = () => {
//   const [toggleGames, setToggleGames] = useState(true);

//   return (
//     <div>
//       <DashboardNavbar />
//       <ChooseGame />
//       <DashboardCards setToggleGames={setToggleGames} toggleGames={toggleGames} />
//       {toggleGames ? <PlayGames /> : <GaliDesawar />}
//       <FooterText>
//         Copyright © 2025 - {new Date().getFullYear()} 98Fastbet | All rights reserved.
//       </FooterText>
//       <TermsAndPolicy>
//         <p>Terms</p>
//         <p>Policy</p>
//       </TermsAndPolicy>
//     </div>
//   );

// };
// const FooterText = styled.div`
//   font-size: 0.9rem;
//   padding: 10px 0;
//   color: #ddd;
//   text-align: center;
// `;

// const TermsAndPolicy = styled.div`
//   font-size: 0.9rem;
//   padding: 20px 0;
//   background: rgb(140, 131, 131);
//   font-weight: bold;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;

//   p {
//     margin: 0;
//     cursor: pointer;
//   }
// `;

// export default Dashboard;



import React from "react";
import DashboardNavbar from "./Components/Navbar";
import DashboardCards from "./Components/DashboardCards";
import styled from "styled-components";
import ChooseGame from "./Components/ChooseGame";
const Dashboard = () => {

  return (
    <div>
      <DashboardNavbar />
      <ChooseGame />
      <DashboardCards />
      <FooterText>
        Copyright ©  {new Date().getFullYear()} 98Fastbet | All rights reserved.
      </FooterText>
      <TermsAndPolicy>
        <p>Terms</p>
        <p>and</p>
        <p>Policy</p>
      </TermsAndPolicy>
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

export default Dashboard;