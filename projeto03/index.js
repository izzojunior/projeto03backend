const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json());  

const Conn = require("./model/conn/index"); 

Conn(); 

app.get('/', (req,res) => {
    res.status(200).json({message:"rota index ok"});
})

const HeavyMetalRouter = require("./routers/heavy metal.routes");
app.use('/HeavyMetal', HeavyMetalRouter);

const RockAndRollRouter = require("./routers/Rock And Roll.routes");
app.use('/RockAndRoll',RockAndRollRouter);

const ThrashMetalRouter = require("./routers/thrash metal.routes");
app.use('/ThrashMetal',ThrashMetalRouter);

const PunkRouter = require("./routers/Punk.routes");
app.use('/Punk',PunkRouter); 

const GrungeRouter = require("./routers/Grunge.routes");
app.use('/Grunge',grungeRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});