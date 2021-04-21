---
id: 5-quests
title: Quests
---

## Intro/Reference Reading

[](https://docs.ethers.io/ethers.js/v5-beta/getting-started.html)

[Ethereum development environment for professionals by Nomic Labs](https://hardhat.org/getting-started/)

[austintgriffith/scaffold-eth](https://github.com/austintgriffith/scaffold-eth)

## Prerequisites

- Understand Ethereum Fundamentals

  [ETH.BUILD](https://www.youtube.com/playlist?list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi)

- Get and send around some testnet ETH:

  [Networks | ethereum.org](https://ethereum.org/en/developers/docs/networks/)

- Basic proficiency in Javascript and NodeJS

### [OPTIONAL] Watch Austin Griffith's talk on Ethereum!

[https://t.co/VjLCYiQySS?amp=1](https://t.co/VjLCYiQySS?amp=1)

## Main Quests

🛠 Familiarize yourself with the Ethereum development ecosystem by building!

### 🎖 Ethers.js

- Create a new NodeJS project and use ethers.js to create a keypair from a mnemonic and store it in a local file as a backup.

- Extend your ethers.js script to _sign_ a message using your private key, then use [eth.build](http://eth.build) to verify (recover) the address.

  [Key Pair - ETH.BUILD](https://www.youtube.com/watch?v=9LtBDy67Tho&feature=youtu.be)

- Use the ether.js to display the balance of your account(s) and send in little testnet ETH.

  [Signers](https://docs.ethers.io/v5/api/signer/)

- Write a script that checks the balance and sends half to one address and half to the other automatically.

### 👷‍♀️ HardHat

Try out HardHat just to get exposure to how it works

[Ethereum development environment for professionals by Nomic Labs](https://hardhat.org/tutorial/)

### 🏗 Scaffold-ETH (Ethers + HardHat + React ++)

- Clone and install [scaffold.eth](https://github.com/austintgriffith/scaffold-eth#-scaffold-eth) by following the instructions in the repository.

  [austintgriffith/scaffold-eth](https://github.com/austintgriffith/scaffold-eth)

- Experiment with how YourContract works in the frontend.
- Extend YourContract to only allow an Owner to update the "purpose".
- Obtain a personal Ethereum node (RPC) endpoint with [Infura](https://infura.io/) and update "constants.js"
- Turn YourContract into more of a "vending machine" by requiring msg.value to be 0.001 ether if someone wants to update the purpose. (Your function will need to be payable!)
- Create a "Decentralized Bank" that uses a "mapping" to track balances of individuals and lets them withdraw and deposit. (Bonus points for using the "receive()" fallback function)
- Create a "Todo List" on Ethereum (would be so expensive!) to learn how Arrays and Structs work.
- Turn YourContract into YourToken (ERC20 using OZ inheritance)!
- Deploy YourToken to a testnet and send it around.
- Deploy a "VendingMachine" that will sell your tokens to buyers.
- Create a "Market" that will buy _and_ sell your token (provide liquidity).
- Create a staking app that requires users to deposit YourToken by a certain timestamp and release the tokens if a threshold is not met.

## Fun Side Quest (Intermediate)

- Build a bot sends a [Nifty.ink](http://nifty.ink) (once minted from a burner wallet to a bunch of addresses)

## Fun Side Quest (Advanced)

- Build a bot that catches a fish in [Galleass.io](http://galleass.io) (this requires commit/reveal)

## Getting Help / What's Next?

💬 Have any questions or need help in going through the resources above?

🚀 Looking for what to do next to dig deeper in Ethereum development?

**Feel free to reach out to anyone here below!**

- [Highly Recommended] Austin Griffith ([https://twitter.com/austingriffith](https://twitter.com/austingriffith))
- Scott Moses Sunarto ([https://twitter.com/smsunarto](https://twitter.com/smsunarto))
