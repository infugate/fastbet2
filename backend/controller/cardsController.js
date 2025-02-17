// const Card = require("../models/cardsModel");
// const { default: mongoose } = require("mongoose");
// const User = require("../models/UserSignUp");

// // Create or update card selections


// const selectCard = async (req, res) => {
//     try {
//         const { cardId } = req.params;
//         const { player1, player2, user, totalRuns } = req.body;

//         console.log("Received totalRuns:", totalRuns);
//         console.log("Request Body:", req.body);

//         let findcard = await Card.findOne({ _id: cardId });
//         let findAllCards = await Card.find();
//         if (!findcard) {
//             return res.status(404).json({ message: "Card document not found" });
//         }


//         // ✅ Ensure `user` array exists
//         if (!findcard.userArray) {
//             findcard.userArray = [];
//         }
//         const UserData = await User.findOne({ email: user })
//         console.log(UserData, "UserData")
//         const emailExists = findAllCards.some(obj => obj.userArray.includes(user));
//         // console.log(emailExists,"emailExists")
//         if (emailExists) {
//             return res.status(409).json({ message: "User has already selected a card. Cannot select another one." });
//         }
//         // ✅ Add user to `user` array if not already present
//         if (!findcard.userArray.includes(user)) {
//             findcard.userArray.push(user);
//         } else {
//             return res.status(409).json({ message: "User already in card, no update needed." });
//         }

//         console.log("Existing Users:", findcard.userArray);


//         // ✅ Find a card with both players already selected
//         let selectedCard = findcard.cards.find(card => card.player1 && card.player2);

//         if (selectedCard) {
//             // ✅ If players are already selected, only add user to `cardUser`
//             if (!selectedCard.cardUser) {
//                 selectedCard.cardUser = [];
//             }

//             if (!selectedCard.cardUser.includes(user)) {
//                 selectedCard.cardUser.push(user);
//                 console.log("User added to existing card.");
//             } else {
//                 return res.status(409).json({ message: "User already in card, no update needed." });
//             }
//         } else {
//             // ✅ If no card has players, assign new players
//             selectedCard = findcard.cards.find(card => !card.player1 || !card.player2);

//             if (selectedCard) {
//                 if (!selectedCard.player1) {
//                     selectedCard.player1 = player1;
//                 }
//                 if (!selectedCard.player2) {
//                     selectedCard.player2 = player2;
//                 }
//                 selectedCard.totalRuns = totalRuns;

//                 if (!selectedCard.cardUser) {
//                     selectedCard.cardUser = [];
//                 }
//                 selectedCard.cardUser.push(user);

//                 // if (!UserData.card) {
//                 //     UserData.card = [];
//                 // }

//                 // UserData.card.push(findcard);
//                 // console.log(UserData)
//                 // await UserData.save();
//                 console.log("New players assigned.");
//             } else {
//                 return res.status(400).json({ message: "No available card to update." });
//             }
//         }

//         console.log("Selected Card After Update:", selectedCard);

//         // ✅ Mark fields as modified so MongoDB detects changes
//         findcard.markModified("cards");
//         findcard.markModified("user");
//         await findcard.save();
//         return res.status(200).json(findcard); // ✅ Ensure only ONE response is sent
//     } catch (error) {
//         console.error("Error updating card:", error);
//         if (!res.headersSent) {
//             return res.status(500).json({ message: error.message }); // ✅ Ensures only ONE response is sent
//         }
//     }
// };

// const updateWinner = async (req, res) => {
//     try {
//         const { cardId } = req.params;

//         // ✅ Set `isWinner: false` for all cards first
//         await Card.updateMany({}, { $set: { "cards.$[].isWinner": false } });

//         // ✅ Find the winning card and update it
//         const updatedCard = await Card.findOneAndUpdate(
//             { "cards._id": cardId },
//             { $set: { "cards.$.isWinner": true } },
//             { new: true }
//         );

