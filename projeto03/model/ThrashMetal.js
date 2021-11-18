const mongoose = require("mongoose");  

const ThrashMetalModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: Number },
    musica: { type: Date, default: Date.now } 
});

const ThrashMetal = mongoose.model("ThrashMetal",ThrashMetalModel); 

module.exports = ThrashMetal