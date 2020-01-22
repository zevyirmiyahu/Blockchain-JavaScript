/**
 * File used to test functions from Blockchain.js
 */
const Blockchain = require('../src/Blockchain');

const bitCoin = new Blockchain();
bitCoin.createNewBlock(11, 'N667F2WW1032999', 'N667F2WW1032321');
bitCoin.createNewBlock(11, 'N667F2WW103QWRE', 'N667F2WW103PLK7');
bitCoin.createNewBlock(11, '0L@7F2WW1032999', '&&!7F2WW103!!8!');

console.log(bitCoin);