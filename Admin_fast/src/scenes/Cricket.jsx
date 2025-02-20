
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const [players, setPlayers] = useState([
        { playerName: "", score: "" },
        { playerName: "", score: "" },
        { playerName: "", score: "" },
        { playerName: "", score: "" },
        { playerName: "", score: "" },
        { playerName: "", score: "" },
    ]);

    const [leaderboard, setLeaderboard] = useState([]);

    // Fetch leaderboard data from the backend
    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin/getplayers`);
            setLeaderboard(response.data); // Update leaderboard state with fetched data
        } catch (error) {

            toast.error("Error fetching leaderboard:", error);
        }
    };

    useEffect(() => {
        fetchLeaderboard(); // Call API when component loads
    }, []);



    const [open, setOpen] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newPlayers = [...players];
        newPlayers[index] = { ...newPlayers[index], [name]: value };
        setPlayers(newPlayers);
    };

    const handleSubmit = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin/players`, players);
            toast.success("Player added successfully!");
            setLeaderboard([...leaderboard, ...players]);
            setPlayers(players.map(() => ({ playerName: "", score: "" })));
        } catch (error) {
            // console.error("Error adding players:", error);
            // alert("Failed to add players");
            toast.error("Error adding players:", error);
        }
    };

    // const handleDelete = (index) => {
    //     const newLeaderboard = leaderboard.filter((_, i) => i !== index);
    //     setLeaderboard(newLeaderboard);
    // };


    const handleDelete = async (index) => {
        try {
            const playerId = leaderboard[index]._id; // Get correct player ID
            if (!playerId) {
                toast.error("Player ID not found!");
                return;
            }

            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin/deleteplayers/${playerId}`);
            toast.success("Player deleted successfully!");

            // Remove the deleted player from the leaderboard state
            const newLeaderboard = leaderboard.filter((_, i) => i !== index);
            setLeaderboard(newLeaderboard);
        } catch (error) {
            console.error("Error deleting player:", error);
            toast.error("Failed to delete player");
        }
    };


    const handleOpenUpdate = (index) => {
        setCurrentPlayer({ ...leaderboard[index], index });
        setOpen(true);
    };

    const handleCloseUpdate = () => {
        setOpen(false);
        setCurrentPlayer(null);
    };

    const handleUpdatePlayer = async () => {
        try {
            if (!currentPlayer || !currentPlayer._id) {
                alert("Player ID is missing!");
                return;
            }

            const updatedPlayer = { playerName: currentPlayer.playerName, score: currentPlayer.score };
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/admin/getplayers/${currentPlayer._id}`, updatedPlayer);

            toast.success("Player updated successfully!");

            const updatedLeaderboard = leaderboard.map((player) =>
                player._id === currentPlayer._id ? { ...player, ...updatedPlayer } : player
            );

            setLeaderboard(updatedLeaderboard);
            handleCloseUpdate();
        } catch (error) {
            // console.error("Error updating player:", error);
            // alert("Failed to update player");
            toast.error("Error updating player:", error);
        }
    };


    return (
        <>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "fixed", zIndex: 9999 }}
            />

            <Container maxWidth="sm" style={{ textAlign: "center", padding: "30px", border: "1px solid blue" }}>
                <Typography variant="h4" gutterBottom>Add 6 Players</Typography>
                <div>
                    {players.map((player, index) => (
                        <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                            <TextField
                                label={`Player ${index + 1} Name`}
                                name="playerName"
                                value={player.playerName}
                                onChange={(event) => handleChange(index, event)}
                                style={{ width: "48%" }}
                            />
                            <TextField
                                label={`Score`}
                                name="score"
                                type="number"
                                value={player.score}
                                onChange={(event) => handleChange(index, event)}
                                style={{ width: "48%" }}
                            />
                        </div>
                    ))}
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit Players</Button>
                </div>
            </Container>



            {/* Leaderboard Section */}
            <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#2c3e50", borderRadius: "8px",height: "75%" }}>
                <Typography variant="h6">Player Leaderboard</Typography>
                <TableContainer component={Paper} style={{ backgroundColor: "black" ,height: "100%"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Score</TableCell>
                                <TableCell style={{ textAlign: "right" }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leaderboard.length > 0 ? (
                                leaderboard.map((player, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{player.playerName}</TableCell>
                                        <TableCell>{player.score}</TableCell>
                                        <TableCell style={{ textAlign: "right" }}>
                                            <Button variant="contained" color="secondary" onClick={() => handleDelete(index)} style={{ marginRight: "8px" }}>
                                                Delete
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={() => handleOpenUpdate(index)}>
                                                Update
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} style={{ textAlign: "center", color: "red",height: "75%" }}>No records available</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


            {/* Update Player Modal */}
            <Dialog open={open} onClose={handleCloseUpdate}>
                <DialogTitle>Update Player</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Player Name"
                        name="playerName"
                        value={currentPlayer?.playerName || ""}
                        onChange={(e) => setCurrentPlayer({ ...currentPlayer, playerName: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Score"
                        name="score"
                        type="number"
                        value={currentPlayer?.score || ""}
                        onChange={(e) => setCurrentPlayer({ ...currentPlayer, score: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseUpdate} color="secondary">Cancel</Button>
                    <Button onClick={handleUpdatePlayer} color="secondary">Update</Button>
                </DialogActions>
            </Dialog>

            
        </>
    );
}

export default App;
