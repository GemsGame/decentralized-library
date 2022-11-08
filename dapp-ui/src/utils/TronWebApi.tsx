declare global {
  interface Window {
    tronWeb: any;
  }
}

class TronWebApi {
  tronweb: any;

  constructor() {
    this.tronweb = {};
    /// this.tronweb = window.tronWeb;
  }

  getWalletProveider() {
    this.tronweb = window.tronWeb;
    this.tronweb.trx
      .getAccount("TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL")
      .then((result: any) => console.log(result));
  }
}

export const tronweb = new TronWebApi();