//         if (!updatedCard) {
//             return res.status(404).json({ message: "Winning card not found" });
//         }
//         // const UserData = await User.findOne({ email: updatedCard.userArray[0]  })
//         // UserData.card = [];
//         // await UserData.save();
//         // UserData.card.slice();
//         res.status(200).json(updatedCard);
//     } catch (error) {
//         console.error("Error updating winner:", error);
//         res.status(500).json({ message: error.message });
//     }
// };






// // Get the current card state
// const getCards = async (req, res) => {
//     try {
//         let cards = await Card.find(); // Fetch all cards

//         // Ensure there are at least 3 cards
//         if (cards.length < 3) {
//             const newCards = [];
//             for (let i = cards.length; i < 3; i++) {
//                 newCards.push(new Card({
//                     cards: [{
//                         "player1": "",
//                         "player2": "",
//                         "totalRuns": 0,
//                         "isWinner": false,

//                         "_id": new mongoose.Types.ObjectId()
//                     }]
//                 }))
//             };
//             await Card.insertMany(newCards);
//             cards = await Card.find();
//         }

//         res.status(200).json(cards);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const getCardsByUser = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate userId
//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return res.status(400).json({ message: "Invalid user ID format" });
//         }

//         // Fetch all cards where the user is included in the `user` array
//         const userCards = await Card.find({ user: userId });

//         if (!userCards.length) {
//             return res.status(404).json({ message: "No cards found for this user" });
//         }

//         res.status(200).json(userCards);
//     } catch (error) {
//         console.error("Error fetching user cards:", error);
//         res.status(500).json({ message: error.message });
//     }
// };

// // Reset the game
// const resetCards = async (req, res) => {
//     try {
//         await Card.deleteMany({});
//         res.status(200).json({ message: "Game reset successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { selectCard, getCards, resetCards, updateWinner, getCardsByUser };





// const express = require("express");
// const Card = require("../models/cardsModel");
// const CardModel = require("../models/cardsModel");
// const { default: mongoose } = require("mongoose");
// const playerModel = require("../models/playerModels");

// // Create or update card selections


// const selectCard = async (req, res) => {
//     try {
//         const { cardId } = req.params;
//         const { player1, player2, user, totalRuns } = req.body;

//         console.log("Received totalRuns:", totalRuns);
//         console.log("Request Body:", req.body);

//         // ✅ Fetch all card documents
//         let allCards = await Card.find();
//         let findcard = await Card.findOne({ _id: cardId });

//         if (!findcard) {
//             return res.status(404).json({ message: "Card document not found" });
//         }

//         // ✅ Ensure `cards` array exists
//         if (!findcard.cards || findcard.cards.length === 0) {
//             findcard.cards = []; // Initialize empty array
//         }

//         console.log("Existing Users:", findcard.user);

//         // ✅ Ensure `user` array exists in the document
//         if (!findcard.user) {
//             findcard.user = [];
//         }

//         // ✅ Check if the user exists in **any** document (not just `findcard`)
//         let userExists = allCards.some(cardDoc => cardDoc.user.includes(user));

//         if (userExists) {
//             return res.status(409).json({ message: "User Already Exist in Global User List" });
//         }

//         // ✅ Add user to global `user` array (only if not already present)
//         findcard.user.push(user);

//         // ✅ Find first available card slot
//         let selectedCard = findcard.cards.find(card => !card.player1 || !card.player2);

//         // ✅ If no available card, create a new one and push it
//         if (!selectedCard) {
//             console.log("No available card found. Creating a new card...");
//             selectedCard = { player1: "", player2: "", totalRuns: 0, isWinner: false, cardUser: [] };
//             findcard.cards.push(selectedCard);
//         }

//         console.log("Selected Card Before Update:", selectedCard);

//         // ✅ Ensure `cardUser` array exists
//         if (!selectedCard.cardUser) {
//             selectedCard.cardUser = [];
//         }

//         // ✅ Add user to `cardUser` array if not already present
//         if (!selectedCard.cardUser.includes(user)) {
//             selectedCard.cardUser.push(user);
//         }

//         // ✅ Update selected (or new) card
//         selectedCard.player1 = player1 || selectedCard.player1;
//         selectedCard.player2 = player2 || selectedCard.player2;
//         selectedCard.totalRuns = totalRuns || selectedCard.totalRuns;

