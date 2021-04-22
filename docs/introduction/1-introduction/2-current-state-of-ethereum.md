---
title: "1.2 The current state of Ethereum"
id: 2-current-state-of-ethereum
---

## Where does the EVM live/who actually executes the code of a DApp?

Every node on the network stores a copy of the EVM, so every node executes all the backend code of every DApp. Concretely, if your machine is running a full node, it’s essentially running the backend of thousands of DApps simultaneously. About 10[,000](https://www.ethernodes.org/) other full nodes are also running the exact same thousands of DApp backends.

## What is the current performance of the EVM?

At present, the Ethereum network (and by extension, the EVM) can’t execute more than about 10 transactions per second. Concretely, a “transaction” is a write to permanent storage on the blockchain; for example, any transfer of Ether or other tokens between accounts is a transaction. The execution speed of the EVM is firstly upper-bounded by the speed of the miners/full nodes; in practice it is in fact much much lower, because of the proof-of-work required. This makes Ethereum in present form unusable for many large-scale applications.

## How does Ethereum plan to handle larger-scale services?

Ethereum ecosystem researchers and developers are working on performance solutions including Optimistic/ZK-Rollup, Sharding, and Proof-of-Stake consensus protocols which may improve performance significantly. These projects all fall within the umbrella of an ongoing meta-project that core researchers and developers call “[Eth2](https://twitter.com/VitalikButerin/status/1240365047421054976)” - an upgraded architecture for the Ethereum network, incorporating many of the above performance solutions, to be gradually deployed in the next few years.

## What kinds of DApps are people using on Ethereum today?

One area that has been receiving a lot of attention in 2019 and 2020 is “Decentralized Finance” - DApps which enable people to transact, borrow, lend, and trade crypto-assets in more complex and efficient ways. For example, stablecoins (cryptocurrencies that can be transacted on the blockchain, but whose value is tied to stable currencies like USD) are one of the most fundamental and widely-used applications - many people are holding stablecoins like [DAI](https://makerdao.com/en/) and [Tether](https://tether.to/) today. You can check out a list of DeFi apps sorted by volume [here](https://defipulse.com/). Decentralized Exchanges (DEXs) like [Uniswap](https://uniswap.org/) allow users to trade currency pairs with each other via permissionless smart contract interaction. Protocols like [Aave](https://aave.com/) allow users to lend and borrow different cryptocurrencies for algorithmically-set interest rates.

Gaming / digital ownership is another hot topic in blockchain right now. Many users are attracted by the concept of “true ownership” - the idea that items you own in crypto games are yours to freely transfer and transact. This is almost impossible in traditional online games for a number of reasons, including more stringent regulations and desire on the part of game studios to have tighter control over game economies. Some examples of blockchain games include [CryptoKitties](https://www.cryptokitties.co/), [Axie Infinity](https://axieinfinity.com/), [Gods Unchained](https://godsunchained.com/), and [Dark Forest](https://zkga.me/). Marketplaces for digital goods include [OpenSea](https://opensea.io/) and [Foundation](https://foundation.app/).

However, compared to centralized counterparts, DApps are often quite simple; development of the Ethereum network is still in the very early stages. This contrasts with Bitcoin, which has arguably already proved its primary value-add to the world and whose base level protocol has (some claim) more-or-less matured.

## What is Ethereum’s relationship with “ICO”s and “altcoin”s?

Many altcoins and most ICOs are built on the Ethereum network. Because Ethereum allows for the creation and execution of arbitrary programs, creating a token for an ICO is as simple as deploying a program to the Ethereum network that keeps track of who owns how much of the token in persistent EVM storage. Notably, this is much easier to do on top of Ethereum than on top of Bitcoin.
