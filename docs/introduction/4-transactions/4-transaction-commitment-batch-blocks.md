---
title: "4.4 Transactions and blocks"
id: 4-transaction-commitment-batch-blocks
---

**Transactions are committed to the network in batches, or "blocks"**

Dozens of transaction requests are propagated around the Ethereum network per second. Simultaneously, miners verify, execute, and propagate state change associated with dozens of transactions per second. Because of latency and the nature of the network, it may be the case that two miners hear about, execute, and start propagating the result of two different transactions requests before they hear about each others’. Given this, how do we ensure that all participants on the network maintain a synchronized state and agree on the precise history of transactions?

One solution is by batching transactions, so that batches of dozens (or hundreds) of transactions are committed, agreed on, and synchronized on all at once. By spacing out commits, we give all network participants enough time to come to consensus: even though transaction requests occur dozens of times per second, batches on Ethereum are committed approximately once every fifteen seconds. We call these batches of transactions blocks. To preserve the transaction history, blocks are strictly ordered (every new block created contains a reference to its parent block), and transactions within blocks are strictly ordered as well. Except in rare cases, at any given time, all participants on the network are in agreement on the exact number and history of blocks, and are working to batch the current live transaction requests into the next block.

Once a block is put together (mined) by some miner on the network, it is propagated to the rest of the network; all nodes add this block to the end of their blockchain, and mining continues. The exact block-assembly (mining) process and commitment/consensus process is currently specified by Ethereum’s “Proof-of-Work” protocol.

The specific details and implications of Ethereum’s current Proof-of-Work consensus protocol will be discussed in a later section. However, for now it suffices to know that the Proof-of-Work protocol has the following properties:

- Mining nodes have to spend a variable but substantial amount of energy, time, and computational power to produce a “certificate of legitimacy” for a block they propose to the network. This helps protect the network from spam/denial-of-service attacks, among other things\*, since certificates are expensive to produce.
- Other miners who hear about a new block with a valid certificate of legitimacy must\* accept the new block as the canonical next block on the blockchain.
- The exact amount of time needed for any given miner to produce this certificate is a random variable with high variance. This ensures that it is unlikely* that two miners produce validations for a proposed next block simultaneously; when a miner produces and propagates a certified new block, they can be almost certain that the block will be accepted by the network as the canonical next block on the blockchain, without conflict* (though there is a protocol for dealing with conflicts as well in the case that two chains of certified blocks are produced almost simultaneously).

A final important note is that blocks themselves are bounded in size. Each block has a block gas limit which is set by the network and the miners collectively: the total amount of gas expended by all transactions in the block must be less than the block gas limit. This is important because it ensures that blocks can’t be arbitrarily large. If blocks could be arbitrarily large, then less performant full nodes would gradually stop being able to keep up with the network due to space and speed requirements. The block gas limit at block 0 was initialized to 5,000; any miner who mines a new block can alter the gas limit by up to about 0.1% in either direction from the parent block gas limit. The gas limit as of November 2018 currently hovers around 8,000,000.

- The implications of proof-of-work are fairly nuanced, and all of these statements are not true, though in practice these properties usually hold.

  strictly
