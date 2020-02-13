/**
 * File used to test functions from Blockchain.js
 */
const Blockchain = require('../src/Blockchain');
const bitCoin = new Blockchain();
const prevHash = 'ABC';
const currBlockData = [
    {
        amount: 100,
        send: 'JILL1',
        recipient: 'JACK'
    },
]
const nonce = 13;
const hash = bitCoin.hashBlock(prevHash, currBlockData, nonce);
console.log(hash);