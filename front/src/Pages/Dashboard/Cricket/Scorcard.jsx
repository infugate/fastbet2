import React, { useState, useEffect } from "react";
import axios from "axios";
import img from '../../../assets/score.jpg'
const MatchList = ({ onSelectMatch }) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function fetchSportsData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/sports-data-2`);
                setMatches(response.data.data || []); // Ensure the data is an array
            } catch (error) {
                console.error("Error fetching sports data:", error.message);
            }
        }
        fetchSportsData();
    }, []);

    return (
        <div style={styles.matchList}>
            {matches.map((match) => (
                <div
                    key={match.id}
                    style={styles.matchItem}
                    onClick={() => onSelectMatch(match.id)} // Pass only match ID
                >
                    {match.name}
                </div>
            ))}
        </div>
    );
};

const ScoreCard = ({ matchId }) => {
    const [matchData, setMatchData] = useState(null);
    const [run1, setRun1] = useState(0);
    const [wkt1, setWkt1] = useState(0);
    const [overs1, setOvers1] = useState(0);
    const [run2, setRun2] = useState(0);
    const [wkt2, setWkt2] = useState(0);
    const [overs2, setOvers2] = useState(0);

    useEffect(() => {
        async function fetchMatchDetails() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/sports-data-2`);
                const matchList = response.data.data || [];
                const matchingItems = matchList.filter(item => item.id === matchId);
                console.log(matchingItems)
                if (matchingItems.length > 0) {
                    const match = matchingItems[0];
                    setMatchData(match);

                    const scores = match.score || [];
                    if (scores.length > 0) {
                        setRun1(scores[0]?.r || 0);
                        setWkt1(scores[0]?.w || 0);
                        setOvers1(scores[0]?.o || 0);
                    }

                    if (scores.length > 1) {
                        setRun2(scores[1]?.r || 0);
                        setWkt2(scores[1]?.w || 0);
                        setOvers2(scores[1]?.o || 0);
                    }
                }
            } catch (error) {
                console.error("Error fetching match details:", error.message);
            }
        }

        if (matchId) {
            fetchMatchDetails();
        }
    }, [matchId]);

    if (!matchId) {
        return <div style={styles.scoreCard}><h2>Select a match</h2></div>;
    }

    const teamNames = matchData?.teams || ["Team A", "Team B"];

    return (
        <div style={styles.scoreCard}>
            {matchData ? (
                <>
                    <div style={{ textAlign: "center", fontSize: "14px", marginBottom: "10px" }}>
                        <strong>{matchData.title}</strong> | <strong><span style={{ color: "red" }}>{matchData.status}</span></strong>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <p><strong>{teamNames[0]}</strong></p>
                            <p>{run1}/{wkt1} ({overs1})</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p><strong>{teamNames[1]}</strong></p>
                            <p>{run2}/{wkt2} ({overs2})</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading match details...</p>
            )}
        </div>
    );
};

const MatchScorePage = () => {
    const [selectedMatchId, setSelectedMatchId] = useState(null);

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <MatchList onSelectMatch={setSelectedMatchId} />
                <ScoreCard matchId={selectedMatchId} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "22vh",
        backgroundColor: "#f8f8f8",
        paddingTop: "0vh",
    },
    contentContainer: {
        display: "flex",
        height: "30vh",
        width: "100vw",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "2vh",
    },
    matchList: {
        width: "30%",
        backgroundColor: "#2c3e50",
        padding: "10px",
        overflowY: "auto",
        height: "100%",
        color: "white",
    },
    matchItem: {
        padding: "10px",
        margin: "5px 0",
        backgroundColor: "#34495e",
        cursor: "pointer",
        borderRadius: "5px",
        color: "white",
        transition: "background 0.3s ease",
    },
    scoreCard: {
        width: "70%",
        padding: "20px",
        borderLeft: "2px solid #ccc",
        height: "100%",
         backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
    },
};

export default MatchScorePage;
