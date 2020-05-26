# Interface: OnAirResponse

## Hierarchy

-   [BaseResponse](baseresponse.md)

    ↳ **OnAirResponse**

## Index

### Properties

-   [data](onairresponse.md#data)
-   [error](onairresponse.md#optional-error)
-   [meta](onairresponse.md#meta)

## Properties

### data

• **data**: _[NestedData](nesteddata.md)[]_

_Overrides [BaseResponse](baseresponse.md).[data](baseresponse.md#data)_

A collection of station's onair data. Even if only one station is requested,
results will still be organised into an array of objects, each object containing
an array of results for said station's onair information

---

### `Optional` error

• **error**? : _undefined | object_

_Inherited from
[BaseResponse](baseresponse.md).[error](baseresponse.md#optional-error)_

---

### meta

• **meta**: _[BaseMeta](basemeta.md)_

_Overrides [BaseResponse](baseresponse.md).[meta](baseresponse.md#meta)_
