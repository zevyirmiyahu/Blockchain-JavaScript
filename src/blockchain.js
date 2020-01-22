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
        index: this.chain.length + 1, // the number of the block within the chain
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
Blockchain.prootype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

/**
 * Creates a newTransaction object, 
 * Adds it to pendingTransactions,
 * returns number of the block transaction is added to
 * 
 * amount:      amount being sent in transaction
 * sender:      address of the sender
 * recipient:    address of the recipient
 */
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction ={
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock().index + 1;
}


module.exports = Blockchain;