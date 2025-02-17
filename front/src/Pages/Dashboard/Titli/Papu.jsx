import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import AllImages from "./AllImages";
import Swal from "sweetalert2";
import "./Papu.css";
import styled from "styled-components";

const images = [
  "butterfly.jpg", "cow.jpg", "football.jpg", "spin.jpg", "flower.webp",
  "diya.webp", "bucket.jpg", "kite.webp", "rat.webp",
  "umberlla.jpg", "parrot.webp", "sun.webp"
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
  { image: "sun.webp", winningPoints: 10 }
];

const Papu = () => {
  const [winningPointOfUser, setWinningPointOfUser] = useState([]);
  const [highlightedImages, setHighlightedImages] = useState([]);
  const [cards, setCards] = useState([]);
  const [betAmount, setBetAmount] = useState(10);
  const [balance, setBalance] = useState(100);
  const [selectedImages, setSelectedImages] = useState([]);
  const [timer, setTimer] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [betPlaced, setBetPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const initializeGame = useCallback(() => {
    setCards(Array.from({ length: 36 }, (_, index) => ({
      id: index,
      scratched: false,
      revealedImage: null
    })));
    setTimer(15);
    setIsTimerActive(true);
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
        container: 'backdrop-blur-sm',
        title: 'text-white',
        htmlContainer: 'text-white'
      },
      background: 'transparent',
      showConfirmButton: false,
      timer: 2000
    });
  };

  const handlePlay = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const totalBet = betAmount * selectedImages.length;

    if (!betPlaced) {
      if (selectedImages.length > 0 && balance < totalBet) {
        await showPremiumPopup({
          title: '<div class="text-4xl">⚠️</div>',
          html: `<div class="space-y-2 text-center text-white">
            <div class="text-xl font-bold">Insufficient Balance!</div>
            <div class="text-sm opacity-75">Need ₹${totalBet - balance} more</div>
          </div>`,
          gradient: 'bg-gradient-to-br from-red-600 via-rose-500 to-pink-600'
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
        gradient: 'bg-gradient-to-br from-green-600 via-emerald-500 to-cyan-500'
      });

      if (selectedImages.length > 0) {
        setBalance(prev => prev - totalBet);
      }
      setBetPlaced(true);
    }

    const nextCard = cards.find(card => !card.scratched);
    if (!nextCard) {
      await showPremiumPopup({
        title: '<div style="font-size: 2.5rem;">🏁</div>',
        html: `
          <div style="text-align: center; color: white; padding: 1rem; background: linear-gradient(to bottom right, #7e3f98, #6366f1, #3b82f6); border-radius: 1rem;">
            <div style="font-size: 1.25rem; font-weight: bold;">Game Over!</div>
            <div style="font-size: 0.875rem; opacity: 0.75;">Final Balance: ₹${balance}</div>
          </div>
        `,
        gradient: 'bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500'
      });
      initializeGame();
      setIsProcessing(false);
      return;
    }
    

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCards(prev => prev.map(c =>
      c.id === nextCard.id ? { ...c, scratched: true, revealedImage: randomImage } : c
    ));

    setTimeout(async () => {
      const isMatch = selectedImages.includes(randomImage);
      let winnings = 0;

      if (isMatch) {
        winnings = betAmount * 10;
        setBalance(prev => prev + winnings);
        setHighlightedImages(prev => [...new Set([...prev, randomImage])]);
        setWinningPointOfUser(prev => [...prev, 10]);
      }

      await showPremiumPopup({
        html: `
          <div style="text-align: center; color: white; padding: 1.5rem;">
            <div style="font-size: 2.5rem;">${isMatch ? '🎉' : '😢'}</div>
            <div style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem; border-radius: 1rem; backdrop-filter: blur(8px);">
              <img src="/${randomImage}" style="height: 5rem; margin: 0 auto; border-radius: 0.75rem;" />
            </div>
            <div style="font-size: 1.25rem; font-weight: bold;">${isMatch ? 'You Won!' : 'Try Again!'}</div>
            <div style="font-size: 0.875rem;">${isMatch ? `₹${winnings} Added!` : 'Better luck next time!'}</div>
            ${isMatch ? `
              <div style="background: linear-gradient(to right, #fbbf24, #fb923c); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem;">
                +10 Points
              </div>` : ''}
          </div>
        `,
        gradient: isMatch ?
          'bg-gradient-to-br from-green-600 via-emerald-500 to-cyan-500' :
          'bg-gradient-to-br from-red-600 via-rose-500 to-pink-500'
      });
      

      setTimer(15);
      setIsTimerActive(true);
      setSelectedImages([]);
      setBetPlaced(false);
      setIsProcessing(false);
    }, 1000);
  }, [isProcessing, selectedImages, betPlaced, balance, betAmount, cards, initializeGame]);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (timer === 0 && !isProcessing) {
      setIsTimerActive(false);
      handlePlay();
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer, isProcessing, handlePlay]);

  const toggleImageSelection = (image) => {
    if (!isTimerActive || isProcessing) return;
    setSelectedImages(prev => {
      if (prev.includes(image)) {
        return prev.filter(img => img !== image);
      } else {
        return [...prev, image];
      }
    });
  };

  return (
    <MainContainer >
      <Title>
        Titli Par
      </Title>

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
      </GameBoardContainer>;

      {/* Images Selection */}
      <AllImages
        allWinningImages={allWinningImages}
        highlightedImages={highlightedImages}
        selectedImages={selectedImages}
        betAmount={betAmount}
        onImageClick={toggleImageSelection}
        isTimerActive={isTimerActive && !isProcessing}
      />

      <InnerContainer>
        <BalanceSection>
          <BalanceText>
            <h4>Balance</h4>
            ₹{balance}
          </BalanceText>
          <BetAmountSection>
            <h5>Bet Amount</h5>
            <BetAmountSelect
              value={betAmount}
              onChange={(e) => setBetAmount(parseInt(e.target.value))}
              disabled={!isTimerActive || isProcessing}
            >
              <option value={10}>₹10</option>
              <option value={15}>₹15</option>
              <option value={20}>₹20</option>
              <option value={50}>₹50</option>
            </BetAmountSelect>
          </BetAmountSection>
          <TimerSection>
            <h4>Timer</h4>
            {timer}s
          </TimerSection>
        </BalanceSection>

        {/* Status Indicator */}
        <StatusText isTimerActive={isTimerActive}>
          {isProcessing ? 'Processing...' :
            isTimerActive ? 'Select Images!' :
              'Round Ending...'}
        </StatusText>
      </InnerContainer>



    </MainContainer>
  );
};

export default Papu;

const MainContainer = styled.div`
  display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(to bottom right, #1A202C, #141A24);
      padding: 1rem;
    `;
const Title = styled.h1`
    font-size: 2.25rem; /* text-4xl */
    font-weight: bold; /* font-bold */
    color: transparent; /* text-transparent */
    background-clip: text; /* bg-clip-text */
    background-image: linear-gradient(to right, #fbbf24, #f59e0b); /* bg-gradient-to-r from-amber-300 to-yellow-500 */
    margin-bottom: 2rem; /* mb-8 */
    animation: pulse 2s infinite; /* animate-pulse */
  `;


const GameBoardContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  background: linear-gradient(to bottom right, #2d3748, #1a202c);
  padding: 0.25rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 0rem;
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
   margin-bottom: 2rem;
  max-width: 32rem;
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  justify-content:space-around;
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

const TimerSection = styled.div`
  background: linear-gradient(to right, #fbbf24, #fb923c);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  h4 {
    margin: 0;
  }
`;

const StatusText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.isTimerActive ? '#48bb78' : '#f87171')};
  animation: ${(props) => (props.isTimerActive ? 'pulse 1s infinite' : 'none')};
`;