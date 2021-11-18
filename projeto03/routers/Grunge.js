const express = require("express"); 
const router = express.Router(); 
const GrungeController = require("./../controller/Grunge.controller"); 

router.get('/listar',GrungeController.getAll);

router.get('/listarnome/:id', GrungeController.getSingle);

router.post('/adicionar', GrungeController.postCreate);

router.put('/update/:id', GrungeController.putUpdate);

router.delete("/deletar/:id", GrungeController.delDelete);

module.exports = router;