var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "crater close lunar fitness uphold glue morning resemble suspect cigar front roast";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 4712388,
      gasPrice: 100000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};