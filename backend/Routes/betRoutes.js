const express = require('express');
const router = express.Router();
// const betController = require('../controller/betController');
const betController = require('../controller/betController');

// Define routes
router.post('/api/bids', betController.placeBid); 
router.get('/api/bets/:userId', betController.getUserBets);
router.post('/wallet/update',betController.updateWallet);



router.get('/api/users/admin', betController.getAllAdminUser);
router.get('/api/users/admin2', betController.getAllAdminUser2);
router.put('/api/users/admin/:userId', betController.updateUser);
// router.get('/api/bets/:userId', betController.getUserBets);
// router.post('/wallet/update',betController.updateWallet);
// router.delete('/api/bets', betController.resetBets);

module.exports = router;