import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./Card";
import AllImages from "./AllImages";
import Swal from "sweetalert2";
import "./Papu.css";
import styled from "styled-components";
// import { toast } from "react-toastify";
import { useProfile } from "../../../context/ProfileContext";
import { toast, ToastContainer } from "react-toastify";
import History from "./History";
// import coin from '../../src/assets/brand/logo.png'

const images = [
  "butterfly.jpg",
  "cow.jpg",
  "football.jpg",
  "spin.jpg",
  "flower.webp",
  "diya.webp",
  "bucket.jpg",
  "kite.webp",
  "rat.webp",
  "umberlla.jpg",
  "parrot.webp",
  "sun.webp"
];

const allWinningImages = [
  { image: "butterfly.jpg", winningPoints: 10 },
  { image: "cow.jpg", winningPoints: 10 },
  { image: "football.jpg", winningPoints: 10 },
  { image: "spin.jpg", winningPoints: 10 },
  { image: "kite.webp", winningPoints: 10 },
  { image: "rat.webp", winningPoints: 10 },
  { image: "umberlla.jpg", winningPoints: 10 },
  { image: "diya.webp", winningPoints: 10 },
  { image: "flower.webp", winningPoints: 10 },
  { image: "bucket.jpg", winningPoints: 10 },
  { image: "parrot.webp", winningPoints: 10 },
  { image: "sun.webp", winningPoints: 10 },
  // { image: coin, winningPoints: 10 }
];

