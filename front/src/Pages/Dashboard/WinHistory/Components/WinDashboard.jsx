// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   background-color: #0b3c68;
//   display: flex;
//   justify-content: center;
//   padding: 20px;
//   box-sizing: border-box;
// `;

// const Wrapper = styled.div`
//   background-color: white;
//   width: 100%;
//   padding: 20px;
//   border-radius: 20px;
// `;

// const Title = styled.h1`
//   font-size: 40px;
//   font-weight: bold;
//   color: black;
//   text-align: left;

//   @media (max-width: 768px) {
//     font-size: 32px;
//     text-align: center;
//   }
// `;

// const MessageBox = styled.div`
//   background-color: #e0e0e5;
//   padding: 15px;
//   border-radius: 10px;
//   text-align: center;
//   font-size: 16px;
//   color: black;
//   font-weight: bold;
//   margin-top: 15px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 10px;
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
// `;

// const Th = styled.th`
//   background-color: #0b3c68;
//   color: white;
//   padding: 10px;
//   text-align: left;
// `;

// const Td = styled.td`
//   padding: 10px;
//   border-bottom: 1px solid #ddd;
// `;



// const WinDashboard = () => {
//   const bidData =[
//     { number: 1, points: 50 },
//     { number: 5, points: 30 },
//     { number: 5, points: 30 },
//   ];


//   return (
//     <Container>
//       <Wrapper>
//         <Title>Your Winning Bids</Title>
//         {bidData.length > 0 ? (
//           <Table>
//             <thead>
//               <tr>
//                 <Th>Number</Th>
//                 <Th>Points</Th>
//               </tr>
//             </thead>
//             <tbody>
//               {bidData.map((bid, index) => (
//                 <tr key={index}>
//                   <Td>{bid.number}</Td>
//                   <Td>{bid.points}</Td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         ) : (
//           <MessageBox>You do not have any bid.</MessageBox>
//         )}
//       </Wrapper>
//     </Container>
//   );
// };

// export default WinDashboard;


import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'

const WinDashboard = () => {
  const [activeTab, setActiveTab] = useState("bids");
  const [userData, setUserData] = useState(null);
  const [myBets, setMyBets] = useState([]);
  // Sample bid data
  const bidData = [
    { id: 1, game: "Game A",number:2, points: 50, date: "2025-02-10" },
    { id: 2, game: "Game B",number:5, points: 75, date: "2025-02-09" },
  ];






 //fatch all user bets 
 useEffect(() => {
  const user = localStorage.getItem('user');
  if (user) {
    setUserData(JSON.parse(user));
  } else {
    alert("User is not logged in. Please log in to view your bets.");
  }
}, []);

// Fetch user's bets from the backend based on userId
const fetchBets = async () => {
  if (userData) {
    try {
      const userId = userData.id; 
      // console.log(userId);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/bets/${userId}`); 
      if (response.data.success) {
        setMyBets(response.data.bets); 
      } else {
        alert("Failed to fetch bets");
      }
    } catch (err) {
      console.error('Error fetching bets:', err);
      alert("There was an error fetching bets.");
    }
  }
};
useEffect(() => {
  if (userData) {
    fetchBets();
  }
}, [userData]);


// console.log(myBets);





return (
  <Container>
    <Wrapper>
      {/* Tabs */}
      <TabContainer>
        <Tab first active={activeTab === "bids"} onClick={() => setActiveTab("bids")}>
          Bids
        </Tab>
        <Tab last active={activeTab === "gali-bids"} onClick={() => setActiveTab("gali-bids")}>
          Gali Bids
        </Tab>
      </TabContainer>

      {/* Content */}
      <Title>Your Bids</Title>
      {myBets.length > 0 ? (
  <TableContainer>
    <Table>
      <thead>
        <tr>
          <Th>Market Name</Th>
          <Th>Totals Points</Th>
          <Th>Number and Points</Th>
          <Th>Date & Time</Th>
        </tr>
      </thead>
      <tbody>
        {myBets.map((bid) => (
          <tr key={bid._id}>
            <Td>{bid.gameName}</Td>
            <Td>{bid.totalBidPoints}</Td>
            <Td>
              {bid.bids.map((b, index) => (
                <div key={index}>{b.number} Points on {b.points}</div>
              ))}
            </Td>
            <Td>{new Date(bid.createdAt).toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableContainer>
) : (
  <MessageBox>You do not have any bid.</MessageBox>
)}

    </Wrapper>
  </Container>
);

};





const Container = styled.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 20px;
   max-height: 300px; /* Adjust height to fit 7 rows */
  overflow-y: auto;
  border: 1px solid #ddd;
`;


const Tab = styled.button`
  flex: 1;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: ${({ active }) => (active ? "#0b3c68" : "gray")};
  border-radius: ${({ first, last }) =>
    first ? "30px 0 0 30px" : last ? "0 30px 30px 0" : "0"};

  &:hover {
    background-color: ${({ active }) => (active ? "#0b3c68" : "#888")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const MessageBox = styled.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
// `;

// const Th = styled.th`
//   background-color: #0b3c68;
//   color: white;
//   padding: 10px;
//   text-align: center; /* Center align text */
//   border-radius: 5px;
// `;

// const Td = styled.td`
//   border: 1px solid #ddd;
//   padding: 10px;
//   text-align: center; /* Center align text */
// `;

const TableContainer = styled.div`
  max-height: 500px; /* Adjust height to fit 7 rows */
  overflow-y: auto;
  border: 1px solid #ddd;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #0b3c68;
  color: white;
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;


export default WinDashboard;