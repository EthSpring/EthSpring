---
title: "Peer-to-Peer Systems"
id: 2-peer-to-peer-systems
---

Ethereum, Bitcoin, and other cryptocurrencies are based on peer-to-peer networks (P2P).

The proposed applications of Pigeon Internet described in the previous section all involve a trusted central authority, who manages and stores data and responds to all requests. This design pattern is often referred to as the client-server model, or the hub-and-spoke model.

In the client-server model, most participants on the network (clients) only communicate with centralized service providers (servers)--for example, in the content distribution case, everyone interested in sending or receiving news communicates only with the news operator. Servers are generally considered the source of truth for all data, and all communications between clients pass through the server. Servers also have ultimate authority over how data can be accessed and manipulated.

The client-server model is often the most efficient way to architect many applications. The number of connections needed in such a system is linear, and there is a clear answer to the potential consensus problems which can come up due to network latency or malicious external actors: the server is always right.

Generally, we call systems modeled after the client-server model centralized, because they require a central authority to do most of the heavy lifting (recording data, relaying and responding to messages). However, there are certain cases where we’d like to build applications on decentralized systems: perhaps there are no participants we trust enough to act as a server, perhaps guaranteeing that any given server can be trusted is too costly to be efficient, perhaps having a server makes our system more vulnerable to a single point of failure than we’d like. In these cases, we often turn to peer-to-peer systems.

In a peer-to-peer model, clients communicate directly with each other, rather than communicating through a centralized hub.

- In the Pigeon Internet example, a centralized content distribution system required everyone interested in the news to send requests only to the news operator; a decentralized system for content distribution on Pigeon Internet might look more like participants receiving and sharing news articles with each other, without any one particular news operator.
- With the modern Internet, when I message a friend on Facebook, my computer isn’t actually communicating with my friend’s computer directly. All of our messages are being routed through Facebook’s servers. However, if I’m running a Bitcoin node on my computer, I’m sending and receiving transaction data directly to and from other computers running Bitcoin nodes.

## Comparing Centralized and Decentralized Systems

In the table below, we list some of the broad-strokes advantages and disadvantages of centralized and decentralized digital networks.

| Centralized Systems                                                                                                                                                                                                    | Decentralized Systems                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Low network diameter (all participants are connected to a central authority); information propagates quickly, as propagation is handled by a central authority with lots of computational resources.                   | The furthest participants on the network may potentially be many edges away from each other. Information broadcast from one side of the network may take a long time to reach the other side.                                      |
| Usually higher performance (higher throughput, fewer total computational resources expended) and easier to implement.                                                                                                  | ​​Usually lower performance (lower throughput, more total computational resources expended) and more complex to implement.                                                                                                         |
| In the event of conflicting data, resolution is clear and easy: the ultimate source of truth is the central authority.                                                                                                 | ​​A protocol (often complex) is needed for dispute resolution, if peers make conflicting claims about the state of data which participants are meant to be synchronized on.                                                        |
| Single point of failure: malicious actors may be able to take down the network by targeting the central authority.                                                                                                     | ​​No single point of failure: network can still function even if a large proportion of participants are attacked/taken out.                                                                                                        |
| Coordination among network participants is much easier, and is handled by a central authority. Central authority can compel network participants to adopt upgrades, protocol updates, etc., with very little friction. | ​​Coordination is often difficult, as no single agent has the final say in network-level decisions, protocol upgrades, etc. In the worst case, network is prone to fracturing when there are disagreements about protocol changes. |
| Central authority can censor data, potentially cutting off parts of the network from interacting with the rest of the network.                                                                                         | ​​Censorship is much harder, as information has many ways to propagate across the network.                                                                                                                                         |
| Participation in the network is controlled by the central authority.                                                                                                                                                   | Anyone can participate in the network; there are no “gatekeepers.” Ideally, the cost of participation is very low.                                                                                                                 |

Note that these are general patterns that may not hold true in every network. Furthermore, in reality the degree to which a network is centralized/decentralized lies on a spectrum; no network is entirely centralized or entirely decentralized.

Besides Ethereum, [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) (P2P file sharing), [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) (P2P filesystem), and Bitcoin (P2P money) are examples of protocols built for decentralized systems.

## Participating in P2P Networks

Participants on a P2P network are usually called nodes or peers. The network is the collection of all of the nodes on the network.

The language that nodes use to talk to each other on a P2P network is described by the network’s protocol. For example, a P2P file-sharing protocol might specify that communication between two nodes who are connecting to each other for the first time must start with a “handshake” sequence of certain bytes; if a program initiates contact with your node and sends anything other than the handshake sequence to start, you can drop the connection, as you know that this node is not participating in the same protocol as you are. Finally, data passed between nodes is often called gossip.

A few examples of protocols:

- The protocol for communication between Ethereum nodes is specified near-exactly by the [Ethereum yellowpaper](http://gavwood.com/Paper.pdf).
- The protocol for communication between BitTorrent nodes is specified by the [BitTorrent Protocol Specification](http://www.bittorrent.org/beps/bep_0003.html) document.
- The protocol for communication between Bitcoin nodes is defined as exactly whatever is implemented in the [Bitcoin Core](https://bitcoincore.org/en/about/) software program. A description of this protocol can be found in the protocol documentation [here](https://en.bitcoin.it/wiki/Protocol_documentation).

Formally, the participants in a P2P network are computer programs on many different machines which communicate with each other in accordance with the protocol. Therefore, if you’re a human user who wants to interact with the P2P network, you’ll have to download and run a client program that someone has written. The client will then do the work of connecting to and communicating with the other nodes on the network. Because a software client must exist for a P2P network to exist, the release of any P2P protocol for the first time by any researcher/developer is generally accompanied by the release of a client program which users can download and run.

Anyone can write their own client conforming to a protocol, so long as the specification of the protocol is public. For any given P2P protocol, there may be multiple clients, developed by multiple different entities or groups (individuals, corporations, or open source communities). Clients for a single protocol may differ in UI, features and freedoms exposed to the user, etc.; for example, some may have a GUI, while others may be programs run in terminal. However, every client must implement the base-level protocol as specified. For example, [uTorrent](https://www.utorrent.com/), [Vuze](https://www.vuze.com/), and [WebTorrent](https://webtorrent.io/) are different clients with very different UIs which allow users to communicate over the BitTorrent protocol with the broader BitTorrent network. However, under the hood, they are all communicating by sending packets that conform to the same BitTorrent protocol. Users may choose to use any of these clients; because they implement the same protocol, they are all capable of communicating with each other.

In the next sections, we’ll discuss how to participate in the Ethereum network.

## Other Decentralized/P2P Systems

Besides Bitcoin and Ethereum, there are many other interesting and widely-used decentralized systems. Here are a few:

- [Tor](https://www.torproject.org/): A service that allows you to browse the Internet without being tracked.
- [BitTorrent](https://www.bittorrent.com/): A simple service that allows users to store and share data.
- [IPFS](https://ipfs.io/): A content-addressed system that allows users to store and share data, with additional functionality beyond what is offered by BitTorrent.