//         console.log("Selected Card After Update:", selectedCard);

//         // ✅ Mark `cards` and `user` as modified for MongoDB to detect changes
//         findcard.markModified("cards");
//         findcard.markModified("user");

//         // ✅ Save the updated document
//         await findcard.save();

//         res.status(200).json(findcard);
//     } catch (error) {
//         console.error("Error updating card:", error);
//         res.status(500).json({ message: error.message });
//     }
// };


// // Get the current card state
// const getCards = async (req, res) => {
//     try {
//         let cards = await Card.find(); // Fetch all cards

//         // Ensure there are at least 3 cards
//         if (cards.length < 3) {
//             const newCards = [];
//             for (let i = cards.length; i < 3; i++) {
//                 newCards.push(new Card({
//                     cards: [{
//                         "player1": "",
//                         "player2": "",
//                         "totalRuns": 0,
//                         "isWinner": false,

//                         "_id": new mongoose.Types.ObjectId()
//                     }]
//                 }))
//             };
//             await Card.insertMany(newCards);
//             cards = await Card.find();
//         }

//         res.status(200).json(cards);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// // Reset the game
// const resetCards = async (req, res) => {
//     try {
//         await Card.deleteMany({});
//         res.status(200).json({ message: "Game reset successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { selectCard, getCards, resetCards };



// const express = require("express");
const CardModel = require("../models/cardsModel");
const Card = require("../models/cardsModel");
// const CardModel = require("../models/cricket/cardsModel");
const { default: mongoose } = require("mongoose");
const { findById } = require("../models/UserSignUp");
const WinnerModel = require("../models/winnerModel");
const User = require("../models/UserSignUp");
const User_Wallet = require("../models/Wallet");
// const playerModel = require("../../models/cricket/playerModels");

// Create or update card selections


// const selectCard = async (req, res) => {
//     try {
//         const { cardId } = req.params;
//         const { player1, player2, user, points, profit, totalRuns } = req.body;

//         // ✅ Validate input
//         if (!player1 || !player2 || !user || !user.email || points == null) {
//             return res.status(400).json({ message: "Missing required fields." });
//         }

//         let findcard = await CardModel.findById(cardId);
//         if (!findcard) {
//             return res.status(404).json({ message: "Card document not found" });
//         }

//         // ✅ Ensure `users` array exists
//         if (!findcard.users) {
//             findcard.users = [];
//         }

//         // ✅ Fetch user details from the User collection
//         let userData = await User.findOne({ email: user.email });
//         if (!userData) {
//             return res.status(404).json({ message: "User not found in the database." });
//         }
//         // console.log(userData)
//         const Wallet = await User_Wallet.findOne({ user: userData._id });
//         // console.log(Wallet)
//         // ✅ Ensure `walletBalance` exists and is a valid number
//         if (typeof Wallet.balance !== "number" || isNaN(Wallet.balance)) {
//             return res.status(400).json({ message: "Invalid wallet balance." });
//         }

//         // // ✅ Ensure points is a valid number
//         if (typeof points !== "number" || isNaN(points) || points <= 0) {
//             return res.status(400).json({ message: "Invalid bet amount." });
//         }

//         // // ✅ Check if the user has already selected a card
//         let userExists = findcard.users.some((u) => u.email === user.email);
//         if (userExists) {
//             return res.status(409).json({ message: "User has already selected a card." });
//         }

//         // // ✅ Ensure the user has enough balance
//         if (Wallet.balance < points) {
//             return res.status(400).json({ message: "Insufficient wallet balance." });
//         }

//         // ✅ Deduct bet points from the user's wallet
//         const newWalletBalance = Wallet.balance - points;
//         await User.findOneAndUpdate(
//             { email: user.email },
//             { $set: { walletBalance: newWalletBalance } },
//             { new: true }
//         );

//         // // ✅ Add user details to `users` array in the card
//         findcard.users.push({
//             username: user.username,
//             email: user.email,
//             walletBalance: newWalletBalance, // Updated wallet balance
//             betpoints: points,
//             profit: profit || 0
//         });

