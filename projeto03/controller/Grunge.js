const Grunge = require("./../model/Grunge"); 

function validaEntrada(res,requisicao){
    if(!requisicao.nome){
        res.status(400).json({message: "Faltou o nome"});
        return true;
    }else if(!requisicao.vocalista){
        res.status(400).json({message: "Faltou o vocalista"});
        return true;
    }else if(!requisicao.ano){
        res.status(400).json({message: "Faltou o ano de lançamento da banda"});
        return true;
    }else if(!requisicao.musica){
        res.status(400).json({message: "Faltou a música"});
        return true;
    }
}

function validaID(res,id){
    if(id.length != 24){
        res.status(400).json({message: "Erro no ID"});
        return true;
    }
}

exports.getAll = async (req,res) => {
    await Grunge.find({}).then((Grunge) => { 
        res.status(200).json(Grunge);
    }).catch((err) => {
        res.status(404).json({message:"Não foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => { 
    if(validaID(res,req.params.id)) return;
    await Grunge.findById(req.params.id).then((Grunge) => {
        res.status(200).json(Grunge);
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma banda encontrada"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => { 
    if(validaEntrada(res,req.body)) return;
    await Grunge.create(req.body).then( () => {
        res.status(201).json({message: "Banda inserida"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    if(validaEntrada(res,req.body)) return;
    await Grunge.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Banda atualizada"})
    }).catch((err) => {
        res.status(400).json({message: "ERROR"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    await Grunge.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Banda deletada"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma banda encontrada"});
        console.error(err);
    });
}