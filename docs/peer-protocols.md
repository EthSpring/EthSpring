---
title: Reading List
---

# Preface

Peer Protocols explain how nodes connect to each other, publish transactions and blocks to the blockchain, update the state of the network, and communicate information to each other.

# Non-blockchain Protocol Readings

Similar to Consensus Protocols, it's best to begin exploring general protocols that demonstrate the core challenges of Peer-to-Peer (P2P) systems.

[**Kademlia paper.**](https://www.scs.stanford.edu/~dm/home/papers/kpos.pdf) Or, an easier [**Kademlia overview.**](https://medium.com/coinmonks/a-brief-overview-of-kademlia-and-its-use-in-various-decentralized-platforms-da08a7f72b8f)

- Kademlia is an elegant protocol that shows how a new node chooses which nodes to connect to and how to find the nodes in the network that have the information you are looking for.

[**Bittorrent High Level Overview.**](https://skerritt.blog/bit-torrent/#-high-level-overview)

- There is a surprising amount of sophistication that goes into downloading a file efficiently! Contrast how simple this is in the centralized case: you open a TCP connection, maybe a TLS handshake, then you just download the bytes from first to last.

# Ethereum Readings

[**Ethereum Wire Protocol**](https://github.com/ethereum/devp2p/blob/master/caps/eth.md). 

- This shows the basic messages that Eth full nodes exchange with one another. I recommend skimming it with some questions in mind. If I send a transaction, how do all the other nodes find out about it? (This mechanism is called *gossiping*.) How do nodes avoid sending redundant information to a peer, say a transaction or a block that the peer already has?

[**Ethereum Light Client Protocol.**](https://eth.wiki/en/concepts/light-client-protocol)

- The light protocol is an (experimental, not yet widely used) extension to the base protocol. The goal is to download only the block headers, a tiny fraction of the size of the full transaction data. Then, when a light wallet wants to, for example, check its own balance, it asks peers for just the bits of state that it needs along with Merkle proofs.

Note: there are actually two light protocols. The official one, described above, is the Light Ethereum Subprotocol (LES). [**OpenEthereum has its own variant**](https://openethereum.wiki/The-Parity-Light-Protocol-%28PIP%29/) that aims to be faster.

Bonus, Vitalik on [**Data Availability and Erasure Coding**](https://github.com/ethereum/research/wiki/A-note-on-data-availability-and-erasure-coding). This isn't strictly about low-level peer protocols, but I think it's really interesting to keep in mind as we learn about older data exchange protocols like Bittorrent.