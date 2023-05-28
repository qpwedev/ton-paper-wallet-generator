// Import the necessary modules from their respective packages
const { WalletContractV4 } = require("ton");
const { mnemonicNew, mnemonicToPrivateKey } = require("ton-crypto");
const QRCode = require('qrcode-terminal');

/**
 * Asynchronous function to generate a new TON wallet
 *
 * @return {Promise} A Promise object that resolves to a wallet object containing mnemonics, address and key pair
 */
const generateWallet = async () => {
  // Generate a new mnemonic phrase
  // A mnemonic phrase is a list of words which store all the information needed to recover a cryptocurrency wallet.
  const mnemonics = await mnemonicNew();

  // Use the mnemonic phrase to generate a private key
  const keyPair = await mnemonicToPrivateKey(mnemonics);

  // The workchain id for the Free TON network is 0
  const workchain = 0;

  // Create a new wallet using the WalletContractV4 from the ton package
  const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });

  // Return an object that contains the mnemonics, address and key pair
  return {
    mnemonics,
    address: wallet.address.toString(),
    keyPair: {
      secretKey: keyPair.secretKey.toString("hex"),
      publicKey: keyPair.publicKey.toString("hex"),
    }
  }
}

// Self-invoking asynchronous function
(async () => {
  // Generate a new wallet
  const wallet = await generateWallet();

  // Display the wallet address in the console
  console.log('Address (V4):\n' + wallet.address);

  // Generate and display a QR code for the wallet address
  QRCode.generate(wallet.address, { small: true });

  // Display the public key in the console
  console.log('\nPublic Key:\n' + wallet.keyPair.publicKey);

  // Display the private key in the console
  console.log('\nPrivate Key:\n' + wallet.keyPair.secretKey);

  // Display the mnemonic phrase in the console
  console.log('\nMnemonic Phrase:');
  console.log(wallet.mnemonics.join(' '));
})()
