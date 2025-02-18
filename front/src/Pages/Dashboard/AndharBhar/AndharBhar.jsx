import React, { useState, useEffect } from "react";
import "./CrickBet.css";
import { IoChatbubbleOutline } from "react-icons/io5";
import LastReasultPopup from "./LastReasultPopup";
import './PlayCasino.css'
import axios from 'axios'
import img1 from './assets/clubs_4.png';
import img2 from './assets/clubs_9.png';
import img3 from './assets/clubs_10.png';
import img4 from './assets/clubs_ace.png';
import img5 from './assets/clubs_jack.png';
import img6 from './assets/clubs_queen.png';
import img7 from './assets/clubs_queen.png';
import img8 from './assets/diamonds_1.png';
import img9 from './assets/diamonds_2.png';
import img10 from './assets/diamonds_6.png';
import img11 from './assets/diamonds_8.png';
import img12 from './assets/diamonds_9.png';
import img13 from './assets/diamonds_10.png';
import img14 from './assets/hearts_4.png';
import img15 from './assets/hearts_5.png';
import img16 from './assets/hearts_7.png';
import img17 from './assets/hearts_ace.png';
import img18 from './assets/hearts_king.png';
import img19 from './assets/clubs_4.png';
import img20 from './assets/spades_7.png';
import img21 from './assets/spades_8.png';
import img22 from './assets/spades_9.png';
import img23 from './assets/spades_10.png';
import img24 from './assets/spades_king.png';
import img25 from './assets/spades_queen.png';
import img26 from './assets/joker_red.png';
import './damy.css';
import { useProfile } from '../../../context/ProfileContext';

