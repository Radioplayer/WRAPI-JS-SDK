# Configuring the Radioplayer WRAPI JAVASCRIPT SDK

After you install the SDK, you must make the SDK available to your app and
configure your environment. Configuration details include your client ID and
secret for your app and an optional wrapi endpoint override.

```javascript
const wrapi = require("wrapi-javascript-sdk").default;

const wp = new wrapi({ keyId: "your key id", key: "your key" });
```

### Next:

[How to use the SDK](usage.md)
