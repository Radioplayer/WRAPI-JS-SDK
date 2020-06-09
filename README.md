## WRAPI JavaScript SDK Quick start

Before you can make calls to the WRAPI services, you first must obtain a key and
and keyId from Radioplayer.

## Required setup steps

### Radioplayer WRAPI JAVASCRIPT SDK Installation

The package is intended to be run on a node application. To install it, type
this command in a Terminal window or a command prompt:

```bash
npm install radioplayer-wrapi-sdk
```

or

```bash
yarn add radioplayer-wrapi-sdk
```

### Configuring the Radioplayer WRAPI JAVASCRIPT SDK

After you install the SDK, you must make the SDK available to your app and
configure your environment. Configuration details include your client ID and
secret for your app and an optional wrapi endpoint override.

```javascript
const wrapi = require("radioplayer-wrapi-sdk").default;

const wp = new wrapi({ keyId: "your key id", key: "your key" });
```

# Configuring the Radioplayer WRAPI JAVASCRIPT SDK

After you install the SDK, you must make the SDK available to your app and
configure your environment. Configuration details include your client ID and
secret for your app and an optional wrapi endpoint override.

```javascript
const wrapi = require("radioplayer-wrapi-sdk").default;

const wp = new wrapi({ keyId: "your key id", key: "your key" });
```

### Documentation

That part should be covered
[here](https://radioplayer-wrapi-sdk-docs.netlify.app/).
