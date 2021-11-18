const mongoose = require("mongoose");  

const HeavyMetalModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: Number },
    musica: { type: Date, default: Date.now } 
});

const HeavyMetal = mongoose.model("HeavyMetal",HeavyMetalModel); 

module.exports = HeavyMetal; 