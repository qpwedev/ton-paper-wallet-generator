const { WalletContractV4 } = require("ton");
const { mnemonicNew, mnemonicToPrivateKey } = require("ton-crypto");
const QRCode = require('qrcode-terminal');

const generateWallet = async () => {
  let mnemonics = await mnemonicNew();
  let keyPair = await mnemonicToPrivateKey(mnemonics);

  let workchain = 0;
  let wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
  const address = wallet.address;

  return {
    mnemonics,
    address,
    keyPair: {
      secretKey: keyPair.secretKey.toString("hex"),
      publicKey: keyPair.publicKey.toString("hex"),
    }
  }
}

(async () => {
  let wallet = await generateWallet();

  console.log('Address (V4):\n' + wallet.address);
  QRCode.generate(wallet.address, { small: true });

  console.log('\nPublic Key:\n' + wallet.keyPair.publicKey);
  console.log('\nPrivate Key:\n' + wallet.keyPair.secretKey);

  console.log('\nMnemonic Phrase:');
  console.log(wallet.mnemonics.join(' '));
})();