//         // // ✅ Find first available card slot
//         let selectedCard = findcard.cards.find(card => !card.player1 || !card.player2);
//         if (!selectedCard) {
//             selectedCard = { player1: "", player2: "", totalRuns: 0, isWinner: false, cardUser: [] };
//             findcard.cards.push(selectedCard);
//         }

//         // // ✅ Ensure `cardUser` array exists
//         if (!selectedCard.cardUser) {
//             selectedCard.cardUser = [];
//         }

//         // ✅ Add user email to `cardUser`
//         if (!selectedCard.cardUser.includes(user.email)) {
//             selectedCard.cardUser.push(user.email);
//         }

//         // // ✅ Assign players and total runs
//         selectedCard.player1 = player1 || selectedCard.player1;
//         selectedCard.player2 = player2 || selectedCard.player2;
//         selectedCard.totalRuns = totalRuns || selectedCard.totalRuns;

//         Wallet.balance = newWalletBalance;
//         // // ✅ Mark fields as modified
//         findcard.markModified("cards");
//         findcard.markModified("users");
//         findcard.markModified("Wallet")


//         await User_Wallet.findOneAndUpdate({ user: userData._id }, { balance: Wallet.balance }, { new: true });

//         await Wallet.save();
//         await findcard.save();
//         // await findcard.save();
//         // await 
//         res.status(200).json({ message: "Card selected and wallet updated.", updatedCard: findcard });

//     } catch (error) {
//         console.error("Error updating card:", error);
//         res.status(500).json({ message: error.message });
//     }
// };



const selectCard = async (req, res) => {
    try {
        const { cardId } = req.params;
        const { player1, player2, user, points, profit, totalRuns } = req.body;

        // ✅ Validate input
        if (!player1 || !player2 || !user || !user.email || points == null) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        let findcard = await CardModel.findById(cardId);
        if (!findcard) {
            return res.status(404).json({ message: "Card document not found" });
        }

        // ✅ Fetch user details
        let userData = await User.findOne({ email: user.email });
        if (!userData) {
            return res.status(404).json({ message: "User not found in the database." });
        }

        const Wallet = await User_Wallet.findOne({ user: userData._id });
        if (!Wallet) {
            return res.status(400).json({ message: "User wallet not found." });
        }

        // ✅ Ensure points is a valid number
        if (typeof points !== "number" || isNaN(points) || points <= 0) {
            return res.status(400).json({ message: "Invalid bet amount." });
        }

        // ✅ Check if user already exists in **ANY** card
        let findAllCards = await Card.find();
        const emailExists = findAllCards.some(obj => obj.user.includes(user.email));
        if (emailExists) {
            return res.status(409).json({ message: "User has already selected a card. Cannot select another one." });
        }

        // ✅ Add user email to `findcard.user` only if not already present
        if (!findcard.user.includes(user.email)) {
            findcard.user.push(user.email);
        } else {
            return res.status(409).json({ message: "User already in card, no update needed." });
        }

        // ✅ Ensure the user has enough balance
        if (Wallet.balance < points) {
            return res.status(400).json({ message: "Insufficient wallet balance." });
        }

        // ✅ Deduct bet points from the user's wallet
        await User_Wallet.findOneAndUpdate(
            { user: userData._id },
            { $inc: { balance: -points } }, // Deduct points from wallet balance
            { new: true }
        );

        // ✅ Add user details to `users` array in the card
        findcard.users.push({
            username: user.username,
            email: user.email,
            walletBalance: Wallet.balance - points, // Updated wallet balance
            betpoints: points,
            profit: profit || 0
        });

        // ✅ Find first available card slot
        let selectedCard = findcard.cards.find(card => !card.player1 || !card.player2);
        if (!selectedCard) {
            selectedCard = { player1: "", player2: "", totalRuns: 0, isWinner: false, cardUser: [] };
            findcard.cards.push(selectedCard);
        }

        // ✅ Add user email to `cardUser`
        if (!selectedCard.cardUser.includes(user.email)) {
            selectedCard.cardUser.push(user.email);
        }

        // ✅ Assign players and total runs
        selectedCard.player1 = player1 || selectedCard.player1;
        selectedCard.player2 = player2 || selectedCard.player2;
        selectedCard.totalRuns = totalRuns || selectedCard.totalRuns;

        // ✅ Save updated data
        await findcard.save();

        res.status(200).json({ message: "Card selected and wallet updated.", updatedCard: findcard });

    } catch (error) {
        console.error("❌ Error updating card:", error);
        res.status(500).json({ message: error.message });
    }
};

