/**
 * File used to test functions from Blockchain.js
 */
const Blockchain = require('../src/Blockchain');

const bitCoin = new Blockchain();

bitCoin.createNewBlock(8973621, 'asnfddsWRT0!?9', 'ANDDBB#DS231');
bitCoin.createNewTransaction(100, '89ty', '23WP');
bitCoin.createNewBlock(8973621, '77', '1234');

bitCoin.createNewTransaction(50, '89ty', '23WP');
bitCoin.createNewTransaction(700, '89ty', '23WP');
bitCoin.createNewTransaction(1400, '89ty', '23WP');


console.log(bitCoin);