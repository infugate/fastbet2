const express = require('express');
const papuController = require('../controller/pappucontroller');
const papuRouter = express.Router();

papuRouter.get('/api/pappu/bets/:userId', papuController.getBetByUserId);
papuRouter.post('/api/bets', papuController.createBet);
papuRouter.get('/bets', papuController.getBets);
papuRouter.get('/bets/:id', papuController.getBetById);
papuRouter.put('/bets/:id', papuController.updateWinnings);
papuRouter.delete('/bets/:id', papuController.deleteBet);
papuRouter.get("/api/admin/getPapus", papuController.getBets);
module.exports = papuRouter;