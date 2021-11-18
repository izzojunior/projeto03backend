const express = require("express"); 
const router = express.Router(); 
const ThrashMetalController = require("./../controller/ThrashMetal.controller"); 

router.get('/listar',ThrashMetalController.getAll);

router.get('/listarnome/:id', ThrashMetalController.getSingle);

router.post('/adicionar', ThrashMetalController.postCreate);

router.put('/update/:id', ThrashMetalController.putUpdate);

router.delete("/deletar/:id", ThrashMetalController.delDelete);

module.exports = router;