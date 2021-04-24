---
id: 1-erc-20-tokens
title: ERC-20 Tokens
---

ERC-20 Tokens are fungible tokens (as opposed to non fungible tokens). They are ubitious across the Ethereum ecosystem. Common use cases include as money, commodities, financial assets, governance tokens, and revenue share tokens. But really, an ERC20 token can be used for whatever it's design to be used for.

Here's an ERC20 written in psudo-python, called FreeCoin, designed to be free for anyone mint in unlimited amounts. It's not recommended to use this token as a real currency.

```python
class FreeCoin():
    def init():
        self.balances = {} # empty dictionary, key will be user, value will be balance

    def transferTo(recipient, amount):
        # caller is a keyword that represents who called the function
        if self.balances[caller] > amount:
            self.balances[caller] -= amount
            self.balances[recipient] += amount

    def balanceOf(user):
        return self.balances[user]

    def mint(amount):
        self.balances[caller] += amount
```

## Examples of Real-life Tokens

[USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) (US Dollar Coin). Each USDC is minted by Circle (Coinbase and friends). Circle puts a real US dollar a trust, then mints a USDC. A USDC is always redeemable for $1 so it's a useful way of keeping your money in crypto, without experiencing the daily volatility of ETH. ([USDCv2: upgrading a multi-billion dollar ERC-20 token](https://blog.coinbase.com/usdc-v2-upgrading-a-multi-billion-dollar-erc-20-token-b57cd9437096))

DAI. This is another stable coin similar to USDC. However, each DAI is redeemable for $1 worth of ETH. This mechanism allows DAI to always be worth $1 and is interesting to read about. One benefit of DAI over USDC is that with DAI, you don't need to trust Circle's honesty, however the caveat is that with DAI you now need to trust/verify that the smart contracts are written properly

[MKR](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2) ([Maker](https://community-development.makerdao.com/en/learn/governance/mkr-token/)). In order for the DAI protocol to keep running smoothly, a governance community called Maker adjusts parameters for the DAI ecosystem. MKR holders vote on how to adjust the DAI protocol to keep the trains running.

[WBTC](https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599) ([Wrapped Bitcoin](https://wbtc.network/)). This token functions similarly to USDC, but instead of being redeemable for $1, it's redeemable for 1 Bitcoin. Since bitcoin isn't an ERC20 built on Ethereum you can't use Bitcoin in the Ethereum ecosystem. WBTC solves this!

[UNI](https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984). A governance token for [Uniswap](https://uniswap.org/blog/uni/). Owning this token gives you voting rights in how Uniswap spends its multibillion dollar treasury. UNI token holders also can vote to turn on a fee switch which will direct a small portion of Uniswap trading fees to the treasury. [Announcing UNI](https://uniswap.org/blog/uni/)

[COMP](https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888) ([Compound](https://compound.finance/governance/comp))

[BAT](https://etherscan.io/token/0x0d8775f648430679a709e98d2b0cb6250d2887ef) ([Basic Attention Token](https://basicattentiontoken.org/))

If you want to get technical, here's the official token standard. This document describes what methods you need to implement for a valid ERC-20 token. [ERC-20 token standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)

## Readings

[ERC-20 token standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)

[ERC-20 tutorial on ethereum.org with Web3.py example](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)

[ERC-20 ConsenSys implementation](https://github.com/ConsenSys/Tokens/blob/master/contracts/eip20/EIP20.sol)

[ERC-20 OpenZeppelin implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

[Metamask Tips and Trcks](https://www.youtube.com/watch?v=gKFY_RdOkLA) - Video, tips on advanced gas control and [ledger](https://www.ledger.com/)

For checking current gas price

- [Eth gas station](https://ethgasstation.info/)
- [Ethereum average gas price chart on etherscan](https://etherscan.io/chart/gasprice)

[Interact with Smart Contracts on Etherscan](https://medium.com/etherscan-blog/interacting-with-smart-contracts-on-etherscan-b3e1d2395ac) - Etherscan blog

[Solidity By Example](https://docs.soliditylang.org/en/v0.8.0/solidity-by-example.html) - Use this as a reference to learn solidity

## Quests

- [ ] Interact with smart contracts on [etherscan](https://etherscan.io/)
  - Get some ERC20 token, e.g. DAI (can swap your ETH for DAI on Uniswap, see 01/05 reading list);
  - Go to the ERC20 token smart contract page on etherscan, e.g. [DAI contract page](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#code);
  - Go to [Read Contract](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#readContract), try reading different fields, e.g. put your address as input to check `balanceOf`;
  - Go to [Write Contract](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract), use `transfer` to transfer some token to another address of yours;
  - Look at the transaction in etherscan;
  - Go to Read Contract again to verify the `balanceOf` changed for your other address.
- [ ] Reserve an [ENS](https://ens.domains/) (Ethereum Name Service) name and link it to your Ethereum address.
