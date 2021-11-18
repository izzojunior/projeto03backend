const express = require("express"); 
const router = express.Router(); 
const RockAndRollController = require("./../controller/RockAndRoll.controller"); 

router.get('/listar', RockAndRollController.getAll);

router.get('/listarnome/:id', RockAndRollController.getSingle);

router.post('/adicionar', RockAndRollController.postCreate);

router.put('/update/:id', RockAndRollController.putUpdate);

router.delete("/deletar/:id",RockAndRollController.delDelete);

module.exports = router;