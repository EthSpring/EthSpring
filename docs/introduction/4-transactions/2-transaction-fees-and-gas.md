---
title: "Transaction fees and gas"
id: 2-transaction-fees-and-gas
---

As stated, the model we just described presents several problems:

1. Suppose I want to induce some state change in the EVM by sending out some transaction request to the network. What incentivizes other participants to execute my transaction request and then propagate the state changes to the network, given that these actions take resources?
2. Since transactions must be executed synchronously/in some sequence that everyone agrees on, execution of one transaction blocks execution of other transactions in the queue. What prevents malicious actors from freezing the network by sending requests for arbitrarily complex transactions (or for “infinite loop” transactions which would never finish)?

Ethereum solves these problems by introducing a market for computation. One of side of the market, there are people who wish to purchase computation time on the EVM—network participants who broadcast transaction requests, bidding ether for miners to execute their requests. On the other side are mining nodes, who execute transactions on the EVM, propagate state changes, and receive payment. Upon execution and finalization of a transaction, the requester pays the miner a transaction fee in ether, the native currency of Ethereum.

Of course, since transaction requests can be requests for the execution of arbitrarily complex code, the “bid” which a network participant submits alongside their transaction request actually has two parts:

- The amount of ether they are willing to pay per unit of computation.
- The maximum number of units of computation they are willing to pay for.\*

The Ethereum specification precisely specifies how EVM code maps to “units of computation.” One unit of computation is also called one unit of gas. Therefore, the amount of ether that you’re willing to pay per unit of gas is your transaction’s gas price, and the maximum number of units of computation you are willing to pay for is the transaction’s gas limit. The total amount of ether you pay for your transaction (in ether) is then at maximum the product of the gas price and the gas limit. It’s worth noting that if your transaction ends up taking less gas than the gas limit you’ve set, you’re refunded for the difference between your gas limit and the actual amount of gas used.

As a network participant, you specify a gas limit and gas price with every transaction request. On the other side, every second, any given Ethereum miner receive dozens of transaction requests. Any given miner will keep unfulfilled transaction requests they’ve received in their own local transaction pool (the mempool). In accordance with the incentive structure specified above, miners sort transactions in their transaction pool by gas price, and execute transactions with the highest gas price first, collecting the transaction fees from these transactions. This means that requests with low gas price can take a long time to be executed, especially if the network is backed up with many requests. However, the market-like nature of the network means that the median gas price will rise and fall in accordance with demand.

- People sometimes ask why this part is necessary. For any given piece of code, it can be intractable or impossible to predict how long the code will run for, or if it will even terminate at all. Forcing everyone to specify a limit on computation they will pay for ensures that requesters can impose an upper bound on their transaction fees (imagine requesting an unpredictable transaction and later finding out that you were charged thousands of dollars for it because of side effects!)
