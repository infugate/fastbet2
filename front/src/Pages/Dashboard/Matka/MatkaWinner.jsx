import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatkaWinner = () => {
  const [gamesData, setGamesData] = useState([]); // Market data
  const [myBets, setMyBets] = useState([]); // User bets
  const [userData, setUserData] = useState(null); // User data

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      alert("User is not logged in. Please log in to view your bets.");
    }
  }, []);

  // Fetch market data from backend
  const fetchGameData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subscription-state`);
      setGamesData(response.data.scrapedData.markets);
    } catch (err) {
      console.error("Error fetching game data:", err);
    }
  };

  // Fetch user's bets from backend based on userId
  const fetchBets = async () => {
    if (userData && userData.id) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/bets/${userData.id}`);
        if (response.data.success) {
          setMyBets(response.data.bets);
        } else {
          alert("Failed to fetch bets.");
        }
      } catch (err) {
        console.error("Error fetching bets:", err);
        alert("There was an error fetching bets.");
      }
    }
  };

  // Check winning bets and update wallet with estimatedProfit
  const checkAndUpdateWallet = async () => {
    if (!gamesData.length || !myBets.length) return;

    const winningBets = myBets.filter((bet) => {
      const market = gamesData.find((game) => game.marketName === bet.gameName);
      return (
        market &&
        bet.bidType === "JODI DIGIT" && 
        market.jodiDigit === bet.bids[0].number 
      );
    });

    if (winningBets.length > 0) {
      const totalProfit = winningBets.reduce((sum, bet) => sum + bet.estimatedProfit, 0);
      await updateUserWallet(userData.id, totalProfit);
    }
  };

  // Update user wallet in the backend
  const updateUserWallet = async (userId, totalProfit) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/update-wallet`, { 
        userId, 
        totalProfit 
      });
      console.log("Wallet updated:", response.data);
    } catch (err) {
      console.error("Error updating wallet:", err);
    }
  };

  // Fetch data when userData is available
  useEffect(() => {
    if (userData) {
      fetchGameData();
      fetchBets();
    }
  }, [userData]);

  // Run every 60 seconds to refresh data and check for winners
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchGameData();
      fetchBets();
      checkAndUpdateWallet();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [gamesData, myBets]);

  return (
    <div>
    
    </div>
  );
};

export default MatkaWinner;
