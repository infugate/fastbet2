const express = require("express");
const addPointModel = require("../models/addPointModel");
const uploader = require("../middlware/upload");
// const addPointRouterNew = express.Router()
const cloudinary = require('../middlware/cloudinary');
const User = require("../models/UserSignUp");
const User_Wallet = require("../models/Wallet");
const router = express.Router()
router.post("/add-more-points", uploader.single("screenShotPic"), async (req, res) => {
    try {
        const { user, phoneNumber, deposite, status } = req.body;
        const upload = await cloudinary.v2.uploader.upload(req.file.path);
        const wallet = await User_Wallet.findOne({ user });
        const userData = await User.findById(user)
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        } else if (wallet.balance >= deposite && status === "Approve") {
            wallet.balance += deposite;  // Add winnings
            userData.walletBalance += deposite
        }else {
            wallet.balance = wallet.balance;  // Add winnings
            userData.walletBalance = userData.walletBalance
        }

        const data = await addPointModel.insertMany({
            user,
            phoneNumber,
            screenShotPic: upload.secure_url,
            deposite,
            Date: Date.now()
        })
        await wallet.save()
        await userData.save()
        return res.status(200).json({
            success: true,
            result: data
        });
    }

    // }
    catch (e) {
        console.log(e)
        res.status(404).json({
            status: "Failed",
            message: e.message,

        })
    }
});

module.exports = router