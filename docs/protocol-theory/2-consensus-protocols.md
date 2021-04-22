---
title: "Consensus Protocols"
id: 2-consensus-protocols
---

At their core, blockchains exist due to consensus protocols developed based on the concepts of distributed system design. Consensus protocols determine how transactions are validated, how governance is maintained, and how attacks are mitigated.

The original Bitcoin and Ethereum whitepapers are great case studies of early blockchain consensus protocols, both using a Proof of Work (PoW) mechanism.

**Recommended Readings:**

[Bitcoin White Paper](https://bitcoin.org/bitcoin.pdf)

[Ethereum White Paper](https://ethereum.github.io/yellowpaper/paper.pdf)


**Check your understanding:**
- How are blocks published?
- How are blocks and transactions are verified?
- How is main chain decided?
- How is participation and honest behavior incentivized?


Most current consensus protocols use either a Proof of Work or Proof of Stake based system, although there are many more (Proof of Authority, Proof of Elapsed Time, etc). Now that you've seen some examples of Proof of Work implementations, we can abstract the two classes of mechanisms.

The key is to understand where the differences lie in the mechanisms:
- How does the protocol make power/authority within the network a limited resource?
- How does the protocol allow for easy verification of the transactions?
- How is verification incentivized?

## Proof of Work (PoW)
Proof of Work requires "miners" in the network to use computational power in order to post blocks of transactions, if a "miners" block gets accepted into the chain, they are rewarded some amount of coin. The following article explains this in more detail, along with an explanation of how it's implemented in Ethereum.

[Proof of Work]([https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/))

## Proof of Stake (PoS)
Proof of Stake operates by requiring nodes to wager some amount of coin for any block they publish. Similar to PoW, they are rewarded for blocks they publish, but their wagered coins can be lost if they behave maliciously. PoS has a lot of benefits, which is why Ethereum is currently in the process of switching to a PoS based protocol. We'll have more technical readings soon explaining the more recent changes, but if you haven't already, read [Vitalik's blog post](https://vitalik.ca/general/2016/12/29/pos_design.html) from Crypto Philosophy on Proof of Stake for a conceptual explanation.

[Proof of Stake]([https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/))
