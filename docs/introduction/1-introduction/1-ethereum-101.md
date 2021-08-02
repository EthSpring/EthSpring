---
title: "1.1 Ethereum 101"
id: 1-ethereum-101
author: gubsheep
authorURL: https://twitter.com/gubsheep
---

## What is Ethereum?

Before I started reading, my answer to this question would have been something like:

“Ethereum is a cryptocurrency, kind of like Bitcoin. It’s the second largest cryptocurrency by market cap. Some people have built silly apps (like CryptoKitties) ‘on top of’ Ethereum, though I’m not really sure what that means.”

It turns out that the currency isn’t the point at all. Erase everything you know and start from the following: **Ethereum is a computer**. Here’s a very high-level summary of what this means.

In the Ethereum universe, there is a single, canonical computer (called the Ethereum Virtual Machine, or EVM) whose state everyone on the Ethereum network agrees on. Everyone who participates in the Ethereum network (every Ethereum node) keeps a copy of the state of this computer. Additionally, any participant can broadcast a request for this computer to perform arbitrary computation. Whenever such a request is broadcast, other participants on the network verify, validate, and carry out (“execute”) the computation. This causes a state change in the EVM, which is committed and propagated throughout the entire network. These requests for computation are called transaction requests; the record of all transactions as well as the EVM’s present state is stored in the blockchain, which in turn is stored and agreed upon by all nodes. Cryptographic mechanisms ensure that once transactions are verified as valid and added to the blockchain, they can’t be tampered with later; the same mechanisms also ensure that all transactions are signed and executed with appropriate “permissions” (i.e. no one should be able to send digital assets from Alice’s account, except for Alice herself).

The purpose of Ether, the cryptocurrency, is to allow for the existence of a market for computation. Such a market provides an economic incentive for participants to verify/execute transaction requests and to provide computational resources to the network. Any participant who broadcasts a transaction request must also offer some amount of ether to the network, as a bounty to be awarded to whoever eventually does the work of verifying the transaction, executing it, committing it to the blockchain, and broadcasting it to the network. The amount of ether paid is a function of the length of the computation. This also prevents malicious participants from intentionally clogging the network by requesting execution of infinite loops or resource-intense scripts, as these actors will be continually charged.

In practice, participants don’t write new code every time they want to request a computation on the EVM. Rather, application developers upload programs (reusable snippets of code) into EVM storage, and then users make requests for the execution of these code snippets with varying parameters. We call the programs uploaded to and executed by the network smart contracts. At a very basic level, you can think of a smart contract like a sort of vending machine: a script which, when called with certain parameters, performs some actions or computation if certain conditions are satisfied. For example, a simple vendor smart contract could create and assign ownership of a digital asset if the caller sends Ether to a specific recipient. Any developer can create a smart contract and make it public to the network, using the blockchain as its data layer, for a fee paid to the network. Any user can then call the smart contract to execute its code, again for a fee paid to the network. Thus, with smart contracts, developers can build and deploy arbitrarily complex user-facing apps and services: marketplaces, financial instruments, games, etc.

## Why is this an interesting/useful model of computation?

This is a novel paradigm: computation based on community consensus rather than centralized service providers. This comes with both costs and benefits.

A DApp (decentralized app) run on the Ethereum blockchain has some advantages over an equivalent app run with the client-server model:

- **Zero downtime**: Once the smart contract at the core of an app is deployed and on the blockchain, the network as a whole will always be able to serve clients looking to interact with the contract. Malicious actors therefore cannot launch denial-of-service attacks targeted towards individual DApps.
- **Privacy:** You don’t need to provide real-world identity to deploy or interact with a DApp.
- **Resistance to censorship**: No single entity on the network can block users from submitting transactions, deploying DApps, or reading data from the blockchain.
- **Complete data integrity**: Data stored on the blockchain is immutable and indisputable, thanks to cryptographic primitives. Malicious actors cannot forge transactions or other data that has already been made public.
- **Interoperability**: Imagine if every application on the Internet had a zero-downtime, publicly exposed API. Smart contracts can programmatically interact with other smart contracts; this means that it’s possible to use and compose existing primitives on top of each other to make complex and tightly integrated systems (building with “money legos” ).
- **Trustless computation/verifiable behavior**: Smart contracts can be analyzed, and are guaranteed to execute in predictable ways, without the need to trust a central authority. This is not true in traditional models; for example, when we use online banking systems, we have to trust that financial institutions will not misuse our financial data, tamper with records, or get hacked.

