import NotaEntrada12Service from '../services/NotaEntrada12Services.js';
// GET 
async function getId(req, res){
  try {
    const codemp = parseInt(req.params.codemp);
    const codfil = parseInt(req.params.codfil);
    const codsnf = req.params.codsnf;
    const numnfc = parseInt(req.params.numnfc);
    const codfor = parseInt(req.params.codfor);

    const result = await NotaEntrada12Service.gravarNotasFiscaisEntrada_12Async(codemp,codfil,codsnf,numnfc,codfor);

    if(!result){
      return res.status(200).json({erro: `e440nfc ${numnfc} não encontrada`});
    }    

    res.status(200).send({result});

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export default { getId };