const LiveVideoFeed = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedBet, setSelectedBet] = useState({ label: "", odds: "" }); // State for label and odds
    const [stakeValue, setStakeValue] = useState(""); // For the second input
    const [profit, setProfit] = useState(0); // For calculating and storing profit
    const [myBets, setMyBets] = useState([]); // State to store all placed bets
    const [isOpen, setIsOpen] = useState(false);
    const arr = [];
    const [userData, setUserData] = useState(null);
    const [deck, setDeck] = useState([]);
    const [jokerCard, setJokerCard] = useState(null);
    const [andarCards, setAndarCards] = useState([]);
    const [baharCards, setBaharCards] = useState([]);
    const [winner, setWinner] = useState(null);
    const [countdown, setCountdown] = useState(10);
    const [bettingOpen, setBettingOpen] = useState(false);
    const [gameInProgress, setGameInProgress] = useState(false);
    const [userBet, setUserBet] = useState(null);
    const [resultMessage, setResultMessage] = useState(null);
    const [highlightCard, setHighlightCard] = useState(null);
    const { fetchNameWallet } = useProfile();

    const createDeck = () => {
        return [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
            img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26
        ];
    };

    const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

    const initializeGame = () => {
        const newDeck = shuffleDeck(createDeck()).slice(0, 30);
        setDeck(newDeck);
        setJokerCard(newDeck[0]);
        setAndarCards([]);
        setBaharCards([]);
        setWinner(null);
        setCountdown(10);
        setBettingOpen(true);
        setGameInProgress(false);
        setUserBet(null);
        setResultMessage(null);
        setHighlightCard(null);
    };
   
    const distributeCards = () => {
        setGameInProgress(true);
        const remainingDeck = [...deck];
        const joker = remainingDeck.shift();
        let andar = [];
        let bahar = [];
        let index = 0;
       
        const interval = setInterval(() => {
            if (remainingDeck.length === 0 || andar.length === 13 || bahar.length === 13) {
                clearInterval(interval);
                const randomWinner = Math.random() < 0.5 ? "Andar" : "Bahar";
                setWinner(randomWinner);
                if (userBet) {
                    const isWin = userBet === randomWinner;
                    setResultMessage(isWin ? "You win!" : "You lose!");
                    if (isWin) {
                     
                        const winningAmount = 100; // Replace with actual logic for calculating winnings
                   
                        updateWallet(winningAmount); // Call the backend to update the wallet
                    }
                }

                if (randomWinner === "Andar") {
                    andar.push(joker);
                    setHighlightCard("Andar");
                } else {
                    bahar.push(joker);
                    setHighlightCard("Bahar");
                }
                setAndarCards([...andar]);
                setBaharCards([...bahar]);
                setGameInProgress(false);
                setTimeout(() => initializeGame(), 20000);
                return;
            }

            if (index % 2 === 0) {
                andar.push(remainingDeck.shift());
                setAndarCards([...andar]);
            } else {
                bahar.push(remainingDeck.shift());
                setBaharCards([...bahar]);
            }

            index++;

        }, 1000);
    };
    




    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setBettingOpen(false);
            distributeCards();
        }
    }, [countdown]);

    useEffect(() => {
        initializeGame();
    }, []);







    const updateWallet = async (amount) => {
        const userData = localStorage.getItem('user');
        const objectId = JSON.parse(userData);
        const userId = objectId.id;
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/wallet/update`, {
                userId, // Ensure `userId` is available in your frontend
                amount, // Pass the winning amount 
            }
            );

            if (response.data.success) {
                console.log("Wallet updated successfully!");
                fetchNameWallet(); // Refresh the wallet balance
            } else {
                console.error("Failed to update wallet:", response.data.message);
            }
        } catch (error) {
            console.error("Error updating wallet:", error);
        }
    };




    const handleSubmit = async () => {
        if (selectedBet.label && selectedBet.odds && stakeValue > 0) {
            const userData = localStorage.getItem('user');
            if (!userData) {
                alert("User is not logged in. Please log in to place a bet.");
                return;
            }
            const objectId = JSON.parse(userData);
            const userId = objectId.id;

            // Make sure profit is a number
            const calculatedProfit = (parseFloat(stakeValue) * parseFloat(selectedBet.odds))
           

            const newBet = {
                userId,
                label: selectedBet.label,
                odds: parseFloat(selectedBet.odds),
                stake: parseFloat(stakeValue),
                profit: calculatedProfit,
            };

            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/bets`, newBet); // Send request to backend
                if (response.data.success) {
                    setSelectedBet({ label: "", odds: "" });
                    setStakeValue("");
                    setProfit(0);

                    alert(`Bet placed successfully! Your updated wallet balance`);
                    setUserBet(newBet.label)
                    fetchBets();
                    fetchNameWallet();
                    // window.location.reload();
                } else {
                    alert(response.data.message || "Failed to place bet.");
                }
            } catch (err) {
                console.error("Error placing bet:", err);
                alert("There was an error placing your bet. Please try again.");
            }
        } else {
            alert("Please fill in all the details (label, odds, stake). Stake must be greater than 0.");
        }
    };



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
                console.log(userId);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bets/${userId}`);
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



    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Function to calculate profit
    const calculateProfit = (odds, stake) => {
        return (odds) * stake;
    };

    // Update profit whenever the odds or stake changes
    useEffect(() => {
        if (selectedBet.odds && stakeValue) {
            setProfit(calculateProfit(parseFloat(selectedBet.odds), parseFloat(stakeValue)));
        }
    }, [selectedBet.odds, stakeValue]); // Recalculate profit whenever odds or stake changes


    const closePopup = () => {
        setIsOpen(false);
    };


    const handleCellClick = (label, odds) => {
        setSelectedBet({ label, odds });
        // setUserBet(label)
    };

    return (
        <>
        <h1>ANDHAR BHAR</h1>
        <div className="live-video-betting-section">
            <div className="live-video">
                <div className="video-header">
                    <h3 className="title">Andar Bahar</h3>
                    <h3 className="date_time">Round id:24541251255</h3>
                </div>
                <div>
                    <div className="andar-containor-bhar">
                        {/* Joker Card Display */}
                        <div className="center-card">
                            <h2>Choose card Andar/Bahar</h2>
                            {jokerCard && (
                                <img
                                    src={jokerCard}
                                    alt="Joker Card"
                                    className={highlightCard ? "highlight" : ""}
                                />
                            )}
                        </div>
                        {/* <h1>Andar Bahar</h1> */}
                        {/* <p>Period: 2501151424</p> */}

                        {/* Countdown Timer */}
                        {bettingOpen ? (
                            <div>
                                <p>Countdown for betting: {countdown}s</p>
                                <div className="battingseystem">
                                    <button className="andrbtn" onClick={() => handleCellClick("Andar", "1.5")}>Bet on Andar</button>
                                    <button className="andrbtn" onClick={() => handleCellClick("Bahar", "1.5")}>Bet on Bahar</button>
                                    <button className="andrbtn" onClick={() => handleCellClick("Tie", "2")}>Bet on Tie</button>
                                </div>
                                {userBet && <p>Your Bet: {userBet}</p>}
                            </div>
                        ) : gameInProgress ? (
                            <p>Waiting for result!......</p>
                        ) : (
                            <p>Waiting for next round...</p>
                        )}
                    </div>
                </div>
                <br />
                <div className="tablebharcontainor">
                    <div className="andhar-table">
                        <h2>Andar</h2>
                        <table>
                            <tbody>
                                <tr>
                                    {Array.from({ length: 14 }, (_, index) => (
                                        <td key={index} className={andarCards[index] ? "" : "empty"}>
                                            {andarCards[index] && (
                                                <img
                                                    src={andarCards[index]}
                                                    alt={`Andar card ${index}`}
                                                    className={highlightCard === "Andar" ? "highlight" : ""}
                                                />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Bahar Table */}
                    <div className="bahar-table">
                        <h2>Bahar</h2>
                        <table className="table-bhar">
                            <tbody>
                                <tr>
                                    {Array.from({ length: 14 }, (_, index) => (
                                        <td key={index} className={baharCards[index] ? "" : "empty"}>
                                            {baharCards[index] && (
                                                <img
                                                    src={baharCards[index]}
                                                    alt={`Bahar card ${index}`}
                                                    className={highlightCard === "Bahar" ? "highlight" : ""}
                                                />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="winnerres">
                    {/* Show Winner and Result Message */}
                    {winner && <h2 className="winner">Winner: {winner}</h2>}
                    {resultMessage && <h3 className="winner2">{resultMessage}</h3>}

                </div>
                <div className="right-sidebar-for-mobile">
                    <div className="place-bet">
                        <div className="place-bet-header">
                            <h3>Place Bet</h3>
                        </div>

                        <div className="place-bet-header2">
                            <h3>(Bet for)</h3>
                            <h3>Odds</h3>
                            <h3>Stake</h3>
                            <h3>Profit</h3>
                        </div>

                        <div className="place-bet-data">
                            <h3>{selectedBet.label || "Select a Bet"}</h3>
                            <input
                                type="number"
                                value={selectedBet.odds}
                                readOnly
                                placeholder="Odds"
                            />
                            <input
                                type="text"
                                value={stakeValue}
                                onChange={(e) => setStakeValue(e.target.value)}
                                placeholder="Stake"
                            />
                            <h3>{profit.toFixed(2) || "0.00"}</h3> {/* Displaying the calculated profit */}
                        </div>

                        <div className="place-bet-stake-buttons">
                            {[25, 50, 100, 200, 500, 1000].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setStakeValue(val)} // Set the stake value
                                >
                                    {val}
                                </button>
                            ))}
                        </div>

                        <div className="place-bet-buttons">
                            <button className="edit">Edit</button>
                            <div>
                                <button
                                    className="reset"
                                    onClick={() => {
                                        setSelectedBet({ label: "", odds: "" });
                                        setStakeValue("");
                                        setProfit(0); // Reset profit on reset
                                    }}
                                >
                                    Reset
                                </button>
                                <button className="submit" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="my-bet">
                        <div className="my-bet-text">
                            <h3>My Bet</h3>
                        </div>

                        <div className="my-bet-data">
                            <table className="bet-table">
                                <thead>
                                    <tr>
                                        <th>Matched Bet</th>
                                        <th>Odds</th>
                                        <th>Stake</th>
                                        <th>Profit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myBets.map((bet, betIdx) => (
                                        <tr key={betIdx}>
                                            <td>{bet.label}</td>
                                            <td>{bet.odds}</td>
                                            <td>{bet.stake}</td>
                                            <td>{bet.profit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="instruction">
                    <div className="content">
                        <div className="messege-icon">
                            <IoChatbubbleOutline />
                        </div>
                        <div className="message-text">
                            <h3>
                                Results are based on stream only. Scoreboard may be different or
                                updated later.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="last-reasult">
                    <div className="last-reasult-header">
                        <h3>ANDHAR BHAR</h3>
                        <h3>ANDHAR BHAR</h3>
                    </div>

                    <div className="ball-div">
                        <div>
                            {arr.map((el, ballIdx) => (
                                <div key={ballIdx} className="ball" >
                                    {el}
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </div>


            <div className="right-sidebar">
                <div className="place-bet">
                    <div className="place-bet-header">
                        <h3>Place Bet</h3>
                    </div>

                    <div className="place-bet-header2">
                        <h3>(Bet for)</h3>
                        <h3>Odds</h3>
                        <h3>Stake</h3>
                        <h3>Profit</h3>
                    </div>

                    <div className="place-bet-data">
                        <h3>{selectedBet.label || "Select a Bet"}</h3>
                        <input
                            type="number"
                            value={selectedBet.odds}
                            readOnly
                            placeholder="Odds"
                        />
                        <input
                            type="text"
                            value={stakeValue}
                            onChange={(e) => setStakeValue(e.target.value)}
                            placeholder="Stake"
                        />
                        <h3>{profit.toFixed(2) || "0.00"}</h3> {/* Displaying the calculated profit */}
                    </div>

                    <div className="place-bet-stake-buttons">
                        {[25, 50, 100, 200, 500, 1000].map((val) => (
                            <button
                                key={val}
                                onClick={() => setStakeValue(val)} // Set the stake value
                            >
                                {val}
                            </button>
                        ))}
                    </div>

                    <div className="place-bet-buttons">
                        <button className="edit">Edit</button>
                        <div>
                            <button
                                className="reset"
                                onClick={() => {
                                    setSelectedBet({ label: "", odds: "" });
                                    setStakeValue("");
                                    setProfit(0); // Reset profit on reset
                                }}
                            >
                                Reset
                            </button>
                            <button className="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-bet">
                    <div className="my-bet-text">
                        <h3>My Bet</h3>
                    </div>

                    <div className="my-bet-data">
                        <table className="bet-table">
                            <thead>
                                <tr>
                                    <th>Matched Bet</th>
                                    <th>Odds</th>
                                    <th>Stake</th>
                                    <th>Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myBets
                                    .slice(-10) // Get the last 10 bets
                                    .reverse() // Show the most recent bet at the top
                                    .map((bet, betIdx) => (
                                        <tr key={betIdx}>
                                            <td>{bet.label}</td>
                                            <td>{bet.odds}</td>
                                            <td>{bet.stake}</td>
                                            <td>{bet.profit}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isOpen && (
                <LastReasultPopup closePopup={closePopup} />
            )}
        </div>
        </>
    );
};

export default LiveVideoFeed;