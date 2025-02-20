const User = require("../models/UserSignUp");
const User_Wallet = require("../models/Wallet");
const Withdraw = require("../models/withdrawModel");

// 🔸 Create a new withdrawal request
exports.createWithdrawal = async (req, res) => {
    try {
        const { user, phoneNumber, userName, email, withdrawAmount, upi_id , status} = req.body;
        console.log(withdrawAmount)
        // Validation
        if (!user || !withdrawAmount) {
            return res.status(400).json({
                success: false,
                message: "User ID and Withdraw Amount are required",
            });
        }
        const wallet = await User_Wallet.findOne({ user });
        const userData = await User.findById(user)
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        } else if (wallet.balance >= withdrawAmount && status === "Approve") {
            wallet.balance -= withdrawAmount;  // Add winnings
            userData.walletBalance -= withdrawAmount
        }
        // Save withdrawal
        const newWithdrawal = new Withdraw({
            user,
            upi_id,
            phoneNumber,
            userName,
            email,
            wthdrawAmount: withdrawAmount, // Match schema field
        });

        const savedWithdrawal = await newWithdrawal.save();
        await wallet.save()
        await userData.save()
        res.status(201).json({
            success: true,
            message: "Withdrawal request created successfully",
            data: savedWithdrawal,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// 🔸 Get all withdrawal requests
exports.getAllWithdrawals = async (req, res) => {
    try {
        const withdrawals = await Withdraw.find().populate("user");

        res.status(200).json({
            success: true,
            data: withdrawals,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch withdrawals",
        });
    }
};