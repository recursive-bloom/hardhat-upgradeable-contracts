/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-truffle5");


const { alchemyApiKey, mnemonic, projectId, etherscanApiKey, privateKey } = require('./secrets.json');
// const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

module.exports = {
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: false
            }
        }
    },
    networks: {
        rinkeby: {
            // url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
            url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            accounts: {
                mnemonic: mnemonic
            },
        },
        testnet: {
            url: `https://http-testnet.hecochain.com`,
            chainId: 256,
            gas: 'auto',
            gasPrice: "auto",
            // accounts: {mnemonic: mnemonic},
            accounts:[privateKey],
            timeout: 300000,
        },
        mainnet: {
            url: "https://http-mainnet.hecochain.com",
            chainId: 128,
            gas: 3000000,
            gasPrice: 3000000000,
            // accounts: {mnemonic: mnemonic},
            accounts:[privateKey],
            timeout: 3000000,
        },

        polygon: {
            url: `https://rpc-mainnet.maticvigil.com/`,
            chainId: 137,
            // gas: 5000000,
            // gasPrice: 1000000000,
            accounts: {mnemonic: mnemonic},
            timeout: 3000000,
        },
        mumbai: {
            url: `https://rpc-mumbai.maticvigil.com/`,
            chainId: 80001,
            // gas: 2000000,
            gasPrice: 5000000000,
            accounts: {mnemonic: mnemonic},
            timeout: 3000000,
        },

        localhost: {
            url: "http://127.0.0.1:8545"
        }
    },
    etherscan: {
        apiKey: etherscanApiKey,
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    // mocha: {
       // timeout: 10000000
    // }
};
