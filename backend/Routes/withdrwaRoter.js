const express = require("express");
const router = express.Router();
const withdrawController = require("../controller/withdrawController");

// Route to create a withdrawal request
router.post("/withdraw", withdrawController.createWithdrawal);

// Route to fetch all withdrawals
router.get("/get-all-withdraw", withdrawController.getAllWithdrawals);

module.exports = router;