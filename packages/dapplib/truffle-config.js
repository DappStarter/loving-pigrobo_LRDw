require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index return pitch unusual hunt beach slot gesture'; 
let testAccounts = [
"0x80f5ad7bf9536709c6ba6007fd287c1e79900b342bd984913f23705702dfa9f9",
"0xe9e7a197745f094a0df1687d1c300ee155dbfdbc67490a337034f1ba2e09a104",
"0x51667e0ab4220a2b5d098afea7f0e40d95f0f18671efa55eb3fdb0fbe24c2fb9",
"0xfdc9069412e08a2e7c0cb5f6fd9855fafbd1aef29725230914837db9842a42ea",
"0xfe70b2648a31c0664646d007fe6f00bfee42f4d8335f1af58f9b0c36bac412ae",
"0xcbcc210fe6f08c34f9e620a0f3744c20ce71e21446a2420b9e9cab02be30c481",
"0xcb88a5a5155e33481eb498f172e230b216b03ff6c1b1cbc839de57564cb6c4f8",
"0xc8a8ff206b796a82758f611c826dc9cabb67f2326a71e67d5d5d11e94a0d7ebf",
"0x1e03a1c929fe6ff298593d13db2eae905009c3f4e9570994f6a739322d12776f",
"0xab3e7034543d2b974392383a9776585d2a7c11c0050343d497f8eb627652f36f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


