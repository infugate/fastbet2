import { useState, useEffect } from "react";
import axios from "axios";

const YourComponent = () => {
  const [marketData, setMarketData] = useState([]);
  const [myBets, setMyBets] = useState([]); // State for My Bets
  const [userData, setUserData] = useState(null);

  const fetchGameData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subscription-state`);
      const markets = response.data.markets;

      // Transform the data
      const formattedData = markets.map(market => {
        const marketName = market.marketName;
        const jodiDigit = market.jodiDigit;
        const firstDigit = jodiDigit?.charAt(0) || "";
        const secondDigit = jodiDigit?.charAt(1) || "";
        
        return [marketName, jodiDigit, firstDigit, secondDigit];
      });

      setMarketData(formattedData);
    } catch (err) {
      console.error("Error fetching game data:", err);
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      alert("User is not logged in. Please log in to view your bets.");
    }
  }, []);

  const fetchMyBets = async () => {
    if (!userData || !userData.id) {
      console.error("User not logged in.");
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/bets/${userData.id}`);

      if (response.data.success) {
        setMyBets(response.data.bets);
      } else {
        alert("Failed to fetch bets.");
      }
    } catch (err) {
      console.error("Error fetching bets:", err);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchMyBets();
    }
  }, [userData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMyBets();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Market Data</h2>
      <ul>
        {marketData.map((item, index) => (
          <li key={index}>
            {item[0]}, JODI:-- {item[1]}, Open:-- {item[2]}, Close:-- {item[3]}
          </li>
        ))}
      </ul>

      <h2>My Bets</h2>
      <ul>
        {myBets.length > 0 ? (
          myBets.map((bet, index) => (
            <li key={index}>
              {bet.gameName} - Bid: {bet.bids[0].number}, Session: {bet.session}, Type: {bet.bidType}
            </li>
          ))
        ) : (
          <li>No bets found.</li>
        )}
      </ul>
    </div>
  );
};

export default YourComponent;
