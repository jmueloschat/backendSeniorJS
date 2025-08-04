class NotafiscalGravarNotasFiscaisEntrada12InModel  {

  constructor(options = {}) {
    this.dadosGerais = options.dadosGerais  || [];
    this.dataBuild = options.dataBuild ?? null;;
    this.fecNot = options.fecNot ?? null;
    this.flowInstanceID = options.flowInstanceID ?? null;
    this.flowName = options.flowName ?? null;
    this.gerPar = options.gerPar ?? null;
    this.origemES = options.origemES ?? null;
    this.prcDoc = options.prcDoc ?? null;
    this.tipCal = options.tipCal ?? null;
    this.tipoProcessamento = options.tipoProcessamento ?? null;
  }  

  toJSON() {
    return {
      dadosGerais: this.dadosGerais,
      dataBuild: this.dataBuild,
      fecNot: this.fecNot,
      flowInstanceID: this.flowInstanceID,
      flowName: this.flowName,
      gerPar: this.gerPar,
      origemES: this.origemES,
      prcDoc: this.prcDoc,
      tipCal: this.tipCal,
      tipoProcessamento: this.tipoProcessamento
    };
  }
  
  stringify() {
    return JSON.stringify(this.toJSON());
  }
    
}

export default NotafiscalGravarNotasFiscaisEntrada12InModel;