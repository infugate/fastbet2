import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const History = ({titlibets}) => {
//     const [titlibets, setTitlibets] = useState([]) 
//       const [userData, setUserData] = useState(null);
//      //fatch all user bets 
//      useEffect(() => {
//       const user = localStorage.getItem('user');
//       if (user) {
//         setUserData(JSON.parse(user));
//       } else {
//         alert("User is not logged in. Please log in to view your bets.");
//       }
//     }, []); 

//     // Fetch user's bets from the backend based on userId
// const fetchBets = async () => {
//     if (userData) {
//       try {
//         const userId = userData.id; 
        
//         const pappuBetsResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/pappu/bets/${userId}`); 
//         if (pappuBetsResponse.data.success) {
//           console.log(pappuBetsResponse.data)
//           setTitlibets(pappuBetsResponse.data.bets    );
//         } else {
//           alert("Failed to fetch user bets");
//         }
  
//       } catch (err) {
//         console.error('Error fetching bets:', err);
//         alert("There was an error fetching bets.");
//       }
//     }
//   };
//   useEffect(() => {
//     if (userData) {
//       fetchBets();
//     }
//   }, [userData]);



  return (
    <Container>
    <Wrapper>
      {/* Tabs */}
      {/* <TabContainer>
        <Tab first active={activeTab === "bids"} onClick={() => setActiveTab("bids")}>
          Bids
        </Tab>
        <Tab last active={activeTab === "gali-bids"} onClick={() => setActiveTab("gali-bids")}>
          Gali Bids
        </Tab>
      </TabContainer> */}

      {/* Content */}
      <Title>Game History</Title>
      {titlibets.length > 0 ? (
  <TableContainer>
    <Table>
      <thead>
        <tr>
          <Th>Bet Amout</Th>
          <Th>Total Bet</Th>
          <Th>Is Win</Th>
          <Th>Profit</Th>
          <Th>Date & Time</Th>
        </tr>
      </thead>
      <tbody>
        {titlibets.map((bet) => (
          <tr key={bet._id}>
            <Td>{bet.betAmount}</Td>
            <Td>{bet.totalBets}</Td>
            <Td>{bet.isWin ? "Win" : "Loss"}</Td>
            <Td>
            {bet.profit}
            </Td>
            <Td>{new Date(bet.createdAt).toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableContainer>
) : (
  <MessageBox>You do not have any bet.</MessageBox>
)}
    </Wrapper>
  </Container>
  )
}

export default History


const Container = styled.div`
  width: 100%;
//   background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
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
  font-size: 20px;
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

  @media (max-width: 768px) {
    max-height: 300px;
    width:100%;
  }
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
//   @media (min-width: 769px) {
    position: sticky;
    top: 0px;
    z-index: 1;
//   }

`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-size:13px;
`;