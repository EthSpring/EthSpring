---
id: 3-nfts-collectibles-socks
title: NFTs / Collectibles / SOCKS
---

A lot of people don’t understand what an NFT is. So what is an NFT, here’s some example code of an NFT written in pseudo-python.

```python
class CoolNFT():
    def init():
        # caller is a keyword that represents who called the function
        self.owner = caller

    def transferTo(recipient):
        if caller == self.owner:
            self.owner = recipient

    def owner():
        return self.owner

    def uri():
        return "http://coolnft.com/metadata.json"
```

For most NFTs, this uri has the metadata that has information users may want about the NFT, like a link to the a piece of art or a title. This data is off-chain. An NFT could modify its code to have that data stored on chain, but the cost per byte is high so there’s a trade off to be made.

## Readings

[ERC-721 token standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)

[The Anatomy of ERC721](https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24)

[ERC-721 tutorial on ethereum.org with Web3.py example](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)

[CryptoKitties ERC-721 implementation](https://github.com/dapperlabs/cryptokitties-bounty/blob/master/contracts/KittyOwnership.sol)

(Optional) [Learn how our last mystery smart contract works](https://www.cryptokitties.co/blog/post/learn-how-our-last-mystery-smart-contract-works/) - CryptoKitties updated their `geneScience` smart contract, see how the contract works, and try to figure out how they updated it

(Optional) [How to breed AI the Alpacat and seven Alpacat Purrstige Traits](https://www.cryptokitties.co/blog/post/how-to-breed-al-the-alpacat) **🦙**

[Nifty.ink (alpha release)](https://medium.com/@austin_48503/nifty-ink-%EF%B8%8F-alpha-release-c860a4904cb2) - Austin's project, a scaffold-eth build for creating an NFT platform that scales

[A beginner's guide to NFTs](https://linda.mirror.xyz/df649d61efb92c910464a4e74ae213c4cab150b9cbcc4b7fb6090fc77881a95d)

[NFT Issuance Landscape](https://coopahtroopa.mirror.xyz/PF42Z9oE_r6yhZN9jZrrseXfHaZALj9JIfMplshlgQ0)

[Zora](https://zora.engineering/)

[foundation.app](https://foundation.app/)

## **Quests**

- [ ] Buy and breed a [CryptoKitty](https://www.cryptokitties.co/)
- [ ] Draw something on [nifty.ink](http://nifty.ink) and mint the NFT, send it to another address; (Optional) upgrade it to the Ethereum mainnet, and sell it on [OpenSea](https://opensea.io/); use your ENS name to sign your artwork for true authenticity
- [ ] (Optional) Purchase an NFT digital asset on [OpenSea](https://opensea.io/)
