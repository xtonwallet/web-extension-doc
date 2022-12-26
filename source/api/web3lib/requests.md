title: Web3-like library in page
---

# Web3-like library request API based on TEPs standard

The wallet browser extension allows interaction with DApp based on TEPs standard. Full specification places [here](https://addmelater.com).

**Restrictions**
- DApp can't open more than 15 dialogs simultaneously
- Each request has a life time. If the user won't be able to confirm or decline the request, after 5 minutes DApp will receive the timeout error
 
# Demo page

All methods from specification TEPs are available for the testing on [demo page](https://demopage.xtonwallet.com/)

# Supporting deep link

The web extension detects deep links on web pages in the format "ton://transfer/address[?amount=][&message=]" and open the transaction dialog on click event.

# The most frequently used methods places below:

## wallet_getSdkVersion

DApp can get TON SDK version that uses by the wallet browser extension.

use private keys - **no**
must be allowed - **no**
required parameters - **no**

```js
  window.ton
    .request({
      method: "wallet_getSdkVersion",
      params: {},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## wallet_requestPermissions
DApp can request needed permissions from user. Not all methods demands to be permitted. The all methods, that must be allowed by user, lists below:
- [Web3-like library request API based on TEPs standard](#web3-like-library-request-api-based-on-teps-standard)
- [Demo page](#demo-page)
- [Supporting deep link](#supporting-deep-link)
- [The most frequently used methods places below:](#the-most-frequently-used-methods-places-below)
  - [wallet\_getSdkVersion](#wallet-getsdkversion)
  - [wallet\_requestPermissions](#wallet-requestpermissions)
  - [wallet\_getPermissions](#wallet-getpermissions)
  - [wallet\_watchAsset](#wallet-watchasset)
  - [ton\_account](#ton-account)
  - [ton\_endpoint](#ton-endpoint)
  - [ton\_sendTransaction](#ton-sendtransaction)
  - [ton\_sendRawTransaction](#ton-sendrawtransaction)
  - [ton\_signMessage](#ton-signmessage)
  - [ton\_getNaclBoxPublicKey](#ton-getnaclboxpublickey)
  - [ton\_getSignature](#ton-getsignature)
  - [ton\_crypto\_generate\_random\_bytes](#ton-crypto-generate-random-bytes)
  - [ton\_encryptMessage](#ton-encryptmessage)
  - [ton\_decryptMessage](#ton-decryptmessage)
  - [ton\_subscribe](#ton-subscribe)
  - [ton\_unsubscribe](#ton-unsubscribe)
- [Events](#events)
  - [message](#message)
  - [endpointChanged](#endpointchanged)
  - [unlockStateChanged](#unlockstatechanged)
  - [accountChanged](#accountchanged)

use private keys - **no**
must be allowed - **no**
required parameters - **permissions as array**

```js
  window.ton
    .request({
      method: "wallet_requestPermissions",
      params: {"permissions": ["ton_account", "ton_endpoint", "ton_sendTransaction", "ton_signMessage", "ton_getSignature", "ton_subscribe"]},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## wallet_getPermissions
DApp can request the permissions list granted by user

use private keys - **no**
must be allowed - **no**
required parameters - **no**

```js
  window.ton
    .request({
      method: "wallet_getPermissions",
      params: {},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## wallet_watchAsset
Method to add asset for watching by user

use private keys - **no**
must be allowed - **yes**
required parameters - **name as string, address as string, icon as string, type as string ("74" for Jetton, "64" for NFT)**

```js
  window.ton
    .request({
      method: "wallet_watchAsset",
      params: {"name": "Bitcoin Cash12",
               "symbol": "BCH12",
               "decimals": 9,
               "address": "EQB6zyR2KdDMByP6pbqgGk85iP7OMToGELWQJ9IE3LAMNsUE",
               "icon": "https://bitcoincash-example.github.io/website/logo.png",
               "type": "74"
               },
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });

  //nft
  window.ton
    .request({
      method: "wallet_watchAsset",
      params: {"address": "EQAOQdwdw8kGftJCSFgOErM1mBjYPe4DBPq8-AhF6vr9si5N",
               "name": "Anonymous Telegram Numbers",
               "description": "These anonymous numbers can be used to create Telegram accounts that are not tied to SIM cards.",
               "externalLink": "https://fragment.com/numbers",
               "icon": "https://nft.fragment.com/numbers.svg",
               "type": "64"
               },
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_account
DApp can request the selected account, public key and balance

use private keys - **no**
must be allowed - **yes**
required parameters - **no**

```js
  window.ton
    .request({
      method: "ton_account",
      params: {},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_endpoint
DApp can request the selected endpoint

use private keys - **no**
must be allowed - **yes**
required parameters - **no**

```js
  window.ton
    .request({
      method: "ton_endpoint",
      params: {},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_sendTransaction
DApp can initialize the transaction dialog

use private keys - **yes**
must be allowed - **yes**
required parameters - **destination as string, token as string (can be "native" to send TONCOIN or token root address to send tokens), amount as number, message as string**

```js
  window.ton
    .request({
      method: "ton_sendTransaction",
      params: {
        "destination": "EQCAF42Rr_NJ09_b2yXQE-ClQor3gOsLq2R1Fo-E0dvU11TH",
        "token": "native",
        "amount": 1,
        "message": "for dinner"
      },
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_sendRawTransaction
DApp can initialize the raw transaction dialog to deploy something or interact with smart contract

use private keys - **yes**
must be allowed - **yes**
required parameters - **to as string, amount as number, data as string, dataType as string (can be "text", "hex", "base64", "boc"), stateInit as string (only boc)**

```js
  window.ton
    .request({
      method: "ton_sendRawTransaction",
      params: {
        "to": "EQCAF42Rr_NJ09_b2yXQE-ClQor3gOsLq2R1Fo-E0dvU11TH",
        "amount": 1,
        "data": "for dinner",
        "dataType": "text",
        "stateInit": ""
      },
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_signMessage
DApp can initialize the signing message dialog

use private keys - **yes**
must be allowed - **yes**
required parameters - **data as string**

```js
  window.ton
    .request({
      method: "ton_signMessage",
      params: {"data": ""},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_getNaclBoxPublicKey
DApp can obtain the public key for ton_encryptMessage method

use private keys - **yes**
must be allowed - **yes**
required parameters - **no**

```js
  window.ton
    .request({
      method: "ton_getNaclBoxPublicKey",
      params: {},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_getSignature
DApp can initialize the dialog for obtaining user signature

use private keys - **yes**
must be allowed - **yes**
required parameters - **data as string**

```js
  window.ton
    .request({
      method: "ton_getSignature",
      params: {"data": "It is my signature"},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_crypto_generate_random_bytes
DApp can run generate_random_bytes method from crypto module

use private keys - **no**
must be allowed - **no**
required parameters - **length as number**

```js
  window.ton
    .request({
      method: "ton_crypto_generate_random_bytes",
      params: {"length": 24},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_encryptMessage
DApp can initialize the encrypting message dialog

**Nonce** can be obtained from `ton_crypto_generate_random_bytes` method with length 24, **their_public** can be obtained from `ton_getNaclBoxPublicKey` (the Nacl public recipient key)

use private keys - **yes**
must be allowed - **yes**
required parameters - **decrypted as string, nonce as string, their_public as string**

```js
  window.ton
    .request({
      method: "ton_encryptMessage",
      params: {"decrypted": "test", "nonce": "b6306029c60f32d739ba1804c4d719eb334c9bd5b4e3d2d8", "their_public": "9950d2f1a3cee9fcbc6614aba64636215c31edee31061de77c93d2fa62a67732"},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) {
      console.log(error);
    });
```

## ton_decryptMessage
DApp can initialize the decrypting message dialog

**Nonce** must be the same as for `ton_encryptMessage` method, **their_public** can be obtained from `ton_getNaclBoxPublicKey` (the Nacl public sender key)

use private keys - **yes**
must be allowed - **yes**
required parameters - **encrypted as string, nonce as string, their_public as string**

```js
  window.ton
    .request({
      method: "ton_decryptMessage",
      params: {"encrypted": "hKiMqdgBHkQdvFiQaE0TT/X/0Zg=", "nonce": "b6306029c60f32d739ba1804c4d719eb334c9bd5b4e3d2d8", "their_public": "b8e902c15096bf030fc8a0b3549bca15ca4bc74c3612964a72d93a2b00420308"},
    })
    .then((result) => {
      console.log(result);
      //
    })
    .catch((error) => {
      console.log(error);
    });
```

## ton_subscribe
DApp can subscribe on blockchain events

use private keys - **no**
must be allowed - **yes**
required parameters - **address as string**

```js
  window.ton
    .request({
      method: "ton_subscribe",
      params: {
        address: "EQB6zyR2KdDMByP6pbqgGk85iP7OMToGELWQJ9IE3LAMNsUE"
      }
    })
    .then((subscriptionId) => {
      window.ton.on("message", (message) => {
        if (message.type === "ton_subscription") {
          if (message.subscriptionId === subscriptionId) {
            console.log(message.data);
          }
        }
      });
    })
    .catch((error) => {
      console.error(
        `Error making events subscription: ${error.message}.
         Code: ${error.code}. Data: ${error.data}`
      );
    });
```

## ton_unsubscribe
DApp can unsubscribe on blockchain events

use private keys - **no**
must be allowed - **yes**
required parameters - **address as string**

```js
  window.ton
    .request({
      method: "ton_unsubscribe",
      params: {
        address: "EQB6zyR2KdDMByP6pbqgGk85iP7OMToGELWQJ9IE3LAMNsUE"
      }
    })
    .then((result) => {
      console.log(result);
    });
```

# Events

## message
DApp can listen "message" to receive the transaction information that is received from the blockchain

```js
  window.ton.on("message", function(data) {
    console.log(data);
    window.ton.off("message");
  });
```

## endpointChanged
DApp can listen "endpointChanged" to receive the information about the network changing

```js
  window.ton.on("endpointChanged", function(data) {
    console.log(data);
    window.ton.off("endpointChanged");
  });
```

## unlockStateChanged
DApp can listen "unlockStateChanged" to receive the information about the lock/unlock state

```js
  window.ton.on("unlockStateChanged", function(data) {
    console.log(data);
    window.ton.off("unlockStateChanged");
  });
```

## accountChanged
DApp can listen "accountChanged" to receive the information about the account changing

```js
  window.ton.on("accountChanged", function(data) {
    console.log(data);
    window.ton.off("accountChanged");
  });
```