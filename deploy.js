const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//const HDWalletProvider = require('truffle/hdwallet-provider');

const { interface, bytecode } = require('./compile');

//const provider = new HDWalletProvider(
//  'knife garbage electric tissue search matter turkey treat alpha gallery security pony',
//  'https://rinkeby.infura.io/v3/6f436bc4056c49e1aa0b450b5fbc22f9'
//);

//const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('deploy from acc', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: bytecode})
   .send({gas: '1000000', from: accounts[0] });

  console.log('contract depl to', result.options.address);
};
deploy();

