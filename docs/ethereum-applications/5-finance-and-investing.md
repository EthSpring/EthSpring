---
id: 5-finance-and-investing
title: Finance and Investing
---

DeFi (short for "decentralized finance") refers to a variety of financial applications built on blockchains. DeFi applications are smart contracts that allow participants to participate in financial actions like borrowing and lending, without needing intermediaries or trusted third-parties like a bank or broker.

The key benefit to moving 99% of finance on to a blockchain is that it allows regular people to participate in the financial system in ways they can't today. For example, most people don't know what a market maker is, even if they did know, they'd have a hard time becoming one. Via Uniswap, anyone can become a market maker.

[What is DeFi? Decentralized Finance Explained](https://www.youtube.com/watch?v=k9HYC0EJU6E&feature=emb_rel_pause) - Video

[What is Yield Farming? Beginner's Guide](https://decrypt.co/resources/what-is-yield-farming-beginners-guide)

[Liquidity Mining: A User-Centric Token Distribution Strategy](https://medium.com/bollinger-investment-group/liquidity-mining-a-user-centric-token-distribution-strategy-1d05c5174641)

## Trading
### Uniswap

[Uniswap - A Unique Exchange](https://medium.com/scalar-capital/uniswap-a-unique-exchange-f4ef44f807bf) - A good introduction on fundamental ideas behind Uniswap

[Minimum Viable Exchange](https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90) and this [gif](https://miro.medium.com/max/700/1*22dvXI1Y5uhMywl1Ez-NOg.gif) - Gave you a good intuition about how the constant product market maker model (x\*y = k) works

[Uniswap Explained](https://defiprime.com/uniswap-explained) - How to use Uniswap with screenshots

[Uniswap Guide with Advanced Tips and Trips](https://www.youtube.com/watch?v=ovbs8LT8wIg) - Video

[Uniswap docs](https://uniswap.org/docs/v2/protocol-overview/how-uniswap-works)

- [Swaps](https://uniswap.org/docs/v2/core-concepts/swaps) ([smart contract code](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L159-L183))
- [Pools](https://uniswap.org/docs/v2/core-concepts/pools/) ([smart contract code](https://uniswap.org/docs/v2/smart-contracts/router02/#addliquidity))
- [Flash swaps](https://uniswap.org/docs/v2/core-concepts/flash-swaps/) ([smart contract code](https://uniswap.org/docs/v2/smart-contract-integration/using-flash-swaps/))

(Optional) [Uniswap V2 Overview](https://uniswap.org/blog/uniswap-v2/) - What's new in v2

[Uniswap smart contracts](https://uniswap.org/docs/v2/protocol-overview/smart-contracts/)

- [Factory contract](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol) - An example of factory contract ([create2](https://docs.openzeppelin.com/cli/2.8/deploying-with-create2))

(Optional) [A good deal for liquidity providers?](https://pintail.medium.com/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2) - Explains impermanent loss

(Optional) [Understanding Uniswap Returns](https://pintail.medium.com/understanding-uniswap-returns-cc593f3499ef)

(Optional) [Constant Function Market Makers: DeFi's "Zero to One" Innovation](https://medium.com/bollinger-investment-group/constant-function-market-makers-defis-zero-to-one-innovation-968f77022159)

(Optional) [Introducing UNI](https://uniswap.org/blog/uni/)

(Optional) [Uniswap's retroactive airdrop vote put free money on the campaign trail](https://www.coindesk.com/uniswap-dharma-retroactive-uni-airdrop-defi-governance) - about airdrop and governance

**Quests**

- [ ] Swap some ETH for another ERC20 token (preferably Stablecoin like DAI) on [Uniswap](https://app.uniswap.org/#/swap)
- [ ] Add liquidity to a Uniswap pool
- [ ] (Optional) Remove liquidity from the Uniswap pool
- [ ] (Optional, advanced) Create your own ERC20 token, and add it to Uniswap

### Curve.fi

Please go over Week 1 Topic 2 if you are not familiar with Uniswap.

[Curve.fi, how to get started?](https://medium.com/@crypto.tutorials/curve-fi-how-does-it-work-b673a8fe16cc)

[Curve.fi docs](https://resources.curve.fi/)

[Curve.fi smart contracts](https://www.curve.fi/contracts)

[What is yCRV: A comprehensive guide](https://btcgeek.com/what-is-ycrv-guide/) - also explains yDAI, yUSDC, yUSDT, yTUSD

(Optional) [Constant Function Market Makers: DeFi's "Zero to One" Innovation](https://medium.com/bollinger-investment-group/constant-function-market-makers-defis-zero-to-one-innovation-968f77022159)

(Optional) [How do liquidity pools work? - Video](https://www.youtube.com/watch?v=cizLhxSKrAc)

**Quests**

- [ ] Swap some stablecoins on curve.fi, e.g. DAI to USDC. What's the pros and cons vs. using Uniswap?
- [ ] (Optional) Provide liquidity to a pool (e.g. Pool #0 Compound) on [curve.fi](http://curve.fi) - select desired pool, go to "deposit" tab. Compare this to providing liquidity to a uniswap pool.

  To [boost your CRV rewards](https://resources.curve.fi/guides/boosting-your-crv-rewards), before deposit, you can use calculator to identify veCRV amount for 2.5x, mint veCRV with locker (must go buy CRV); and press "Deposit and stake in gauge" while deposit.

- [ ] (Optional) Withdraw liquidity from a pool - select pool, go to "withdraw" tab.
- [ ] (Optional) [Loopring](https://medium.com/loopring-protocol/loopring-launches-zkrollup-exchange-loopring-io-d6a85beeed21) is another decentralized exchange. It is a "layer 2" exchange built with zkSNARKS. Make a transaction on [Loopring](https://loopring.org/#/).

### Balancer

[How to make money with Balancer](https://newsletter.banklesshq.com/p/how-to-make-money-with-balancer) - with Screenshots

[How to create your own Balancer pool](https://newsletter.banklesshq.com/p/how-to-create-your-own-balancer-pool) -with screenshots

[pools.vision](http://pools.vision/) - a pool explorer for balancer liquidity pools

[Balancer docs](https://docs.balancer.finance/)

(Optional) [Calculating value, impermanent loss and slippage for Balancer pools](https://medium.com/balancer-protocol/calculating-value-impermanent-loss-and-slippage-for-balancer-pools-4371a21f1a86) - math

(Optional) [Incident with non-standard ERC20 deflationary tokens](https://medium.com/balancer-protocol/incident-with-non-standard-erc20-deflationary-tokens-95a0f6d46dea) - how Balancer got hacked

**Quests**

- [ ] (Optional) Add liquidity to a [Balancer](https://pools.balancer.exchange/#/explore) pool and earn fees

## Lending
### Compound

[A graphic Guide to Compound](https://docs.ethhub.io/guides/graphical-guide-to-compound/) - An overview

[Compound docs](https://compound.finance/docs) - Worth going through, especially the guides

[How to Earn Interest and Borrow Ethereum Assets](https://medium.com/compound-finance/the-compound-guide-to-supplying-borrowing-crypto-assets-94821f2950a0) - With Screenshots

[Compound calculator](http://www.predictions.exchange/compound/None) - Shows you how much $COMP would be distributed based on tokens supplied and borrowed.

(Optional) [How to maximize yield farms with Instadapp](https://newsletter.banklesshq.com/p/how-to-maximize-yield-farms-with)

[Compound Governance](https://medium.com/compound-finance/compound-governance-5531f524cf68)

- As part of this decentralization process, Compound upgraded their [smart contracts](https://github.com/compound-finance/compound-protocol) to shift from admin control to community governance. This is good example of how smart contracts are upgraded in production: worth looking into [ComptrollerInterface.sol](https://github.com/compound-finance/compound-protocol/blob/master/contracts/ComptrollerInterface.sol); [Comptroller.sol](https://github.com/compound-finance/compound-protocol/blob/master/contracts/Comptroller.sol), [ComptrollerG1.sol](https://github.com/compound-finance/compound-protocol/blob/master/contracts/ComptrollerG1.sol), [ComptrollerG2.sol](https://github.com/compound-finance/compound-protocol/blob/master/contracts/ComptrollerG2.sol) - those are for different versions of logics; [ComptrollerStorage.sol](https://github.com/compound-finance/compound-protocol/blob/master/contracts/ComptrollerStorage.sol) - this has the corresponding three versions of storage.

  For another smart contract upgrade example, see [USDC v2: upgrading a multi-billion dollar ERC-20 token](https://blog.coinbase.com/usdc-v2-upgrading-a-multi-billion-dollar-erc-20-token-b57cd9437096).

- In Compound, proposals are [executable code](https://app.compound.finance/vote), not suggestions for a team or foundation to implement. Once a proposal passed, it is queued in the [Timelock](https://app.compound.finance/timelock), and can be executed after a grace period. See the [smart contract code](https://compound.finance/docs/governance?ref=github&user=ajb413&repo=compound-governance-examples) and [docs](https://compound.finance/docs/governance?ref=github&user=ajb413&repo=compound-governance-examples).

**Quests**

- [ ] Supply some assets on [Compound](https://app.compound.finance/) to start earning interest, and borrow some assets, calculate how much $COMP you are earning using [compound calculator](http://www.predictions.exchange/compound/None). Can do this on a testnet.
- [ ] (Optional) [Aave](https://aave.com/) is another [lending protocol](https://www.youtube.com/watch?v=aTp9er6S73M). Deposit some ETH into [Aave](https://aave.com/) and start earning interest on your deposit from borrowers. **Note**: Given the amounts you'd be likely to deposit, your transaction fees will likely be much greater than the interest you earn. This quest is primarily for education purposes—don't expect it to earn you a substantial amount of crypto!

## Synthetic Assets


[The promise and potential of synthetic assets](https://blog.coinbase.com/around-the-block-8-the-promise-and-potential-of-synthetic-assets-9fbb15c2b24e)

## UMA

[UMA - Enabling Universal Market Access](https://medium.com/uma-project/uma-enabling-universal-market-access-266eb9e5fd90)

[UMA "Priceless" Synthetic Tokens](https://medium.com/uma-project/priceless-synthetic-tokens-f28e6452c18b)

[UMA's Data Verification Mechanism](https://medium.com/uma-project/umas-data-verification-mechanism-3c5342759eb8) - oracle

## Synthetix
(Optional) [What is Synthetix and how does it work?](https://www.gemini.com/cryptopedia/synthetix)

(Optional) [Synthetix SNX Staking & sUSD minting tutorial](https://defirate.com/snx-staking-tutorial/)

## Oracle

[Decentralized oracles: a comprehensive overview](https://medium.com/fabric-ventures/decentralised-oracles-a-comprehensive-overview-d3168b9a8841)

[So you want to use a price oracle](https://samczsun.com/so-you-want-to-use-a-price-oracle/)

[My notes on Chainlink](https://paper.dropbox.com/doc/Chainlink--BDOP_w8HQcvYMWhneYUI5LL5Ag-XYZ6bmOX8U08K8SZi7FWA) - a talk I gave on explaining how Chainlink works (very basic)

[Implementing a blockchain oracle on Ethereum](https://medium.com/@pedrodc/implementing-a-blockchain-oracle-on-ethereum-cedc7e26b49e)

[Building a price oracle on Uniswap v2](https://uniswap.org/docs/v2/smart-contract-integration/building-an-oracle/)

[UMA as an Oracle](https://medium.com/uma-project/umas-data-verification-mechanism-3c5342759eb8)

## Yield Aggregators
### Yearn

[Yearn finance and YFI token explained](https://www.youtube.com/watch?v=qG1goOptZ5w) - Video

[What are Yearn Vaults? ETH Vault explained - Video](https://www.youtube.com/watch?v=9vTaNl2_B8A)
[How to use Yearn Vaults in Argent](https://www.argent.xyz/blog/yearn-vaults-in-argent/)
