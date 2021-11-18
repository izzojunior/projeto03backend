const mongoose = require("mongoose");  

const GrungeModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: Number },
    musica: { type: Number }
});

const Grunge = mongoose.model("Grunge",GrungeModel); 

module.exports = Grunge;