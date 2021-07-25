---
title: "3.3 What is an Ethereum Node?"
id: 3-what-is-an-ethereum-node
---

Ethereum nodes are computer programs that communicate with each other in accordance with the Ethereum protocol. In this section, we’ll explain what an Ethereum node is, as well the different types of nodes.

There are several different types of nodes. The most important is the full node. This is usually what people refer to when they talk about “running an Ethereum node.”

## Types of Nodes

### Full Node

A client which runs a full node:

- Stores the latest state of the EVM completely: this includes all of the user accounts and their balances, all of the smart contract accounts and their balances and code, all metadata about accounts and contracts, and all other persistent smart contract data.
- Receive, stores, and gossips new transaction requests: recall that transactions are any request for code execution that changes the state of the EVM. Before a transaction is executed and included in the blockchain, it must be requested by some participant, and the request must be made known throughout the network. The most common type of transaction request looks something like “Alice requests 10 ether be transferred from her account to Bob’s account.”
- Receives, stores, and gossips new blocks: blocks are batches of transactions that have been verified, executed, and “committed” by the network (again, more on this later). Upon hearing about a block, the full node verifies the validity of the block, alters the state of its local EVM copy by executing all of the transactions in the block, appends the block to its copy of the blockchain (the history of all blocks), and then sends the block data to its peers who have not yet heard about the block.
- Is capable of making transaction requests: each transaction request has to originate from some node. Any user interested in making a transaction request to the network must do so by sending their request out from a node.

Note also that a node **does not** correspond to an account. Rather, nodes are vehicles which anyone can use to interact with the Ethereum universe; accounts are primitives which live inside the universe. For example, anyone with the private key to an account can write a transaction request to transfer ether out of the account, sign it with the private key, and then send the signed transaction request to the network by propagating it from any node.

In general, if you have a good Internet connection, running a node is beneficial to the health of the Ethereum network and is broadly good for keeping the network decentralized. Firstly, a node with good connection improves the connectivity of the network, linking peers who might otherwise take longer to communicate. Secondly, if only a few operators ran nodes, the network would look much more centralized, and in this way would be much more vulnerable to either censorship or targeted attack.

Running a full node takes 100-200GB+ of hard drive space. Because a full node needs to download the full history of the blockchain, updating and verifying the EVM state as it goes, the time between starting a full node client for the first time and catching up to the latest blocks can be hours to days.

### Full Archival Node

A full archival node is a full node that also stores a snapshot of what the complete EVM state was at every block in the history of Ethereum. If you were running a full archival node as of block 5,000,000, your computer was storing 5 million EVM state snapshots (one corresponding to the state as of each block).

Running a full archival node takes 1TB+ of hard drive space. For nearly all purposes, running a full archival node generally doesn’t provide advantage over running a regular full node.

### Mining Node

Earlier we mentioned that full nodes can receive, store, and gossip new blocks (batches of verified and executed transactions) to each other. Of course, new blocks have to be created by someone!

All new blocks are constructed by and originate from some node in the network. Any full node can spend computational resources batching, executing, and “committing” unfulfilled transaction requests, in exchange for transaction fees and a network reward. These unfulfilled transaction requests are executed locally, aggregated into a block, and propagated to the rest of the network. This process of batching and committing transactions is called mining; nodes that mine are called miners.

“Committing” transactions involves performing a lot of intensive computation, in a process called Proof-of-Work. Miners use specialized mining software such as [ethminer](https://github.com/ethereum-mining/ethminer), and often perform these computations on dedicated GPUs. We’ll talk in more detail about transactions, mining, blocks, and Proof of Work later.

### Light Node

Not everyone has the ability to run a full Ethereum node due to the space, networking, and computation requirements. This is a problem because a central tenet in the design of many decentralized systems is that the cost of participation must be low.

Such users have two options:

- They can either connect to the Ethereum network by communicating with someone who run a node, asking that node to send transaction requests and querying the node for relevant information about the blockchain (such as account balances). This is somewhat at odds with the philosophy of the Ethereum project and of decentralized projects broadly, as it encourages reliance on centralized service providers who have the resources to run nodes.

- They can run a *light node*, also known as a *light client*. Running a light node allows you to participate directly in the Ethereum network (sending transaction requests, reading blockchain data) without having hundreds of GB of free space, albeit in a limited fashion.

Light nodes are extremely important because they allow for more widespread participation in the Ethereum network. We outline the key functionality of a light node below:

- **A light node does not store the full state of the EVM**. Rather, it stores a sort of “checksum” (basically a hash) of the EVM state, and requests data about the EVM state on-demand from full node peers, using the checksum to verify the validity of the data. For example, if I’m running a light node on my computer, my computer does not store the exact balance in Alice’s account; however, since my light node connects to a full node which does store this balance, I can request the balance data, and then check this with my checksum of the EVM state. The particular mechanism/data structure which allows me to verify validity quickly with only a checksum is outlined later, in the section on Merkle Trees.
- **A light node by default does not store all block data—only block headers.** When a new block is propagated to the network, light clients only receive the block header (which includes a block data checksum and other basic metadata) from full node peers. If a light node wants to know about a particular transaction in a block, it requests that particular transaction data from a full node peer, and then validates the data against the block checksum.
- **A light node can make transaction requests to the network**. Any user can write (and sign) a transaction request and broadcast it to the network from the light node. The light node propagates the transaction request to its full node peers, which in turn propagate the request to the rest of the network.
- **Light nodes only connect to full nodes, and generally take up network resources rather than providing them.** Light clients don’t store the full EVM state or full block data, so there is no reason for them to connect to each other. Since they are constantly requesting data and never passing on data, they are a drain on the bandwidth and network resources of full node peers. Running light nodes does not improve the health of the network.
- **Light clients can’t mine**. You need to run a full node to mine.

## Ethereum Node Clients

There are multiple Ethereum node clients. The most popular and well-maintained are Geth and Parity (now OpenEthereum).

You can find a list of most Ethereum node clients in the [Ethereum Github project wiki](https://github.com/ethereum/wiki/wiki/Clients,-tools,-dapp-browsers,-wallets-and-other-projects#ethereum-clients). The Ethereum Homestead Documentation has a good [summary](http://ethdocs.org/en/latest/ethereum-clients/choosing-a-client.html#why-are-there-multiple-ethereum-clients) of why having multiple node clients is generally good for the ecosystem. Finally, [this article](https://www.sitepoint.com/an-introduction-to-geth-and-running-ethereum-nodes/) has a great tutorial about how to set up and run Geth, as well as an explanation of the different kinds of clients (discussed above).

We recommend using Geth if you are interested in running your own Ethereum node. We’ll walk through how to set up a Geth node in a later sections.