Of course, there are also some downsides:

- **DApps are harder to maintain**: Because code and data published to the blockchain is harder to modify, it’s hard for developers to make updates to their DApps (or the underlying data stored by a DApp) once they are deployed - even if bugs or security risks are identified in an old version. It is not difficult to imagine a scenario where a malicious developer or hacker takes advantage of this.
- **There is a huge performance overhead, and scaling is really hard**: To achieve the level of security, integrity, transparency, and reliability that Ethereum aspires to, every node runs and stores every transaction. On top of this, proof-of-work takes time as well. A back-of-the-envelope calculation puts the overhead at something like 1,000,000x that of standard computation currently. Because of this…
- **Network congestion affects everyone**: At least in the current model, if one DApp is using too many computational resources, the entire network gets backed up. Currently, the network is only able to process about 10 transactions per second; if transactions are being sent in faster than this, the pool of unconfirmed transactions can quickly balloon.
- **It may be harder to engineer user-friendly experiences**: The average end user might find it too difficult to set up a tool stack necessary to interact with the blockchain in a truly secure fashion.
  - User-friendly and developer-friendly solutions built on top of the base layer of Ethereum might end up looking like centralized services anyways: for example, such services may store keys or other sensitive information server-side (Coinbase), serve a frontend using a centralized server, or run important business logic on a centralized server before writing to the blockchain. This eliminates many (if not all) of the advantages of blockchain over the traditional model.

## Terminology and Summary

We’ll dive into each of these topics in more depth in future sections.

### EVM

The Ethereum Virtual Machine is the global virtual computer who’s state every participant on the Ethereum network stores and agrees on. Any participant can request the execution of arbitrary code on the EVM; code execution changes the state of the EVM.

### Node

The real-life machines which are storing the EVM state. Nodes communicate with each other to propagate information about the EVM state and new state changes. Any user can also request execution of code by broadcasting code execution request from a node. The Ethereum network itself is the aggregate of all Ethereum nodes and their communications.

### Ether

The native cryptocurrency of Ethereum. Users pay ether to other users to have their code execution requests fulfilled.

### Account

Where ether is stored. Users can initialize accounts, deposit ether into the accounts, and transfer ether from their accounts to other users. Accounts and account balances are stored in a big table in the EVM; they are a part of the overall EVM state.

### Transaction

A “transaction request” is the formal term for a request for code execution on the EVM, and a “transaction” is a fulfilled transaction request and the associated change in the EVM state. Any user can broadcast a transaction request to the network from a node. For the transaction request to actually affect the agreed-upon EVM state, it must be validated, executed, and “committed to the network” by some other node. Execution of any code causes a state change in the EVM; upon commitment, this state change is broadcast to all nodes in the network. The particular process of validation and commitment will be discussed in more depth later. Some examples of transactions:

- Send X ether from my account to Alice’s account.
- Publish some smart contract code into EVM memory.
- Execute the code of the smart contract at address X in the EVM, with arguments Y.

### Block

The volume of transactions is very high, so transactions are “committed” in batches, or blocks. Blocks generally contain dozens to hundreds of transactions.

### Blockchain

The sequence of all blocks that have been committed to the Ethereum network in the history of the network. So-named because each block contains a reference to the previous block, which helps us maintain an ordering over all blocks (and thus over the precise history).

### Smart Contract

A reusable snippet of code (a program) which a developer publishes into EVM memory. Anyone can request that the smart contract code be executed by making a transaction request. Because developers can write arbitrary executable applications into the EVM (games, marketplaces, financial instruments, etc.) by publishing smart contracts, these are often also called DApps, or Decentralized Apps.
