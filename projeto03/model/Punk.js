const mongoose = require("mongoose");  

const PunkModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: Number },
    musica: { type: Number }
});

const Punk = mongoose.model("Punk",PunkModel); 

module.exports = Punk;