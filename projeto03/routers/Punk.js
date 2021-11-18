const express = require("express"); 
const router = express.Router(); 
const PunkController = require("./../controller/Punk.controller"); 

router.get('/listar', PunkController.getAll);

router.get('/listarnome/:id', PunkController.getSingle);

router.post('/adicionar', PunkController.postCreate);

router.put('/update/:id', PunkController.putUpdate);

router.delete("/deletar/:id",PunkController.delDelete);

module.exports = router;