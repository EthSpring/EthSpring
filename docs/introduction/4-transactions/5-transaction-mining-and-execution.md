---
title: "4.5 Transaction mining and execution"
id: 5-transaction-mining-and-execution
---

**Transactions are mined once, but executed by everyone**

Now we can walk through the full life cycle of a transaction.

**First,** a user writes and signs a transaction request with the private key of some account.

**Second**, the user broadcasts the transaction request to the entire Ethereum network from some node.

**Third**, upon hearing about the new transaction request, each node in the Ethereum network adds the request to their local mempool, a list of all transaction requests they’ve heard about that have not yet been committed to the blockchain in a block.

**Fourth**, at some point, a mining node aggregates several dozen or hundred transaction requests into a potential block, in a way that maximizes the transaction fees they earn while still staying under the block gas limit. The mining node then:

1. Verifies the validity of each transaction request (i.e. no one is trying to transfer ether out of an account they haven’t produced a signature for, the request is not malformed, etc.), and then executes the code of the request, altering the state of their local copy of the EVM. The miner awards the transaction fee for each such transaction request to their own account.
2. Begins the process of producing the Proof-of-Work “certificate of legitimacy” for the potential block, once all transaction requests in the block have been verified and executed on the local EVM copy.

**Fifth**—eventually, a miner will finish producing a certificate for a block which includes our specific transaction request. The miner then broadcasts the completed block, which includes the certificate and a checksum of the claimed new EVM state.

**Sixth,** other nodes hear about the new block. They verify the certificate, execute all transactions on the block themselves (including the transaction originally broadcasted by our user), and verify that the checksum of their new EVM state after the execution of all transactions matches the checksum of the state claimed by the miner’s block. Only then do these nodes append this block to the tail of their blockchain, and accept the new EVM state as the canonical state.

**Seventh**, each node removes all transactions in the new block from their local mempool of unfulfilled transaction requests.

**Lastly**, new nodes joining the network download all blocks in sequence, including the block containing our transaction of interest. They initialize a local EVM copy (which starts as a blank-state EVM), and then go through the process of executing every transaction in every block on top of their local EVM copy, verifying state checksums at each block along the way.

Every transaction is mined (included in a new block and propagated for the first time) once, but executed and verified by every participant in the process of advancing the canonical EVM state. This highlights one of the central mantras of blockchain: *Don’t trust, verify*.

In the next section, we’ll walk through the above steps with an actual transaction.
