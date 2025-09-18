import e440nfcService from "../services/e440nfcService.js";
import e440nfcModel from "../models/e440nfcModel.js";

async function carrega(req, res) {

    const codemp = parseInt(req.params.codemp);
    const codfil = parseInt(req.params.codfil);
    const codsnf = req.params.codsnf;
    const numnfc = parseInt(req.params.numnfc);
    const codfor = parseInt(req.params.codfor);

    const result = await e440nfcService.getItem(codemp,codfil,codsnf,numnfc,codfor);

    if(!result) {
        return res.status(404).json({erro: `e440nfc ${numnfc} não encontrada`});
    }

    return res.status(200).send(new e440nfcModel(result));    
}

export default { carrega };