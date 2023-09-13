require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
const mnemonicPhrase = process.env.MNEMONIC_PHRASE;
const providerUrl = process.env.SEPOLIA_URL;

// deploy code will go here
const provider = new HDWalletProvider(mnemonicPhrase, providerUrl);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi There!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contact deployed to", result.options.address);

  provider.engine.stop();
};

deploy();
