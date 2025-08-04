// Padrão Singleton para gerenciar endpoints de URLs
export default class InterfacesURL {
  static #instance = null;

  constructor() {
    if (InterfacesURL.#instance) {
      return InterfacesURL.#instance;
    }
    // Campo inicializado a partir de variável de ambiente ou string vazia
    this.url_nota_entrada = 'http://192.168.1.5:8080/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_notafiscal?wsdl';
    InterfacesURL.#instance = this;
  }

  /**
   * Retorna a instância única de InterfacesURL
   */
  static getInstance() {
    if (!InterfacesURL.#instance) {
      InterfacesURL.#instance = new InterfacesURL();
    }
    return InterfacesURL.#instance;
  }

  /**
   * Define o valor de url_nota_entrada em tempo de execução
   * @param {string} url
   */
  setUrlNotaEntrada(url) {
    this.url_nota_entrada = url;
  }

  /**
   * Obtém o valor atual de url_nota_entrada
   * @returns {string}
   */
  getUrlNotaEntrada() {
    return this.url_nota_entrada;
  }
}