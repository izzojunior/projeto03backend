const express = require("express"); 
const router = express.Router(); 
const HeavyMetalController = require("./../controller/HeavyMetal.controller"); 

router.get('/listar', HeavyMetalController.getAll);

router.get('/listarnome/:id', HeavyMetalController.getSingle);

router.post('/adicionar', HeavyMetalController.postCreate);

router.put('/update/:id', HeavyMetalController.putUpdate);

router.delete("/deletar/:id", HeavyMetalController.delDelete);

module.exports = router;