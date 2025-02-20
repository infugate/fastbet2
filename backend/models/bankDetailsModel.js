const mongoose = require('mongoose');
const bankDetailsSchema = new mongoose.Schema({
    
    upi_id: { type: String },
    account_No: { type: String },
    accoundHolderName: { type: String },
    qrCode: { type: String },


}, { timestamps: true });
const bankDetailsModel = mongoose.model('bankDetails', bankDetailsSchema);
module.exports = bankDetailsModel;