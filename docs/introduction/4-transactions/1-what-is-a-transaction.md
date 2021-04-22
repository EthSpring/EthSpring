---
title: "4.1 What is a transaction?"
id: 1-what-is-a-transaction
---

An Ethereum transaction is any code execution that changes state of the EVM. Currently, the simplest transactions look like the trivial financial transaction of transferring ether:

1. Look up the accounts with addresses A and B in EVM storage.
2. Decrease the account balance of A by x ETH.
3. Increase the account balance of B by x ETH.

However, in theory transactions can be arbitrarily complicated operations—the word “transaction” in the context of Ethereum refers more to the concept of an atomic “database transaction.” For example, previously we mentioned that execution of any smart contract code can be triggered by sending ether and some input data to the corresponding contract account. Such an operation is the generalized version of a “transaction.”

Transactions are the mechanism by which accounts (both user-owned and contract accounts) interact with each other and with the EVM as a whole. Any node can broadcast a request for a transaction to be executed on the EVM; after this happens, a miner will execute the transaction and propagate the resulting state change to the rest of the network. We’ll break all of these components and processes down in the next few sections. For simplicity’s sake, we’ll mostly discuss transactions which carry out a transfers of ether; we’ll talk more about more complex transactions involving smart contracts in the smart contracts section.
