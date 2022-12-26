title: Web3-подобная библиотека на веб-странице
---
 
# Web3-подобная библиотека запросов API основанная на TEPs стандарте

Веб-расширение позволяет взаимодействовать с DApp (децентрализованное приложение) на основе TEPs стандарта. Полная спецификация доступна [здесь](https://addmelater.com).

**Ограничения**
- DApp не может открывать более 15 диалогов запросов одновременно
- Каждый запрос имеет время жизни. Если пользователь не будет способен подтвердить или отклонить запрос, то после 5 минут DApp получит ошибку таймаута

# Демонстрационная страница

Все методы из спецификации TEPs доступны для тестирования на [демо странице](https://demopage.xtonwallet.com/)

# Поддержка deep link

Веб расширение обнаруживает deep links на веб страницах в формате "ton://transfer/address[?amount=][&message=]" и открывает диалог транзакции по клику.

# Наиболее часто используемые методы размещены ниже:

## wallet_getSdkVersion
DApp может получить версию TON SDK которая используется в веб-расширении кошелька.

использует приватные ключи - **нет**
должно быть разрешено - **нет**
обязательные параметры - **нет**

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
DApp может запросить необходимые разрешения у пользователя. Не все методы требуют разрешения. Все методы, которые должны быть разрешены пользователем, перечислены ниже:
- [Web3-подобная библиотека запросов API основанная на TEPs стандарте](#web3-подобная-библиотека-запросов-api-основанная-на-teps-стандарте)
- [Демонстрационная страница](#демонстрационная-страница)
- [Поддержка deep link](#поддержка-deep-link)
- [Наиболее часто используемые методы размещены ниже:](#наиболее-часто-используемые-методы-размещены-ниже)
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
- [События](#события)
  - [message](#message)
  - [endpointChanged](#endpointchanged)
  - [unlockStateChanged](#unlockstatechanged)
  - [accountChanged](#accountchanged)

использует приватные ключи - **нет**
должно быть разрешено - **нет**
обязательные параметры - **permissions как массив**

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
DApp может запросить список методов, разрешенных пользователем

использует приватные ключи - **нет**
должно быть разрешено - **нет**
обязательные параметры - **нет**

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
Метод для добавления актива пользователю

использует приватные ключи - **нет**
должно быть разрешено - **да**
обязательные параметры - **name как строка, address как строка, icon как строка, type как строка ("74" для Jetton, "64" для NFT)**

```js
  //jetton
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
DApp может запросить текущую учётную запись

использует приватные ключи - **нет**
должно быть разрешено - **да**
обязательные параметры - **нет**

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
DApp может запросить текущую точку подключения к блокчейн

использует приватные ключи - **нет**
должно быть разрешено - **да**
обязательные параметры - **нет**

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
DApp может инициализировать диалог транзакции

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **destination как строка, token как строка (может быть "native", чтобы отправить TONCOIN или адрес токена, чтобы отправить токены), amount как число, message как строка**

```js
  window.ton
    .request({
      method: "ton_sendTransaction",
      params: {
        "destination": "EQCAF42Rr_NJ09_b2yXQE-ClQor3gOsLq2R1Fo-E0dvU11TH",
        "token": "native",
        "amount": 1,
        "message": "за ужин"
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
DApp может инициализировать диалог расширенной транзакции, чтобы развернуть что-то или для взаимодействия с умным контрактом

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **to как строка, amount как число, data как строка, dataType как строка (может быть "text", "hex", "base64", "boc"), stateInit как строка (только boc)**

```js
  window.ton
    .request({
      method: "ton_sendRawTransaction",
      params: {
        "to": "EQCAF42Rr_NJ09_b2yXQE-ClQor3gOsLq2R1Fo-E0dvU11TH",
        "amount": 1,
        "data": "за ужин",
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
DApp может инициализировать диалог подписания сообщения

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **data как строка**

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
DApp может получать публичный ключ для метода ton_encryptMessage

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **нет**

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
DApp может инициализировать диалог для получения подписи пользователя

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **data как строка**

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
DApp может запускать метод generate_random_bytes из модуля crypto

использует приватные ключи - **нет**
должно быть разрешено - **нет**
обязательные параметры - **length как число**

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
DApp может инициализировать диалог шифрования сообщения

**Nonce** может быть получен при помощи метода `ton_crypto_generate_random_bytes`с длиной 24 символов, **their_public** может быть получен при помощи метода `ton_getNaclBoxPublicKey` (публичный ключ Nacl для получателя)

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **decrypted как строка, nonce как строка, their_public как строка**

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
DApp может инициализировать диалог дешифрования сообщения

**Nonce** должен быть таким же как и для метода `ton_encryptMessage`, **their_public** может быть получен при помощи метода `ton_getNaclBoxPublicKey` (публичный ключ Nacl отправителя)

использует приватные ключи - **да**
должно быть разрешено - **да**
обязательные параметры - **encrypted как строка, nonce как строка, their_public как строка**

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
DApp может подписываться на события на блокчейне

использует приватные ключи - **нет**
должно быть разрешено - **да**
обязательные параметры - **address как строка**

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
DApp может отписываться от событий на блокчейне

использует приватные ключи - **нет**
должно быть разрешено - **да**
обязательные параметры - **address как строка**

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

# События

## message
DApp может слушать сообщения типа "message" для получения информации о транзакции, полученной от блокчейн

```js
  window.ton.on("message", function(data) {
    console.log(data);
    window.ton.off("message");
  });
```

## endpointChanged
DApp может слушать сообщения типа "endpointChanged" для получения информации о смене сети

```js
  window.ton.on("endpointChanged", function(data) {
    console.log(data);
    window.ton.off("endpointChanged");
  });
```

## unlockStateChanged
DApp может слушать сообщения типа "unlockStateChanged" для получения информации о закрытии/открытии кошелька

```js
  window.ton.on("unlockStateChanged", function(data) {
    console.log(data);
    window.ton.off("unlockStateChanged");
  });
```

## accountChanged
DApp может слушать сообщения типа "accountChanged" для получения информации о смене аккаунта

```js
  window.ton.on("accountChanged", function(data) {
    console.log(data);
    window.ton.off("accountChanged");
  });
```