const Papu = () => {
  const { profile } = useProfile();
  const [winningPointOfUser, setWinningPointOfUser] = useState([]);
  const [highlightedImages, setHighlightedImages] = useState([]);
  const [cards, setCards] = useState([]);
  // const [betAmount, setBetAmount] = useState(10);
  // Initialize balance from the user's wallet balance (for example, 5902)
  const [balance, setBalance] = useState(profile.walletBalance);
  const [selectedImages, setSelectedImages] = useState([]);
  const [betPlaced, setBetPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [betCooldown, setBetCooldown] = useState(10);

  const betPlaceAmt = [
    { bet: 10, profit: 100 },
    { bet: 15, profit: 150 },
    { bet: 20, profit: 200 },
    { bet: 30, profit: 300 },
    { bet: 50, profit: 500 },
    { bet: 100, profit: 1000 },
    { bet: 150, profit: 1500 },
    { bet: 200, profit: 2000 },
    { bet: 350, profit: 3500 },
    { bet: 400, profit: 4000 },

  ];


  const [betAmount, setBetAmount] = useState(10);
  const [expectedProfit, setExpectedProfit] = useState(100);


  const [titlibets, setTitlibets] = useState([]) 
  const [userData, setUserData] = useState(null);
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
    
    const pappuBetsResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/pappu/bets/${userId}`); 
    if (pappuBetsResponse.data.success) {
      console.log(pappuBetsResponse.data)
      setTitlibets(pappuBetsResponse.data.bets    );
    } else {
      alert("Failed to fetch user bets");
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

  const handleBetChange = (e) => {
    const selectedBet = parseInt(e.target.value);
    setBetAmount(selectedBet);

    // Find profit for selected bet
    const selectedBetData = betPlaceAmt.find((item) => item.bet === selectedBet);
    if (selectedBetData) {
      setExpectedProfit(selectedBetData.profit);
    }
  };

  useEffect(() => {
    if (betCooldown > 0) {
      const timer = setInterval(() => {
        setBetCooldown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer
    }
  }, [betCooldown]);


  // const [isWin, setIsWin] = useState(false);
  useEffect(() => {
    if (profile && profile.walletBalance !== undefined) {
      setBalance(profile.walletBalance);
    }
  }, [profile]);
  const initializeGame = useCallback(() => {
    setCards(
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        scratched: false,
        revealedImage: null
      }))
    );
    setSelectedImages([]);
    setBetPlaced(false);
    setHighlightedImages([]);
    setWinningPointOfUser([]);
    setIsProcessing(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const showPremiumPopup = (config) => {
    return Swal.fire({
      ...config,
      customClass: {
        popup: `${config.gradient} p-1 rounded-2xl shadow-2xl`,
        container: "backdrop-blur-sm",
        title: "text-white",
        htmlContainer: "text-white"
      },
      background: "transparent",
      showConfirmButton: false,
      timer: config.timer
    });
  };

  const handlePlay = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    const totalBet = betAmount * selectedImages.length;
    // console.log("Total Bet:", totalBet);

    if (!betAmount) {
      toast.error("⚠️ Select Bet Amount!");

      // Swal.fire({
      //   title: "⚠️ Select Bet Amount!",
      //   text: "Please select a bet amount before placing a bet.",
      //   icon: "warning"
      // });
      setIsProcessing(false);
      return;
    }
    if (totalBet <= 0) {
      toast.error("Total bet must be greater than 0.");
      setIsProcessing(false);
      return;
    }

    if (!betPlaced) {
      if (selectedImages.length > 0 && balance < totalBet) {
        await showPremiumPopup({
          title: '<div class="text-4xl">⚠️</div>',
          html: `<div class="space-y-2 text-center text-white">
            <div class="text-xl font-bold">Insufficient Balance!</div>
            <div class="text-sm opacity-75">Need ₹${totalBet - balance} more</div>
          </div>`,
          gradient: "bg-gradient-to-br from-red-600 via-rose-500 to-pink-600",
          timer: 3000
        });
        setIsProcessing(false);
        return;
      }

      await showPremiumPopup({
        html: `
          <div style="text-align: center; color: white; padding: 1.5rem; background: linear-gradient(to bottom right, #16a34a, #34d399, #00bcd4); border-radius: 1rem;">
            <div style="font-size: 3rem; animation: bounce 1s infinite;">🎰</div>
            <div style="font-size: 1.25rem; font-weight: bold;">₹${totalBet} Bet Placed!</div>
            <div style="font-size: 0.875rem; opacity: 0.75;">Good Luck! 🍀</div>
          </div>
        `,
        gradient: "bg-gradient-to-br from-green-600 via-emerald-500 to-cyan-500",
        timer: 3000
      });

      // Deduct the bet amount immediately
      if (selectedImages.length > 0) {
        setBalance((prev) => prev - totalBet);
      }
      // setBetCooldown(10);
      setBetPlaced(true);
   

    }

    const nextCard = cards.find((card) => !card.scratched);
    if (!nextCard) {
      await showPremiumPopup({
        title: '<div style="font-size: 2.5rem;">🏁</div>',
        html: `
          <div style="text-align: center; color: white; padding: 1rem; background: linear-gradient(to bottom right, #7e3f98, #6366f1, #3b82f6); border-radius: 1rem;">
            <div style="font-size: 1.25rem; font-weight: bold;">Game Over!</div>
            <div style="font-size: 0.875rem; opacity: 0.75;">Final Balance: ₹${balance}</div>
          </div>
        `,
        gradient: "bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500"
      });
      initializeGame();
      setIsProcessing(false);
      // setBetCooldown(10);

      return;
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCards((prev) =>
      prev.map((c) =>
        c.id === nextCard.id ? { ...c, scratched: true, revealedImage: randomImage } : c
      )
    );

    setTimeout(async () => {
      const isMatch = selectedImages.includes(randomImage);
      let winnings = isMatch ? expectedProfit : 0;

      if (isMatch) {
        winnings = betAmount * 10;
        // Increase balance if win
        setBalance((prev) => prev + winnings);
        setHighlightedImages((prev) => [...new Set([...prev, randomImage])]);
        setWinningPointOfUser((prev) => [...prev, 10]);

        // Record win via API (profit positive)
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/bets`,
            {
              user: profile.userId,
              betAmount,
              profit: isMatch ? expectedProfit  : 0,
              totalBets: totalBet,
              isWin: isMatch
            }
          );
          if (response.data.newBalance) {
            setBalance(response.data.newBalance);
          }
          // setBetCooldown(10);
        } catch (error) {
          console.error("Error creating bet (win):", error);
        }
      } else {
        // Record loss via API (profit 0, balance remains decreased)
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/bets`,
            {
               user: profile.userId,
              betAmount,
              profit: isMatch ? expectedProfit  : 0,
              totalBets: totalBet,
              isWin: isMatch
            }
          );
          if (response.data.newBalance) {
            setBalance(response.data.newBalance);
          }
          // setBetCooldown(10);
        } catch (error) {
          console.error("Error creating bet (loss):", error);
        }
      }

      await showPremiumPopup({
        html: `
          <div style="text-align: center; color: white; padding: 1.5rem;">
            <div style="font-size: 2.5rem;">${isMatch ? "🎉" : "😢"}</div>
            <div style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem; border-radius: 1rem; backdrop-filter: blur(8px);">
              <img src="/${randomImage}" style="height: 5rem; margin: 0 auto; border-radius: 0.75rem;" />
            </div>
            <div style="font-size: 1.25rem; font-weight: bold;">${isMatch ? "You Won!" : "Try Again!"}</div>
            <div style="font-size: 0.875rem;">${isMatch ? `₹${winnings} Added!` : "Better luck next time!"}</div>
            ${isMatch ? `
              <div style="background: linear-gradient(to right, #fbbf24, #fb923c); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem;">
                +10 Points
              </div>` : ""}
          </div>
        `,
        gradient: isMatch
          ? "bg-gradient-to-br from-green-600 via-emerald-500 to-cyan-500"
          : "bg-gradient-to-br from-red-600 via-rose-500 to-pink-500",
        timer: 6000
      });

      // Reset state for next round
      setSelectedImages([]);
      setBetPlaced(false);
      setIsProcessing(false);
      fetchBets()
      setBetCooldown(10);

    }, 1000);
  }, [
    isProcessing,
    selectedImages,
    betPlaced,
    balance,
    betAmount,
    cards,
    initializeGame,
    profile.id
  ]);

  const toggleImageSelection = (image) => {
    if (isProcessing) return;
    setSelectedImages((prev) => {
      if (prev.includes(image)) {
        return prev.filter((img) => img !== image);
      } else {
        return [...prev, image];
      }
    });
  };

  return (
    <MainContainer>
    <Title>Titli Par</Title>
  
    <FlexContainer>
      {/* Game Section */}
      <GameSection>
        <GameBoardContainer>
          <GameBoardWrapper>
            <GridContainer>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  isScratched={card.scratched}
                  revealedImage={card.revealedImage}
                />
              ))}
            </GridContainer>
          </GameBoardWrapper>
        </GameBoardContainer>
  
        {/* Images Selection */}
        <AllImages
          allWinningImages={allWinningImages}
          highlightedImages={highlightedImages}
          selectedImages={selectedImages}
          betAmount={betAmount}
          onImageClick={toggleImageSelection}
          isTimerActive={!isProcessing}
        />
  
        <InnerContainer>
          <BalanceSection>
            <BalanceText>
              <h4>Balance</h4> ₹{balance}
            </BalanceText>
            <BetAmountSection>
              <h5>Bet Amount</h5>
              <BetAmountSelect value={betAmount} onChange={handleBetChange} disabled={isProcessing || betCooldown > 0}>
                {betPlaceAmt.map(({ bet, profit }) => (
                  <option key={bet} value={bet}>
                    ₹{bet} (Profit: ₹{profit})
                  </option>
                ))}
              </BetAmountSelect>
            </BetAmountSection>
          </BalanceSection>
  
          {/* Status Indicator */}
          <StatusText>{isProcessing ? "Processing..." : "Select Images!"}</StatusText>
          <PlaceBetButton onClick={handlePlay} disabled={isProcessing || betCooldown > 0}>
            {betCooldown > 0 ? `Wait ${betCooldown}s` : "Place Bet"}
          </PlaceBetButton>
        </InnerContainer>
      </GameSection>
  
      {/* History Section */}
      <HistoryContainer>
        <History titlibets={titlibets}/>
      </HistoryContainer>
    </FlexContainer>
  
    <ToastContainer position="top-right" autoClose={2000} />
  </MainContainer>
  

  );
};

export default Papu;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a202c, #141a24);
  padding:  0.5rem 1rem;
  box-sizing:border-box;
`;


const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #fbbf24, #f59e0b);
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
`;

const GameBoardContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  // background:red;
  background: linear-gradient(to bottom right, #2d3748, #1a202c);
  padding: 0.25rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 0rem;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

`;

const GameBoardWrapper = styled.div`
  background: rgba(26, 32, 44, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  padding: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`;

const InnerContainer = styled.div`
  background: linear-gradient(to bottom right, #2d3748, #1a202c);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  justify-content: space-around;
  box-sizing:border-box;
`;

const BalanceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BalanceText = styled.div`
  background: linear-gradient(to right, #68d391, #00bcd4);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  h4 {
    margin: 0;
  }
`;

const BetAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  h5 {
    margin: 0;
    color: #00bcd4;
    font-weight: 600;
  }
`;

const BetAmountSelect = styled.select`
  background: linear-gradient(to bottom right, #4a5568, #2d3748);
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  color: #00bcd4;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00bcd4;
  }
`;

const StatusText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #48bb78;
  animation: pulse 1s infinite;
`;

const PlaceBetButton = styled.button`
  background: #fbbf24;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
  &:hover {
    background: #f59e0b;
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  // max-width: 1200px;
  margin: auto;
  flex-wrap:wrap;
  // background:red;
`;

const GameSection = styled.div`
  flex: 2; /* Takes up 2 parts of the space */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HistoryContainer = styled.div`
  flex: 1; /* Takes up 1 part of the space */
backeground:white;
  padding: 1rem;
  border-radius: 1rem;
  min-height: 400px;
  width: 30%;
  position:fixed;
  top:10px;
  right:0;
  @media (max-width: 768px) {
    position: unset;
    width:100%;
  }
`;