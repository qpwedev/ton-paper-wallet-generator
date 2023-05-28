# TON Paper Wallet Generator

This project is a simple command line application that generates a paper wallet for the TON blockchain. It provides the user with an address, public key, private key, and a mnemonic phrase, all important elements for interacting with the TON blockchain.

## Getting Started

### Prerequisites

Before you begin, make sure you have Node.js installed on your machine. You also need to have yarn installed, which is a fast, reliable, and secure dependency management tool.

### Installation

Clone the repository to your local machine:

```bash
git clone git@github.com:qpwedev/ton-paper-wallet-generator.git
cd ton-paper-wallet-generator
```

Install the dependencies:

```bash
yarn install
```

## Usage

To generate a new TON paper wallet, run:

```bash
yarn gen
```

This will create a new TON wallet and display the following information in your console:

- Address
- Public Key
- Private Key
- Mnemonic Phrase

Example output:

```bash
Address (V4):
EQBXhHXEQk_BaYj9nE7ljxNcXsiRMN68cTqFCAhTpPMnFNdn

Public Key:
874582cccde96ad7358ed7defa16405d20db510ec799dcf24b02035ce703c34d

Private Key:
7f26f07819486e0721f7dc5f057c8507a5dcc1b58835343dd147704a3f0b5d01874582cccde96ad7358ed7defa16405d20db510ec799dcf24b02035ce703c34d

Mnemonic Phrase:
usage innocent game convince tent raw jewel rebuild album common junior chimney festival cotton praise aerobic name walnut damage ocean borrow surround nose relief
```

## Contributions

Contributions to this project are welcome. The goal is to develop a simple HTML document embedding all the necessary code to generate a TON paper wallet. This allows users, even those not familiar with programming, to generate their own paper wallet simply by downloading the HTML page.

If interested in contributing to this project, fork the repository, make changes, and open a pull request. For any questions, feel free to open an issue. Assistance will be provided promptly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENCE) file for details.
