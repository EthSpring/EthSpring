---
title: "What is an account?"
id: 1-what-is-an-account
---

In Ethereum, an account is a construct which holds ether and possibly other metadata. At a basic level, an account is made of:

- An **address**: a 20-byte unique identifier. Anyone on the network can look up an account and its associated balance/metadata using this identifier.
- A **balance**: the amount of ether owned by this account. Ether is the cryptocurrency of the Ethereum network.

- Metadata: the number of transactions this account has participated in, and other associated data or code.

Earlier we mentioned that Ethereum is a computer (the EVM), and that the Ethereum computer’s storage contains a record of all transactions/code that the computer has executed as well as the current state of the computer. The state of the computer at any time includes the data of every account that exists on the Ethereum network at that time, indexed by their addresses: essentially, a big table of all accounts and associated data lives in EVM storage. Therefore, anyone who stores the state of the EVM locally can look up the data (such as the balance) associated with any account address.

Ethereum actually supports two different types of accounts: user-owned accounts (accounts managed by users), and smart contract accounts (accounts with programmed behavior).

- User-owned accounts (or “externally-owned accounts”) are exactly what they sound like, and map closely to the traditional notion of a payment system account. A human or human entity owns the account and uses it to hold ether and initiate transactions. Note that one person can distribute their funds over multiple user-owned accounts (this is in fact good practice if you own a lot of ether). The keys required to access a user-owned account are stored in a wallet, which will be discussed later.

- “Contract accounts” are assigned by the Ethereum network to any smart contract deployed to the network. These accounts wrap the smart contract code, and hold any persistent data associated with the smart contract program. At a high level, execution of this code can be automatically triggered by any user by sending ether and input data from their user-owned accounts to the contract account.

Note that an account is not a wallet. A wallet is the keypair associated with a user-owned account, which allow a user to make transactions from or manage the account. Wallets will be discussed shortly.
