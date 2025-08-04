
import e440nfcService from './e440nfcService.js';


async function criaDadosGerais(codemp, codfil, codsnf, numnfc, codfor){
  const e440nfc = await e440nfcService.getItem(codemp, codfil, codsnf, numnfc, codfor);
  return e440nfc;
}

async function criaProdutos(codemp, codfil, codsnf, numnfc, codfor){
  const e440ipc = await e440nfcService.getAllProdutos(codemp, codfil, codsnf, numnfc, codfor);  
  return e440ipc;
}

async function criaRateios(codemp, codfil, codsnf, numnfc, codfor,seqipc){
  const e440rat = e440nfcService.getAllRateio(codemp, codfil, codsnf, numnfc, codfor, produtoItem.seqipc);
  return e440rat;      
} 


export default {
  criaDadosGerais, criaProdutos, criaRateios
}