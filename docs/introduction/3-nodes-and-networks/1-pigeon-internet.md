---
title: "3.1 Pigeon Internet"
id: 1-pigeon-internet
---

When I was a kid, my model of the Internet was something like “a bunch of machines in a big room shouting information at each other super fast.” This made it very hard to understand why designing a robust consensus protocol for a digital cash system is hard: if all of the participants can be forced to act according to pre-programmed behavior and in accordance with a clearly-specified protocol, and if all communication is happening pretty much instantaneously, why can’t every node on a digital cash system just instantly synchronize on every transaction and state change?

I also didn’t have a very clear understanding of the actual threat model which applications on the Internet face. For example, somehow I thought that sender identity of messages sent over the Internet must be inherently hard to falsify, since it must be “programmed into how computers send messages” or something. I never realized that, for example, falsifying the identity of the sender of a packet (IP spoofing) is as simple as writing a different IP address into the sender field of the packet header.

In this section, we build a very basic toy model (Pigeon Internet) for how the Internet works. Having such a model in mind is important for understanding the security challenges and guarantees of the Internet, of the Ethereum protocol, and of modern applied cryptography.

The participants (peers) of the Pigeon Internet system are people who live all over a **pre-electricity** world. For the first time in history, improvements in avian-training techniques have enabled people all over the world to reliably send messages to each other via carrier pigeon. Each participant has access to an unlimited number of carrier pigeons (thousands and thousands), which they can use to send paper messages to anyone else on the Pigeon Internet network. An enterprising group of young technologists are interested in setting up a communications network based around carrier pigeons.

Initially, every participant in the new Pigeon Internet project assembles at a conference to decide on a protocol for this pigeon-based communications network. They collectively create an address book, which specifies a unique identifier for every participant on the network, and which also records the physical location of every participant’s home (so that a pigeon addressed to a specific recipient knows where to deliver the message to). They decide that every messages must consist of three fields: sender, receiver/receiver address, and message text. At the end of the conference, each participant returns home with their address book.

## Challenges

Communication via carrier pigeon has the following challenges:

- **Non-negligible latency:** Messages usually take hours to days to be delivered. No participant can guarantee that they have the latest and most up-to-date information on the state of the world.
- **Messages dropping:** In rare cases, pigeons never even make it to their destination (a pigeon might be caught in a storm, intercepted, etc.). If you’re expecting a response from a peer and never receive one, it’s hard to tell whether the response was never sent, or if it was simply lost.
- **Message interception and tampering**: A malicious adversary can capture pigeons mid-flight. Once a pigeon has been intercepted, the attacker can read its message, modify and resend its message, or withhold its message. Though interception is hard/costly to do and doesn’t happen often, attackers do sometimes try to capitalize off of messages intercepted on high-priority routes.
- **Sender faking**: Though pigeons generally deliver messages to the correct recipient, nothing prevents a malicious actor from falsifying the name in the sender field. Eve can send Bob a pigeon with a message that looks like: “From: Alice, To: Bob, Message text: I’m breaking up with you!”, and Bob naively has no way of telling whether the message is actually from Alice.
- **Performance and throughput**: Most Pigeon Internet enthusiasts can handle dozens or even hundreds of inbound/outbound messages per day. However, it’s simply not feasible to handle thousands or millions of messages.

Even though the modern Internet operates up to six orders of magnitude faster than Pigeon Internet, the above challenges are analogous to the problems of communication in the modern Internet or in digital cash systems. For example, cryptocurrency systems like Bitcoin and Ethereum must be designed to work even in the face of latency and unreliable network performance (not everyone has the latest data on transactions and who has how much cryptocurrency), and message interception and forgery (as there is obvious economic incentive for fraud).

Insights into consensus algorithms such as Proof-of-Work as well as cryptographic mechanisms such as encryption and signing help us get around these challenges; these will be discussed in later sections. However, the above five problems motivate a large portion of the design decisions for any system built on the Internet, including Ethereum.

## Applications

Despite the challenges, Pigeon Internet is generally reliable and can be trusted as a convenient way to exchange messages across the world. However, the participants of Pigeon Internet are interested in seeing whether or not they can use their new system as a platform for global-scale projects and infrastructure:

- **Content distribution**: Content creators would like to establish hubs to distribute news, articles, stories, art, and other types of media all over the world. How do content creators connect with content consumers over Pigeon Internet?
  - **One solution**: Certain operators send a message to everyone, telling them that they will receive, aggregate, filter, and distribute certain kinds of content. For example, a “news” operator maintains regular contact with operators all over the globe, who send in information on global current events. Anyone interested in the news can send a “request for news” message to the news operator, who will respond with a digest of global news sent by pigeon.
- **Wealth transfer:** People across the globe might want to engage in economic activity with each other, but sending large volumes of metal or paper bills by pigeon is impossible. How do actors prove and transfer wealth to each other? Can wealth be recorded and vouched for by particularly trusted participants?
  - **One solution**: First, participants send a particularly trusted operator their cash via conventional transportation. Then the trusted operator stores, records, and acknowledges receipt of sent funds by sending an acknowledgement back over Pigeon Internet. This operator then records and executes valid transactions requested by participants, updating account balances and saving everyone the hassle of physically sending cash via pigeon to each other. Anyone can look up their own balance or send funds to anyone else by just sending a pigeon to the trusted operator with a query.
- **Marketplaces and shops:** Though purchased goods do eventually have to be shipped via conventional transport, communication and data transfer over Pigeon Internet is much faster (hours versus weeks). Merchants want to establish shops on the Pigeon Internet network to market and sell goods and services.
  - **One solution**: Using the content distribution system from above, merchants advertise their wares to potential customers all over the world. Using the wealth transfer system set in place above, merchants and customers coordinate with the trusted wealth record-keepers to transfer money. In this way, merchants are able to make transactions, record purchases, and respond to customer inquiries in a fraction of the time that goods actually take to ship.
- **Property and ownership:** Societies care about recording who owns what. In many cases, we want ownership of particularly important things (land, corporations, etc.) to be transparent and easy to look up.
  - **One solution**: one of the Pigeon Internet participants works for the government. This participant records property titles and company ownership records at their office, receives updates to the records when necessary, and responds to any inquiries via pigeon messages.

Each of the above applications corresponds closely to an application of the modern Internet. Content distribution, online banking, e-commerce, and record-keeping on the Internet work pretty much in exactly the same way as they do in our hypothetical Pigeon Internet.

For those without software background, it may help to think about the next few sections in the context of Pigeon Internet, imagining that all messages being passed between participants in any network are sent by carrier pigeon.
