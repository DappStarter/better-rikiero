require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rice pizza honey grace nature slot genre'; 
let testAccounts = [
"0xc2fc9f709255a0f34bd43f9f7b44c11e1cc600d7c7c808621a32c2b1fe6fca34",
"0xda9e8cf55ab1176624064c4f51a5d1375b6a993e2d7e840b3d54ba4ccff13b3d",
"0x5b848240d3676937ed98ac6b8b3937f0c3a1beb08a5e2885f8e4029c9457cfdb",
"0x7be42e3d737ea5e82f9c240885948d7706a4efb269c3e30cfc909bdf5d4612f2",
"0x9e557e6a73f69b5b7579acfe0b7b7782fbe46687f01832b3207e19d870880c7f",
"0x10e4fb9a6c0873a4277358ec290c797b515319fec5a201b146cf6762b48dcd69",
"0x037a39363cafc1c3b6b62b002e2a2aea3468dd4950e632f5d53568d43eec93ff",
"0xf7bf338a702d9470cf56b75941492957afd26c3f99b515190dd976c1e7ffd96a",
"0x284482a9994e594879b983db8389b77234d52a2d5249ad8ef7a46d3739dbf042",
"0x34443a337c226c97dfe4ffcfb8cd73e2ea8585cbf2761799fcd5484c667b50ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
