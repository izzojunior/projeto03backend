const mongoose = require("mongoose");  

const RockAndRollModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: Number },
    musica: { type: Date, default: Date.now } 
});

const RockAndRoll = mongoose.model("RockAndRoll",RockAndRollModel); 

module.exports = RockAndRoll