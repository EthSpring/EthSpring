---
title: "4.3 Sender, recipient, and value"
id: 3-sender-recipient-value
author: gubsheep
authorURL: https://twitter.com/gubsheep
---

Every transaction request has three required fields: “to,” “from,” and “value” fields. In this section, we explain why each of these fields are necessarily in all transactions, even transactions which represent smart contract code execution on the EVM (rather than simple ether transfer).

## Sender

This is the account that:

- Pays the transaction fee for the transaction. Note that since every transaction requires a transaction fee to be paid to a miner, every transaction needs a sender.
- Sends ether (as the field name implies), when the transaction represents a simple transfer of ether between accounts.

For a transaction to be valid, it must be signed with the private key of the wallet associated with the account specified as the sender.

## Recipient

Transactions are categorized into two types: transactions representing the transfer of ether into a user-owned account, and transactions representing a call for the execution of the code associated with a smart contract account (a contract call). The recipient field indicates the type of any given transaction.

If the recipient address of a transaction represents a user-owned account, the transaction represents a simple transfer of ether between accounts.

If the recipient of a transaction is a smart contract account, the transaction indicates that the sender is requesting execution of the code associated with the smart contract. Most smart contracts can be executed in different ways according to parameters which a user can pass in via the optional additional data field.

## Value

This field is straightforward in transactions between user-owned accounts. It specifies the amount of ether to be transferred between the accounts.

Because smart contract accounts also have account balances, users can also optionally specify a nonzero “value” value in a contract call transaction; this ether gets deposited into the smart contract account balance. This is useful since many smart contracts may want to hold and programmatically transact ether.
