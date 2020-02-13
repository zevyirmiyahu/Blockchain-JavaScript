
const sha256 = require('sha256');

function Blockchain() {
    this.chain = []; // Where all block are stored
    this.pendingTransactions = []; // transactions placed here before into a block
}   


/**
 * Method for creating new block
 * 
 * nonce:   Number used Once, number used to make a hash valid for a particular block.
 *          Gold of the miner is to figure out this number, to validate the block.
 * 
 * previousHash:
 * 
 * hash:
 */
Blockchain.prototype.createNewBlock = function(nonce, previousHash, hash) {
    const newBlock = {
        index: this.chain.length + 1, // the number of the block within the chain (BitCoin, this is called height)
        timeStamp: Date.now(), // when the block was created
        transactions: this.pendingTransactions, // put all pending transactions into block
        nonce: nonce, // Number used Once, validates block
        hash: hash, // hash of current block
        previousHash: previousHash // hash of the previous block
    };

    this.pendingTransactions = []; // reset transactions array
    this.chain.push(newBlock); // add the new block
    return newBlock;
}


// Returns the newest block on the chain, last block added
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

/**
 * Creates a newTransaction object, 
 * Adds it to pendingTransactions,
 * returns number of the block transaction is added to.
 * *NOTE: any new transaction is pending by default.
 * 
 * amount:      amount being sent in transaction
 * sender:      address of the sender
 * recipient:    address of the recipient
 */
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock().index + 1; //['index'] + 1;
}

// Takes a block and returns a hash for that block
Blockchain.prototype.hashBlock = function(previousHash, currentBlockData, nonce) {
    const dataAsString = previousHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

/**
 * returns a valid nonce, to prove (solve) the the problem of finding which nonce
 * makes a valid hash. A valid hash here is defined by a hash that has four leading
 * zeros. proofOfWork is then varified easily by other miners,
 * that then confirm the nonce.
 */
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    // a valid hash has four leading zeros
    const nonce = 0;
    while(true) {
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        if(hash.substring(0, 4) === '0000') return nonce;
        else nonce++;
    }
}

module.exports = Blockchain;