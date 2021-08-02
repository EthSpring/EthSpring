---
id: 2-zkp-theory
title: "Section 2: Zero Knowledge Protocols (Math-Heavy)"
author: gubsheep
authorURL: https://twitter.com/gubsheep
---

This section covers the mathematics behind zero knowledge cryptography, which has been studied for a few decades. A basic number theory background will be helpful for understanding this section.

### Readings

[MIT 6.857 Lecture 11](http://web.mit.edu/6.857/OldStuff/Fall97/lectures/lecture11.pdf)

[Zero-Knowledge Proofs for discrete logs](https://people.eecs.berkeley.edu/~jfc/cs174/lecs/lec24/lec24.pdf) (first section)

[Zero-Knowledge Proofs](https://crypto.stanford.edu/pbc/notes/crypto/zk.html) - full formal definition of ZKPs, including quadratic residue example. You probably don't need to go through this whole thing.

[Fiat-Shamir Heuristic](https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic) - a technique that can be used to make interactive zero-knowledge protocols into non-interactive protocols.

### Quests

- [ ]  Implement a non-interactive ZKP for discrete log in code! Specifically, you should implement:
    - [ ]  a function `dlogProof(x, g, p)` that returns (1) a residue `y`, evaluated as `g^x (mod p)` and (2) a proof of knowledge `pf` that you know `x` that is the discrete log of `y`.
    - [ ]  a function `verify(y, g, p, pf)` that evaluates to `true` if `pf` is a valid proof of knowledge, and `false` otherwise. The prover should only be able to compute a valid proof with non-negligible probability if they do indeed know valid `x`.
    - [ ]  **if you need help, a reference implementation in Javascript with comments can be found [here](https://github.com/briangu33/zk-beginner).**
- [ ] Complete these [Understanding Questions](https://www.notion.so/ZK-Summit-Screener-Questions-212c9feaa3ff43428c3794a2c6906014)
