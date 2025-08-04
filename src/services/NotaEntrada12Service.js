import soap from 'soap';
import dotenv from 'dotenv';
dotenv.config();
import notaEntradaService from './NotaEntradaServiceDB.js';
import InterfacesURL from '../services/InterfacesURL.js';
import NotafiscalGravarNotasFiscaisEntrada12InModel from '../models/NotafiscalGravarNotasFiscaisEntrada12InModel.js';
import NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel from '../models/NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel.js';
import NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosModel from '../models/NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosModel.js'; 
import NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosRateioModel from '../models/NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosRateioModel.js';



//const WSDL_URL = 'http://192.168.1.5:8080/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_notafiscal?wsdl';

async function carregaNotasFiscaisEntrada12(codemp, codfil, codsnf, numnfc, codfor){
  const notafiscalGravarNotasFiscaisEntrada12InModel = 
    new NotafiscalGravarNotasFiscaisEntrada12InModel({ 
          dadosGerais: []
         ,fecNot: 1
         ,gerPar: 0
         ,tipCal: 0
         ,tipoProcessamento: 1 
        }
  );
  
  const notafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel = new NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel(await notaEntradaService.criaDadosGerais(codemp, codfil, codsnf, numnfc, codfor));   
  let produtos = await notaEntradaService.criaProdutos(codemp, codfil, codsnf, numnfc, codfor);
  produtos = produtos.map(produtoItem => {
    const produto = new NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosModel(produtoItem);    
    const e440rat = null; //notaEntradaService.criaRateios(codemp, codfil, codsnf, numnfc, codfor, produtoItem.seqipc); //await?
    if(e440rat && e440rat.length > 0){
      const rateio = e440rat.map(rateioItem => new NotafiscalGravarNotasFiscaisEntrada12InDadosGeraisProdutosRateioModel(rateioItem));
      if(rateio && rateio.length > 0){
        produtoItem.rateio = rateio;
      }        
    }

    return produto;
  });

  notafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel.produtos = produtos;
  notafiscalGravarNotasFiscaisEntrada12InModel.dadosGerais = notafiscalGravarNotasFiscaisEntrada12InDadosGeraisModel;
  return notafiscalGravarNotasFiscaisEntrada12InModel;  
}

async function getArgs(codemp, codfil, codsnf, numnfc, codfor) {
  const notafiscalGravarNotasFiscaisEntrada12InModel = await carregaNotasFiscaisEntrada12(codemp, codfil, codsnf, numnfc, codfor);
    
  const args =  {
    user: process.env.SENIOR_USER,
    password: process.env.SENIOR_PASSWORD,
    encryption: 1,
    parameters: notafiscalGravarNotasFiscaisEntrada12InModel      
  }

  return args;
}

async function getParams(codemp, codfil, codsnf, numnfc, codfor){
  const options = {timeout: 60000};
  const extraHeaders = {};  
  const args = await getArgs(codemp, codfil, codsnf, numnfc, codfor);
  const params = {args, options, extraHeaders};  
  return params;
}

async function gravarNotasFiscaisEntrada_12Async(codemp, codfil, codsnf, numnfc, codfor) {
  //1, 1, '1E', 20840, 444445872
  try {
    const client = await soap.createClientAsync(InterfacesURL.getInstance().getUrlNotaEntrada());
    const params = await getParams(codemp, codfil, codsnf, numnfc, codfor);
    const [response, rawResponse, soapHeader, rawRequest] = await client.GravarNotasFiscaisEntrada_12Async(params.args, params.options, params.extraHeaders);

    let mensagemRetorno = response.result;
  
    if (response.result.tipoRetorno){
      if(response.result.tipoRetorno === '2'){
  
        if(response.result.mensagemRetorno){
          mensagemRetorno = response.result.mensagemRetorno;
        }
        
        if(response.result.retornosNotasEntrada.retorno){
          mensagemRetorno = response.result.retornosNotasEntrada.retorno;
        }
      }
    }
  
    return mensagemRetorno;    
  } catch (error) {

    return error.message;

    //error.code 'ETIMEDOUT'
    //serviço middle fora do ar
  }
  
}

export default {
  gravarNotasFiscaisEntrada_12Async
}
