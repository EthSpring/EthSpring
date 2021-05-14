---
id: 6-attacks
title: Attacks
---

If you just want to browse a list of crazy attacks, [Bad Things](https://www.notion.so/72675e93bdb94748b2b980d5b3e1392c) is a great place to start. [Bad Things](https://www.notion.so/72675e93bdb94748b2b980d5b3e1392c) is a grand list of attacks and breakdowns on what went wrong and how.

If you want to make sure you don't have these issues in your own code then check out [Smart contract best practices - known attacks](https://consensys.github.io/smart-contract-best-practices/known_attacks/)


## Readings
- [SWC Registry - Smart contract weakness classification and test cases](https://swcregistry.io/)

- [Testing smart contracts](https://paper.dropbox.com/doc/Testing-Smart-Contracts--BDJwiMz3hUqegqNHWaNLHEXEAg-zNNmL81GmXq9eBaBzzj4M) - a talk I gave last year, might be a little outdated

**Re-entrancy attack**

- [What is Re-entrancy attack?](https://quantstamp.com/blog/what-is-a-re-entrancy-attack)

- [https://github.com/austintgriffith/scaffold-eth/tree/reentrancy-example](https://github.com/austintgriffith/scaffold-eth/tree/reentrancy-example) - by our own @Aayush Gupta

**Front-running**

- [How to Get Front-Run on Ethereum mainnet](https://www.youtube.com/watch?v=UZ-NNd6yjFM) - Video

- [Honeypots in Ethereum And How to avoid them with Tenderly.co transaction simulation](https://www.youtube.com/watch?v=DDn5mksOUCc) - Video

- [How the Opyn Ethereum Contract was hacked for $943,000 (Technical Review)](https://www.youtube.com/watch?v=sMANc7K4lHk) - Video

- [Ethereum is a Dark Forest](https://medium.com/@danrobinson/ethereum-is-a-dark-forest-ecc5f0505dff)

- [Uniswap pools doc](https://uniswap.org/docs/v2/core-concepts/pools/) - explains what `burn` does in the blog post above; e.g. when removing liquidity, `[removeLiquidity](https://github.com/Uniswap/uniswap-v2-periphery/blob/4123f93278b60bcf617130629c69d4016f9e7584/contracts/UniswapV2Router02.sol)` will call this `burn`.

- [Escaping the Dark Forest](https://samczsun.com/escaping-the-dark-forest/)

- [How the winner got Fomo3D price - A detailed explanation](https://medium.com/coinmonks/how-the-winner-got-fomo3d-prize-a-detailed-explanation-b30a69b7813f) - block stuffing

**Flash loan**

- [Borrow Millions in DeFi with no collateral? flash loans explained (avave, dYdX)](https://www.youtube.com/watch?v=mCJUhnXQ76s) - Video

- [The bZx attacks explained](https://www.palkeo.com/en/projets/ethereum/bzx.html#b-the-compound-borrow)

- [bZx trading & borrowing doc](https://docs.bzx.network/fulcrum-integration/trading-borrowing) - helps you to understand the bZx attacks above

- [Flash Arbitrager Trader](https://github.com/fifikobayashi/Flash-Arb-Trader) - A simple working example of a flash arbitrage smart contract

- [MakerDAO issues warning after a flash loan is used to pass a governance vote](https://www.theblockcrypto.com/post/82721/makerdao-issues-warning-after-a-flash-loan-is-used-to-pass-a-governance-vote)

- [DeFi flash loan attacks and the yAxis metavault](https://yaxis.ghost.io/defi-flash-loan-attacks-and-the-yaxis-metavault/)

- [SushiSwap's Vampire Scheme: Hours Away and With $1.3B at Stake](https://thedefiant.substack.com/p/sushiswaps-vampire-scheme-hours-away)
