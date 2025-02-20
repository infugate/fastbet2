


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useProfile } from "../../../../context/ProfileContext";


const ChoosePlayerCards = () => {
  const [cards, setCards] = useState([]); // Stores 3 cards
  const [allPlayers, setAllPlayers] = useState([]); // Stores player options
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [modalPlayers, setModalPlayers] = useState({ player1: "", player2: "" });
  const { profile } = useProfile();
  const [winner, setWinner] = useState({})
  const [betModal, setBetModal] = useState({ isOpen: false, cardId: null });
  const [betAmount, setBetAmount] = useState(10); // Default bet amount
  const [betCard, setBetCard] = useState([{ cardId: null, betAmount: 0 }]);
  const [price, setPrice] = useState(null); // New Feature: Selected Price
  const [points, setPoints] = useState(null);
  const [profit, setProfit] = useState(null);
  const betArray = [{
    pointsTobebet: 100,
    profit: 200
  },
  {
    pointsTobebet: 200,
    profit: 400
  },
  {
    pointsTobebet: 300,
    profit: 600
  },
  {
    pointsTobebet: 400,
    profit: 800
  },
  {
    pointsTobebet: 500,
    profit: 1000
  },
  ]
  // const [selectedPlayers, setSelectedPlayers] = useState(new Set());
  const openBetModal = (cardId) => {
    setBetModal({ isOpen: true, cardId });
  };
  // const getSelectedPlayers = () => selectedPlayers;
  const fetchCards = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/cards`)
      .then(response => setCards(response.data.slice(0, 3))) // Ensure only 3 cards
      .catch(error => console.error("Error fetching cards:", error));

  }
  useEffect(() => {
    fetchCards();
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/players`)
      .then(response => setAllPlayers(response.data))
      .catch(error => console.error("Error fetching players:", error));
  }, []);

  const openModal = (index) => {
    // if(cards[index]?.cards[0]?.betPoints){
    setSelectedCardIndex(index);
    setModalPlayers({ player1: cards[index]?.cards[0]?.player1 || "", player2: cards[index]?.cards[0]?.player2 || "" });
    // }else{
    //   alert("please Select bet Points first")
    // }
  };

  const closeModal = () => {
    setSelectedCardIndex(null);
  };
  console.log(winner)
  const handleSubmit = async () => {
    if (!modalPlayers.player1 || !modalPlayers.player2) {
      toast.error("Please select both players before submitting.");
      return;
    }
  
    const player1Data = allPlayers.find(player => player.playerName === modalPlayers.player1);
    const player2Data = allPlayers.find(player => player.playerName === modalPlayers.player2);
  
    if (!player1Data || !player2Data) {
      toast.error("Error: Player data not found.");
      return;
    }
  
    const totalRuns = player1Data.score + player2Data.score;
  
    if (selectedCardIndex === null || selectedCardIndex >= cards.length || !cards[selectedCardIndex]) {
      toast.error("No valid card selected.");
      return;
    }
  
    const cardId = cards[selectedCardIndex]?._id;
    if (!cardId) {
      console.error("❌ Invalid cardId:", cardId);
      toast.error("Error: Invalid card selection.");
      return;
    }
  
    // Subtract bet points from wallet
    const newWalletBalance = profile.wallet - points;
    if (newWalletBalance < 0) {
      toast.error("Insufficient balance!");
      return;
    }
  
    axios.put(`${process.env.REACT_APP_BASE_URL}/api/cards/select/${cardId}`, {
      player1: modalPlayers.player1,
      player2: modalPlayers.player2,
      user: profile,
      totalRuns: totalRuns,
      profit: profit,
      points: points,
      newWalletBalance
    })
      .then(() => {
        // Update the wallet balance in frontend state
        profile.wallet = newWalletBalance;
        toast.success("Players selected and bet placed successfully!");
  
        // ✅ API Call to Update Wallet Balance in Database
        axios.put(`${process.env.REACT_APP_BASE_URL}/api/users/updateWallet`, {
          email: profile.email,
          wallet: newWalletBalance
        })
          .catch(error => console.error("Error updating wallet:", error));
  
        fetchCards();
        closeModal();
      })
      .catch(error => {
        console.error(error);
        toast.error("You Already Selected This Card");
      });
  };
  

  const handleBetSelection = (e) => {
    const selectedPoints = Number(e.target.value);
    setBetAmount(selectedPoints);

    // ✅ Find the selected bet in betArray
    const selectedBet = betArray.find(bet => bet.pointsTobebet === selectedPoints);

    if (selectedBet) {
      setPoints(selectedBet.pointsTobebet);
      setProfit(selectedBet.profit);
    }
  };

  // console.log(profit, points)
  useEffect(() => {
    if (cards.length === 3) {
      const allCardsFilled = cards.every(card => card.cards[0]?.totalRuns);
      if (allCardsFilled) {
        handlePlay();
      }
    }
  },[]);

  // const displayResult = () => {
  //   if (cards.length === 0) {
  //     toast.error("No cards available to determine the winner.");
  //     return;
  //   }

  //   let winningCard = cards.reduce((maxCard, card) => {
  //     let currentCardTotal = card.cards[0]?.totalRuns || 0;
  //     return currentCardTotal > (maxCard.cards[0]?.totalRuns || 0) ? card : maxCard;
  //   }, cards[0]);
  // console.log(winningCard)
  //   if (!winningCard || !winningCard._id) {
  //     toast.error("No valid winning card found.");
  //     return;
  //   }

  //   if (winningCard.cards[0]?.totalRuns > 0) {
  //     toast.success(
  //       `🏆 Winning Card!\n 
  //       Player 1: ${winningCard.cards[0]?.player1 || "N/A"}\n 
  //       Player 2: ${winningCard.cards[0]?.player2 || "N/A"}\n 
  //       Total Runs: ${winningCard.cards[0]?.totalRuns}`
  //     );

  //     // ✅ API call to update isWinner
  //     axios.put(`http://localhost:4000/api/cards/winner/${winningCard._id}` )
  //       .then(response => {
  //         // if()
  //         toast.success("🏆 Winning card updated in the database!");
  //         fetchCards(); // ✅ Refresh cards after updating the winner
  //       })
  //       .catch(error => {
  //         console.error("❌ Error updating winning card:", error);
  //         toast.error("Failed to update the winning card.");
  //       });
  //   } else {
  //     toast.info("No card has a valid total runs score yet.");
  //   }
  // };



  // const handleReset = () => {
  //   axios.delete("http://localhost:4000/api/cards/reset")
  //     .then(response => {
  //       if (response.status === 200) {
  //         toast.success("Cards reset successfully!");
  //         fetchCards();
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       toast.error("Failed to reset cards");
  //     });
  // };

  const handlePlay = async () => {
    if (cards.length === 0) {
      toast.error("No cards available to play.");
      return;
    }
  
    let winningCard = cards.reduce((maxCard, card) => {
      let currentCardTotal = card.cards[0]?.totalRuns || 0;
      return currentCardTotal > (maxCard.cards[0]?.totalRuns || 0) ? card : maxCard;
    }, cards[0]);
  
    if (!winningCard || !winningCard._id) {
      toast.error("No valid winning card found.");
      return;
    }
  
    console.log(winningCard, "win");
  
    if (winningCard.cards[0]?.totalRuns > 0) {
      toast.success(
        `🏆 Winning Card!\n 
        Player 1: ${winningCard.cards[0]?.player1 || "N/A"}\n 
        Player 2: ${winningCard.cards[0]?.player2 || "N/A"}\n 
        Total Runs: ${winningCard.cards[0]?.totalRuns}`,
        {
          autoClose: 60000,
        }
      );
  
      // ✅ API call to update isWinner
      axios.put(`${process.env.REACT_APP_BASE_URL}/api/cards/winner/${winningCard.cards[0]._id}`)
        .then(() => {
          toast.success("🏆 Winning card updated in the database!");
  
          // ✅ If the user placed a bet, add their winnings to their wallet
          const winnings = profit; // The selected profit value
          const newWalletBalance = profile.wallet + winnings;
  
          axios.put(`${process.env.REACT_APP_BASE_URL}/api/users/updateWallet`, {
            email: profile.email,
            wallet: newWalletBalance
          })
            .then(() => {
              profile.wallet = newWalletBalance;
              toast.success(`🎉 You won ${winnings} points!`);
            })
            .catch(error => console.error("Error updating wallet:", error));
  
          fetchCards();
        })
        .catch(error => {
          console.error("❌ Error updating winning card:", error);
          toast.error("Failed to update the winning card.");
        });
    } else {
      toast.info("No card has a valid total runs score yet.");
    }
  };
  
 

  const getSelectedPlayers = () => {
    const selected = new Set();
    cards.forEach(card => {
      card.cards.forEach(subCard => {
        if (subCard.player1) selected.add(subCard.player1);
        if (subCard.player2) selected.add(subCard.player2);
      });
    });
    return selected;
  };

  return (
    <SectionWrapper>
      {/* <Title>Choose Players for 3 Cards</Title> */}
      {/* <h2>Select a Price Before Playing:</h2>
      <PriceSelectionWrapper>
        {[10, 20, 40, 50].map(amount => (
          <PriceButton key={amount} onClick={() => handlePriceSelection(amount)}>
            {amount} Points
          </PriceButton>
        ))}
      </PriceSelectionWrapper> */}
      <p>
        <strong style={{ fontSize: "30px" }}>🏆</strong>{" "}
        {cards.length > 0 && cards.some(card => card.cards[0]?.isWinner) ? (
          <span style={{ fontSize: "20px" }}>
            {cards
              .filter(card => card.cards[0]?.isWinner)
              .map(winner => (
                <span key={winner._id}>
                  {winner.cards[0].player1} + {winner.cards[0].player2} ={" "}
                  <strong>{winner.cards[0].totalRuns}</strong>
                </span>
              ))}
          </span>
        ) : (
          <span>No Winner Yet!</span>
        )}
      </p>

      <Title>Aar Par Parchi</Title>
      <CardsWrapper>
        {cards.map((card, index) => {
          const isWinner = card.cards[0]?.isWinner;
          return (
            <MainCardContainer>
              <PlayerCard
                key={card._id}
                selected={card.cards[0]?.player1 && card.cards[0]?.player2}
                onClick={() => openModal(index)}
                style={{ backgroundColor: isWinner ? "#ffeb3b" : undefined }} // Highlight winner card
              >
                <p>Card {index + 1}</p>
                <p>Player 1: {card.cards[0]?.player1 || "Not Selected"}</p>
                <p>Player 2: {card.cards[0]?.player2 || "Not Selected"}</p>
                <p>Total Runs: {card.cards[0]?.totalRuns !== undefined ? card.cards[0]?.totalRuns : "0"}</p>
                {/* <p>People Played: {card.cards[0]?.cardUser !== undefined ? card.cards[0]?.cardUser.length : "0"}</p> */}
                
                <p>People Played: {card.users !== undefined ? card.users.length : "0"}</p>
                
                {/* {betCard.points} */}
                {/* <p>Bets: {betCard.cardId == card._id && betCard.points}</p> */}
              </PlayerCard>
              {/* <BetPoint> */}
              {/* <strong>Bets:</strong> <p>{betCard.cardId == card._id && betCard.points}  </p>  */}
              {/* </BetPoint> */}

              {/* {betCard.length >0 && betCard
                .filter(bet => bet.cardId === card._id)
                .map((bet, index) => (
                  <div key={index}>
                    <strong>Bets:</strong>
                    <ul>
                      {bet.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))} */}

              <Button onClick={() => openModal(index)} >Play</Button>
            </MainCardContainer>

          );
        })}
      </CardsWrapper>
      {/* <Button onClick={() => handlePlay()} >Play All</Button> */}

      {/* {betModal.isOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <h3>Place Your Bet</h3>
            <Select value={betAmount} onChange={(e) => setBetAmount(Number(e.target.value))}>
              <option value={10}>10 Points</option>
              <option value={20}>20 Points</option>
              <option value={40}>40 Points</option>
              <option value={50}>50 Points</option>
            </Select>
            <div style={{ marginTop: "20px" }}>
              <Button onClick={handlePlaceBet}>Submit Bet</Button>
              <Button onClick={() => setBetModal({ isOpen: false, cardId: null })} color="gray">Cancel</Button>
            </div>
          </div>
        </div>
      )} */}
      {selectedCardIndex !== null && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "10px", textAlign: "center", color: "black", textAlign: "left" }}>
            <h3 style={{ marginBottom: "2px" }}>Place Your Bet</h3>
            <Select value={betAmount} onChange={handleBetSelection}>
              {betArray.map(point => (
                <option key={point.pointsTobebet} value={point.pointsTobebet}>
                  {point.pointsTobebet} Points
                </option>
              ))}
            </Select>
            <h3 style={{ marginBottom: "2px" }}>Select Players</h3>
            <Select
              value={modalPlayers.player1}
              onChange={(e) => setModalPlayers({ ...modalPlayers, player1: e.target.value })}
              disabled={!!modalPlayers.player1 || getSelectedPlayers().has(modalPlayers.player2)} // Disable if player1 is already set
            >
              <option value="">Select Player</option>
              {allPlayers.map(player => (
                <option
                  key={player.playerName}
                  value={player.playerName}
                  disabled={getSelectedPlayers().has(player.playerName) || modalPlayers.player2 === player.playerName}
                >
                  {player.playerName}
                </option>
              ))}
            </Select>

            <Select
              value={modalPlayers.player2}
              onChange={(e) => setModalPlayers({ ...modalPlayers, player2: e.target.value })}
              disabled={!!modalPlayers.player2 || getSelectedPlayers().has(modalPlayers.player1)} // Disable if player2 is already set
            >
              <option value="">Select Player</option>
              {allPlayers.map(player => (
                <option
                  key={player.playerName}
                  value={player.playerName}
                  disabled={getSelectedPlayers().has(player.playerName) || modalPlayers.player1 === player.playerName}
                >
                  {player.playerName}
                </option>
              ))}
            </Select>
            <div style={{ marginTop: "20px" }}>
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={closeModal} color="gray" hoverColor="lightgray">Cancel</Button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </SectionWrapper>
  );
};

export default ChoosePlayerCards;

const SectionWrapper = styled.section`
  color: #fff;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  @media (min-width: 768px) {
    height: 95vh;
  }
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  background: linear-gradient(to right,rgb(225, 165, 104),rgb(203, 42, 123));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.5));
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
const MainCardContainer = styled.div`
width:auto;
height:auto;
`
const PlayerCard = styled.div`
  background-color: ${({ selected }) => (selected ? "#4caf50" : "#c4c4c4")};
  width: 260px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
`;

const Button = styled.button`
  background-color: ${({ color }) => color || "#4caf50"};
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#45a049"};
  }
`;

const Select = styled.select`
  margin-top: 6px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  cursor: pointer;
  width: 90%;
`;

// const BetPoint = styled.div`
//   // background-color: #4caf50;
//   width: 260px;
//   height: 30px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 1rem;
//   font-weight: bold;
//   color: black;
//   // padding: 15px;
//   text-align: center;
//   cursor: pointer;
//   transition: 0.3s;
// `;

const PriceSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const PriceButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #ff9800;
  color: white;
`;