// Get the current card state
const getCards = async (req, res) => {
    try {
        let cards = await Card.find(); // Fetch all cards

        // Ensure there are at least 3 cards
        if (cards.length < 3) {
            const newCards = [];
            for (let i = cards.length; i < 3; i++) {
                newCards.push(new Card({
                    cards: [{
                        "player1": "",
                        "player2": "",
                        "totalRuns": 0,
                        "isWinner": false,

                        "_id": new mongoose.Types.ObjectId()
                    }]
                }))
            };
            await Card.insertMany(newCards);
            cards = await Card.find();
        }

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Reset the game
const resetCards = async (req, res) => {
    try {
        await Card.deleteMany({});
        res.status(200).json({ message: "Game reset successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateWinner = async (req, res) => {
    try {
        const { cardId } = req.params;
        console.log("🎯 Received Card ID:", cardId);

        // ✅ Step 1: Reset `isWinner: false` for all cards and users
        await Card.updateMany({}, {
            $set: {
                "cards.$[].isWinner": false,
                "users.$[].isWinner": false
            }
        });
        const winners = await WinnerModel.find()
            .populate('users')
        console.log(winners)
        // ✅ Step 2: Update the specific winning card
        const updatedCard = await Card.findOneAndUpdate(
            { "cards._id": cardId },
            { $set: { "cards.$.isWinner": true } },
            { new: true, runValidators: true }
        );

        if (!updatedCard) {
            console.log("❌ Winning card not found in database.");
            return res.status(404).json({ message: "Winning card not found" });
        }

        // ✅ Step 3: Get the winning card details
        const winningCard = updatedCard.cards.find(card => card._id.toString() === cardId);
        if (!winningCard) {
            console.log("❌ Winning card not found in the document.");
            return res.status(404).json({ message: "Winning card not found in the document" });
        }

        const winningUsersEmails = winningCard.cardUser; // Get all winning user emails
        console.log("🏆 Winning Users Emails:", winningUsersEmails);

        // ✅ Step 4: Fetch users who played on the winning card
        const winningUsers = await User.find({ email: { $in: winningUsersEmails } });

        if (winningUsers.length === 0) {
            console.log("❌ No winning users found in the database.");
            return res.status(404).json({ message: "No winning users found" });
        }

        console.log("✅ Winning Users:", winningUsers);

        // ✅ Step 5: Fetch wallet details of winning users
        const userWallets = await User_Wallet.find({ user: { $in: winningUsers.map(user => user._id) } });

        console.log("✅ User Wallets Before Update:", userWallets);

        // ✅ Step 6: Update Wallet Balance for Winners
        for (const user of winningUsers) {
            const profitAmount = user.profit || 0;

            if (profitAmount > 0) {
                // ✅ Update User Wallet in `User_Wallet`
                const userWallet = userWallets.find(wallet => wallet.user.toString() === user._id.toString());

                if (userWallet) {
                    await User_Wallet.findOneAndUpdate(
                        { user: user._id },
                        { $inc: { balance: profitAmount } }, // Add profit to wallet balance
                        { new: true }
                    );
                    console.log(`✅ Wallet Updated for ${user.email}: +${profitAmount}`);
                } else {
                    console.log(`⚠️ No Wallet Found for ${user.email}, skipping update.`);
                }

                // ✅ Also update `walletBalance` in `User` model
                await User.findOneAndUpdate(
                    { _id: user._id },
                    { $inc: { walletBalance: profitAmount } }, // Add profit to walletBalance
                    { new: true }
                );

                console.log(`💰 User Wallet Balance Updated: ${user.email} +${profitAmount}`);
            }
        }

        console.log("✅ Wallet balances updated successfully for all winners.");

        // ✅ Step 7: Create a new Winner entry in the database
        // const totalProfit = winningUsers.reduce((sum, user) => sum + user.profit, 0);
        const newWinner = new WinnerModel({
            cardId,
            users: winningUsers.map(user => ({
                UserId: user._id, // Store User ID
                username: user.username,
                email: user.email,
                profit: user.profit,
                walletBalance: user.walletBalance
            })),
            // totalProfit
        });

        await newWinner.save();
        // The save method is being incorrectly used on the model itself instead of an instance
        // Removing the incorrect call to `User_Wallet.save()`

        console.log("✅ Winner entry created successfully:", newWinner);
        res.status(200).json({ updatedCard, winnerEntry: newWinner });

    } catch (error) {
        console.error("❌ Error updating winner:", error);
        res.status(500).json({ message: error.message });
    }
};


// const updateWinner = async (req, res) => {
//     try {
//         const { cardId } = req.params;
//         console.log("Received Card ID:", cardId);

//         // ✅ Step 1: Find the document containing the card
//         const updatedCard = await Card.findOneAndUpdate(
//             { "cards._id": cardId },
//             { $set: { "cards.$.isWinner": true } },
//             { new: true, runValidators: true }
//         );

//         if (!updatedCard) {
//             return res.status(404).json({ message: "Winning card not found" });
//         }

//         // ✅ Step 2: Get users who played on the winning card
//         const winningCard = updatedCard.cards.find(card => card._id.toString() === cardId);
//         if (!winningCard) {
//             return res.status(404).json({ message: "Winning card not found in the document" });
//         }

//         const winningUsers = winningCard.cardUser; // Users who played on this card

//         console.log("Winning Users:", winningUsers);

//         // ✅ Step 3: Check if users exist in `users` array
//         const usersExist = updatedCard.users.some(user => winningUsers.includes(user.email));
//         if (!usersExist) {
//             return res.status(400).json({ message: "No matching users found in the users array." });
//         }

//         // ✅ Step 4: Update `isWinner: true` for users who played on the winning card
//         const updateUsers = await Card.updateOne(
//             { "cards._id": cardId, "users.email": { $in: winningUsers } },
//             { $set: { "users.$.isWinner": true } },
//             { new: true }
//         );

//         console.log("Users Updated Result:", updateUsers);

//         if (updateUsers.modifiedCount === 0) {
//             return res.status(400).json({ message: "No users were updated. Check if they exist in the document." });
//         }

//         console.log("Updated Winner Card and Users:", updatedCard);
//         res.status(200).json(updatedCard);

//     } catch (error) {
//         console.error("Error updating winner:", error);
//         res.status(500).json({ message: error.message });
//     }
// };


const placeBet = async (req, res) => {
    try {
        const { cardId } = req.params;
        const { user, points } = req.body;

        console.log("Placing Bet ->", { cardId, user, points });

        if (!user || !points || !cardId) {
            return res.status(400).json({ message: "User, points, and cardId are required." });
        }

        // ✅ Check if the card exists
        const findCard = await Card.findOne({ "cards._id": cardId });

        if (!findCard) {
            return res.status(404).json({ message: "Card not found." });
        }

        // ✅ Use `$[elem]` to update the specific card inside `cards`
        const updatedCard = await Card.findOneAndUpdate(
            { "cards._id": cardId },
            {
                $push: { "cards.$[elem].bets": { user, points, placedAt: new Date() } }
            },
            {
                new: true,
                arrayFilters: [{ "elem._id": cardId }], // 👈 Ensures only the matched card updates
                runValidators: true
            }
        );

        if (!updatedCard) {
            return res.status(404).json({ message: "Failed to update the card with the bet." });
        }

        console.log("✅ Bet placed successfully:", updatedCard);
        res.status(200).json({ message: "Bet placed successfully!", card: updatedCard });
    } catch (error) {
        console.error("❌ Error placing bet:", error);
        res.status(500).json({ message: "Internal server error.", error: error.message });
    }
};



module.exports = { selectCard, getCards, resetCards, updateWinner, placeBet };